import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, d as each } from "../../../chunks/index3.js";
import { C as Container, R as Row } from "../../../chunks/Row.js";
import { C as Col } from "../../../chunks/Col.js";
import { D as Duplex } from "../../../chunks/Duplex.js";
import { B as ButtonLink } from "../../../chunks/ButtonLink.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1foh2hx.svelte-1foh2hx{display:block;padding:0;margin:0 0 1rem 0;color:#D93561;text-transform:uppercase;text-decoration:none;line-height:1;border-bottom:1px solid #D93561;cursor:pointer;max-width:fit-content;font-family:'PolySans Neutral', Arial, sans-serif}a.svelte-1foh2hx.svelte-1foh2hx:hover{color:#29397a;border-bottom:2px solid #29397a\n  }p.svelte-1foh2hx.svelte-1foh2hx{margin:0 0 0.5rem;position:relative;color:rgba(0,0,0,.85);padding:0}.date.svelte-1foh2hx.svelte-1foh2hx{font-family:'PolySans Neutral', Arial, sans-serif;font-size:0.875rem;color:#636363;margin:1rem 0 0.75rem}h1.svelte-1foh2hx.svelte-1foh2hx{font-size:4.5rem;text-align:left;font-weight:500;color:#29397a;margin-top:-1rem;max-height:60px;line-height:68px}h2.svelte-1foh2hx.svelte-1foh2hx{font-weight:400;text-align:left;margin-bottom:0.5rem;color:#29397a;padding:0}h7.svelte-1foh2hx.svelte-1foh2hx{font-size:1.25rem;line-height:1.75rem;font-family:'PolySans Neutral', Arial, sans-serif;font-weight:500;padding:0}.latestHeader.svelte-1foh2hx.svelte-1foh2hx{padding-top:1rem}.divider.svelte-1foh2hx.svelte-1foh2hx{display:block;height:1px;background-color:gray;width:calc(100% - 2rem);margin:1rem 0}.divider-right.svelte-1foh2hx.svelte-1foh2hx{display:block;height:1px;background-color:gray;width:calc(100% - 2rem);margin:1rem}.divider-full.svelte-1foh2hx.svelte-1foh2hx{display:block;height:1px;background-color:gray;width:100%;margin:1rem auto 2rem}.divider-full-left.svelte-1foh2hx.svelte-1foh2hx{display:block;height:1px;background-color:gray;width:100%;margin:1rem auto 2rem -0.75rem}img.svelte-1foh2hx.svelte-1foh2hx{aspect-ratio:3/2;object-fit:cover}.show.svelte-1foh2hx.svelte-1foh2hx{display:flex}.custom.container{max-width:1440px}.latest,.more-news{padding:0 1.5rem}.more-news{margin-bottom:6rem}@media(max-width: 768px){.divider.svelte-1foh2hx.svelte-1foh2hx{margin-left:0.8rem;width:calc(100% - 1.6rem)}.divider-full.svelte-1foh2hx.svelte-1foh2hx{margin:1rem 0 1rem}img.svelte-1foh2hx.svelte-1foh2hx{width:100%;max-height:340px;margin:0 auto}.more-news{margin-bottom:0rem}.latestHeader.svelte-1foh2hx.svelte-1foh2hx{padding-top:2rem}.latest .row{display:block;padding:0;margin:0}.main-content.svelte-1foh2hx h1.svelte-1foh2hx{max-height:40px}}@media(max-width: 905px){h1.svelte-1foh2hx.svelte-1foh2hx{max-height:fit-content}}@media(max-width: 991px){h1.svelte-1foh2hx.svelte-1foh2hx{font-size:3rem}}",
  map: null
};
function formatDate(dateString) {
  let date = new Date(dateString);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("en-US", options);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let bottomNewsItems = data.newsPages.slice(3).map((item) => {
    const { headline, image, previewText, publishDate } = item.pageContentCollection.items[0];
    return {
      headline,
      image,
      previewText,
      publishDate,
      slug: item.slug
    };
  });
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
  return `${$$result.head += `<!-- HEAD_svelte-pmhhuv_START -->${$$result.title = `<title>Paul Health: News</title>`, ""}<meta name="description" content="Find out what's on our radar here at Paul Health."><meta property="og:title" content="Paul Health: News"><meta property="og:description" content="Find out what's on our radar here- at Paul Health."><meta property="og:image" content="/paul_logo.svg"><meta property="og:type" content="website"><!-- HEAD_svelte-pmhhuv_END -->`, ""}

${validate_component(Container, "Container").$$render($$result, { class: "custom" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { style: "margin-top: 3rem;" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { sm: 12, md: 6, lg: 8, class: "latest" }, {}, {
            default: () => {
              return `<div class="main-content svelte-1foh2hx"><h1 class="svelte-1foh2hx">Paul Health News</h1>
        <span class="divider-full svelte-1foh2hx"></span>
        <img${add_attribute("src", newsPages[0].image.url, 0)}${add_attribute("alt", newsPages[0].headline, 0)} class="svelte-1foh2hx">
        <p class="date svelte-1foh2hx">${escape(data.newsPages[0].pageContentCollection.items[0].publishDate)}</p>
        <h7 class="svelte-1foh2hx">${escape(newsPages[0].headline)}</h7>
        <p class=" svelte-1foh2hx"><!-- HTML_TAG_START -->${newsPages[0].previewText}<!-- HTML_TAG_END --></p>
        <a href="${"/news/" + escape(newsPages[0].slug, true)}" class="svelte-1foh2hx">READ MORE</a></div>`;
            }
          })}
    ${validate_component(Col, "Col").$$render($$result, { sm: 12, md: 6, lg: 4, class: "latest" }, {}, {
            default: () => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `<h2 class="latestHeader svelte-1foh2hx">Latest Stories</h2>
        <span class="divider svelte-1foh2hx" style="margin-top:0;"></span>
        <p class="date svelte-1foh2hx">${escape(data.newsPages[1].pageContentCollection.items[0].publishDate)}</p>
        <h7 class="svelte-1foh2hx">${escape(newsPages[1].headline)}</h7>
        <p class=" svelte-1foh2hx"><!-- HTML_TAG_START -->${newsPages[1].previewText}<!-- HTML_TAG_END --></p>
        <a href="${"/news/" + escape(newsPages[1].slug, true)}" class="svelte-1foh2hx">READ MORE</a>`;
                }
              })}
      <span class="divider-full-left svelte-1foh2hx" style="margin-left: -0.75rem"></span>
      ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="date svelte-1foh2hx">${escape(data.newsPages[2].pageContentCollection.items[0].publishDate)}</p>
        <h7 class="svelte-1foh2hx">${escape(newsPages[2].headline)}</h7>
        <p class=" svelte-1foh2hx"><!-- HTML_TAG_START -->${newsPages[2].previewText}<!-- HTML_TAG_END --></p>
        <a href="${"/news/" + escape(newsPages[2].slug, true)}" class="svelte-1foh2hx">READ MORE</a>`;
                }
              })}`;
            }
          })}`;
        }
      })}

  <h2 style="padding: 0 .75rem" class="svelte-1foh2hx">More News</h2>
  <span class="divider-right svelte-1foh2hx"></span>
  ${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
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
                    return `${each(bottomNewsItems, ({ headline, image, previewText, publishDate, slug }) => {
                      return `<div class="show col-12 col-md-6 col-lg-3 mb-2 svelte-1foh2hx"><div class="content"><img${add_attribute("src", image.url, 0)}${add_attribute("alt", headline, 0)} style="width:100%" class="svelte-1foh2hx">
              <p class="date svelte-1foh2hx">${escape(formatDate(publishDate))}</p>
              <b><h7 class="svelte-1foh2hx">${escape(headline)}</h7></b>
              <p class="truncate-4 svelte-1foh2hx"><!-- HTML_TAG_START -->${previewText}<!-- HTML_TAG_END --></p>
              <a href="${"/news/" + escape(slug, true)}" class="svelte-1foh2hx">READ MORE</a></div>
          </div>`;
                    })}
        ${validate_component(ButtonLink, "ButtonLink").$$render(
                      $$result,
                      {
                        text: "Read More News",
                        path: "/news/all",
                        color: "#FFF",
                        background_color: "#29397a",
                        ariaText: "A button that links to the News All page, which displays all news articles on one page",
                        ariaLink: "/news/all"
                      },
                      {},
                      {}
                    )}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}

<section class="news-duplex-wrapper-wide">${validate_component(Duplex, "Duplex").$$render($$result, { data: data.newsFeaturedDuplex[0] }, {}, {})}
</section>`;
});
export {
  Page as default
};
