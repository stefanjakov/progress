import { z } from "zod";

import { dayKeyToDate } from "~/lib/date";
import { dayKeySchema } from "~/server/api/shared";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const activityRouter = createTRPCRouter({
  /** Record that the (single) user opened the app today — powers the login streak. */
  ping: publicProcedure
    .input(z.object({ date: dayKeySchema }))
    .mutation(async ({ ctx, input }) => {
      const date = dayKeyToDate(input.date);
      return ctx.db.dayActivity.upsert({
        where: { date },
        create: { date, count: 1 },
        update: { count: { increment: 1 } },
      });
    }),
});
