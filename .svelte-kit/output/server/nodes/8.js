import * as server from '../entries/pages/news/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/+page.server.js";
export const imports = ["_app/immutable/nodes/8.5e1461ee.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/Row.f1baf3b3.js","_app/immutable/chunks/Col.5130ac02.js","_app/immutable/chunks/Duplex.f4e36a32.js","_app/immutable/chunks/ButtonLink.0f14ce15.js","_app/immutable/chunks/TextWithLineBreaks.8eb785f4.js"];
export const stylesheets = ["_app/immutable/assets/8.591aebbd.css","_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
