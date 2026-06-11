import { z } from "zod";

import { addDays, dayKeyToDate } from "~/lib/date";
import { type OpportunityStatus } from "~/lib/enums";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const OPEN_OPP_STATUSES: OpportunityStatus[] = [
  "WISHLIST",
  "APPLIED",
  "INTERVIEWING",
  "OFFER",
];

export const dashboardRouter = createTRPCRouter({
  /** At-a-glance summary for `today` (a client-supplied local day key). */
  summary: publicProcedure
    .input(z.object({ today: dayKeySchema }))
    .query(async ({ ctx, input }) => {
      const today = dayKeyToDate(input.today);
      const soonEnd = addDays(today, 8); // today + next 7 days (exclusive)

      const [
        dueSoon,
        overdue,
        todayTodos,
        categories,
        logs,
        upcomingStages,
        activeGoals,
        activeProjects,
        openOpportunities,
      ] = await Promise.all([
        ctx.db.task.findMany({
          where: { done: false, dueDate: { gte: today, lt: soonEnd } },
          orderBy: { dueDate: "asc" },
          take: 12,
          include: {
            goal: { select: { title: true } },
            project: { select: { title: true } },
          },
        }),
        ctx.db.task.findMany({
          where: { done: false, dueDate: { lt: today } },
          orderBy: { dueDate: "asc" },
          take: 12,
          include: {
            goal: { select: { title: true } },
            project: { select: { title: true } },
          },
        }),
        ctx.db.dailyTodo.findMany({
          where: { date: today },
          orderBy: [{ done: "asc" }, { order: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.goodieCategory.findMany({
          where: { active: true },
          orderBy: [{ order: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.goodieLog.findMany({ where: { date: today } }),
        ctx.db.stage.findMany({
          where: { scheduledAt: { gte: today } },
          orderBy: { scheduledAt: "asc" },
          take: 6,
          include: {
            opportunity: { select: { company: true, role: true } },
            stageType: { select: { name: true } },
          },
        }),
        ctx.db.goal.count({ where: { status: "ACTIVE" } }),
        ctx.db.project.count({ where: { status: "ACTIVE" } }),
        ctx.db.opportunity.count({ where: { status: { in: OPEN_OPP_STATUSES } } }),
      ]);

      const valueByCat = new Map(logs.map((l) => [l.categoryId, l.value]));
      const goodies = categories.map((c) => ({
        id: c.id,
        name: c.name,
        type: c.type,
        target: c.target,
        unit: c.unit,
        color: c.color,
        value: valueByCat.get(c.id) ?? 0,
      }));

      return {
        dueSoon,
        overdue,
        todayTodos,
        goodies,
        upcomingStages,
        counts: { activeGoals, activeProjects, openOpportunities },
      };
    }),
});
