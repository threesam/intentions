import { a as fetchPosts } from "../../../chunks/client.js";
const load = async () => {
  const posts = await fetchPosts();
  return { posts };
};
export {
  load
};
