import { defineField, defineType } from "sanity";

export const tutorial = defineType({
  name: "tutorial",
  title: "Tutorial",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order — lower number appears first",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Tab Label",
      description: "Short label shown in the sticky nav tab",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description / SOP",
      description: "Paste your SOP or description here — shown in a collapsible panel next to the video",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "videoEmbedUrl",
      title: "Tella Video Embed URL",
      description: "The src= URL from the Tella iframe embed code",
      type: "url",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "label" },
  },
});
