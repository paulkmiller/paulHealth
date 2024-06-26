import * as server from '../entries/pages/services/_slug_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.645c1571.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Duplex.9e79eae8.js","_app/immutable/chunks/ButtonLink.e6449dd6.js","_app/immutable/chunks/TextWithLineBreaks.1597f4d9.js","_app/immutable/chunks/Faq.20b33d53.js","_app/immutable/chunks/stores.ff583a98.js","_app/immutable/chunks/singletons.2f37cc61.js","_app/immutable/chunks/Row.f78c6619.js","_app/immutable/chunks/Hero.2e271502.js"];
export const stylesheets = ["_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Hero.c1a4b9bd.css"];
export const fonts = [];
