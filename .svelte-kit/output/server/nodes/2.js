

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b62319e6.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/singletons.11d00cf0.js","_app/immutable/chunks/paths.a2ff5da1.js"];
export const stylesheets = ["_app/immutable/assets/2.239c46b0.css"];
export const fonts = [];
