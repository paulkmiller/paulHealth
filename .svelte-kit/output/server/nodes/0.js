import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.7372f8ab.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/IconBase.b7ed1dc6.js","_app/immutable/chunks/stores.483a6c70.js","_app/immutable/chunks/singletons.0e91b02d.js","_app/immutable/chunks/paths.85fe2585.js"];
export const stylesheets = ["_app/immutable/assets/0.c0095674.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
