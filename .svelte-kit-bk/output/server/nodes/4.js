import * as server from '../entries/pages/(auth)/signup/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(auth)/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.zv6q0kUb.js","_app/immutable/chunks/scheduler.t4ki4vww.js","_app/immutable/chunks/index.Hesyyt9I.js","_app/immutable/chunks/forms.gowbjPrN.js","_app/immutable/chunks/singletons.88_YLMnZ.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/index.XRI0IOYQ.js","_app/immutable/chunks/stores.ChxPK_Za.js","_app/immutable/chunks/stringify.zTK2Chiw.js"];
export const stylesheets = ["_app/immutable/assets/forms.oq5aOWfL.css"];
export const fonts = [];
