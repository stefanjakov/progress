import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { GOAL_HORIZONS, GOAL_STATUSES } from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const horizonEnum = z.enum(GOAL_HORIZONS);
const statusEnum = z.enum(GOAL_STATUSES);

export const goalRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z
        .object({
          horizon: horizonEnum.optional(),
          status: statusEnum.optional(),
        })
        .optional(),
    )
    .query(({ ctx, input }) =>
      ctx.db.goal.findMany({
        where: { horizon: input?.horizon, status: input?.status },
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
        include: {
          tasks: {
            orderBy: [
              { done: "asc" },
              { order: "asc" },
              { dueDate: "asc" },
              { createdAt: "asc" },
            ],
          },
        },
      }),
    ),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.goal.findUnique({
        where: { id: input.id },
        include: { tasks: { orderBy: [{ order: "asc" }] } },
      }),
    ),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        horizon: horizonEnum.optional(),
        targetDate: dayKeySchema.nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.goal.create({
        data: {
          title: input.title.trim(),
          description: blankToNull(input.description),
          horizon: input.horizon ?? "SHORT_TERM",
          targetDate: input.targetDate ? dayKeyToDate(input.targetDate) : null,
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        description: z.string().nullish(),
        horizon: horizonEnum.optional(),
        targetDate: dayKeySchema.nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.goal.update({
        where: { id: input.id },
        data: {
          title: input.title?.trim(),
          horizon: input.horizon,
          description:
            input.description === undefined
              ? undefined
              : blankToNull(input.description),
          targetDate:
            input.targetDate === undefined
              ? undefined
              : input.targetDate
                ? dayKeyToDate(input.targetDate)
                : null,
        },
      }),
    ),

  /** Set status, keeping `completedAt` in sync for on-time analytics. */
  setStatus: publicProcedure
    .input(z.object({ id: z.string(), status: statusEnum }))
    .mutation(async ({ ctx, input }) => {
      const goal = await ctx.db.goal.findUniqueOrThrow({
        where: { id: input.id },
      });
      const completedAt =
        input.status === "COMPLETED" ? (goal.completedAt ?? new Date()) : null;
      return ctx.db.goal.update({
        where: { id: input.id },
        data: { status: input.status, completedAt },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.goal.delete({ where: { id: input.id } }),
    ),
});
