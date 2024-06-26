import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.51e001fd.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/IconBase.8491a4d6.js","_app/immutable/chunks/stores.ff583a98.js","_app/immutable/chunks/singletons.2f37cc61.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/0.001e2292.css","_app/immutable/assets/IconBase.6bf551a2.css"];
export const fonts = [];
