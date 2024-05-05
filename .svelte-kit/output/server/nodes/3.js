import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.1f82bcd5.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/Hero.e9f4fbf4.js","_app/immutable/chunks/ButtonLink.5274dc1a.js","_app/immutable/chunks/TextWithLineBreaks.f9a7a950.js","_app/immutable/chunks/Faq.7e4f104f.js","_app/immutable/chunks/stores.d5090ce3.js","_app/immutable/chunks/singletons.94de24d0.js","_app/immutable/chunks/paths.bdc3fcd1.js","_app/immutable/chunks/Row.7408adfd.js","_app/immutable/chunks/DynamicDuplex.0e2611bb.js","_app/immutable/chunks/Duplex.755a8b52.js","_app/immutable/chunks/SEOMetaData.901255a3.js"];
export const stylesheets = ["_app/immutable/assets/3.16a4ee6a.css","_app/immutable/assets/Hero.0d25076f.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/DynamicDuplex.b9baba17.css","_app/immutable/assets/Duplex.dbce9a88.css"];
export const fonts = [];
