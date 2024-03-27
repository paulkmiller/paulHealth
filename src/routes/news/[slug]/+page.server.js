import { error } from '@sveltejs/kit'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentfulFetch from '$lib/fetchers/contentful-fetch'

export async function load({ params }) {
  // Parameterized query
  const query = `
  {
    newsPageCollection(where: {slug: "${params.slug}"}, limit: 1) {
      items {
        pageName
        slug
        articleImage {
          description
          url
        }
        pageContentCollection(limit: 3) {
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
              sys {
                publishedAt
              }
              publishDate
              author {
                name
                avatar {
                  url
                  description
                }
              }
              bodyText {
                json
                links {
                  assets {
                    block {
                      sys {
                        id
                      }
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentDuplex {
              tagline
              headline
              ctaText
              containerLayout
              containerSize
              bodyText {
                json
              }
              image{
                url
                description
              }
              targetPage{
                __typename
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
                ... on ServicesPage {
                  slug
                }
              }
            }
          }
        }
        seoMetadata {
          __typename
          title
          metaDescription
          ogTitle
          ogDescription	
          ogImage {
            url
          }
        }
      }
    },
     newsFeaturedDuplex: componentDuplexCollection {
      items {
        containerLayout
        containerSize
        newsFeatured
        headline
        ctaText
        image{
          url
        }
        targetPage{
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
  }`;

  const processNewsArticle = (item) => {
    const renderOptions = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const matchingAsset = item.bodyText.links.assets.block.find(
            (asset) => asset.sys.id === node.data.target.sys.id
          );
          return `<img src="${matchingAsset.url}" />`;
        },
      },
    };
    return {
      ...item,
      previewText: documentToHtmlString(item.previewText?.json ?? ''),
      bodyText: documentToHtmlString(item.bodyText?.json ?? '', renderOptions),
      targetPage: item.targetPage?.slug ?? '',
    };
  }
  
  const processDuplex = (item) => {
    return {
      ...item,
      bodyText: documentToHtmlString(item.bodyText?.json ?? ''),
      targetPage: item.targetPage?.slug ?? '',
      containerSize: item.containerSize ?? ''
    }
  }
  
  // Create map of processing functions
  const processingFunctions = {
    'NewsArticle': processNewsArticle,
    'ComponentDuplex': processDuplex,
  }

  const response = await contentfulFetch(query)
  const { data } = await response.json()

  const { items: articles } = data.newsPageCollection

  if (articles.length === 0) {
    throw error(404, {
      message: 'Article not found',
    })
  }

  const processSEOTags = (item) => {
    return { ...item };
  }

  // Process items using map of processing functions
  const processedItems = articles[0].pageContentCollection.items.map(item => {
    const processingFunction = processingFunctions[item.__typename]
    return processingFunction ? processingFunction(item) : item
  })

  // Filter items by type
  const newsArticles = processedItems.filter(item => item.__typename === 'NewsArticle')
  const duplexes = processedItems.filter(item => item.__typename === 'ComponentDuplex')

  const newsFeaturedDuplex = data.newsFeaturedDuplex.items
    .filter(item => item.newsFeatured)

  // Fallback to the first item if none are featured
  const defaultFeatured = newsFeaturedDuplex.length ? newsFeaturedDuplex[0] : data.newsFeaturedDuplex.items[0];
  const seoData = processSEOTags(data.newsPageCollection.items[0].seoMetadata);

  return {
    article: {
      ...articles[0],
      pageContentCollection: {
        items: newsArticles
      }
    },
    duplexes,
    newsFeaturedDuplex,
    defaultFeatured,
    seoData
  }
}
