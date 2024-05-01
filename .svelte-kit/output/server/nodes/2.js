

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.463a6d9f.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/singletons.061ccc5d.js","_app/immutable/chunks/paths.ffa07807.js"];
export const stylesheets = [];
export const fonts = [];
