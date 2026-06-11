import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

function cleanTags(tags?: string[]): string[] {
  if (!tags) return [];
  const trimmed = tags.map((t) => t.trim()).filter((t) => t.length > 0);
  return Array.from(new Set(trimmed));
}

export const noteRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z
        .object({ search: z.string().optional(), tag: z.string().optional() })
        .optional(),
    )
    .query(({ ctx, input }) => {
      const search = input?.search?.trim();
      const tag = input?.tag?.trim();
      return ctx.db.note.findMany({
        where: {
          ...(search
            ? {
                OR: [
                  { title: { contains: search, mode: "insensitive" } },
                  { content: { contains: search, mode: "insensitive" } },
                ],
              }
            : {}),
          ...(tag ? { tags: { has: tag } } : {}),
        },
        orderBy: [{ pinned: "desc" }, { updatedAt: "desc" }],
      });
    }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.note.findUnique({ where: { id: input.id } }),
    ),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.note.create({
        data: {
          title: input.title.trim(),
          content: input.content ?? "",
          tags: cleanTags(input.tags),
        },
      }),
    ),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        content: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    )
    .mutation(({ ctx, input }) =>
      ctx.db.note.update({
        where: { id: input.id },
        data: {
          title: input.title?.trim(),
          content: input.content,
          tags: input.tags ? cleanTags(input.tags) : undefined,
        },
      }),
    ),

  togglePinned: publicProcedure
    .input(z.object({ id: z.string(), pinned: z.boolean() }))
    .mutation(({ ctx, input }) =>
      ctx.db.note.update({
        where: { id: input.id },
        data: { pinned: input.pinned },
      }),
    ),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.note.delete({ where: { id: input.id } }),
    ),
});
