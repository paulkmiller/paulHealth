import { c as create_ssr_component, f as subscribe, e as escape, v as validate_component, a as add_attribute, d as each } from "./index3.js";
import { B as ButtonLink } from "./ButtonLink.js";
import { p as page } from "./stores.js";
import { C as Container, R as Row } from "./Row.js";
import { T as TextWithLineBreaks } from "./TextWithLineBreaks.js";
const InfoBlockItem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: `.copy-container.blue.svelte-h8evwa.svelte-h8evwa{background-color:#29397a}.copy-container.blue.svelte-h8evwa .content.svelte-h8evwa,.copy-container.blue.svelte-h8evwa .subline.svelte-h8evwa{color:#fff}.copy-container.svelte-h8evwa.svelte-h8evwa{padding:6rem 0}.left.svelte-h8evwa .content.svelte-h8evwa{text-align:left}.content.svelte-h8evwa.svelte-h8evwa{width:100%;margin:0 auto;text-align:center}.subline.svelte-h8evwa.svelte-h8evwa,.content1.svelte-h8evwa.svelte-h8evwa{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif}.subline.svelte-h8evwa.svelte-h8evwa{font-size:2.25rem;line-height:2.75rem;margin:auto auto 2rem}.tagline.svelte-h8evwa.svelte-h8evwa{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#D93561;text-transform:uppercase}.left.svelte-h8evwa .content1.svelte-h8evwa p{font-size:1.125rem;line-height:1.5rem;margin:2rem auto}.copy-container.svelte-h8evwa:not(.left) .content1.svelte-h8evwa p{font-size:1.125rem;line-height:1.5rem;max-width:42.825rem;margin:2rem auto}.copy-container.svelte-h8evwa .content1.svelte-h8evwa p b{font-family:'PolySans Bulky', Arial, Helvetica, sans-serif;color:#FF80A8;letter-spacing:.25px
  }.copy-container.blue.svelte-h8evwa .content1.svelte-h8evwa p b{color:#adebef}.bg-color-primary.svelte-h8evwa .item .svelte-h8evwa{color:#fff;margin:1rem 0}.item h2{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:400;margin-top:2rem;margin-bottom:0.5rem}.item.svelte-h8evwa h3.svelte-h8evwa{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:400;text-align:center;margin:2rem auto;font-size:4.20rem}.item.svelte-h8evwa.svelte-h8evwa{margin:0 auto}.ol-container.svelte-h8evwa .headline.svelte-h8evwa{max-width:41rem;margin:1rem auto 4rem;font-size:2.25rem;text-align:center}.ol-container.svelte-h8evwa .list ol > li:nth-child(1){margin-bottom:0}.ol-container.svelte-h8evwa .list ol > li:nth-child(2){margin:0 auto}.ol-container.svelte-h8evwa .list ol > li:nth-child(3){margin-bottom:0}.letter-avatar.svelte-h8evwa.svelte-h8evwa{height:2.5rem;width:2.5rem;margin:0 auto;border-radius:100%;background-position:center;background-repeat:no-repeat;background-size:contain;display:inline-block}.letter-name.svelte-h8evwa h4{font-size:0.9rem;margin:0}.letter div.svelte-h8evwa.svelte-h8evwa{margin:1.5rem 0}.list-wrapper.svelte-h8evwa.svelte-h8evwa{height:100%;padding:6rem 4rem;background-position:left center;background-repeat:no-repeat;background-size:contain}.list-wrapper.svelte-h8evwa .list.svelte-h8evwa{max-width:50rem;margin:0 auto}.list-wrapper.svelte-h8evwa .list.svelte-h8evwa>ol:first-of-type{margin:0 auto}.list-wrapper.svelte-h8evwa ol,.list-wrapper.svelte-h8evwa ul{list-style:none;counter-reset:numList;color:#29397a;font-size:2rem}.list-wrapper.svelte-h8evwa ol > li,.list-wrapper.svelte-h8evwa ul > li{margin:0 auto 4rem;position:relative;max-width:37rem}.list-wrapper.svelte-h8evwa ol > li:before,.list-wrapper.svelte-h8evwa ul > li:before{counter-increment:numList;content:counter(numList);float:left;position:absolute;left:-40px;top:0;font:bold 1rem sans-serif;text-align:center;color:#fff;line-height:2rem;width:2rem;height:2rem;background:#29397a;-moz-border-radius:100%;border-radius:100%
  }.list-wrapper.svelte-h8evwa ol li h3,.list-wrapper.svelte-h8evwa ul li h3,.list-wrapper.svelte-h8evwa ul li h3{font-family:'PolySans Neutral', Arial, sans-serif;font-weight:500;font-size:2rem;margin:0
  }.list-wrapper.svelte-h8evwa ol li ol,.list-wrapper.svelte-h8evwa ul li ul{padding-left:0}.list-wrapper.svelte-h8evwa ol li ol li p,.list-wrapper.svelte-h8evwa ul li ul li p{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;list-style-type:none;font-size:1rem;color:#29397a;padding:.5rem 5px 2rem;padding-top:.5rem;padding-bottom:2rem;margin:0}.list-wrapper.svelte-h8evwa ol li ol li:before,.list-wrapper.svelte-h8evwa ul li ul li:before{content:"";height:0;width:0}.divider-before.svelte-h8evwa.svelte-h8evwa::before{content:'';display:block;height:1px;background-color:#e8e8e8;width:80%;margin:0 auto 6rem}.divider-after.svelte-h8evwa.svelte-h8evwa::after{content:'';display:block;height:1px;background-color:#e8e8e8;width:80%;margin:6rem 0rem auto}@media(max-width: 650px){.divider.svelte-h8evwa.svelte-h8evwa::after{margin:1rem auto}}@media(max-width: 768px){.divider.svelte-h8evwa.svelte-h8evwa::after{margin:2rem auto}.logo-rack-wrapper.svelte-h8evwa.svelte-h8evwa{padding:4rem 0}.list-wrapper.svelte-h8evwa ol > li,.list-wrapper.svelte-h8evwa ul > li{margin:0 auto 2rem}.list-wrapper.svelte-h8evwa.svelte-h8evwa{padding:2rem;background-image:none !important
    }.copy-container.svelte-h8evwa.svelte-h8evwa{padding:4rem 2rem}.copy-container.svelte-h8evwa .content.svelte-h8evwa{text-align:left}.copy-container.svelte-h8evwa *{text-align:center}.subline.svelte-h8evwa.svelte-h8evwa{text-align:center;margin:0 auto 2rem
    }}`,
  map: null
};
const InfoBlockItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLegalPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let paddingClasses = "";
  let background_color;
  let color;
  let taglineColor;
  let copyBackground;
  let alignment = "";
  let dividerClasses = "";
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  isLegalPage = $page.url.pathname.startsWith("/legal");
  {
    {
      paddingClasses = "";
      alignment += data?.copyAlignment ? "left" : "center";
      if (data?.paddingOptions?.includes("No Padding Top")) {
        paddingClasses += " pt-0";
      }
      if (data?.paddingOptions?.includes("No Padding Bottom")) {
        paddingClasses += " pb-0";
      }
      if (data?.divider?.includes("Top")) {
        dividerClasses += " divider-before";
      }
      if (data?.divider?.includes("Bottom")) {
        dividerClasses += " divider-after";
      }
      if (data?.copyBackground) {
        background_color = "#fff";
        color = "#29397a";
        taglineColor = "#D93561";
        copyBackground = "white";
      } else {
        background_color = "#29397a";
        color = "#fff";
        taglineColor = "#adebef";
        copyBackground = "blue";
      }
    }
  }
  $$unsubscribe_page();
  return `${data.infoBlockConfig === "Copy" ? `<div class="${[
    "copy-container " + escape(paddingClasses, true) + " " + escape(dividerClasses, true) + " " + escape(alignment, true) + " svelte-h8evwa",
    !copyBackground ? "blue" : ""
  ].join(" ").trim()}" style="${"background-color: " + escape(background_color, true) + ";"}"><div class="${[
    "content svelte-h8evwa",
    (isLegalPage ? "legal" : "") + " " + (alignment ? "container" : "")
  ].join(" ").trim()}" style="${"color: " + escape(color, true)}"><div class="item svelte-h8evwa">${data.tagline ? `<p class="tagline svelte-h8evwa" style="${"color: " + escape(taglineColor, true)}" data-aos="fade-in-up">${escape(data.tagline)}</p>` : ``}
          ${data.headline ? `<h3 class="headline svelte-h8evwa" data-aos="fade-in-up" data-aos-delay="100">${escape(data.headline)}</h3>` : ``}
          ${data.subline ? `<h4 class="subline svelte-h8evwa" data-aos="fade-in-up" data-aos-delay="200">${escape(data.subline)}</h4>` : ``}
          ${data.content1 ? `<div class="content1 svelte-h8evwa" data-aos="fade-in-up" data-aos-delay="300"><!-- HTML_TAG_START -->${data.content1}<!-- HTML_TAG_END --></div>` : ``}
          ${data.ctaLink ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      path: data.ctaLink.slug,
      text: "Learn More",
      background_color: "#ADEBEF",
      ariaText: "learn more",
      ariaLink: data.ctaLink.slug
    },
    {},
    {}
  )}` : ``}</div></div></div>` : `${data.infoBlockConfig === "Ordered List" ? `<div class="ol-container svelte-h8evwa"><div class="list-wrapper svelte-h8evwa" style="${"background-image: url(" + escape(data.block1Image.url, true) + ")"}">${data.headline ? `<h3 class="headline svelte-h8evwa" data-aos="fade-in-up" data-aos-delay="0">${escape(data.headline)}</h3>` : ``}
        <div class="list svelte-h8evwa" data-aos="fade-in-up" data-aos-delay="200"><!-- HTML_TAG_START -->${data.content1}<!-- HTML_TAG_END --></div></div></div>` : `${data.infoBlockConfig === "Letter" ? `<div class="letter_container svelte-h8evwa"><!-- HTML_TAG_START -->${data.content1}<!-- HTML_TAG_END -->
      <div class="svelte-h8evwa"><span class="letter-avatar svelte-h8evwa" style="${"background-image: url(" + escape(data.block1Image.url, true) + ")"}"${add_attribute("alt", data.block1Image.description, 0)}></span>
        <span class="letter-avatar svelte-h8evwa" style="${"background-image: url(" + escape(data.block2Image.url, true) + ")"}"${add_attribute("alt", data.block2Image.description, 0)}></span></div>
      <div class="letter-name svelte-h8evwa"><!-- HTML_TAG_START -->${data.content2}<!-- HTML_TAG_END --></div></div>` : ``}`}`}`;
});
const InfoBlock_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".infoBlock-wrapper.svelte-14ddgjz{display:grid;grid-template-columns:repeat(1, 1fr);grid-template-rows:repeat(1, 1fr);height:100%;margin:0 auto}",
  map: null
};
const InfoBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `<div class="infoBlock-wrapper svelte-14ddgjz">${validate_component(InfoBlockItem, "InfoBlockItem").$$render($$result, { data }, {}, {})}
</div>`;
});
const LogoRackItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".small-logo.svelte-8xhu7z.svelte-8xhu7z{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;grid-gap:3rem;color:#29397a}.small-logo.svelte-8xhu7z h2.svelte-8xhu7z,.small-logo.svelte-8xhu7z h4.svelte-8xhu7z{width:100%}h2.svelte-8xhu7z.svelte-8xhu7z{display:flex;font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:3rem;font-weight:500;letter-spacing:0.875px;align-items:center;justify-content:center;margin:0 auto}h4.svelte-8xhu7z.svelte-8xhu7z{display:flex;font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:2rem;font-weight:500;letter-spacing:0.875px;align-items:center;justify-content:center;margin:0 auto}p.svelte-8xhu7z.svelte-8xhu7z{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;padding:.5rem}.logo-body.svelte-8xhu7z.svelte-8xhu7z{padding:0;max-width:800px}.logo-body.svelte-8xhu7z.svelte-8xhu7z{margin:0;color:#29397a}.logo-body.svelte-8xhu7z p b{font-family:'PolySans Median', Arial, Helvetica, sans-serif}.logo-wrapper.svelte-8xhu7z.svelte-8xhu7z{display:flex;flex-direction:column;justify-content:center;align-items:center;align-self:flex-start;max-width:12rem}.logo-wrapper.svelte-8xhu7z img.svelte-8xhu7z{height:5.5rem;margin:1.5rem auto}.logo-wrapper.svelte-8xhu7z h2.svelte-8xhu7z{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:3.75rem;font-weight:500}.logo-rack-wrapper .small-logo.blocks-1 .logo-wrapper{max-width:100%;width:100%}.logo-rack-wrapper .small-logo.blocks-3 .logo-wrapper{max-width:calc(33% - 3rem);width:100%\n  }.logo-rack-wrapper .small-logo.blocks-2 .logo-wrapper{max-width:30rem}@media(max-width: 768px){.logo-rack-wrapper .small-logo.blocks-3 .logo-wrapper{max-width:100%}}",
  map: null
};
const LogoRackItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { color } = $$props;
  let logos = [
    {
      header: data.header,
      headline: data.logoHeadline1,
      body: data.logoText1,
      image: data.logoImage1?.url,
      alt: data.logoImage1?.description
    },
    {
      headline: data.logoHeadline2,
      body: data.logoText2,
      image: data.logoImage2?.url,
      alt: data.logoImage2?.description
    },
    {
      headline: data.logoHeadline3,
      body: data.logoText3,
      image: data.logoImage3?.url,
      alt: data.logoImage3?.description
    },
    {
      headline: data.logoHeadline4,
      body: data.logoText4,
      image: data.logoImage4?.url,
      alt: data.logoImage4?.description
    },
    {
      headline: data.logoHeadline5,
      body: data.logoText5,
      image: data.logoImage5?.url,
      alt: data.logoImage5?.description
    },
    {
      headline: data.logoHeadline6,
      body: data.logoText6,
      image: data.logoImage6?.url,
      alt: data.logoImage6?.description
    }
  ].filter((logo) => logo.headline || logo.body || logo.image);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$3);
  return `<div class="${"text-center small-logo blocks-" + escape(data.logosPerRow, true) + " svelte-8xhu7z"}">${logos[0].header ? `<h2 style="${"color: " + escape(color, true)}" data-aos="fade-up" data-aos-delay="100" class="svelte-8xhu7z">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: logos[0].header }, {}, {})}</h2>` : ``}
  ${each(logos, (logo, index) => {
    return `<div class="logo-wrapper svelte-8xhu7z" data-aos="fade-left"${add_attribute("data-aos-delay", index * 400, 0)}><img src="${escape(logo.image, true) + "?fm=webp&q=80"}"${add_attribute("alt", logo.alt, 0)} class="svelte-8xhu7z">
      ${logo.headline ? `<h4 style="${"color: " + escape(color, true)}" class="headline svelte-8xhu7z">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: logo.headline }, {}, {})}</h4>` : ``}
      ${logo.body ? `<p style="${"color: " + escape(color, true)}" class="logo-body svelte-8xhu7z"><!-- HTML_TAG_START -->${logo.body}<!-- HTML_TAG_END --></p>` : ``}
    </div>`;
  })}
</div>`;
});
const LogoRack_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".logo-rack-wrapper.svelte-172r10c{padding:6rem 0}.tagline.svelte-172r10c{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#D93561;text-transform:uppercase;text-align:center}.divider-before.svelte-172r10c::before{content:'';display:block;height:1px;background-color:#e8e8e8;width:80%;margin:0 auto 6rem}.divider-after.svelte-172r10c::after{content:'';display:block;height:1px;background-color:#e8e8e8;width:80%;margin:6rem 0rem auto}@media(max-width: 650px){.divider.svelte-172r10c::after{margin:1rem auto}}@media(max-width: 768px){.divider.svelte-172r10c::after{margin:2rem auto}.logo-rack-wrapper.svelte-172r10c{padding:4rem 0}}",
  map: null
};
const LogoRack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { background_color } = $$props;
  let { color } = $$props;
  let taglineColor;
  let paddingClasses = "";
  let dividerClasses = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.background_color === void 0 && $$bindings.background_color && background_color !== void 0)
    $$bindings.background_color(background_color);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  {
    {
      paddingClasses = "";
      if (data?.paddingOptions?.includes("No Padding Top")) {
        paddingClasses += " pt-0";
      }
      if (data?.paddingOptions?.includes("No Padding Bottom")) {
        paddingClasses += " pb-0";
      }
      if (data?.divider?.includes("Top")) {
        dividerClasses += " divider-before";
      }
      if (data?.divider?.includes("Bottom")) {
        dividerClasses += " divider-after";
      }
      if (data?.backgroundColor) {
        background_color = "#29397a";
        color = "#fff";
        taglineColor = "#adebef";
      } else {
        background_color = "#fff";
        color = "#29397a;";
        taglineColor = "#D93561";
      }
    }
  }
  return `<div class="${"logo-rack-wrapper" + escape(paddingClasses, true) + " " + escape(dividerClasses, true) + " svelte-172r10c"}" style="${"background-color: " + escape(background_color, true) + ";"}">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          class: "justify-content-center align-items-center"
        },
        {},
        {
          default: () => {
            return `${data.tagline ? `<p class="tagline svelte-172r10c" style="${"color: " + escape(taglineColor, true)}" data-aos="fade-up" data-aos-delay="0">${escape(data.tagline)}</p>` : ``}
      ${data.headline ? `<h3 class="headline" data-aos="fade-up" data-aos-delay="100">${escape(data.headline)}</h3>` : ``}
      ${data.logoSize ? `${validate_component(LogoRackItem, "LogoRackItem").$$render($$result, { data, color }, {}, {})}` : ``}`;
          }
        }
      )}`;
    }
  })}
</div>`;
});
const FaqItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-1phxj0l.svelte-1phxj0l{border:none;border-bottom:1px solid rgba(255, 255, 255, 0.2);border-radius:0;background:none;display:flex;justify-content:space-between;color:inherit;font-size:1rem;font-family:'PolySans Neutral', arial, sans-serif;cursor:pointer;width:100%;margin:0 auto;padding:1.75em 0 0.5rem}.answer.svelte-1phxj0l.svelte-1phxj0l{padding:1rem;background:#fff;color:#000;font-size:.95rem}.answer.svelte-1phxj0l ul{background-color:#e6e9de;color:#000;margin:0;padding:1rem 2rem;border-bottom:2px solid #fff;border-radius:0.2rem}svg.svelte-1phxj0l.svelte-1phxj0l{transition:transform 0.2s ease-in}[aria-expanded='true'].svelte-1phxj0l svg.svelte-1phxj0l{transform:rotate(0.25turn)}",
  map: null
};
const FaqItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  let faqs = [
    {
      question: entry.question0,
      answer: entry.answer0?.json.content[0].content[0].value
    },
    {
      question: entry.question1,
      answer: entry.answer1?.json.content[0].content[0].value
    },
    {
      question: entry.question2,
      answer: entry.answer2?.json.content[0].content[0].value
    },
    {
      question: entry.question3,
      answer: entry.answer3?.json.content[0].content[0].value
    },
    {
      question: entry.question4,
      answer: entry.answer4?.json.content[0].content[0].value
    },
    {
      question: entry.question5,
      answer: entry.answer5?.json.content[0].content[0].value
    },
    {
      question: entry.question6,
      answer: entry.answer6?.json.content[0].content[0].value
    },
    {
      question: entry.question7,
      answer: entry.answer7?.json.content[0].content[0].value
    },
    {
      question: entry.question8,
      answer: entry.answer8?.json.content[0].content[0].value
    },
    {
      question: entry.question9,
      answer: entry.answer9?.json.content[0].content[0].value
    }
  ].filter((faq) => faq.question || faq.answer).map((faq) => ({ ...faq, isOpen: false }));
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  $$result.css.add(css$1);
  return `${each(faqs, (faq, index) => {
    return `<button${add_attribute("aria-expanded", faq.isOpen, 0)} class="svelte-1phxj0l">${faq.question ? `${escape(faq.question)}` : ``}
    <svg style="tran" width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="svelte-1phxj0l"><path d="M9 5l7 7-7 7"></path></svg></button>
  ${faq.isOpen ? `<div class="answer svelte-1phxj0l">${faq.answer ? `<!-- HTML_TAG_START -->${faq.answer}<!-- HTML_TAG_END -->` : ``}
    </div>` : ``}`;
  })}`;
});
const Faq_svelte_svelte_type_style_lang = "";
const css = {
  code: ".faq-wrapper.svelte-1wi849r.svelte-1wi849r{padding:6rem 0 3rem 0;background-color:#29397a;color:#fff;text-align:left}.faq-wrapper.svelte-1wi849r div.svelte-1wi849r{width:50%;margin:0 auto}h2.svelte-1wi849r.svelte-1wi849r{font-weight:400;text-align:left}@media(max-width: 1300px){.faq-wrapper.svelte-1wi849r div.svelte-1wi849r{width:65%}}@media(max-width: 1024px){.faq-wrapper.svelte-1wi849r div.svelte-1wi849r{width:80%}}@media(max-width: 768px){h2.svelte-1wi849r.svelte-1wi849r{text-align:center}}",
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="faq-wrapper svelte-1wi849r"><div class="svelte-1wi849r"><h2 class="svelte-1wi849r">Frequently Asked Questions</h2>

    ${each(data, (entry) => {
    return `${validate_component(FaqItem, "FaqItem").$$render($$result, { entry }, {}, {})}`;
  })}</div>
  
</div>`;
});
export {
  Faq as F,
  InfoBlock as I,
  LogoRack as L
};
