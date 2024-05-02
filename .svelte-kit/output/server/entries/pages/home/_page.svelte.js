import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, d as each, m as missing_component } from "../../../chunks/index3.js";
import { H as Hero } from "../../../chunks/Hero.js";
import { C as Carousel } from "../../../chunks/Carousel.js";
import { I as IconBase } from "../../../chunks/IconBase.js";
import { B as ButtonLink } from "../../../chunks/ButtonLink.js";
import { D as DynamicDuplex } from "../../../chunks/DynamicDuplex.js";
import { I as InfoBlock, L as LogoRack, F as Faq } from "../../../chunks/Faq.js";
import { D as Duplex } from "../../../chunks/Duplex.js";
import { S as SEOMetaData } from "../../../chunks/SEOMetaData.js";
const CarouselItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".carousel.svelte-1atzm64 p.svelte-1atzm64{font-family:'PolySans Neutral';font-size:2rem;line-height:2.5rem;padding:0 5rem}.carousel.svelte-1atzm64 span.svelte-1atzm64{font-family:'PolySans Neutral';font-size:1.125rem}.carousel-avatar.svelte-1atzm64.svelte-1atzm64{display:inline-block;height:2.5rem;width:2.5em;margin:0 0.75rem;border-radius:50%;background-position:center;background-repeat:no-repeat;background-size:contain}",
  map: null
};
const CarouselItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  $$result.css.add(css$2);
  return `<div class="carousel svelte-1atzm64"><p class="svelte-1atzm64">${entry.quote !== null ? `<!-- HTML_TAG_START -->${entry.quote}<!-- HTML_TAG_END -->` : ``}</p>
  <div class="flex-center-center">${entry.image !== null ? `<img class="carousel-avatar svelte-1atzm64" src="${escape(entry.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", entry.image?.description, 0)}>` : `<img class="carousel-avatar svelte-1atzm64" src="${escape(entry.quoteSource?.avatar.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", entry.quoteSource?.avatar.description, 0)}>`}
    ${entry.quoteSource !== null ? `<span class="svelte-1atzm64">${escape(entry.quoteSource.name)}</span>` : ``}</div>
</div>`;
});
const CustomCarouselItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".carousel.svelte-ff5ueg p.svelte-ff5ueg{font-family:'PolySans Neutral';font-size:2rem;line-height:2.5rem}.carousel.svelte-ff5ueg span.svelte-ff5ueg{font-family:'PolySans Neutral';font-size:1.125rem}.half.svelte-ff5ueg.svelte-ff5ueg{background:#fff;color:#000}.custom.svelte-ff5ueg .quote.svelte-ff5ueg{padding:0 2rem;text-align:left}.carousel-avatar.svelte-ff5ueg.svelte-ff5ueg{display:inline-block;height:2.5rem;width:2.5em;margin:0 0.75rem;border-radius:50%;background-position:center;background-repeat:no-repeat;background-size:contain}.flex-center-center.svelte-ff5ueg.svelte-ff5ueg{display:flex;flex-direction:column;height:100%}.carousel-image.svelte-ff5ueg.svelte-ff5ueg,.quote.svelte-ff5ueg.svelte-ff5ueg{flex:0 0 50%;max-height:200px}.carousel-image.svelte-ff5ueg.svelte-ff5ueg{padding:2.5rem;margin-top:2rem}",
  map: null
};
const CustomCarouselItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  $$result.css.add(css$1);
  return `<div class="custom carousel svelte-ff5ueg">${entry.image !== null ? `<div class="flex-center-center half svelte-ff5ueg"><img class="carousel-image svelte-ff5ueg" src="${escape(entry.image?.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", entry.image?.description, 0)}>
      ${entry.quote !== null ? `<p class="quote svelte-ff5ueg"><!-- HTML_TAG_START -->${entry.quote}<!-- HTML_TAG_END --></p>` : ``}</div>` : `<div class="flex quote svelte-ff5ueg">${entry.quote !== null ? `<p class="svelte-ff5ueg"><!-- HTML_TAG_START -->${entry.quote}<!-- HTML_TAG_END --></p>` : ``}
      <img class="carousel-avatar svelte-ff5ueg" src="${escape(entry.quoteSource?.avatar.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", entry.quoteSource?.avatar.description, 0)}>
      ${entry.quoteSource !== null ? `<span class="svelte-ff5ueg">${escape(entry.quoteSource.name)}</span>` : ``}</div>`}

</div>`;
});
const FaArrowCircleRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>`;
    }
  })}`;
});
const FaArrowCircleLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path>`;
    }
  })}`;
});
const CarouselWrapper_svelte_svelte_type_style_lang = "";
const css = {
  code: '.custom.container.svelte-16s0ie8.svelte-16s0ie8{display:flex;position:relative;background-color:#29397a;color:#fff;padding:6rem 4rem 10rem 4rem;margin:6rem auto}.custom.svelte-16s0ie8 .top.svelte-16s0ie8{display:flex}.custom.svelte-16s0ie8 .top img.svelte-16s0ie8{height:40px;width:40px}.custom.svelte-16s0ie8 .top p.svelte-16s0ie8{max-width:180px;padding:0 20px;margin:0}.custom.svelte-16s0ie8 .bottom.svelte-16s0ie8{display:flex;flex-direction:column;text-align:left;height:calc(100% - 2.5rem);justify-content:center;vertical-align:middle}.custom.svelte-16s0ie8 .bottom p.svelte-16s0ie8{font-size:1.75rem;color:rgba(173, 235, 239, 0.3)}.custom.svelte-16s0ie8 .bottom .active.svelte-16s0ie8{color:#ADEBEF}.custom.svelte-16s0ie8 .left-container.svelte-16s0ie8{flex:1;max-width:300px}.custom.svelte-16s0ie8 .right-container.svelte-16s0ie8{flex:2;width:calc(100% - 300px)}.custom.svelte-16s0ie8 .right-container .ctaLink.svelte-16s0ie8{position:absolute;bottom:3rem;right:4rem}.custom.svelte-16s0ie8 .right-container .ctaLink.svelte-16s0ie8 a:hover{color:#fff}.custom.svelte-16s0ie8 .right-container .ctaLink.svelte-16s0ie8 a{background:#adebef;color:#000}.custom.svelte-16s0ie8 .carousel-wrapper.svelte-16s0ie8{padding:0}.custom.svelte-16s0ie8 button.svelte-16s0ie8{position:absolute;left:0;bottom:-5rem}.custom.svelte-16s0ie8 button.svelte-16s0ie8:last-child{left:3rem}.custom.svelte-16s0ie8 svg{color:#adebef}.carousel-wrapper.svelte-16s0ie8.svelte-16s0ie8{margin:0 auto;padding:6rem 2rem;font-size:1rem;text-align:center}.carousel-wrapper.svelte-16s0ie8 button.svelte-16s0ie8{background:transparent;border:none}.icon.svelte-16s0ie8.svelte-16s0ie8{height:2rem;width:2rem;color:#29397a}.icon.svelte-16s0ie8.svelte-16s0ie8:hover{cursor:pointer}.custom.svelte-16s0ie8 .sc-carousel-dots__container{display:none !important}@media only screen and (max-width: 550px){.custom.container.svelte-16s0ie8.svelte-16s0ie8{padding:0rem 0rem 10rem 0rem}.custom.svelte-16s0ie8 button.flex-center-center[slot="prev"]{left:5rem}.custom.svelte-16s0ie8 button.flex-center-center[slot="next"]{left:9rem}}@media only screen and (max-width: 768px){.custom.svelte-16s0ie8 .left-container.svelte-16s0ie8{display:none}.custom.svelte-16s0ie8 .right-container.svelte-16s0ie8{max-width:100%}}@media only screen and (max-width: 991px){.custom.container.svelte-16s0ie8.svelte-16s0ie8{max-width:100%;margin:0}.custom.svelte-16s0ie8 .carousel p p{font-size:1.25rem;line-height:1.5rem}}@media only screen and (max-width: 1200px){.custom.svelte-16s0ie8 .carousel p p{font-size:1.25rem;line-height:1.25rem;padding:inherit}}',
  map: null
};
const CarouselWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let carousel;
  let { data } = $$props;
  let quotes = [
    {
      quote: data.quote1,
      image: data.image1,
      quoteSource: data.quoteSource1
    },
    {
      quote: data.quote2,
      image: data.image2,
      quoteSource: data.quoteSource2
    },
    {
      quote: data.quote3,
      image: data.image3,
      quoteSource: data.quoteSource3
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${data.configuration ? `<div class="container"><div class="carousel-wrapper svelte-16s0ie8">${validate_component(Carousel, "Carousel").$$render(
      $$result,
      {
        autoplay: "true",
        autoplayDuration: "10000",
        this: carousel
      },
      {
        this: ($$value) => {
          carousel = $$value;
          $$settled = false;
        }
      },
      {
        next: ({ showPrevPage, showNextPage }) => {
          return `<button class="flex-center-center svelte-16s0ie8" slot="next"><div class="icon svelte-16s0ie8">${validate_component(FaArrowCircleRight, "FaArrowCircleRight").$$render($$result, {}, {}, {})}</div></button>`;
        },
        prev: ({ showPrevPage, showNextPage }) => {
          return `<button class="flex-center-center svelte-16s0ie8" slot="prev"><div class="icon svelte-16s0ie8">${validate_component(FaArrowCircleLeft, "FaArrowCircleLeft").$$render($$result, {}, {}, {})}</div></button>`;
        },
        default: ({ showPrevPage, showNextPage }) => {
          return `${each(quotes, (entry) => {
            return `${validate_component(CarouselItem, "CarouselItem").$$render($$result, { entry }, {}, {})}`;
          })}`;
        }
      }
    )}</div></div>` : `<div class="container custom svelte-16s0ie8"><div class="left-container svelte-16s0ie8"><div class="top svelte-16s0ie8"><img src="https://images.ctfassets.net/qhzqj9nbcut3/1zjqDdEWirjNiucHFkZtT4/e219d5c3df350b959e2ae43a4f8ee3f8/redLotus.png?h=250" alt="A logo of a red lotus." class="svelte-16s0ie8">
        <p class="svelte-16s0ie8">Don&#39;t just take our word for it...</p></div>
      <div class="bottom svelte-16s0ie8"><p class="${["svelte-16s0ie8", "active"].join(" ").trim()}">For Lorem</p>
        <p class="${["svelte-16s0ie8", ""].join(" ").trim()}">For Ipsum</p>
        <p class="${["svelte-16s0ie8", ""].join(" ").trim()}">For Slipsum</p></div></div>
    <div class="right-container svelte-16s0ie8"><div class="carousel-wrapper svelte-16s0ie8">${validate_component(Carousel, "Carousel").$$render(
      $$result,
      {
        autoplay: "true",
        autoplayDuration: "10000",
        this: carousel
      },
      {
        this: ($$value) => {
          carousel = $$value;
          $$settled = false;
        }
      },
      {
        next: ({ showPrevPage, showNextPage }) => {
          return `<button class="flex-center-center svelte-16s0ie8" slot="next"><div class="icon svelte-16s0ie8">${validate_component(FaArrowCircleRight, "FaArrowCircleRight").$$render($$result, {}, {}, {})}</div></button>`;
        },
        prev: ({ showPrevPage, showNextPage }) => {
          return `<button class="flex-center-center svelte-16s0ie8" slot="prev"><div class="icon svelte-16s0ie8">${validate_component(FaArrowCircleLeft, "FaArrowCircleLeft").$$render($$result, {}, {}, {})}</div></button>`;
        },
        default: ({ showPrevPage, showNextPage }) => {
          return `${each(quotes, (entry) => {
            return `${validate_component(CustomCarouselItem, "CustomCarouselItem").$$render($$result, { entry }, {}, {})}`;
          })}`;
        }
      }
    )}
        <div class="ctaLink svelte-16s0ie8">${validate_component(ButtonLink, "ButtonLink").$$render(
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
    )}</div></div></div></div>`}`;
  } while (!$$settled);
  return $$rendered;
});
function getComponentData(item) {
  switch (item.type) {
    case "ComponentHeroBanner":
      return { data: item.data.heroBanners[0] };
    case "ComponentDuplex":
      return { data: item.data.duplexes[0] };
    case "ComponentDynamicDuplex":
      return { data: item.data.dynamicDuplexes[0] };
    case "ComponentCarousel":
      return { data: item.data.carousels[0] };
    case "ComponentInfoBlock":
      return { data: item.data.infoBlocks[0] };
    case "ComponentLogoRack":
      return { data: item.data.logoRacks[0] };
    case "ComponentFaq":
      return { data: item.data.faqs };
    default:
      return {};
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const components = {
    ComponentHeroBanner: Hero,
    ComponentCarousel: CarouselWrapper,
    ComponentDuplex: Duplex,
    ComponentDynamicDuplex: DynamicDuplex,
    ComponentInfoBlock: InfoBlock,
    ComponentLogoRack: LogoRack,
    ComponentFaq: Faq
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data.pageContent, (item, index) => {
    return `${validate_component(components[item.type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, getComponentData(item)), {}, {})}`;
  })}

${validate_component(SEOMetaData, "SEOMetaData").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
