import { F as head, v as pop, t as push } from "../../../../chunks/index.js";
import { createConfig } from "sanity";
function _page($$payload, $$props) {
  push();
  createConfig({
    name: "Garden Studio",
    projectId: "your_project_id",
    dataset: "production",
    basePath: "/studio",
    schema: {
      types: [
        {
          type: "document",
          name: "project",
          title: "Project",
          fields: [
            { type: "string", name: "title", title: "Title" },
            {
              type: "slug",
              name: "slug",
              title: "Slug",
              options: { source: "title" }
            },
            { type: "text", name: "summary", title: "Summary" }
          ]
        },
        {
          type: "document",
          name: "post",
          title: "Post",
          fields: [
            { type: "string", name: "title", title: "Title" },
            {
              type: "slug",
              name: "slug",
              title: "Slug",
              options: { source: "title" }
            },
            { type: "text", name: "excerpt", title: "Excerpt" },
            { type: "datetime", name: "publishedAt", title: "Published at" }
          ]
        },
        {
          type: "document",
          name: "page",
          title: "Page",
          fields: [
            { type: "string", name: "title", title: "Title" },
            {
              type: "slug",
              name: "slug",
              title: "Slug",
              options: { source: "title" }
            },
            {
              type: "array",
              name: "body",
              title: "Body",
              of: [{ type: "block" }]
            }
          ]
        }
      ]
    }
  });
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<meta name="robots" content="noindex"/>`);
  });
  $$payload.out.push(`<div class="w-full h-[calc(100vh-4rem)]"><div class="w-full h-full"></div></div>`);
  pop();
}
export {
  _page as default
};
