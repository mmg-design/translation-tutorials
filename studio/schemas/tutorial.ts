import { defineField, defineType } from "sanity";

export const tutorial = defineType({
  name: "tutorial",
  title: "Tutorial",
  type: "document",
  fields: [
    defineField({
      name: "index",
      title: "Index (e.g. 01, 02)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Tab Label",
      description: "Short label shown in the sticky tab bar",
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
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "body", title: "Step Body", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "videoEmbedUrl",
      title: "Tella Video Embed URL",
      description: "The src= URL from the Tella iframe embed code",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls the display order (lower = first)",
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "label" },
  },
});
