

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.de6c130e.js","_app/immutable/chunks/index.d3addbcb.js","_app/immutable/chunks/singletons.2f37cc61.js"];
export const stylesheets = [];
export const fonts = [];
