import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/** The reading room: chapters a signed-in reader has kept. Empty when signed out. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return [];

    const saved = await ctx.db
      .query("savedChapters")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return saved.sort((a, b) => b.createdAt - a.createdAt);
  },
});

/** Keep a chapter, optionally with a note. Saving twice keeps the existing entry. */
export const saveChapter = mutation({
  args: {
    chapterId: v.string(),
    note: v.optional(v.string()),
  },
  handler: async (ctx, { chapterId, note }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Sign in to keep chapters in your reading room.");
    }

    const existing = await ctx.db
      .query("savedChapters")
      .withIndex("by_user_chapter", (q) =>
        q.eq("userId", userId).eq("chapterId", chapterId),
      )
      .unique();

    const cleaned = note?.trim() ? note.trim().slice(0, 400) : undefined;
    if (existing) {
      if (cleaned !== undefined) {
        await ctx.db.patch(existing._id, { note: cleaned });
      }
      return existing._id;
    }

    return await ctx.db.insert("savedChapters", {
      userId,
      chapterId,
      note: cleaned,
      createdAt: Date.now(),
    });
  },
});

export const updateNote = mutation({
  args: { id: v.id("savedChapters"), note: v.string() },
  handler: async (ctx, { id, note }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Sign in to edit your reading room.");

    const doc = await ctx.db.get(id);
    if (!doc || doc.userId !== userId) return null;

    const cleaned = note.trim().slice(0, 400);
    await ctx.db.patch(id, { note: cleaned ? cleaned : undefined });
    return id;
  },
});

export const removeChapter = mutation({
  args: { id: v.id("savedChapters") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Sign in to edit your reading room.");

    const doc = await ctx.db.get(id);
    if (!doc || doc.userId !== userId) return null;

    await ctx.db.delete(id);
    return id;
  },
});
