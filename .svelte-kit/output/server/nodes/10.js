import * as server from '../entries/pages/news/all/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/all/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/all/+page.server.js";
export const imports = ["_app/immutable/nodes/10.16050079.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/Row.7408adfd.js","_app/immutable/chunks/Col.a2f13094.js","_app/immutable/chunks/ButtonLink.5274dc1a.js"];
export const stylesheets = ["_app/immutable/assets/10.a1c4feeb.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
