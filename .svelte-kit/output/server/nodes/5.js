import * as server from '../entries/pages/home/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/5.b123eae0.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Hero.2e271502.js","_app/immutable/chunks/ButtonLink.e6449dd6.js","_app/immutable/chunks/TextWithLineBreaks.1597f4d9.js","_app/immutable/chunks/Carousel.svelte_svelte_type_style_lang.4ce1efe3.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/IconBase.8491a4d6.js","_app/immutable/chunks/DynamicDuplex.a9ad5eb3.js","_app/immutable/chunks/singletons.2f37cc61.js","_app/immutable/chunks/Faq.20b33d53.js","_app/immutable/chunks/stores.ff583a98.js","_app/immutable/chunks/Row.f78c6619.js","_app/immutable/chunks/Duplex.9e79eae8.js"];
export const stylesheets = ["_app/immutable/assets/5.4279f1b4.css","_app/immutable/assets/Hero.c1a4b9bd.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css","_app/immutable/assets/IconBase.6bf551a2.css","_app/immutable/assets/DynamicDuplex.b9baba17.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.dbce9a88.css"];
export const fonts = [];
