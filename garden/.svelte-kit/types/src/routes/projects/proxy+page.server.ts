// @ts-nocheck
import type { PageServerLoad } from './$types';
import { fetchProjects } from '$lib/sanity/client';

export const load = async () => {
  const projects = await fetchProjects();
  return { projects };
};;null as any as PageServerLoad;