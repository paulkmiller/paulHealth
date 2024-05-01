import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.a9255e0a.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/IconBase.b7ed1dc6.js","_app/immutable/chunks/stores.36c9debd.js","_app/immutable/chunks/singletons.aab9d718.js","_app/immutable/chunks/paths.767f9694.js"];
export const stylesheets = ["_app/immutable/assets/0.c0095674.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
