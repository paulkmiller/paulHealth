import { error } from '@sveltejs/kit'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentfulFetch from '$lib/fetchers/contentful-fetch'

const query = `
{
  contactPageCollection(limit: 1) {
    items {
      pageContentCollection {
        items {
          __typename
          ... on ComponentHeroBanner {
            page
            headline
            subline
            ctaText
            contentStyle
            bodyText {
              json
            }
            image {
              url
              description
            }
            targetPage {
              path
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
  }
}
`

// Define processing functions for each component type
const processHeroBanner = (item) => {
  return {
    ...item,
    bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
    targetPage: item.targetPage?.path ?? ""
  }
}

const processDuplex = (item) => {
  let targetPageSlug = item.targetPage?.slug ?? "";
  if (item.targetPage?.__typename === "ServicesPage") {
    targetPageSlug = "/services/" + targetPageSlug;
  }
  return {
    ...item,
    bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
    targetPage: targetPageSlug,
    containerSize: item.containerSize ?? ""
  };
}

const processSEOTags = (item) => {
  return { ...item };
}

const processingFunctions = {
  'ComponentHeroBanner': processHeroBanner,
  'ComponentDuplex': processDuplex
}

export async function load() {
  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(404, {
      message: `Mistakes were made: Error ${response.status} - ${response.statusText} 
      ${response.url}`,
    })
  }

  const { data } = await response.json()

  const { items: pageContentItems } = data.contactPageCollection.items[0].pageContentCollection

  const processedItems = pageContentItems.map(item => {
    const processingFunction = processingFunctions[item.__typename]
    return processingFunction ? processingFunction(item) : item
  })

  const heroBanners = processedItems.filter(item => item.__typename === 'ComponentHeroBanner')
  const duplexes = processedItems.filter(item => item.__typename === 'ComponentDuplex')
  const seoData = processSEOTags(data.contactPageCollection.items[0].seoMetadata);

  return {
    heroBanners,
    duplexes,
    seoData,
  }
}