import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    projects: defineTable({
        title: v.string(),
        tag: v.string(),
        desc: v.string(),
        content: v.string()
    })
})