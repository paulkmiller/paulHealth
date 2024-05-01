import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index3.js";
import { B as ButtonLink } from "./ButtonLink.js";
import { T as TextWithLineBreaks } from "./TextWithLineBreaks.js";
const NewsletterInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".form-control.svelte-10mahkx{max-width:800px;border:2px solid #6e6f70}button.svelte-10mahkx{position:relative;display:inline-block;padding:1rem 3rem;background:#29397a;border:none;border-radius:10px;color:#fff;line-height:1.1rem;font-size:1.1rem;text-align:center;text-decoration:none;transition:all 0.25s ease-out;z-index:1;margin:.75rem 0 0;width:fit-content}",
  map: null
};
const NewsletterInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  $$result.css.add(css$1);
  return `<form><label for="exampleInputEmail1">Email address:</label>
  <input type="email" class="form-control svelte-10mahkx" required${add_attribute("value", email, 0)}>
  <button type="submit" class="svelte-10mahkx">Subscribe</button>
</form>`;
});
const Duplex_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-desdkp.svelte-desdkp.svelte-desdkp{height:100%;object-fit:contain;object-position:center}.tagline.svelte-desdkp.svelte-desdkp.svelte-desdkp{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#D93561;text-transform:uppercase}.duplex-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{display:grid;grid-template-columns:1fr 2fr}.right-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{display:grid;margin:0 auto 0 6rem;padding:4rem 0}.large-image.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{padding:4rem 4rem 4rem 1rem}.news-duplex-wrapper-wide .duplex-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{grid-template-columns:.6fr 1fr}.left-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{padding:0}.row-reverse.svelte-desdkp.svelte-desdkp.svelte-desdkp,.row-reverse.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp,.row-reverse.svelte-desdkp .left-container img.svelte-desdkp.svelte-desdkp{transform:scaleX(-1)}.row-reverse.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{grid-template-rows:1fr auto;padding:4rem;align-self:center}.row-reverse.small-image.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{grid-template-rows:1fr auto}.row-reverse.small-image.svelte-desdkp .right-container.svelte-desdkp .svelte-desdkp{text-align:right;align-self:self-end;margin-left:auto}.duplex-container.row-reverse.small-image.svelte-desdkp p,.duplex-container.row-reverse.small-image.svelte-desdkp h3,.duplex-container.row-reverse.small-image.svelte-desdkp a{text-align:right;margin-left:auto}.row-reverse.small-image.svelte-desdkp .right-container.svelte-desdkp a{margin-left:auto}.duplex-container.svelte-desdkp h3.big{font-size:4.5rem;color:#29397a;margin-bottom:2rem}.duplex-container.svelte-desdkp h3{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:4rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.svelte-desdkp h3.small{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:3rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.small-image.svelte-desdkp h3{max-width:30rem}.duplex-container.svelte-desdkp p{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:1.125rem;line-height:1.5rem;letter-spacing:0.25px;margin:1rem 0;text-align:left;align-self:center}.duplex-container.svelte-desdkp ol:first-of-type > li > p:not(ol li ol li p){font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:4.5rem}.duplex-container.svelte-desdkp p b{font-family:'PolySans Median', Arial, Helvetica, sans-serif}.duplex-container.svelte-desdkp ul li p{margin:.5rem 0}.duplex-container.svelte-desdkp h5 b{color:#D93561}.small-image.svelte-desdkp.svelte-desdkp.svelte-desdkp{max-width:1052px;padding:4rem 0;margin:auto}.small-image.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{padding:0 2rem;max-width:800px;margin:0 0 0 2rem}.normal-image.svelte-desdkp.svelte-desdkp.svelte-desdkp{padding:3rem 0}.normal-image.svelte-desdkp .left-container.svelte-desdkp.svelte-desdkp{margin:0 auto}.large-image.svelte-desdkp.svelte-desdkp.svelte-desdkp{min-height:455px}.large-image.svelte-desdkp img.svelte-desdkp.svelte-desdkp{height:100%;width:100%;object-fit:cover}.duplex-container.svelte-desdkp ol{list-style:none;counter-reset:numList}.duplex-container.svelte-desdkp ol li{position:relative\n  }.duplex-container.svelte-desdkp ol:first-child > li::before{counter-increment:numList;content:counter(numList);float:left;position:absolute;left:-50px;top:.5rem;font:bold 1rem sans-serif;text-align:center;color:#fff;line-height:2rem;width:2rem;height:2rem;background:#29397a;-moz-border-radius:100%;border-radius:100%\n  }@media only screen and (max-width: 768px){img.svelte-desdkp.svelte-desdkp.svelte-desdkp{margin:0 auto}.large-image.svelte-desdkp img.svelte-desdkp.svelte-desdkp{max-height:300px}.duplex-container.large-image.svelte-desdkp.svelte-desdkp.svelte-desdkp,.duplex-container.normal-image.svelte-desdkp.svelte-desdkp.svelte-desdkp,.duplex-container.small-image.svelte-desdkp.svelte-desdkp.svelte-desdkp{grid-template-columns:1fr;grid-template-rows:1fr}.duplex-container.svelte-desdkp p{text-align:center;align-self:normal}.row-reverse.small-image.svelte-desdkp .right-container.svelte-desdkp .svelte-desdkp{text-align:center;align-self:auto;margin:1rem auto}.duplex-container.row-reverse.small-image.svelte-desdkp p,.duplex-container.row-reverse.small-image.svelte-desdkp h3,.duplex-container.row-reverse.small-image.svelte-desdkp a{text-align:center;align-items:normal}.row-reverse.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp,.right-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{width:100%;padding:3rem}.right-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{margin:4rem auto;text-align:center}.right-container.svelte-desdkp h3{font-size:3.5rem;margin:1rem auto}.right-container.svelte-desdkp p{max-width:97.5%;margin:.5rem auto}.right-container.svelte-desdkp a{margin:2rem auto}}@media only screen and (max-width: 991px){.small-container.svelte-desdkp .container,.normal-container.svelte-desdkp .container{max-width:100%}.small-image.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{padding:0 2rem;max-width:800px;margin:0}}@media only screen and (max-width: 1250px){.duplex-container.large-image.svelte-desdkp.svelte-desdkp.svelte-desdkp{grid-template-columns:.75fr 1fr}.duplex-container.svelte-desdkp .right-container.svelte-desdkp.svelte-desdkp{padding:2rem 1rem}}@media only screen and (max-width: 1680px){.right-container.svelte-desdkp.svelte-desdkp.svelte-desdkp{margin:0 auto;padding:2rem}}",
  map: null
};
const Duplex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.containerSize === "Small" ? `<div class="small-container container svelte-desdkp"><div class="${"duplex-container small-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-desdkp"}"><div class="left-container svelte-desdkp"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-desdkp"></div>
        <div class="right-container svelte-desdkp">${data.tagline ? `<p class="tagline svelte-desdkp">${escape(data.tagline)}</p>` : ``}
          ${data.headline ? `<h3 class="small svelte-desdkp">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}
          ${data.bodyText ? `<p class="svelte-desdkp"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
          ${data.newsletterInput ? `${validate_component(NewsletterInput, "NewsletterInput").$$render($$result, {}, {}, {})}` : ``}
          ${data.ctaText != null ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: data.ctaText || "Learn More",
      path: data.targetPage ? `${data.targetPage}` : "/contact",
      color: "#FFF",
      background_color: "#D93561",
      ariaText: data.ctaText,
      ariaLink: data.targetPage
    },
    {},
    {}
  )}` : ``}</div></div></div>` : `${data.containerSize === "Normal" ? `<div class="normal-container container svelte-desdkp"><div class="${"duplex-container normal-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-desdkp"}"><div class="left-container svelte-desdkp"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-desdkp"></div>
        <div class="right-container svelte-desdkp">${data.tagline ? `<p class="tagline svelte-desdkp">${escape(data.tagline)}</p>` : ``}
          ${data.headline ? `<h3 class="svelte-desdkp">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}
          ${data.bodyText ? `<p class="svelte-desdkp"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
          ${data.newsletterInput ? `${validate_component(NewsletterInput, "NewsletterInput").$$render($$result, {}, {}, {})}` : ``}
          ${data.ctaText != null ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: data.ctaText || "Learn More",
      path: data.targetPage ? `${data.targetPage}` : "/contact",
      color: "#FFF",
      background_color: "#D93561",
      ariaText: data.ctaText,
      ariaLink: data.targetPage
    },
    {},
    {}
  )}` : ``}</div></div></div>` : `${data.containerSize == "Large" ? `<div class="${"duplex-container large-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-desdkp"}"><div class="left-container svelte-desdkp"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-desdkp"></div>
    <div class="right-container svelte-desdkp">${data.tagline ? `<p class="tagline svelte-desdkp">${escape(data.tagline)}</p>` : ``}
      ${data.headline && !data.bodyText ? `<h3 class="big svelte-desdkp">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : `${data.headline ? `<h3 class="svelte-desdkp">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}`}
      ${data.bodyText ? `<p class="svelte-desdkp"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
      ${data.newsletterInput ? `${validate_component(NewsletterInput, "NewsletterInput").$$render($$result, {}, {}, {})}` : ``}
      ${data.ctaText != null ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: data.ctaText || "Learn More",
      path: data.targetPage ? `${data.targetPage}` : "/contact",
      color: "#FFF",
      background_color: "#D93561",
      ariaText: data.ctaText,
      ariaLink: data.targetPage
    },
    {},
    {}
  )}` : ``}</div></div>` : ``}`}`}`;
});
export {
  Duplex as D
};
