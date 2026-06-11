import { z } from "zod";

import { STAGE_STATUSES } from "~/lib/enums";
import { blankToNull } from "~/lib/strings";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const stageStatus = z.enum(STAGE_STATUSES);

export const stageRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        opportunityId: z.string(),
        stageTypeId: z.string(),
        status: stageStatus.optional(),
        scheduledAt: z.coerce.date().nullish(),
        notes: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.stage.create({
        data: {
          opportunityId: input.opportunityId,
          stageTypeId: input.stageTypeId,
          status: input.status ?? "PENDING",
          scheduledAt: input.scheduledAt ?? null,
          notes: blankToNull(input.notes),
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        stageTypeId: z.string().optional(),
        status: stageStatus.optional(),
        scheduledAt: z.coerce.date().nullish(),
        notes: z.string().nullish(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.stage.update({
        where: { id: input.id },
        data: {
          stageTypeId: input.stageTypeId,
          status: input.status,
          scheduledAt:
            input.scheduledAt === undefined ? undefined : input.scheduledAt,
          notes:
            input.notes === undefined ? undefined : blankToNull(input.notes),
        },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.stage.delete({ where: { id: input.id } }),
    ),
});
