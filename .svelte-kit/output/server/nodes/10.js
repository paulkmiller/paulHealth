import * as server from '../entries/pages/news/all/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/all/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/all/+page.server.js";
export const imports = ["_app/immutable/nodes/10.12e298d5.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Row.f78c6619.js","_app/immutable/chunks/Col.5806357c.js","_app/immutable/chunks/ButtonLink.e6449dd6.js"];
export const stylesheets = ["_app/immutable/assets/10.a1c4feeb.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
