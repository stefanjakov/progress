import { z } from "zod";

import { addDays, dayKeyToDate } from "~/lib/date";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const plannerRouter = createTRPCRouter({
  /**
   * Everything scheduled in a 7-day window starting at `start`: standalone daily
   * todos plus goal/project tasks whose due date falls in the week.
   */
  week: publicProcedure
    .input(z.object({ start: dayKeySchema }))
    .query(async ({ ctx, input }) => {
      const start = dayKeyToDate(input.start);
      const end = addDays(start, 7); // exclusive

      const [todos, tasks] = await Promise.all([
        ctx.db.dailyTodo.findMany({
          where: { date: { gte: start, lt: end } },
          orderBy: [{ done: "asc" }, { order: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.task.findMany({
          where: { dueDate: { gte: start, lt: end } },
          orderBy: [{ done: "asc" }, { dueDate: "asc" }, { order: "asc" }],
          include: {
            goal: { select: { id: true, title: true } },
            project: { select: { id: true, title: true } },
          },
        }),
      ]);

      return { todos, tasks };
    }),
});
