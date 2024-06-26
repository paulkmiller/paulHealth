import { c as create_ssr_component, f as each, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { H as Hero } from "../../../chunks/Hero.js";
import { I as InfoBlock, L as LogoRack, F as Faq } from "../../../chunks/Faq.js";
import { D as Duplex } from "../../../chunks/Duplex.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ol{font-weight:bold;font-family:'PolySans Median'\n  }.infoBlock-wrapper a{color:#adebef}.infoBlock-wrapper a:hover{color:#DA2F5C}.infoBlock-wrapper .copy-container .item{max-width:60rem}.infoBlock-wrapper .copy-container .content.legal{text-align:left}.legal .subline{text-align:center}.legal .content1{width:fit-content;margin:0 auto}.legal .content1 p{margin:inherit}",
  map: null
};
function getComponentData(item) {
  switch (item.type) {
    case "ComponentHeroBanner":
      return { data: item.data.heroBanners[0] };
    case "ComponentDuplex":
      return { data: item.data.duplexes[0] };
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
    ComponentDuplex: Duplex,
    ComponentInfoBlock: InfoBlock,
    ComponentLogoRack: LogoRack,
    ComponentFaq: Faq
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${each(data.pageContent, (item, index) => {
    return `${validate_component(components[item.type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, getComponentData(item)), {}, {})}`;
  })}

`;
});
export {
  Page as default
};
