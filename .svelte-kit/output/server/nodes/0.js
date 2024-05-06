import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.767f1738.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/IconBase.50afd150.js","_app/immutable/chunks/stores.ed30f04e.js","_app/immutable/chunks/singletons.68f964b5.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/0.001e2292.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
