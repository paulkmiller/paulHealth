import { c as create_ssr_component, a as add_attribute, e as escape } from "./index3.js";
const ButtonLink_svelte_svelte_type_style_lang = "";
const css = {
  code: `a.svelte-5r4rcn{position:relative;display:inline-block;padding:1rem 3rem;background:var(--background-color);border:none;border-radius:30px;font-family:'PolySans Neutral', Arial, sans-serif;color:var(--link-color);font-size:1.1rem;line-height:1.1rem;text-align:center;text-decoration:none;transition:all 0.25s ease-out;z-index:1;margin:1.5rem 0;width:fit-content;align-self:self-start}a.svelte-5r4rcn:hover{cursor:pointer;box-shadow:#444444 0.2rem 0.3rem 0.3rem;color:#fff}a.svelte-5r4rcn::before{position:absolute;content:"";top:0;right:0;bottom:0;left:0;background:linear-gradient(90deg,rgba(173,235,239,1) 0%, rgba(41,57,122,1) 30%, rgba(218,47,92,1) 70%, rgba(255,193,38,1) 100%);z-index:-1;transition:opacity 0.5s linear;opacity:0;border-radius:30px}a.svelte-5r4rcn:hover::before{opacity:1}`,
  map: null
};
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { text } = $$props;
  let { background_color } = $$props;
  let { color = "" } = $$props;
  let { ariaText } = $$props;
  let { ariaLink } = $$props;
  let { delay = 0 } = $$props;
  let { aos_delay = 200 } = $$props;
  let { aos_anim } = $$props;
  if (background_color === "") {
    background_color = "#fff";
  }
  if (color === "") {
    color = "#29397a";
  }
  ariaText = ariaText.toLowerCase();
  ariaLink = ariaLink.replace(/\//g, " ").replace(/-/g, " ").trim();
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.background_color === void 0 && $$bindings.background_color && background_color !== void 0)
    $$bindings.background_color(background_color);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.ariaText === void 0 && $$bindings.ariaText && ariaText !== void 0)
    $$bindings.ariaText(ariaText);
  if ($$props.ariaLink === void 0 && $$bindings.ariaLink && ariaLink !== void 0)
    $$bindings.ariaLink(ariaLink);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.aos_delay === void 0 && $$bindings.aos_delay && aos_delay !== void 0)
    $$bindings.aos_delay(aos_delay);
  if ($$props.aos_anim === void 0 && $$bindings.aos_anim && aos_anim !== void 0)
    $$bindings.aos_anim(aos_anim);
  $$result.css.add(css);
  return `<a${add_attribute("href", path, 0)} style="${"--link-color: " + escape(color, true) + "; --background-color: " + escape(background_color, true) + ";"}" aria-label="${"A call to action button inviting the user to " + escape(ariaText, true) + " by visiting the " + escape(ariaLink, true) + " page."}"${add_attribute("data-aos", aos_anim, 0)} data-aos-easing="ease-in-back"${add_attribute("data-aos-delay", delay + aos_delay, 0)} data-aos-offset="0" class="svelte-5r4rcn">${escape(text)}
  </a>`;
});
export {
  ButtonLink as B
};
