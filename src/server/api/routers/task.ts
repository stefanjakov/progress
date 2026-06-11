import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { blankToNull } from "~/lib/strings";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z
        .object({
          title: z.string().min(1),
          notes: z.string().optional(),
          dueDate: dayKeySchema.nullish(),
          goalId: z.string().optional(),
          projectId: z.string().optional(),
        })
        .refine(
          (d) => (d.goalId === undefined) !== (d.projectId === undefined),
          { message: "A task must belong to exactly one of a goal or a project." },
        ),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.task.create({
        data: {
          title: input.title.trim(),
          notes: blankToNull(input.notes),
          dueDate: input.dueDate ? dayKeyToDate(input.dueDate) : null,
          goalId: input.goalId,
          projectId: input.projectId,
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        notes: z.string().nullish(),
        dueDate: dayKeySchema.nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.task.update({
        where: { id: input.id },
        data: {
          title: input.title?.trim(),
          notes:
            input.notes === undefined ? undefined : blankToNull(input.notes),
          dueDate:
            input.dueDate === undefined
              ? undefined
              : input.dueDate
                ? dayKeyToDate(input.dueDate)
                : null,
        },
      }),
    ),

  toggleDone: publicProcedure
    .input(z.object({ id: z.string(), done: z.boolean() }))
    .mutation(({ ctx, input }) =>
      ctx.db.task.update({
        where: { id: input.id },
        data: {
          done: input.done,
          completedAt: input.done ? new Date() : null,
        },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.task.delete({ where: { id: input.id } }),
    ),
});
