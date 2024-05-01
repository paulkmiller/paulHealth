import * as server from '../entries/pages/news/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/+page.server.js";
export const imports = ["_app/immutable/nodes/8.0aacc556.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Row.7099f54b.js","_app/immutable/chunks/Col.92dd6345.js","_app/immutable/chunks/Duplex.a6bac538.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js","_app/immutable/chunks/TextWithLineBreaks.a14c0ba8.js"];
export const stylesheets = ["_app/immutable/assets/8.3ba5b348.css","_app/immutable/assets/Duplex.bb61849e.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
