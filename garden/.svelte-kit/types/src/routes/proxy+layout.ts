// @ts-nocheck
import type { LayoutLoad } from './$types';

export const load = async () => {
  return {
    env: {
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || null,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production'
    }
  };
};;null as any as LayoutLoad;