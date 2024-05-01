import * as server from '../entries/pages/news/all/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/all/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/all/+page.server.js";
export const imports = ["_app/immutable/nodes/10.18d9b8c3.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Row.7099f54b.js","_app/immutable/chunks/Col.92dd6345.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js"];
export const stylesheets = ["_app/immutable/assets/10.3036c11f.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
