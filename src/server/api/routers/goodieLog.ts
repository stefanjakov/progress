import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const entry = z.object({ categoryId: z.string(), date: dayKeySchema });

export const goodieLogRouter = createTRPCRouter({
  /** Active categories merged with their logged value for the given day. */
  getDay: publicProcedure
    .input(z.object({ date: dayKeySchema }))
    .query(async ({ ctx, input }) => {
      const date = dayKeyToDate(input.date);
      const [categories, logs] = await Promise.all([
        ctx.db.goodieCategory.findMany({
          where: { active: true },
          orderBy: [{ order: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.goodieLog.findMany({ where: { date } }),
      ]);
      const valueByCat = new Map(logs.map((l) => [l.categoryId, l.value]));
      return categories.map((c) => ({ ...c, value: valueByCat.get(c.id) ?? 0 }));
    }),

  /** Set an exact value (NUMBER categories). */
  set: publicProcedure
    .input(entry.extend({ value: z.number().min(0) }))
    .mutation(({ ctx, input }) => {
      const date = dayKeyToDate(input.date);
      return ctx.db.goodieLog.upsert({
        where: { categoryId_date: { categoryId: input.categoryId, date } },
        create: { categoryId: input.categoryId, date, value: input.value },
        update: { value: input.value },
      });
    }),

  /** Add/subtract (COUNT categories); clamped at 0. */
  increment: publicProcedure
    .input(entry.extend({ delta: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const date = dayKeyToDate(input.date);
      const where = {
        categoryId_date: { categoryId: input.categoryId, date },
      };
      const existing = await ctx.db.goodieLog.findUnique({ where });
      const next = Math.max(0, (existing?.value ?? 0) + input.delta);
      return ctx.db.goodieLog.upsert({
        where,
        create: { categoryId: input.categoryId, date, value: next },
        update: { value: next },
      });
    }),

  /** Flip between 0 and 1 (BOOLEAN categories). */
  toggle: publicProcedure.input(entry).mutation(async ({ ctx, input }) => {
    const date = dayKeyToDate(input.date);
    const where = { categoryId_date: { categoryId: input.categoryId, date } };
    const existing = await ctx.db.goodieLog.findUnique({ where });
    const next = existing && existing.value > 0 ? 0 : 1;
    return ctx.db.goodieLog.upsert({
      where,
      create: { categoryId: input.categoryId, date, value: next },
      update: { value: next },
    });
  }),
});
