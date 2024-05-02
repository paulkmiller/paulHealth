import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.554791d7.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/IconBase.aa9b8a72.js","_app/immutable/chunks/stores.0dfc96db.js","_app/immutable/chunks/singletons.11d00cf0.js","_app/immutable/chunks/paths.a2ff5da1.js"];
export const stylesheets = ["_app/immutable/assets/0.c0095674.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
