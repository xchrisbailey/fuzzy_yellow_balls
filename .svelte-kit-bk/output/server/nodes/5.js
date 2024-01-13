import * as server from '../entries/pages/(protected)/(user)/activity/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/(user)/activity/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(protected)/(user)/activity/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.0kd2tPmo.js","_app/immutable/chunks/scheduler.t4ki4vww.js","_app/immutable/chunks/index.Hesyyt9I.js","_app/immutable/chunks/each.lIO52eT-.js","_app/immutable/chunks/card.otSD5e3D.js","_app/immutable/chunks/title_case.Lq6D5vnj.js","_app/immutable/chunks/spread.rEx3vLA9.js","_app/immutable/chunks/Icon.jEFT8SOt.js"];
export const stylesheets = [];
export const fonts = [];
