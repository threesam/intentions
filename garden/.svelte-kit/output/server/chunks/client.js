import groq from "groq";
const client = null;
const fallback = {
  projects: [{ _id: "fallback-project", title: "Getting Started", summary: "Your first project." }],
  posts: [{ _id: "fallback-post", title: "Hello Garden", excerpt: "Welcome to your new garden." }],
  pages: [{ _id: "fallback-page", title: "About", slug: { current: "about" } }]
};
async function fetchProjects() {
  try {
    if (!client) return fallback.projects;
    const result = await client.fetch(groq`*[_type == "project"]{ _id, title, slug, summary } | order(title asc)`);
    return result?.length ? result : fallback.projects;
  } catch {
    return fallback.projects;
  }
}
async function fetchPosts() {
  try {
    if (!client) return fallback.posts;
    const result = await client.fetch(groq`*[_type == "post"]{ _id, title, slug, excerpt, publishedAt } | order(publishedAt desc)`);
    return result?.length ? result : fallback.posts;
  } catch {
    return fallback.posts;
  }
}
async function fetchPageBySlug(slug) {
  try {
    if (!client) return fallback.pages.find((p) => p.slug?.current === slug) ?? null;
    const result = await client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{ _id, title, slug, body }`, { slug });
    return result ?? fallback.pages.find((p) => p.slug?.current === slug) ?? null;
  } catch {
    return fallback.pages.find((p) => p.slug?.current === slug) ?? null;
  }
}
export {
  fetchPosts as a,
  fetchProjects as b,
  fetchPageBySlug as f
};
