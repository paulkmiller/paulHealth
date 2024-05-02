import * as server from '../entries/pages/home/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+page.server.js";
export const imports = ["_app/immutable/nodes/5.d1ee0a97.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/Hero.b515af06.js","_app/immutable/chunks/ButtonLink.212aa9c5.js","_app/immutable/chunks/TextWithLineBreaks.f9a7a950.js","_app/immutable/chunks/Carousel.2c2ec9b3.js","_app/immutable/chunks/IconBase.aa9b8a72.js","_app/immutable/chunks/DynamicDuplex.a043511d.js","_app/immutable/chunks/singletons.11d00cf0.js","_app/immutable/chunks/paths.a2ff5da1.js","_app/immutable/chunks/Faq.8eed3b04.js","_app/immutable/chunks/stores.0dfc96db.js","_app/immutable/chunks/Row.7408adfd.js","_app/immutable/chunks/Duplex.8d7b3d1f.js","_app/immutable/chunks/SEOMetaData.901255a3.js"];
export const stylesheets = ["_app/immutable/assets/5.1e7a32a0.css","_app/immutable/assets/Hero.4a3cbd69.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Carousel.f76ac12e.css","_app/immutable/assets/IconBase.6bf551a2.css","_app/immutable/assets/DynamicDuplex.afb562d8.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.dbce9a88.css"];
export const fonts = [];
