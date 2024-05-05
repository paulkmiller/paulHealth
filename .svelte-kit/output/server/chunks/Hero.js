import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "./index3.js";
import { B as ButtonLink } from "./ButtonLink.js";
import { T as TextWithLineBreaks } from "./TextWithLineBreaks.js";
const TextReveal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#text.svelte-vd4nic{opacity:0;transition:opacity 0.5s ease-out}.cover_container.svelte-vd4nic{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;pointer-events:none}#cover.svelte-vd4nic{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;transform:translateZ(0) translateX(-101%)}.reveal #text{opacity:1 !important}@keyframes svelte-vd4nic-slideReveal{from{transform:translateX(-100%)}to{transform:translateX(100%)}}#cover.svelte-vd4nic{animation:svelte-vd4nic-slideReveal 1s forwards}",
  map: null
};
const TextReveal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { delay = 200 } = $$props;
  let { aos_delay = 200 } = $$props;
  let { aos_anim = "fade-zoom-in" } = $$props;
  let { once = false } = $$props;
  let textReveal;
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.aos_delay === void 0 && $$bindings.aos_delay && aos_delay !== void 0)
    $$bindings.aos_delay(aos_delay);
  if ($$props.aos_anim === void 0 && $$bindings.aos_anim && aos_anim !== void 0)
    $$bindings.aos_anim(aos_anim);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  $$result.css.add(css$1);
  return `<div style="position: relative; display: inline-block;"${add_attribute("this", textReveal, 0)}><span id="text" style="${"animation-delay: " + escape(delay, true) + "ms"}" class="svelte-vd4nic"><span${add_attribute("data-aos", aos_anim, 0)} data-aos-easing="ease-in-back"${add_attribute("data-aos-delay", delay + aos_delay, 0)} data-aos-offset="0">${slots.default ? slots.default({}) : ``}</span></span>
  <div class="cover_container svelte-vd4nic"><div id="cover" style="${"animation-delay: " + escape(delay, true) + "ms"}" class="svelte-vd4nic"></div></div>
</div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".headline.svelte-1tclrzj.svelte-1tclrzj{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:72px;line-height:72px;font-weight:500}.subline.svelte-1tclrzj.svelte-1tclrzj{color:#adebef;font-family:'PolySans Bulky', Arial, Helvetica, sans-serif;font-size:1rem;line-height:1.5;margin-left:3px;margin-top:1rem;margin-bottom:1rem;letter-spacing:1.4px}.content.svelte-1tclrzj.svelte-1tclrzj{margin-bottom:1rem}.heroBanner.svelte-1tclrzj a{align-self:auto}.heroBanner.svelte-1tclrzj.svelte-1tclrzj{height:clamp(40rem, 60vw, 60vh);position:relative;background-size:cover;color:white}.heroImage.svelte-1tclrzj.svelte-1tclrzj{width:100%;height:100%;object-fit:cover;position:absolute;z-index:-1}.content-left.svelte-1tclrzj.svelte-1tclrzj,.content-right.svelte-1tclrzj.svelte-1tclrzj{display:flex;flex-direction:column;width:100%;height:100%}.content-left.svelte-1tclrzj.svelte-1tclrzj{align-items:flex-end;justify-content:center;padding-right:calc(50% + 1rem);padding-left:2rem}.content-left.svelte-1tclrzj .content.svelte-1tclrzj{margin-bottom:3rem}.content-left.svelte-1tclrzj .headline.svelte-1tclrzj,.content-left.svelte-1tclrzj .subline.svelte-1tclrzj,.content-left.svelte-1tclrzj .content.svelte-1tclrzj{text-align:right}.content-left.svelte-1tclrzj .headline.svelte-1tclrzj{font-size:clamp(3rem, -0.875rem + 8.333vw, 4.5rem)}.content-right.svelte-1tclrzj.svelte-1tclrzj{align-items:flex-start;justify-content:center;padding-left:calc(50% + 1rem);padding-right:2rem}.content-right.svelte-1tclrzj .headline.svelte-1tclrzj{text-align:left}.content-right.svelte-1tclrzj .headline.svelte-1tclrzj{font-size:clamp(3rem, -0.875rem + 8.333vw, 4.5rem);max-width:50rem}.heroBanner .content p{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:1.2rem;line-height:1.5rem;font-weight:500;padding-left:5px;margin-top:0}.content-right .content p{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:1.2rem;line-height:1.5rem;font-weight:500;padding-left:5px;margin-top:0}@media(max-width: 768px){.content-left.svelte-1tclrzj.svelte-1tclrzj{justify-content:center;align-items:center;padding:2rem}.content-left.svelte-1tclrzj p{text-align:center}.content-right.svelte-1tclrzj.svelte-1tclrzj{align-items:center;padding-left:1rem}.content-right.svelte-1tclrzj .headline.svelte-1tclrzj,.content-right.svelte-1tclrzj .content.svelte-1tclrzj,.content-left.svelte-1tclrzj .headline.svelte-1tclrzj,.content-left.svelte-1tclrzj .content.svelte-1tclrzj{text-align:center;padding:0 2rem}.content-left.svelte-1tclrzj.svelte-1tclrzj,.content-right.svelte-1tclrzj.svelte-1tclrzj{backdrop-filter:brightness(50%)}}@media(max-width: 500px){.content-left.svelte-1tclrzj h1.svelte-1tclrzj,.content-left.svelte-1tclrzj .content.svelte-1tclrzj{padding:0 1rem}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data ? `<section class="heroBanner svelte-1tclrzj"><img class="heroImage svelte-1tclrzj" src="${escape(data.image.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image.description, 0)}>
    <div class="${escape(null_to_empty(data.contentStyle ? "content-left" : "content-right"), true) + " svelte-1tclrzj"}">${data.subline ? `<span class="subline svelte-1tclrzj">${validate_component(TextReveal, "TextReveal").$$render(
    $$result,
    {
      delay: 300,
      aos_delay: 100,
      text: data.headline
    },
    {},
    {
      default: () => {
        return `${escape(data.subline)}`;
      }
    }
  )}</span>` : ``}
      <h1 class="headline svelte-1tclrzj">${validate_component(TextReveal, "TextReveal").$$render(
    $$result,
    {
      delay: 600,
      aos_delay: 200,
      text: data.headline
    },
    {},
    {
      default: () => {
        return `${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}`;
      }
    }
  )}</h1>
        ${validate_component(TextReveal, "TextReveal").$$render(
    $$result,
    {
      delay: 900,
      aos_delay: 300,
      text: data.headline
    },
    {},
    {
      default: () => {
        return `<div class="content svelte-1tclrzj"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></div>`;
      }
    }
  )}
      ${data.targetPage ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      path: data.targetPage,
      text: data.ctaText,
      background_color: "#fff",
      ariaText: data.ctaText,
      ariaLink: data.targetPage,
      aos_delay: 1300,
      aos_anim: "fade-in"
    },
    {},
    {}
  )}` : ``}</div></section>` : ``}`;
});
export {
  Hero as H
};
