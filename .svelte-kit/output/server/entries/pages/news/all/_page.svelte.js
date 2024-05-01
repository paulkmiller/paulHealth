import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { C as Container, R as Row } from "../../../../chunks/Row.js";
import { C as Col } from "../../../../chunks/Col.js";
import { B as ButtonLink } from "../../../../chunks/ButtonLink.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1kfxjeu{display:block;margin:0 0 1rem 0;color:#D93561;text-transform:uppercase;cursor:pointer}a.svelte-1kfxjeu:hover{color:#29397a;text-decoration:underline}p.svelte-1kfxjeu{margin:0 0 0.5rem;position:relative;color:rgba(0,0,0,.85)\n  }.date.svelte-1kfxjeu{font-family:'PolySans Neutral', Arial, sans-serif;font-size:0.875rem;color:#636363;margin:1rem 0 0.75rem}h7.svelte-1kfxjeu{font-size:1.25rem;line-height:1.75rem;font-family:'PolySans Neutral', Arial, sans-serif;font-weight:500}img.svelte-1kfxjeu{aspect-ratio:3/2;object-fit:cover}.show.svelte-1kfxjeu{display:flex}.custom.container{max-width:1440px}.latest,.more-news{padding:0 1.5rem}.more-news{margin-bottom:6rem}@media(max-width: 768px){img.svelte-1kfxjeu{width:100%;max-height:340px;margin:0 auto}.more-news{margin-bottom:0rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.newsPages.sort((a, b) => new Date(b.pageContentCollection.items[0].publishDate) - new Date(a.pageContentCollection.items[0].publishDate));
  let newsPages = data.newsPages.map((page) => {
    const { headline, image, previewText, publishDate } = page.pageContentCollection.items[0];
    return {
      headline,
      image,
      previewText,
      publishDate,
      slug: page.slug
    };
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-py6lxj_START -->${$$result.title = `<title>Paul Health: News</title>`, ""}<meta name="description" content="Find out what's on our radar here at Paul Health."><meta property="og:title" content="Paul Health: News"><meta property="og:description" content="Find out what's on our radar here- at Paul Health."><meta property="og:image" content="/pluto_logo.svg"><meta property="og:type" content="website"><!-- HEAD_svelte-py6lxj_END -->`, ""}

${validate_component(Container, "Container").$$render($$result, { class: "custom" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render(
            $$result,
            {
              sm: 12,
              md: 12,
              lg: 12,
              class: "more-news"
            },
            {},
            {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${each(newsPages, ({ headline, image, previewText, publishDate, slug }) => {
                      return `<div class="show col-12 col-md-6 col-lg-3 mb-2 svelte-1kfxjeu"><div class="content"><img${add_attribute("src", image.url, 0)}${add_attribute("alt", headline, 0)} style="width:100%" class="svelte-1kfxjeu">
              <p class="date svelte-1kfxjeu">${escape(publishDate)}</p>
              <b><h7 class="svelte-1kfxjeu">${escape(headline)}</h7></b>
              <p class="truncate-4 svelte-1kfxjeu"><!-- HTML_TAG_START -->${previewText}<!-- HTML_TAG_END --></p>
              <a href="${"/news/" + escape(slug, true)}" class="svelte-1kfxjeu">READ MORE</a></div>
          </div>`;
                    })}`;
                  }
                })}
      ${validate_component(ButtonLink, "ButtonLink").$$render(
                  $$result,
                  {
                    text: "Back",
                    path: "/news",
                    color: "#FFF",
                    background_color: "#29397a",
                    ariaText: "A button that returns the user to the News page",
                    ariaLink: "/news"
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
