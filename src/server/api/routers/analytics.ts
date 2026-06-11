import { z } from "zod";

import { dateToDayKey, dayKeyToDate, diffInDays, shiftDayKey } from "~/lib/date";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

/** Longest run of consecutive calendar days present in the set. */
function longestStreak(dayKeys: string[]): number {
  const indices = dayKeys
    .map((k) => Math.round(dayKeyToDate(k).getTime() / 86_400_000))
    .sort((a, b) => a - b);
  let longest = 0;
  let run = 0;
  let prev = Number.NaN;
  for (const d of indices) {
    run = d === prev + 1 ? run + 1 : 1;
    if (run > longest) longest = run;
    prev = d;
  }
  return longest;
}

/** Consecutive days ending today (or yesterday, if today isn't done yet). */
function currentStreak(active: Set<string>, todayKey: string): number {
  let cursor = active.has(todayKey) ? todayKey : shiftDayKey(todayKey, -1);
  let n = 0;
  while (active.has(cursor)) {
    n++;
    cursor = shiftDayKey(cursor, -1);
  }
  return n;
}

export const analyticsRouter = createTRPCRouter({
  /** On-time completion across goals and tasks that had a deadline. */
  goalEfficiency: publicProcedure.query(async ({ ctx }) => {
    const [goals, tasks] = await Promise.all([
      ctx.db.goal.findMany({
        where: {
          status: "COMPLETED",
          completedAt: { not: null },
          targetDate: { not: null },
        },
        select: { id: true, title: true, targetDate: true, completedAt: true },
      }),
      ctx.db.task.findMany({
        where: {
          done: true,
          completedAt: { not: null },
          dueDate: { not: null },
        },
        select: { id: true, title: true, dueDate: true, completedAt: true },
      }),
    ]);

    const raw = [
      ...goals.map((g) => ({
        kind: "goal" as const,
        id: g.id,
        title: g.title,
        deadline: g.targetDate,
        completedAt: g.completedAt,
      })),
      ...tasks.map((t) => ({
        kind: "task" as const,
        id: t.id,
        title: t.title,
        deadline: t.dueDate,
        completedAt: t.completedAt,
      })),
    ];

    const items = raw
      .filter(
        (it): it is typeof it & { deadline: Date; completedAt: Date } =>
          it.deadline !== null && it.completedAt !== null,
      )
      .map((it) => ({
        kind: it.kind,
        id: it.id,
        title: it.title,
        deltaDays: diffInDays(it.deadline, it.completedAt),
        onTime: it.completedAt.getTime() <= it.deadline.getTime(),
      }))
      .sort((a, b) => a.deltaDays - b.deltaDays);

    const onTimeCount = items.filter((i) => i.onTime).length;
    const lateCount = items.length - onTimeCount;
    const onTimeRate = items.length > 0 ? onTimeCount / items.length : 0;

    return { items, onTimeCount, lateCount, onTimeRate };
  }),

  /** Per-day value vs target for one goodie category, plus its streaks. */
  goodieAdherence: publicProcedure
    .input(
      z.object({
        categoryId: z.string(),
        from: dayKeySchema,
        to: dayKeySchema,
        today: dayKeySchema,
      }),
    )
    .query(async ({ ctx, input }) => {
      const category = await ctx.db.goodieCategory.findUnique({
        where: { id: input.categoryId },
      });
      if (!category) return null;

      const logs = await ctx.db.goodieLog.findMany({
        where: {
          categoryId: input.categoryId,
          date: { gte: dayKeyToDate(input.from), lte: dayKeyToDate(input.to) },
        },
      });
      const valueByDay = new Map(logs.map((l) => [dateToDayKey(l.date), l.value]));

      const series: {
        date: string;
        value: number;
        target: number | null;
        hit: boolean;
      }[] = [];
      const hitKeys: string[] = [];
      for (let cursor = input.from; cursor <= input.to; cursor = shiftDayKey(cursor, 1)) {
        const value = valueByDay.get(cursor) ?? 0;
        const hit = category.target !== null ? value >= category.target : value > 0;
        if (hit) hitKeys.push(cursor);
        series.push({ date: cursor, value, target: category.target, hit });
      }

      return {
        category: {
          id: category.id,
          name: category.name,
          target: category.target,
          unit: category.unit,
          color: category.color,
        },
        series,
        currentStreak: currentStreak(new Set(hitKeys), input.today),
        longestStreak: longestStreak(hitKeys),
        hitDays: hitKeys.length,
        totalDays: series.length,
      };
    }),

  /** Days the app was opened in the range, plus login streaks. */
  appUsage: publicProcedure
    .input(
      z.object({ from: dayKeySchema, to: dayKeySchema, today: dayKeySchema }),
    )
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db.dayActivity.findMany({
        where: {
          date: { gte: dayKeyToDate(input.from), lte: dayKeyToDate(input.to) },
        },
      });
      const activeKeys = rows.map((r) => dateToDayKey(r.date));
      const activeSet = new Set(activeKeys);

      const days: { date: string; active: boolean }[] = [];
      for (let cursor = input.from; cursor <= input.to; cursor = shiftDayKey(cursor, 1)) {
        days.push({ date: cursor, active: activeSet.has(cursor) });
      }

      return {
        days,
        currentStreak: currentStreak(activeSet, input.today),
        longestStreak: longestStreak(activeKeys),
        totalDays: activeKeys.length,
      };
    }),
});
