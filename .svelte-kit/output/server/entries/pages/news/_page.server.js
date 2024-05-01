import { e as error } from "../../../chunks/index.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { c as contentfulFetch } from "../../../chunks/contentful-fetch.js";
async function load() {
  const query = `
    {
      newsPages: newsPageCollection(limit: 7) {
        items {
          slug
          pageContentCollection(limit: 7) {
            items {
              __typename
              ... on NewsArticle {
                headline
                image {
                  url
                }
                previewText {
                  json
                }
                publishDate
              }
            }
          }
        }
      },
      newsFeaturedDuplex: componentDuplexCollection {
        items {
          __typename
          containerLayout
          containerSize
          newsFeatured
          headline
          ctaText
          image {
            url
          }
          targetPage {
            ... on Page {
              slug
            }
            ... on HowItWorks {
              slug
            }
            ... on AboutPage {
              slug
            }
            ... on NewsPage {
              slug
            }
            ... on ContactPage {
              slug
            }
          }
          bodyText {
            json
          }
          sys {
            firstPublishedAt
          }
        }
      }
    }
  `;
  const processNewsArticle = (item) => {
    const previewTextJson = item.previewText.json;
    return {
      ...item,
      previewText: documentToHtmlString(previewTextJson ?? "")
    };
  };
  const processDuplex = (item) => {
    return {
      ...item,
      bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
      targetPage: "/news/" + item.targetPage?.slug
    };
  };
  const processingFunctions = {
    NewsArticle: processNewsArticle,
    ComponentDuplex: processDuplex
  };
  const processItem = (item) => {
    if (!item || !item.__typename)
      return item;
    const processingFunction = processingFunctions[item.__typename];
    return processingFunction ? processingFunction(item) : item;
  };
  const response = await contentfulFetch(query);
  if (!response.ok) {
    throw error(404, {
      message: `Mistakes were made: Error ${response.status} - ${response.statusText} 
            ${response.url}`
    });
  }
  const { data } = await response.json();
  const newsFeaturedDuplex = data.newsFeaturedDuplex.items.filter((item) => item.newsFeatured).map(processItem);
  const newsPages = data.newsPages.items.map((page) => {
    const items = page.pageContentCollection?.items || [];
    const processedPageContent = items.map(processItem);
    return {
      ...page,
      pageContentCollection: {
        items: processedPageContent
      }
    };
  });
  return {
    newsFeaturedDuplex,
    newsPages
  };
}
export {
  load
};
