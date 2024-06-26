import { c as create_ssr_component, f as each, v as validate_component, m as missing_component } from "../../../../chunks/index2.js";
import { D as Duplex } from "../../../../chunks/Duplex.js";
import { I as InfoBlock, L as LogoRack, F as Faq } from "../../../../chunks/Faq.js";
import { H as Hero } from "../../../../chunks/Hero.js";
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
  return `${each(data.pageContent, (item, index) => {
    return `${validate_component(components[item.type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, getComponentData(item)), {}, {})}`;
  })}

  `;
});
export {
  Page as default
};
