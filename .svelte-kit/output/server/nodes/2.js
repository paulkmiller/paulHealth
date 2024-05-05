

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1b626253.js","_app/immutable/chunks/index.5d5a95b7.js","_app/immutable/chunks/singletons.58f5f409.js"];
export const stylesheets = ["_app/immutable/assets/2.239c46b0.css"];
export const fonts = [];
