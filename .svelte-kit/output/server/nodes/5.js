import * as server from '../entries/pages/home/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/5.64220088.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Hero.1fb25a1f.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js","_app/immutable/chunks/TextWithLineBreaks.a14c0ba8.js","_app/immutable/chunks/Carousel.305d93bd.js","_app/immutable/chunks/IconBase.b7ed1dc6.js","_app/immutable/chunks/DynamicDuplex.6dcaa4b7.js","_app/immutable/chunks/singletons.aab9d718.js","_app/immutable/chunks/paths.767f9694.js","_app/immutable/chunks/Faq.b60e3533.js","_app/immutable/chunks/stores.36c9debd.js","_app/immutable/chunks/Row.7099f54b.js","_app/immutable/chunks/Duplex.a6bac538.js","_app/immutable/chunks/SEOMetaData.b746ec36.js"];
export const stylesheets = ["_app/immutable/assets/5.1e7a32a0.css","_app/immutable/assets/Hero.4a3cbd69.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css","_app/immutable/assets/IconBase.6bf551a2.css","_app/immutable/assets/DynamicDuplex.afb562d8.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.bb61849e.css"];
export const fonts = [];
