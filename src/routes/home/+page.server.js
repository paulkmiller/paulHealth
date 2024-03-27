import { error } from '@sveltejs/kit'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentfulFetch from '$lib/fetchers/contentful-fetch'

const query = `
{
  pageCollection(limit: 1) {
    items {
      pageContentCollection {
        items {
          __typename
          ... on ComponentCarousel {
						quote1 {
              json
            }
            quote2 {
              json
            }
            quote3 {
              json
            }
            quoteSource1 {
              name
              avatar {
                url
                description
              }
            }
            quoteSource2 {
              name
              avatar {
                url
                description
              }
            }
            quoteSource3 {
              name
              avatar {
                url
                description
              }
            }
            image1 {
              url
              description
            }
            image2 {
              url
              description
            }
            image3 {
              url
              description
            }
            configuration
            ctaText
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
              ... on ServicesPage {
                slug
              }
            }
          }
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
          ... on ComponentFaq {
            question0
            question1
            question2
            question3
            question4
            question5
            question6
            question7
            question8
            question9
            answer0 { json }
            answer1 { json }
            answer2 { json }
            answer3 { json }
            answer4 { json }
            answer5 { json }
            answer6 { json }
            answer7 { json }
            answer8 { json }
            answer9 { json }
          }
          ... on ComponentLogoRack {
            logoHeadline1
            logoHeadline2
            logoHeadline3
            logoHeadline4
            logoHeadline5
            logoHeadline6
            logoText1 { json }
            logoText2 { json }
            logoText3 { json }
            logoText4 { json }
            logoText5 { json }
            logoText6 { json }
            logoImage1 { url, description }
            logoImage2 { url, description }
            logoImage3 { url, description }
            logoImage4 { url, description }
            logoImage5 { url, description }
            logoImage6 { url, description }
            tagline
            header
            divider
            logoSize
            logosPerRow
            paddingOptions
            backgroundColor
          }
          ... on ComponentDynamicDuplex {
            headline
            bodyText {json}
            image{
              url
              description
            }
            headline2
            bodyText2 {json}
            image2{
              url
              description
            }
            headline3
            bodyText3 {json}
            image3{
              url
              description
            }
            ctaText
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
              ... on ServicesPage {
                slug
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
          ... on ComponentInfoBlock {
            tagline
            headline
            subline
            ctaText
            infoBlockConfig
            copyAlignment
            copyBackground
            paddingOptions
            divider
            block1Body {
              json
            }
            block2Body {
              json
            }
            block1Image {
              url
              description
            }
            block2Image {
              url
              description
            }
            ctaLink {
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
      seo{
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

const processSEOTags = (item) => {
  return { ...item };
}

const processCarousel = (item) => {
  let targetPageSlug = item.targetPage?.slug ?? "";
  if (item.targetPage?.__typename === "ServicesPage") {
    targetPageSlug = "/services/" + targetPageSlug;
  }
  return { 
    ...item,
    quote1: documentToHtmlString(item.quote1?.json ?? ""),
    quote2: documentToHtmlString(item.quote2?.json ?? ""),
    quote3: documentToHtmlString(item.quote3?.json ?? ""),
    targetPage: targetPageSlug,
  };
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

const processDynamicDuplex = (item) => {
  let targetPageSlug = item.targetPage?.slug ?? "";
  if (item.targetPage?.__typename === "ServicesPage") {
    targetPageSlug = "/services/" + targetPageSlug;
  }
  return {
    ...item,
    bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
    bodyText2: documentToHtmlString(item.bodyText2?.json ?? ""),
    bodyText3: documentToHtmlString(item.bodyText3?.json ?? ""),
    targetPage: targetPageSlug,
    containerSize: item.containerSize ?? ""
  };
}

const processInfoBlock = (item) => {
  return {
    ...item,
    content1: documentToHtmlString(item.block1Body?.json ?? ''),
    content2: documentToHtmlString(item.block2Body?.json ?? ''),
  };
}

const processLogoRack = (item) => {
  return {
    ...item,
    logoText1: documentToHtmlString(item.logoText1?.json ?? ''),
    logoText2: documentToHtmlString(item.logoText2?.json ?? ''),
    logoText3: documentToHtmlString(item.logoText3?.json ?? ''),
    logoText4: documentToHtmlString(item.logoText4?.json ?? ''),
    logoText5: documentToHtmlString(item.logoText5?.json ?? ''),
    logoText6: documentToHtmlString(item.logoText6?.json ?? ''),
  };
}

const processFaq = (item) => {
  return {...item};
}

// Create map of processing functions
const processingFunctions = {
  'ComponentHeroBanner': processHeroBanner,
  'ComponentDuplex': processDuplex,
  'ComponentDynamicDuplex': processDynamicDuplex,
  'ComponentInfoBlock': processInfoBlock,
  'ComponentLogoRack': processLogoRack,
  'ComponentFaq': processFaq,
  'ComponentCarousel': processCarousel
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
  const { items: pageContentItems } = data.pageCollection.items[0].pageContentCollection

  // Process page content items using map of processing functions
  const processedItems = pageContentItems.map(item => {
    if (item) {
      const processingFunction = processingFunctions[item.__typename]
      return processingFunction ? {...processingFunction(item), componentType: item.__typename} : item
    } else {
      return {}; // return an empty object or any other default value
    }
  })
  
  

  // Create an array of objects where each object contains the type of the component and the corresponding data
  const pageContent = processedItems.map(item => {
    return {
      type: item.componentType,
      data: {
        heroBanners: item.componentType === 'ComponentHeroBanner' ? [item] : [],
        dynamicDuplexes: item.componentType === 'ComponentDynamicDuplex' ? [item] : [],
        duplexes: item.componentType === 'ComponentDuplex' ? [item] : [],
        infoBlocks: item.componentType === 'ComponentInfoBlock' && item.infoBlockConfig ? [item] : [],
        logoRacks: item.componentType === 'ComponentLogoRack' ? [item] : [],
        carousels: item.componentType === 'ComponentCarousel' ? [item] : [],
        faqs: item.componentType === 'ComponentFaq' ? [item] : [],
      }
    }
  })

  const seoData = processSEOTags(data.pageCollection.items[0].seoMetadata);

  return {
    pageContent,
    seoData
  }
}
