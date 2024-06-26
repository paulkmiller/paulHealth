import * as server from '../entries/pages/news/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/+page.server.js";
export const imports = ["_app/immutable/nodes/8.9a1aa7a0.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Row.f78c6619.js","_app/immutable/chunks/Col.5806357c.js","_app/immutable/chunks/Duplex.9e79eae8.js","_app/immutable/chunks/ButtonLink.e6449dd6.js","_app/immutable/chunks/TextWithLineBreaks.1597f4d9.js"];
export const stylesheets = ["_app/immutable/assets/8.591aebbd.css","_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
