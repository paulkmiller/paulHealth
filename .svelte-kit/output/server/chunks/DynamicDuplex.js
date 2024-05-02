import { c as create_ssr_component, h as createEventDispatcher, s as setContext, o as onDestroy, i as getContext, f as subscribe, a as add_attribute, v as validate_component, e as escape, n as null_to_empty } from "./index3.js";
import { w as writable } from "./index2.js";
import { B as ButtonLink } from "./ButtonLink.js";
const CollapsibleCard_svelte_svelte_type_style_lang = "";
const Accordion_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-da9j5z{list-style:none;padding-left:0}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 0.2 } = $$props;
  let { easing = "ease" } = $$props;
  let { key = null } = $$props;
  const dispatch = createEventDispatcher();
  const store = writable({ key, duration, easing });
  const unsubscribe = store.subscribe((s) => {
    key = s.key;
    dispatch("change", { key });
  });
  setContext("svelte-collapsible-accordion", store);
  onDestroy(unsubscribe);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css$2);
  {
    store.update((s) => Object.assign(s, { key }));
  }
  return `<ul class="accordion svelte-da9j5z">${slots.default ? slots.default({}) : ``}
</ul>`;
});
const AccordionItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".accordion-item-header.svelte-c582kf{user-select:none;cursor:pointer}button.svelte-c582kf{background:transparent;border:none !important}",
  map: null
};
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let params;
  let $store, $$unsubscribe_store;
  let { key } = $$props;
  const store = getContext("svelte-collapsible-accordion");
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css$1);
  params = {
    open: $store.key === key,
    duration: $store.duration,
    easing: $store.easing
  };
  $$unsubscribe_store();
  return `<li class="accordion-item"${add_attribute("aria-expanded", params.open, 0)}><button type="button" class="accordion-item-header svelte-c582kf">${slots.header ? slots.header({}) : ``}</button>

    <div class="accordion-item-body">${slots.body ? slots.body({}) : ``}</div>

    ${slots.default ? slots.default({}) : ``}

</li>`;
});
const DynamicDuplex_svelte_svelte_type_style_lang = "";
const css = {
  code: `.container .accordion{width:100%;max-width:100%
}.cta.svelte-1l3i357.svelte-1l3i357,.cta.svelte-1l3i357 a{text-align:center}.cta.svelte-1l3i357.svelte-1l3i357{margin-top:2rem}.accordion-container.svelte-1l3i357.svelte-1l3i357{display:grid;grid-template-columns:1fr 1fr;position:relative}.accordion-container.svelte-1l3i357 img.svelte-1l3i357{position:absolute;right:0;top:0;padding:2rem;height:100%;max-width:calc(50% - 2rem);object-fit:contain;aspect-ratio:3/2;opacity:0;transition:opacity 0.5s ease-in-out}.container.svelte-1l3i357 .accordion-container.svelte-1l3i357 .active{opacity:1;transition:opacity 0.5s ease-in-out}.left-container.svelte-1l3i357.svelte-1l3i357{display:grid;max-width:800px;margin:0 auto}.right-container.svelte-1l3i357.svelte-1l3i357{padding:0}.accordion-container.svelte-1l3i357 h3{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:2.3rem;margin-bottom:0.25rem;align-self:self-end}.accordion-container.svelte-1l3i357 p{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:1.125rem;line-height:1.5rem;letter-spacing:0.25px;margin:0.5rem;text-align:left;align-self:center}.accordion-container.svelte-1l3i357 .accordion-item-header{width:100%;margin-bottom:-1.375rem}.accordion-container.svelte-1l3i357 .accordion-item button *{text-align:left}.accordion-container.svelte-1l3i357 .header{color:#29397A}.accordion-container.svelte-1l3i357 .header *{font-size:4.5rem}.dynamic-duplex.svelte-1l3i357.svelte-1l3i357{padding:3rem 0}.dynamic-duplex.svelte-1l3i357 .right-container.svelte-1l3i357{max-height:440px;margin:0 auto}.accordion-item img{display:none}.accordion-item .header h2.svelte-1l3i357.svelte-1l3i357:before{float:left;position:absolute;left:-40px;top:55px;font:bold 1rem sans-serif;text-align:center;color:#fff;line-height:2rem;width:2rem;height:2rem;background:#29397a;-moz-border-radius:100%;border-radius:100%}.accordion-item:first-child .header h2:before{content:"1"}.accordion-item:nth-child(2) .header h2:before{content:"2"}.accordion-item:nth-child(3) .header h2:before{content:"3"}
  .container .accordion, 
  .container .accordion-item,
  .container .accordion-item-header{border:none;box-shadow:none;position:relative}.accordion{width:100%;max-width:450px;margin:0 auto}.accordion-item{border-bottom:1px solid rgb(100, 120, 140)}@media only screen and (max-width: 768px){.accordion-item .header h2.svelte-1l3i357.svelte-1l3i357:before{display:none}.accordion-container.svelte-1l3i357 img.svelte-1l3i357{grid-template-columns:1fr;grid-template-rows:1fr}.left-container.svelte-1l3i357.svelte-1l3i357{width:100%;padding:3rem}.left-container.svelte-1l3i357.svelte-1l3i357{margin:4rem auto;text-align:center}.left-container.svelte-1l3i357 h3{font-size:2rem;margin:1rem auto}.left-container.svelte-1l3i357 p{max-width:97.5%;margin:0 auto}.left-container.svelte-1l3i357 a{margin:1rem auto 0 auto}}@media only screen and (max-width: 991px){.accordion-container.svelte-1l3i357.svelte-1l3i357{grid-template-columns:1fr}.dynamic-duplex.svelte-1l3i357 .right-container.svelte-1l3i357{display:none}.accordion-item img{display:block}.accordion-container.svelte-1l3i357 .accordion-item img.svelte-1l3i357{display:block;position:relative !important;opacity:1;width:100%;max-width:100%;margin:0 auto;padding:1rem}.accordion-item-body{height:auto !important}}@media only screen and (max-width: 1250px){.left-container.svelte-1l3i357.svelte-1l3i357{padding:2rem 1rem}}@media only screen and (max-width: 1680px){.left-container.svelte-1l3i357.svelte-1l3i357{max-width:640px;margin:0 auto;padding:2rem}}`,
  map: null
};
const DynamicDuplex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let key = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="dynamic-duplex container svelte-1l3i357"><div class="accordion-container svelte-1l3i357"><div class="left-container svelte-1l3i357">${validate_component(Accordion, "Accordion").$$render(
      $$result,
      { key },
      {
        key: ($$value) => {
          key = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { key: 0 }, {}, {
            body: () => {
              return `<div slot="body" class="body"><p><!-- HTML_TAG_START -->${data.bodyText}<!-- HTML_TAG_END --></p></div>`;
            },
            header: () => {
              return `<div slot="header" class="header"><h2 class="svelte-1l3i357">${escape(data.headline)}</h2></div>`;
            },
            default: () => {
              return `<img src="${escape(data.image.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image.description, 0)} class="${"content " + escape(key === 0 ? "active" : "", true) + " svelte-1l3i357"}">`;
            }
          })}
        ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { key: 1 }, {}, {
            body: () => {
              return `<div slot="body" class="body"><p><!-- HTML_TAG_START -->${data.bodyText2}<!-- HTML_TAG_END --></p></div>`;
            },
            header: () => {
              return `<div slot="header" class="header"><h2 class="svelte-1l3i357">${escape(data.headline2)}</h2></div>`;
            },
            default: () => {
              return `<img src="${escape(data.image2.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image2.description, 0)} class="${escape(null_to_empty(key === 1 ? "active" : ""), true) + " svelte-1l3i357"}">`;
            }
          })}
        ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { key: 2 }, {}, {
            body: () => {
              return `<div slot="body" class="body"><p><!-- HTML_TAG_START -->${data.bodyText3}<!-- HTML_TAG_END --></p></div>`;
            },
            header: () => {
              return `<div slot="header" class="header"><h2 class="svelte-1l3i357">${escape(data.headline3)}</h2></div>`;
            },
            default: () => {
              return `<img src="${escape(data.image3.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image3.description, 0)} class="${escape(null_to_empty(key === 2 ? "active" : ""), true) + " svelte-1l3i357"}">`;
            }
          })}`;
        }
      }
    )}</div>
    <div class="right-container svelte-1l3i357"><img src="${escape(data.image.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image.description, 0)} class="${escape(null_to_empty(key === 0 ? "active" : ""), true) + " svelte-1l3i357"}">
      <img src="${escape(data.image2.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image2.description, 0)} class="${escape(null_to_empty(key === 1 ? "active" : ""), true) + " svelte-1l3i357"}">
      <img src="${escape(data.image3.url, true) + "?fm=webp&q=80"}"${add_attribute("alt", data.image3.description, 0)} class="${escape(null_to_empty(key === 2 ? "active" : ""), true) + " svelte-1l3i357"}"></div></div>
  <div class="cta svelte-1l3i357">${validate_component(ButtonLink, "ButtonLink").$$render(
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
    )}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  DynamicDuplex as D
};
