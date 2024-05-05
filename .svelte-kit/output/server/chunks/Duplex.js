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
  code: "img.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{height:100%;object-fit:contain;object-position:center}.tagline.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#D93561;text-transform:uppercase}.duplex-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{display:grid;grid-template-columns:1fr 2fr}.right-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{display:grid;margin:0 auto 0 6rem;padding:4rem 0}.large-image.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{padding:4rem 4rem 4rem 1rem}.news-duplex-wrapper-wide .duplex-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{grid-template-columns:.6fr 1fr}.left-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{padding:0}.row-reverse.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps,.row-reverse.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps,.row-reverse.svelte-16mh5ps .left-container img.svelte-16mh5ps.svelte-16mh5ps{transform:scaleX(-1)}.row-reverse.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{grid-template-rows:1fr auto;padding:4rem;align-self:center}.row-reverse.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{grid-template-rows:1fr auto}.row-reverse.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps .svelte-16mh5ps{text-align:right;align-self:self-end;margin-left:auto}.duplex-container.row-reverse.small-image.svelte-16mh5ps p,.duplex-container.row-reverse.small-image.svelte-16mh5ps h3,.duplex-container.row-reverse.small-image.svelte-16mh5ps a{text-align:right;margin-left:auto}.row-reverse.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps a{margin-left:auto}.duplex-container.svelte-16mh5ps h3.big{font-size:4.5rem;color:#29397a;margin-bottom:2rem}.duplex-container.svelte-16mh5ps h3{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:4rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.svelte-16mh5ps h3.small{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:3rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.small-image.svelte-16mh5ps h3{max-width:30rem}.duplex-container.svelte-16mh5ps p{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:1.125rem;line-height:1.5rem;letter-spacing:0.25px;margin:1rem 0;text-align:left;align-self:center}.duplex-container.svelte-16mh5ps ol:first-of-type > li > p:not(ol li ol li p){font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:4.5rem}.duplex-container.svelte-16mh5ps p b{font-family:'PolySans Median', Arial, Helvetica, sans-serif}.duplex-container.svelte-16mh5ps ul li p{margin:.5rem 0}.duplex-container.svelte-16mh5ps h5 b{color:#D93561}.small-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{max-width:1052px;padding:4rem 0;margin:auto}.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{padding:0 2rem;max-width:800px;margin:0 0 0 2rem}.normal-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{padding:3rem 0}.normal-image.svelte-16mh5ps .left-container.svelte-16mh5ps.svelte-16mh5ps{margin:0 auto}.large-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{min-height:455px}.large-image.svelte-16mh5ps img.svelte-16mh5ps.svelte-16mh5ps{height:100%;width:100%;object-fit:cover}.duplex-container.svelte-16mh5ps ol{list-style:none;counter-reset:numList}.duplex-container.svelte-16mh5ps ol li{position:relative\n  }.duplex-container.svelte-16mh5ps ol:first-child > li::before{counter-increment:numList;content:counter(numList);float:left;position:absolute;left:-50px;top:.5rem;font:bold 1rem sans-serif;text-align:center;color:#fff;line-height:2rem;width:2rem;height:2rem;background:#29397a;-moz-border-radius:100%;border-radius:100%\n  }@media only screen and (max-width: 768px){img.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{margin:0 auto;max-height:300px}.large-image.svelte-16mh5ps img.svelte-16mh5ps.svelte-16mh5ps{max-height:300px}div.duplex-container.large-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps,div.duplex-container.normal-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps,div.duplex-container.small-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{grid-template-columns:1fr;grid-template-rows:1fr}.duplex-container.svelte-16mh5ps p{text-align:center;align-self:normal}.row-reverse.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps .svelte-16mh5ps{text-align:center;align-self:auto;margin:1rem auto}.duplex-container.row-reverse.small-image.svelte-16mh5ps p,.duplex-container.row-reverse.small-image.svelte-16mh5ps h3,.duplex-container.row-reverse.small-image.svelte-16mh5ps a{text-align:center;align-items:normal}.row-reverse.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps,.right-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{width:100%;padding:3rem}.right-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{margin:4rem auto;text-align:center}.right-container.svelte-16mh5ps h3{font-size:3.5rem;margin:1rem auto}.right-container.svelte-16mh5ps p{max-width:97.5%;margin:.5rem auto}.right-container.svelte-16mh5ps a{margin:2rem auto}}@media only screen and (max-width: 991px){.small-container.svelte-16mh5ps .container,.normal-container.svelte-16mh5ps .container{max-width:100%}.small-image.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{padding:0 2rem;max-width:800px;margin:0}}@media only screen and (max-width: 1250px){.duplex-container.large-image.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{grid-template-columns:.75fr 1fr}.duplex-container.svelte-16mh5ps .right-container.svelte-16mh5ps.svelte-16mh5ps{padding:2rem 1rem}}@media only screen and (max-width: 1680px){.right-container.svelte-16mh5ps.svelte-16mh5ps.svelte-16mh5ps{margin:0 auto;padding:2rem}}",
  map: null
};
const Duplex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${data.containerSize === "Small" ? `<div class="small-container container svelte-16mh5ps"><div class="${"duplex-container small-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-16mh5ps"}"><div class="left-container svelte-16mh5ps" data-aos="fade-right" data-aos-delay="100"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-16mh5ps"></div>
        <div class="right-container svelte-16mh5ps" data-aos="fade-left" data-aos-delay="400">${data.tagline ? `<p class="tagline svelte-16mh5ps">${escape(data.tagline)}</p>` : ``}
          ${data.headline ? `<h3 class="small svelte-16mh5ps">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}
          ${data.bodyText ? `<p class="svelte-16mh5ps"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
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
  )}` : ``}</div></div></div>` : `${data.containerSize === "Normal" ? `<div class="normal-container container svelte-16mh5ps"><div class="${"duplex-container normal-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-16mh5ps"}"><div class="left-container svelte-16mh5ps" data-aos="fade-right" data-aos-delay="100"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-16mh5ps"></div>
        <div class="right-container svelte-16mh5ps" data-aos="fade-left" data-aos-delay="400">${data.tagline ? `<p class="tagline svelte-16mh5ps">${escape(data.tagline)}</p>` : ``}
          ${data.headline ? `<h3 class="svelte-16mh5ps">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}
          ${data.bodyText ? `<p class="svelte-16mh5ps"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
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
  )}` : ``}</div></div></div>` : `${data.containerSize == "Large" ? `<div class="${"duplex-container large-image " + escape(data.containerLayout ? "" : "row-reverse", true) + " svelte-16mh5ps"}"><div class="left-container svelte-16mh5ps" data-aos="fade-right" data-aos-delay="100"><img src="${escape(data.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image?.description, 0)} class="svelte-16mh5ps"></div>
    <div class="right-container svelte-16mh5ps" data-aos="fade-left" data-aos-delay="100">${data.tagline ? `<p class="tagline svelte-16mh5ps">${escape(data.tagline)}</p>` : ``}
      ${data.headline && !data.bodyText ? `<h3 class="big svelte-16mh5ps">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : `${data.headline ? `<h3 class="svelte-16mh5ps">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.headline }, {}, {})}</h3>` : ``}`}
      ${data.bodyText ? `<p class="svelte-16mh5ps"><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p>` : ``}
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
