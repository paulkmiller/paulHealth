import * as server from '../entries/pages/how-it-works/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/how-it-works/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/how-it-works/+page.server.js";
export const imports = ["_app/immutable/nodes/6.91af3e09.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Hero.1fb25a1f.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js","_app/immutable/chunks/TextWithLineBreaks.a14c0ba8.js","_app/immutable/chunks/Faq.d36da7da.js","_app/immutable/chunks/stores.483a6c70.js","_app/immutable/chunks/singletons.0e91b02d.js","_app/immutable/chunks/paths.85fe2585.js","_app/immutable/chunks/Row.7099f54b.js","_app/immutable/chunks/Duplex.a6bac538.js","_app/immutable/chunks/SEOMetaData.b746ec36.js","_app/immutable/chunks/IconBase.b7ed1dc6.js"];
export const stylesheets = ["_app/immutable/assets/6.c8895396.css","_app/immutable/assets/Hero.4a3cbd69.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.bb61849e.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
