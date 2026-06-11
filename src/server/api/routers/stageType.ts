import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const DEFAULT_STAGE_TYPES = [
  "Recruiter Screen",
  "Online Assessment",
  "Technical Phone Screen",
  "System Design",
  "Behavioral",
  "Onsite",
  "Hiring Manager",
  "Take-home",
];

export const stageTypeRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) =>
    ctx.db.stageType.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] }),
  ),

  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        order: z.number().int().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.stageType.create({
          data: { name: input.name.trim(), order: input.order ?? 0 },
        });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message: `A stage type named "${input.name.trim()}" already exists.`,
        });
      }
    }),

  rename: publicProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(({ ctx, input }) =>
      ctx.db.stageType.update({
        where: { id: input.id },
        data: { name: input.name.trim() },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.stageType.delete({ where: { id: input.id } });
      } catch {
        throw new TRPCError({
          code: "CONFLICT",
          message:
            "This stage type is used by one or more interview stages. Remove those stages first.",
        });
      }
    }),

  /** Idempotently add a starter set of common interview stage types. */
  seedDefaults: publicProcedure.mutation(({ ctx }) =>
    ctx.db.stageType.createMany({
      data: DEFAULT_STAGE_TYPES.map((name, i) => ({
        name,
        order: i,
        isDefault: true,
      })),
      skipDuplicates: true,
    }),
  ),
});
