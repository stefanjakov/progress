import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dailyTodoRouter = createTRPCRouter({
  listByDate: publicProcedure
    .input(z.object({ date: dayKeySchema }))
    .query(({ ctx, input }) =>
      ctx.db.dailyTodo.findMany({
        where: { date: dayKeyToDate(input.date) },
        orderBy: [{ done: "asc" }, { order: "asc" }, { createdAt: "asc" }],
      }),
    ),

  create: publicProcedure
    .input(z.object({ title: z.string().min(1), date: dayKeySchema }))
    .mutation(({ ctx, input }) =>
      ctx.db.dailyTodo.create({
        data: { title: input.title.trim(), date: dayKeyToDate(input.date) },
      }),
    ),

  toggleDone: publicProcedure
    .input(z.object({ id: z.string(), done: z.boolean() }))
    .mutation(({ ctx, input }) =>
      ctx.db.dailyTodo.update({
        where: { id: input.id },
        data: {
          done: input.done,
          completedAt: input.done ? new Date() : null,
        },
      }),
    ),

  update: publicProcedure
    .input(z.object({ id: z.string(), title: z.string().min(1) }))
    .mutation(({ ctx, input }) =>
      ctx.db.dailyTodo.update({
        where: { id: input.id },
        data: { title: input.title.trim() },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.dailyTodo.delete({ where: { id: input.id } }),
    ),
});
