import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.a93f8a8d.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/Hero.c23f8ed9.js","_app/immutable/chunks/ButtonLink.0f14ce15.js","_app/immutable/chunks/TextWithLineBreaks.8eb785f4.js","_app/immutable/chunks/Row.f1baf3b3.js","_app/immutable/chunks/Col.5130ac02.js","_app/immutable/chunks/Carousel.svelte_svelte_type_style_lang.4ce1efe3.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/4.2934940c.css","_app/immutable/assets/Hero.0d25076f.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css"];
export const fonts = [];
