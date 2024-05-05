import * as server from '../entries/pages/home/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/5.d63784a5.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/Hero.c23f8ed9.js","_app/immutable/chunks/ButtonLink.0f14ce15.js","_app/immutable/chunks/TextWithLineBreaks.8eb785f4.js","_app/immutable/chunks/Carousel.svelte_svelte_type_style_lang.4ce1efe3.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/IconBase.50afd150.js","_app/immutable/chunks/DynamicDuplex.e86978d8.js","_app/immutable/chunks/singletons.58f5f409.js","_app/immutable/chunks/Faq.d0034bac.js","_app/immutable/chunks/stores.9e4501ed.js","_app/immutable/chunks/Row.f1baf3b3.js","_app/immutable/chunks/Duplex.f4e36a32.js"];
export const stylesheets = ["_app/immutable/assets/5.4279f1b4.css","_app/immutable/assets/Hero.0d25076f.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css","_app/immutable/assets/IconBase.6bf551a2.css","_app/immutable/assets/DynamicDuplex.b9baba17.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.dbce9a88.css"];
export const fonts = [];
