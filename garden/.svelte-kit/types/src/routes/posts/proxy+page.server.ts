// @ts-nocheck
import type { PageServerLoad } from './$types';
import { fetchPosts } from '$lib/sanity/client';

export const load = async () => {
  const posts = await fetchPosts();
  return { posts };
};;null as any as PageServerLoad;