import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { PROJECT_STATUSES } from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const statusEnum = z.enum(PROJECT_STATUSES);

export const projectRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ status: statusEnum.optional() }).optional())
    .query(({ ctx, input }) =>
      ctx.db.project.findMany({
        where: { status: input?.status },
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
      ctx.db.project.findUnique({
        where: { id: input.id },
        include: { tasks: { orderBy: [{ order: "asc" }] } },
      }),
    ),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        status: statusEnum.optional(),
        startDate: dayKeySchema.nullish(),
        endDate: dayKeySchema.nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.project.create({
        data: {
          title: input.title.trim(),
          description: blankToNull(input.description),
          status: input.status ?? "ACTIVE",
          startDate: input.startDate ? dayKeyToDate(input.startDate) : null,
          endDate: input.endDate ? dayKeyToDate(input.endDate) : null,
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        description: z.string().nullish(),
        startDate: dayKeySchema.nullish(),
        endDate: dayKeySchema.nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.project.update({
        where: { id: input.id },
        data: {
          title: input.title?.trim(),
          description:
            input.description === undefined
              ? undefined
              : blankToNull(input.description),
          startDate:
            input.startDate === undefined
              ? undefined
              : input.startDate
                ? dayKeyToDate(input.startDate)
                : null,
          endDate:
            input.endDate === undefined
              ? undefined
              : input.endDate
                ? dayKeyToDate(input.endDate)
                : null,
        },
      }),
    ),

  setStatus: publicProcedure
    .input(z.object({ id: z.string(), status: statusEnum }))
    .mutation(({ ctx, input }) =>
      ctx.db.project.update({
        where: { id: input.id },
        data: { status: input.status },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.project.delete({ where: { id: input.id } }),
    ),
});
