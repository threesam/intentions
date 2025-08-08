import * as server from '../entries/pages/pages/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/pages/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.4JlQbHoC.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/DaPlMOqU.js","_app/immutable/chunks/DLPnSCDz.js","_app/immutable/chunks/wrx-CtbB.js","_app/immutable/chunks/BjJBmB99.js","_app/immutable/chunks/6yDR_Zjc.js"];
export const stylesheets = [];
export const fonts = [];
