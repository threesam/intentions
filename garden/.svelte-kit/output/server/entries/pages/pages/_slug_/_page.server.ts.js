import { f as fetchPageBySlug } from "../../../../chunks/client.js";
const load = async ({ params }) => {
  const page = await fetchPageBySlug(params.slug);
  if (!page) {
    return { page: { title: "Not found", body: null } };
  }
  return { page };
};
export {
  load
};
