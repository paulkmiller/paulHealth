import { c as create_ssr_component, i as escape, j as null_to_empty, h as add_attribute, f as each, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { H as Hero } from "../../../chunks/Hero.js";
import { I as InfoBlock, L as LogoRack, F as Faq } from "../../../chunks/Faq.js";
import { D as DynamicDuplex } from "../../../chunks/DynamicDuplex.js";
import { D as Duplex } from "../../../chunks/Duplex.js";
const BioCardsItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "figure.svelte-1kkd1wl.svelte-1kkd1wl{padding:2rem 1.5rem;border-radius:0.6rem;text-align:center;border-radius:0.6rem;max-width:22rem;height:100%}figure.svelte-1kkd1wl .avatar.svelte-1kkd1wl{height:5.825rem;width:5.825rem;margin:0 auto;border-radius:100%;background-position:center;background-repeat:no-repeat;background-size:contain;position:relative;z-index:2}figure.svelte-1kkd1wl .circle.svelte-1kkd1wl{height:2.5rem;width:5rem;border-radius:10rem 10rem 0 0;z-index:1}figcaption.svelte-1kkd1wl.svelte-1kkd1wl{margin-top:-2.5rem}h4.svelte-1kkd1wl.svelte-1kkd1wl{margin:1rem auto}h6.svelte-1kkd1wl.svelte-1kkd1wl{font-family:'PolySans Median';font-size:.95rem;color:#adebef;margin:-0.8rem auto 0 auto}figure.employee.svelte-1kkd1wl.svelte-1kkd1wl{max-width:20rem}.employee.svelte-1kkd1wl h6.svelte-1kkd1wl{color:#D93561}.bio-text.svelte-1kkd1wl.svelte-1kkd1wl{margin:0.5rem auto 0 auto}.bio-text.svelte-1kkd1wl p{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:0.95rem;line-height:1.125rem}.bio-text.svelte-1kkd1wl b{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#FF80A8}.bio-text.svelte-1kkd1wl p:first-of-type{min-height:105px}.bio-cards-section.bioCard-0 .bio-cards-wrapper.leadership{margin-bottom:4rem}.bio-cards-wrapper.leadership figure:nth-child(1){margin-left:auto;margin-right:0}.bio-cards-wrapper.leadership figure:nth-child(2){margin-left:0;margin-right:auto}@media screen and (max-width: 720px){figure.svelte-1kkd1wl.svelte-1kkd1wl{max-width:27rem}}@media screen and (max-width: 768px){.bio-cards-wrapper.leadership figure.leadership{margin:auto}.bio-text.svelte-1kkd1wl p{font-size:0.9rem;margin:0 auto}}",
  map: null
};
const BioCardsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  let role;
  let background_color;
  let color;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  $$result.css.add(css$1);
  {
    {
      role = entry.cardStyle == true ? "leadership" : "employee";
      background_color = role === "leadership" ? "#29397a" : "#fff";
      color = role === "leadership" ? "#fff" : "#000";
    }
  }
  return `<figure class="${escape(null_to_empty(role), true) + " svelte-1kkd1wl"}" style="${"background-color: " + escape(background_color, true) + "; color: " + escape(color, true)}"><div class="avatar-wrapper"><div class="avatar svelte-1kkd1wl" style="${"background-image: url(" + escape(entry.avatar?.url, true) + "?fm=webp&q=80)"}"></div>
    <div class="circle svelte-1kkd1wl"></div></div>
  <figcaption class="svelte-1kkd1wl"><h4 class="svelte-1kkd1wl"><strong>${escape(entry.name || "Paulonaut")}</strong></h4>
    ${entry.jobTitle ? `<h6 class="svelte-1kkd1wl">${escape(entry.jobTitle)}</h6>` : ``}
    <p class="bio-text svelte-1kkd1wl"><!-- HTML_TAG_START -->${entry.bio}<!-- HTML_TAG_END --></p></figcaption>
</figure>`;
});
const BioCards_svelte_svelte_type_style_lang = "";
const css = {
  code: `.divider.svelte-1m5gwyp.svelte-1m5gwyp::before{content:'';display:block;height:1px;background-color:#e8e8e8;width:80%;margin:6rem auto}.bio-cards-section.svelte-1m5gwyp .header-image.svelte-1m5gwyp{height:6rem;width:6rem;margin:1.5rem auto;background-position:center;background-repeat:no-repeat;background-size:contain}.header-container.svelte-1m5gwyp.svelte-1m5gwyp{text-align:center;max-width:30rem;margin:6rem auto 4rem}.header-container.svelte-1m5gwyp h2.svelte-1m5gwyp{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-size:4.5rem;font-weight:400}.header-container.svelte-1m5gwyp .subline.svelte-1m5gwyp{font-size:2.25rem}.leadership.svelte-1m5gwyp.svelte-1m5gwyp{width:clamp(80%,100%,800px);margin:0 auto}.leadership.svelte-1m5gwyp.svelte-1m5gwyp,.employees.svelte-1m5gwyp.svelte-1m5gwyp{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;grid-gap:2rem}.employees.svelte-1m5gwyp.svelte-1m5gwyp{grid-gap:0;margin:3rem auto 6rem;max-width:1300px}.leadership.svelte-1m5gwyp .leadership{display:flex;height:auto;flex-direction:column;align-items:center;justify-content:flex-start}.headlineCopy.svelte-1m5gwyp.svelte-1m5gwyp{font-size:1.125rem}.bio-cards-section[style*="--columns: 3;"] .bio-cards-wrapper.leadership figure:nth-child(1){margin:auto}.bio-cards-section[style*="--columns: 3;"] .bio-cards-wrapper.leadership figure:nth-child(2){margin:auto}.bio-cards-section.more-than-three .bio-cards-wrapper.leadership figure:nth-child(1),.bio-cards-section.more-than-three .bio-cards-wrapper.leadership figure:nth-child(2){margin:auto}@media(max-width: 768px){.divider.svelte-1m5gwyp.svelte-1m5gwyp::after,.divider.svelte-1m5gwyp.svelte-1m5gwyp::before{margin:2rem auto}}@media(max-width: 650px){.divider.svelte-1m5gwyp.svelte-1m5gwyp::after{margin:1rem auto}}`,
  map: null
};
const BioCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { index = 0 } = $$props;
  let leadership = [];
  let employees = [];
  let numOfBlocks = 0;
  let headerImage = data.headerImage?.url;
  let headerImageAlt = data.headerImage?.description;
  let headline = data.headline || "";
  let headlineCopy = data.headlineCopy || "";
  let subline = data.subline || "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css);
  {
    {
      let bio_cards_data = data.bioCardsDataCollection.items;
      leadership = bio_cards_data.filter((person) => person.cardStyle == true);
      employees = bio_cards_data.filter((person) => person.cardStyle == false);
      numOfBlocks = leadership.length;
    }
  }
  return `<div class="${"bio-cards-section bioCard-" + escape(index, true) + " divider " + escape(numOfBlocks >= 3 ? "more-than-three" : "", true) + " svelte-1m5gwyp"}" style="${"--columns: " + escape(numOfBlocks, true)}">${slots.default ? slots.default({}) : ``}

  <div class="header-container svelte-1m5gwyp">${headerImage ? `<img class="header-image svelte-1m5gwyp" src="${escape(headerImage, true) + "?fm=webp&q=80"}"${add_attribute("alt", headerImageAlt, 0)}>` : ``}
    ${headline ? `<h2 class="headline svelte-1m5gwyp">${escape(headline)}</h2>` : ``}
    ${headlineCopy ? `<p class="headlineCopy svelte-1m5gwyp">${escape(headlineCopy)}</p>` : ``}
    ${subline ? `<h5 class="subline svelte-1m5gwyp">${escape(subline)}</h5>` : ``}</div>

  ${leadership ? `<div class="leadership svelte-1m5gwyp">${each(leadership, (person, index2) => {
    return `${validate_component(BioCardsItem, "BioCardsItem").$$render($$result, { entry: person }, {}, {})}`;
  })}</div>` : ``}

  <div class="employees svelte-1m5gwyp">${each(employees, (person, index2) => {
    return `<span data-aos="fade-up"${add_attribute("data-aos-delay", index2 * 200, 0)}>${validate_component(BioCardsItem, "BioCardsItem").$$render($$result, { entry: person }, {}, {})}
    </span>`;
  })}</div>

</div>`;
});
function getComponentData(item) {
  switch (item.type) {
    case "ComponentHeroBanner":
      return { data: item.data.heroBanners[0] };
    case "BioCards":
      return { data: item.data.bioCards[0] };
    case "ComponentDuplex":
      return { data: item.data.duplexes[0] };
    case "ComponentDynamicDuplex":
      return { data: item.data.dynamicDuplexes[0] };
    case "ComponentCarousel":
      return { data: item.data.quotes[0] };
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
    BioCards,
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

`;
});
export {
  Page as default
};
