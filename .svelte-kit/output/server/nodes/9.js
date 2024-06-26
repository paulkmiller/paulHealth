import * as server from '../entries/pages/news/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.cc067884.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Duplex.9e79eae8.js","_app/immutable/chunks/ButtonLink.e6449dd6.js","_app/immutable/chunks/TextWithLineBreaks.1597f4d9.js"];
export const stylesheets = ["_app/immutable/assets/9.c0575dbc.css","_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
