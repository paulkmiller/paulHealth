import * as server from '../entries/pages/how-it-works/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/how-it-works/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/how-it-works/+page.server.js";
export const imports = ["_app/immutable/nodes/6.17e9d81c.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/Hero.c23f8ed9.js","_app/immutable/chunks/ButtonLink.0f14ce15.js","_app/immutable/chunks/TextWithLineBreaks.8eb785f4.js","_app/immutable/chunks/Faq.d0034bac.js","_app/immutable/chunks/stores.9e4501ed.js","_app/immutable/chunks/singletons.58f5f409.js","_app/immutable/chunks/Row.f1baf3b3.js","_app/immutable/chunks/Duplex.f4e36a32.js","_app/immutable/chunks/IconBase.50afd150.js"];
export const stylesheets = ["_app/immutable/assets/6.c8895396.css","_app/immutable/assets/Hero.0d25076f.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.dbce9a88.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
