import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, l as compute_slots, d as each, m as missing_component } from "../../../chunks/index3.js";
import { H as Hero } from "../../../chunks/Hero.js";
import { I as InfoBlock, L as LogoRack, F as Faq } from "../../../chunks/Faq.js";
import { D as Duplex } from "../../../chunks/Duplex.js";
import { I as IconBase } from "../../../chunks/IconBase.js";
const Button_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-qc0w97{all:unset}button.svelte-qc0w97,.play-button.svelte-qc0w97{display:grid;place-items:center;height:80px;width:80px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isCustomPlayButton } = $$props;
  if ($$props.isCustomPlayButton === void 0 && $$bindings.isCustomPlayButton && isCustomPlayButton !== void 0)
    $$bindings.isCustomPlayButton(isCustomPlayButton);
  $$result.css.add(css$3);
  return `${isCustomPlayButton ? `<div class="play-button svelte-qc0w97">${slots.default ? slots.default({}) : ``}</div>` : `<button class="svelte-qc0w97"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--mdi" viewBox="0 0 24 24"><path fill="#ff4e45" d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"></path></svg></button>`}`;
});
const Iframe_svelte_svelte_type_style_lang = "";
const Image_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-hw9fhp{height:auto;aspect-ratio:var(--aspect-ratio);width:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { title = "" } = $$props;
  let { altThumb = "" } = $$props;
  let { play = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  $$result.css.add(css$2);
  return `<img src="${"https://i.ytimg.com/vi/" + escape(id, true) + "/" + escape(altThumb ? "hqdefault" : "maxresdefault", true) + ".jpg"}"${add_attribute("title", title, 0)} alt="${"Youtube video: " + escape(title, true)}" referrerpolicy="no-referrer" class="svelte-hw9fhp">`;
});
const Youtube_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.you__tube.svelte-w0t24e.svelte-w0t24e{position:relative;aspect-ratio:1.76991;overflow:hidden}.v__title.svelte-w0t24e.svelte-w0t24e{position:absolute;top:0;width:100%;background:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);pointer-events:none}.v__title.svelte-w0t24e h3.svelte-w0t24e{font-family:var(\n      --title-font-family,\n      "Segoe UI",\n      Geneva,\n      Verdana,\n      sans-serif\n    );color:var(--title-color, #ffffff);padding:0 2ch;font-weight:400;text-shadow:0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2))}.b__overlay.svelte-w0t24e.svelte-w0t24e{position:absolute;top:0;left:0;width:100%;aspect-ratio:var(--aspect-ratio);cursor:pointer;transition:var(--overlay-transition, all 250ms ease-in-out)}.you__tube.svelte-w0t24e:hover .b__overlay.svelte-w0t24e{background:var(--overlay-bg-color, #00000030)}',
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = null } = $$props;
  let { altThumb = false } = $$props;
  let { animations = true } = $$props;
  let title = "";
  let play = false;
  const isCustomPlayButton = $$slots.default;
  const isCustomThumbnail = $$slots.thumbnail;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  if ($$props.animations === void 0 && $$bindings.animations && animations !== void 0)
    $$bindings.animations(animations);
  $$result.css.add(css$1);
  return `<div class="you__tube svelte-w0t24e" style="${"--aspect-ratio:" + escape("16/9", true)}"${add_attribute("title", title, 0)}>${`${isCustomThumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${validate_component(Image, "Image").$$render($$result, { id, title, altThumb, play }, {}, {})}`}
    <div class="b__overlay svelte-w0t24e"></div>
    <div class="v__title svelte-w0t24e"><h3 class="svelte-w0t24e">${escape(title)}</h3></div>`}
  ${`${validate_component(Button, "Button").$$render($$result, { isCustomPlayButton }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}
</div>`;
});
const FaPlayCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>`;
    }
  })}`;
});
const YoutubeWrapper_svelte_svelte_type_style_lang = "";
const css = {
  code: ".youtube-wrapper.svelte-1t4cfuu.svelte-1t4cfuu{align-items:center;display:flex;flex-direction:row;position:relative;z-index:auto;padding:20px}.background.svelte-1t4cfuu.svelte-1t4cfuu{position:absolute;top:0;right:0;bottom:0;left:0;background-position:center;background-size:cover}.container.svelte-1t4cfuu.svelte-1t4cfuu{display:flex;flex:100%;align-items:flex-start;flex-direction:column;justify-content:center;padding:0;position:relative;z-index:200;height:100%}p.svelte-1t4cfuu.svelte-1t4cfuu{font-family:'PolySans Median', Arial, sans-serif;font-size:1.25rem;color:#D93561;margin:1rem 0}h3.svelte-1t4cfuu.svelte-1t4cfuu{font-family:'PolySans Neutral', Arial, sans-serif;font-size:2.5rem;font-weight:500}.content-container.svelte-1t4cfuu.svelte-1t4cfuu{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-right:auto;margin-left:0;text-align:left;justify-content:flex-start}.copy.svelte-1t4cfuu.svelte-1t4cfuu{width:100%}.copy.svelte-1t4cfuu>div.svelte-1t4cfuu{max-width:23rem;margin:0 auto}.youtube.svelte-1t4cfuu.svelte-1t4cfuu{position:relative;height:100%;width:100%}.youtube.svelte-1t4cfuu iframe{position:absolute;top:0;left:0;width:100%;height:100%}.youtube-wrapper.svelte-1t4cfuu.svelte-1t4cfuu{width:100%;flex:0 0 50%}.row.svelte-1t4cfuu.svelte-1t4cfuu{align-items:center;margin-left:0;margin-right:0;width:100%;padding:80px 0}.b__overlay, .v__title, .you__tube img{opacity:0}.play-button{height:7em;width:7em}.play_overlay.svelte-1t4cfuu.svelte-1t4cfuu{display:block;position:absolute;background-repeat:no-repeat;background-size:contain;background-position:center;height:100%;width:100%;top:0;right:0;bottom:0;left:0;margin:auto}.play_icon.svelte-1t4cfuu.svelte-1t4cfuu{background-color:transparent;border:none;box-shadow:none;color:rgba(255,255,255,0.8);transition:all .1s ease-in-out;cursor:pointer}.youtube.svelte-1t4cfuu:hover .play_icon.svelte-1t4cfuu{color:#fff}@media(max-width:768px){.content-container.svelte-1t4cfuu.svelte-1t4cfuu{display:block;text-align:center}p.svelte-1t4cfuu.svelte-1t4cfuu{opacity:0}}",
  map: null
};
let playOverlay = "/playIconBackground.png";
const YoutubeWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="youtube-wrapper .sb-section svelte-1t4cfuu"><div alt="" style="${"background-image: url(" + escape(data.youTubeImage.url, true) + "?fm=webp&q=80);"}" class="background svelte-1t4cfuu"></div>
  <div class="container svelte-1t4cfuu"><div class="row svelte-1t4cfuu"><div class="content-container svelte-1t4cfuu"><div class="copy svelte-1t4cfuu"><div class="svelte-1t4cfuu"><p class="svelte-1t4cfuu">${escape(data.contentTitle)}</p>
            <h3 class="svelte-1t4cfuu">${escape(data.contentSubtitle)}</h3></div></div>
        <div class="youtube svelte-1t4cfuu"><span class="play_overlay svelte-1t4cfuu" style="${"background-image: url(" + escape(playOverlay, true) + ");"}"></span>

          ${validate_component(Youtube, "Youtube").$$render($$result, { id: data.youTubeId }, {}, {
    default: () => {
      return `<button class="play_icon svelte-1t4cfuu" aria-label="A button play a YouTube video.">${validate_component(FaPlayCircle, "FaPlayCircle").$$render($$result, {}, {}, {})}</button>`;
    }
  })}</div></div></div></div>
</section>`;
});
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
    case "ComponentYouTube":
      return { data: item.data.youtube[0] };
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
    ComponentYouTube: YoutubeWrapper,
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
