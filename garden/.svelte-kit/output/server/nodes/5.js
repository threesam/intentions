import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.C6c4HrLh.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/DaPlMOqU.js","_app/immutable/chunks/DLPnSCDz.js","_app/immutable/chunks/wrx-CtbB.js","_app/immutable/chunks/DjjaFz6w.js","_app/immutable/chunks/CxuvzPdx.js","_app/immutable/chunks/BjJBmB99.js","_app/immutable/chunks/6yDR_Zjc.js"];
export const stylesheets = [];
export const fonts = [];
