import * as server from '../entries/pages/news/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.d49bed76.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Duplex.a6bac538.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js","_app/immutable/chunks/TextWithLineBreaks.a14c0ba8.js","_app/immutable/chunks/SEOMetaData.b746ec36.js"];
export const stylesheets = ["_app/immutable/assets/9.c0575dbc.css","_app/immutable/assets/Duplex.bb61849e.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
