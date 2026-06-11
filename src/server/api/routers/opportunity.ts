import { z } from "zod";

import { OPPORTUNITY_STATUSES } from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const statusEnum = z.enum(OPPORTUNITY_STATUSES);

export const opportunityRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ status: statusEnum.optional() }).optional())
    .query(({ ctx, input }) =>
      ctx.db.opportunity.findMany({
        where: input?.status ? { status: input.status } : undefined,
        orderBy: [{ priority: "desc" }, { order: "asc" }, { createdAt: "desc" }],
        include: {
          stages: {
            orderBy: [{ order: "asc" }, { createdAt: "asc" }],
            include: { stageType: true },
          },
        },
      }),
    ),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.opportunity.findUnique({
        where: { id: input.id },
        include: {
          stages: {
            orderBy: { order: "asc" },
            include: { stageType: true },
          },
        },
      }),
    ),

  create: publicProcedure
    .input(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        link: z.string().optional(),
        priority: z.number().int().min(0).max(5).optional(),
        status: statusEnum.optional(),
        notes: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.opportunity.create({
        data: {
          company: input.company.trim(),
          role: input.role.trim(),
          link: blankToNull(input.link),
          priority: input.priority ?? 0,
          status: input.status ?? "WISHLIST",
          notes: blankToNull(input.notes),
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        company: z.string().min(1).optional(),
        role: z.string().min(1).optional(),
        link: z.string().nullish(),
        priority: z.number().int().min(0).max(5).optional(),
        notes: z.string().nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.opportunity.update({
        where: { id: input.id },
        data: {
          company: input.company?.trim(),
          role: input.role?.trim(),
          priority: input.priority,
          link: input.link === undefined ? undefined : blankToNull(input.link),
          notes:
            input.notes === undefined ? undefined : blankToNull(input.notes),
        },
      }),
    ),

  setStatus: publicProcedure
    .input(z.object({ id: z.string(), status: statusEnum }))
    .mutation(({ ctx, input }) =>
      ctx.db.opportunity.update({
        where: { id: input.id },
        data: { status: input.status },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.opportunity.delete({ where: { id: input.id } }),
    ),
});
