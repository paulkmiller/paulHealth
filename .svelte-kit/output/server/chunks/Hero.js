import { c as create_ssr_component, e as escape, a as add_attribute, n as null_to_empty, v as validate_component } from "./index3.js";
import { B as ButtonLink } from "./ButtonLink.js";
import { T as TextWithLineBreaks } from "./TextWithLineBreaks.js";
const Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".headline.svelte-l9uojd.svelte-l9uojd{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:72px;line-height:72px;font-weight:500}.subline.svelte-l9uojd.svelte-l9uojd{color:#adebef;font-family:'PolySans Bulky', Arial, Helvetica, sans-serif;font-size:1rem;line-height:1.5;margin-left:3px;margin-top:1rem;margin-bottom:1rem;letter-spacing:1.4px}.content.svelte-l9uojd.svelte-l9uojd{margin-bottom:1rem}.heroBanner.svelte-l9uojd a{align-self:auto}.heroBanner.svelte-l9uojd.svelte-l9uojd{height:clamp(40rem, 60vw, 60vh);position:relative;background-size:cover;color:white}.heroImage.svelte-l9uojd.svelte-l9uojd{width:100%;height:100%;object-fit:cover;position:absolute;z-index:-1}.content-left.svelte-l9uojd.svelte-l9uojd,.content-right.svelte-l9uojd.svelte-l9uojd{display:flex;flex-direction:column;width:100%;height:100%;backdrop-filter:brightness(80%)}.content-left.svelte-l9uojd.svelte-l9uojd{align-items:flex-end;justify-content:center;padding-right:calc(50% + 1rem);padding-left:2rem}.content-left.svelte-l9uojd .content.svelte-l9uojd{margin-bottom:3rem}.content-left.svelte-l9uojd .headline.svelte-l9uojd,.content-left.svelte-l9uojd .subline.svelte-l9uojd,.content-left.svelte-l9uojd .content.svelte-l9uojd{text-align:right}.content-left.svelte-l9uojd .headline.svelte-l9uojd{font-size:clamp(3rem, -0.875rem + 8.333vw, 4.5rem)}.content-right.svelte-l9uojd.svelte-l9uojd{align-items:flex-start;justify-content:center;padding-left:calc(50% + 1rem);padding-right:2rem}.content-right.svelte-l9uojd .headline.svelte-l9uojd{text-align:left}.content-right.svelte-l9uojd .headline.svelte-l9uojd{font-size:clamp(3rem, -0.875rem + 8.333vw, 4.5rem);max-width:50rem}.heroBanner .content p{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:1.2rem;line-height:1.5rem;font-weight:500;padding-left:5px;margin-top:0}.content-right .content p{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:1.2rem;line-height:1.5rem;font-weight:500;padding-left:5px;margin-top:0}@media(max-width: 768px){.content-left.svelte-l9uojd.svelte-l9uojd{justify-content:center;align-items:center;padding:2rem}.content-left.svelte-l9uojd p{text-align:center}.content-right.svelte-l9uojd.svelte-l9uojd{align-items:center;padding-left:1rem}.content-right.svelte-l9uojd .headline.svelte-l9uojd,.content-right.svelte-l9uojd .content.svelte-l9uojd,.content-left.svelte-l9uojd .headline.svelte-l9uojd,.content-left.svelte-l9uojd .content.svelte-l9uojd{text-align:center;padding:0 2rem}.content-left.svelte-l9uojd.svelte-l9uojd,.content-right.svelte-l9uojd.svelte-l9uojd{backdrop-filter:brightness(50%)}}@media(max-width: 500px){.content-left.svelte-l9uojd h1.svelte-l9uojd,.content-left.svelte-l9uojd .content.svelte-l9uojd{padding:0 1rem}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data ? `<section class="heroBanner svelte-l9uojd"><img class="heroImage svelte-l9uojd" src="${escape(data.image.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image.description, 0)}>
    <div class="${escape(null_to_empty(data.contentStyle ? "content-left" : "content-right"), true) + " svelte-l9uojd"}">${data.tagline ? `<span class="subline svelte-l9uojd">${escape(data.tagline)}</span>` : ``}
      <h1 class="headline svelte-l9uojd">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h1>
      <div class="content svelte-l9uojd"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></div>
      ${data.targetPage ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      path: data.targetPage,
      text: data.ctaText,
      background_color: "#fff",
      ariaText: data.ctaText,
      ariaLink: data.targetPage
    },
    {},
    {}
  )}` : ``}</div></section>` : ``}`;
});
export {
  Hero as H
};
