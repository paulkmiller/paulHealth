import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.be6785bf.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/Hero.2e271502.js","_app/immutable/chunks/ButtonLink.e6449dd6.js","_app/immutable/chunks/TextWithLineBreaks.1597f4d9.js","_app/immutable/chunks/Row.f78c6619.js","_app/immutable/chunks/Col.5806357c.js","_app/immutable/chunks/Carousel.svelte_svelte_type_style_lang.4ce1efe3.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/4.2934940c.css","_app/immutable/assets/Hero.c1a4b9bd.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css"];
export const fonts = [];
