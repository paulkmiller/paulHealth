import * as server from '../entries/pages/news/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.9ed3e13b.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/Duplex.8d7b3d1f.js","_app/immutable/chunks/ButtonLink.212aa9c5.js","_app/immutable/chunks/TextWithLineBreaks.f9a7a950.js","_app/immutable/chunks/SEOMetaData.901255a3.js"];
export const stylesheets = ["_app/immutable/assets/9.c0575dbc.css","_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
