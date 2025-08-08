// @ts-nocheck
import type { PageServerLoad } from './$types';
import { fetchPageBySlug } from '$lib/sanity/client';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const page = await fetchPageBySlug(params.slug);
  if (!page) {
    return { page: { title: 'Not found', body: null } };
  }
  return { page };
};