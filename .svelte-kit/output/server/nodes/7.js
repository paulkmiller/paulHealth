import * as server from '../entries/pages/legal/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/legal/+page.server.js";
export const imports = ["_app/immutable/nodes/7.e4150542.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/Hero.1fb25a1f.js","_app/immutable/chunks/ButtonLink.2b86eb1a.js","_app/immutable/chunks/TextWithLineBreaks.a14c0ba8.js","_app/immutable/chunks/Faq.59e90c22.js","_app/immutable/chunks/stores.171dc7ef.js","_app/immutable/chunks/singletons.061ccc5d.js","_app/immutable/chunks/paths.ffa07807.js","_app/immutable/chunks/Row.7099f54b.js","_app/immutable/chunks/Duplex.a6bac538.js"];
export const stylesheets = ["_app/immutable/assets/7.84da6503.css","_app/immutable/assets/Hero.4a3cbd69.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css","_app/immutable/assets/Faq.7ac5e4bc.css","_app/immutable/assets/Duplex.bb61849e.css"];
export const fonts = [];
