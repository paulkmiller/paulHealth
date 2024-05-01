

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5516d5b6.js","_app/immutable/chunks/index.5190b064.js","_app/immutable/chunks/singletons.aab9d718.js","_app/immutable/chunks/paths.767f9694.js"];
export const stylesheets = [];
export const fonts = [];
