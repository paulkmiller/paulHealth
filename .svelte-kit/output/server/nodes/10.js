import * as server from '../entries/pages/news/all/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/all/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/all/+page.server.js";
export const imports = ["_app/immutable/nodes/10.4f619cba.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/Row.f1baf3b3.js","_app/immutable/chunks/Col.5130ac02.js","_app/immutable/chunks/ButtonLink.0f14ce15.js"];
export const stylesheets = ["_app/immutable/assets/10.a1c4feeb.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
