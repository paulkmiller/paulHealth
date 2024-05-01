import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.f221296b.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/IconBase.b7ed1dc6.js","_app/immutable/chunks/stores.171dc7ef.js","_app/immutable/chunks/singletons.061ccc5d.js","_app/immutable/chunks/paths.ffa07807.js"];
export const stylesheets = ["_app/immutable/assets/0.c0095674.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
