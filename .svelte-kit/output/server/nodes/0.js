import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.2c67a248.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/IconBase.aa9b8a72.js","_app/immutable/chunks/stores.d5090ce3.js","_app/immutable/chunks/singletons.94de24d0.js","_app/immutable/chunks/paths.bdc3fcd1.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/0.fa23c092.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
