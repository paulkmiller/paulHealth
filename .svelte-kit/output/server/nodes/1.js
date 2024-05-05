

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.378b5bef.js","_app/immutable/chunks/index.3e776b27.js","_app/immutable/chunks/ButtonLink.5274dc1a.js"];
export const stylesheets = ["_app/immutable/assets/1.6b9275b8.css","_app/immutable/assets/ButtonLink.e5fc3fc9.css"];
export const fonts = [];
