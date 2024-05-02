import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.4409db35.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/Hero.b515af06.js","_app/immutable/chunks/ButtonLink.212aa9c5.js","_app/immutable/chunks/TextWithLineBreaks.f9a7a950.js","_app/immutable/chunks/Faq.fad7f3c9.js","_app/immutable/chunks/stores.9e0b2c81.js","_app/immutable/chunks/singletons.71120f5f.js","_app/immutable/chunks/paths.01dbe2f7.js","_app/immutable/chunks/Row.7408adfd.js","_app/immutable/chunks/DynamicDuplex.feb41c2a.js","_app/immutable/chunks/Duplex.8d7b3d1f.js","_app/immutable/chunks/SEOMetaData.901255a3.js"];
export const stylesheets = ["_app/immutable/assets/3.16a4ee6a.css","_app/immutable/assets/Hero.4a3cbd69.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/DynamicDuplex.b9baba17.css","_app/immutable/assets/Duplex.dbce9a88.css"];
export const fonts = [];
