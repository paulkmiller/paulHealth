import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { D as Duplex } from "../../../../chunks/Duplex.js";
import { B as ButtonLink } from "../../../../chunks/ButtonLink.js";
import { S as SEOMetaData } from "../../../../chunks/SEOMetaData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-3xt869.svelte-3xt869{display:grid;grid-template-columns:1fr 1fr}figcaption.svelte-3xt869.svelte-3xt869{font-size:.875rem;font-family:Franklin, arial, sans-serif;line-height:1.25;padding:0.75rem 2rem;color:#666666;text-align:center}header.svelte-3xt869 .author-container.svelte-3xt869{display:flex;justify-content:center;align-items:center;flex-direction:column;max-height:100%}header.svelte-3xt869 .author-wrapper.svelte-3xt869{display:flex;justify-content:center;align-items:center;flex-direction:column}header.svelte-3xt869 div h1.svelte-3xt869{font-family:'PolySans Slim', Arial, sans-serif;width:clamp(80%, 100%, 800px);margin:1rem auto;padding:0 2rem;line-height:1.1em;font-size:4rem}.author.svelte-3xt869 img.svelte-3xt869{width:56px;height:56px;border-radius:50%;object-fit:cover;margin:0 auto}.article-body.svelte-3xt869.svelte-3xt869{width:clamp(60%, 100%, 940px);margin:2rem auto;padding:2rem}.timestamp.svelte-3xt869.svelte-3xt869{text-align:center;grid-template-columns:1fr 1fr}.timestamp.svelte-3xt869 span.svelte-3xt869{font-size:.875rem;font-family:Franklin,arial,sans-serif;line-height:1.25;padding:0;color:#666666}.article-body p{font-size:1.25rem;line-height:1.6em}img.svelte-3xt869.svelte-3xt869{height:100%;width:100%;object-fit:cover;aspect-ratio:3/2}.article-body img{max-height:600px;margin:0 auto}@media(max-width: 768px){header.svelte-3xt869.svelte-3xt869{grid-template-columns:1fr;grid-template-rows:1fr}figure.svelte-3xt869.svelte-3xt869{margin-bottom:4rem}figcaption.svelte-3xt869.svelte-3xt869{height:auto}.article-body.svelte-3xt869.svelte-3xt869{margin:1rem auto}}@media(max-width: 1024px){header.svelte-3xt869 div h1.svelte-3xt869{font-size:3rem}}",
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
  let renderData;
  let { data } = $$props;
  let image = data.article.articleImage.url;
  let caption = data.article.articleImage.description;
  let headline = data.article.pageContentCollection.items[0].headline;
  let author = data.article.pageContentCollection.items[0].author.name;
  let avatar = data.article.pageContentCollection.items[0].author.avatar.url;
  let lastEdited = data.article.pageContentCollection.items[0].sys.publishedAt;
  let published = data.article.pageContentCollection.items[0].publishDate;
  let article = data.article.pageContentCollection.items[0].bodyText;
  let newsFeatured = data.newsFeaturedDuplex && data.newsFeaturedDuplex.length > 0 ? data.newsFeaturedDuplex[0] : data.defaultFeatured[0];
  data.defaultFeatured[0];
  let duplexData = data.duplexes[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  renderData = newsFeatured && newsFeatured.pageContentCollection && newsFeatured.pageContentCollection.items[0].headline === headline ? newsFeatured : duplexData;
  return `${data.seoData.title ? `${validate_component(SEOMetaData, "SEOMetaData").$$render($$result, { data }, {}, {})}` : ``}

<article><header class="svelte-3xt869"><figure class="svelte-3xt869"><img${add_attribute("src", image, 0)} alt="" class="svelte-3xt869">
      <figcaption class="svelte-3xt869">${escape(caption)}</figcaption></figure>
    <div class="author-container svelte-3xt869"><h1 class="svelte-3xt869">${escape(headline)}</h1>
      <div class="author-wrapper svelte-3xt869"><div class="author svelte-3xt869"><img${add_attribute("src", avatar, 0)} alt="" class="svelte-3xt869">
          <p>by ${escape(author)}</p></div>
        <div class="timestamp svelte-3xt869"><span class="svelte-3xt869">Updated <span class="updated-date svelte-3xt869">${escape(formatDate(lastEdited))}</span> <span style="color: #d4d4d4" class="svelte-3xt869">|</span> Published</span>
          <span class="svelte-3xt869">${escape(published)}</span></div></div></div></header>
  <div class="article-body svelte-3xt869"><!-- HTML_TAG_START -->${article}<!-- HTML_TAG_END -->
    ${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: "More News",
      path: "/news",
      color: "#FFF",
      background_color: "#29397a",
      ariaText: "more news",
      ariaLink: "news"
    },
    {},
    {}
  )}</div></article>

<section class="news-duplex-wrapper-wide news-duplex-wrapper">${validate_component(Duplex, "Duplex").$$render($$result, { data: renderData || newsFeatured }, {}, {})}
</section>`;
});
export {
  Page as default
};
