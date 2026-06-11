import { z } from "zod";

import { GOODIE_TYPES, type GoodieType } from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const typeEnum = z.enum(GOODIE_TYPES);

const DEFAULT_GOODIES: {
  name: string;
  type: GoodieType;
  target?: number;
  unit?: string;
  color: string;
}[] = [
  { name: "Workout", type: "BOOLEAN", color: "#ef4444" },
  { name: "Vitamins", type: "COUNT", target: 2, color: "#22c55e" },
  { name: "Water", type: "COUNT", target: 8, unit: "glasses", color: "#3b82f6" },
  { name: "Sleep", type: "NUMBER", target: 8, unit: "hrs", color: "#8b5cf6" },
];

export const goodieCategoryRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ activeOnly: z.boolean().optional() }).optional())
    .query(({ ctx, input }) =>
      ctx.db.goodieCategory.findMany({
        where: input?.activeOnly ? { active: true } : undefined,
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      }),
    ),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        type: typeEnum.optional(),
        target: z.number().min(0).nullish(),
        unit: z.string().optional(),
        color: z.string().optional(),
        icon: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.goodieCategory.create({
        data: {
          name: input.name.trim(),
          type: input.type ?? "BOOLEAN",
          target: input.target ?? null,
          unit: blankToNull(input.unit),
          color: blankToNull(input.color),
          icon: blankToNull(input.icon),
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        type: typeEnum.optional(),
        target: z.number().min(0).nullish(),
        unit: z.string().nullish(),
        color: z.string().nullish(),
        icon: z.string().nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.goodieCategory.update({
        where: { id: input.id },
        data: {
          name: input.name?.trim(),
          type: input.type,
          target: input.target === undefined ? undefined : input.target,
          unit: input.unit === undefined ? undefined : blankToNull(input.unit),
          color:
            input.color === undefined ? undefined : blankToNull(input.color),
          icon: input.icon === undefined ? undefined : blankToNull(input.icon),
        },
      }),
    ),

  /** Soft remove — hides from the daily tracker but keeps logged history. */
  setActive: publicProcedure
    .input(z.object({ id: z.string(), active: z.boolean() }))
    .mutation(({ ctx, input }) =>
      ctx.db.goodieCategory.update({
        where: { id: input.id },
        data: { active: input.active },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.goodieCategory.delete({ where: { id: input.id } }),
    ),

  /** Add a starter set of common habits — only when there are none yet. */
  seedDefaults: publicProcedure.mutation(async ({ ctx }) => {
    const count = await ctx.db.goodieCategory.count();
    if (count > 0) return { created: 0 };
    await ctx.db.goodieCategory.createMany({
      data: DEFAULT_GOODIES.map((g, i) => ({
        name: g.name,
        type: g.type,
        target: g.target ?? null,
        unit: g.unit ?? null,
        color: g.color,
        order: i,
      })),
    });
    return { created: DEFAULT_GOODIES.length };
  }),
});
