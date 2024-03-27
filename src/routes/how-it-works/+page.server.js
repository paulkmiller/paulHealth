import { error } from '@sveltejs/kit'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentfulFetch from '$lib/fetchers/contentful-fetch'

const query = `
{
  howItWorksCollection(limit: 1) {
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
            headline
            subline
            ctaText
            infoBlockConfig
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
          ...on ComponentYouTube {
            youTubeId
            youTubeImage {
              url
              description
            }
            contentTitle
            contentSubtitle
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
  };
}

const processInfoBlock = (item) => {
  return {
    ...item,
    content1: documentToHtmlString(item.block1Body?.json ?? ''),
    content2: documentToHtmlString(item.block2Body?.json ?? ''),
  };
}

const processSEOTags = (item) => {
  return { ...item };
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

const processYouTube = (item) => {
  return {...item};
}

const processFaq = (item) => {
  return {...item};
}

// Create map of processing functions
const processingFunctions = {
  'ComponentHeroBanner': processHeroBanner,
  'ComponentDuplex': processDuplex,
  'ComponentInfoBlock': processInfoBlock,
  'ComponentLogoRack': processLogoRack,
  'ComponentFaq': processFaq,
  'ComponentYouTube': processYouTube
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

  const { items: pageContentItems } = data.howItWorksCollection.items[0].pageContentCollection

  // Process page content items using map of processing functions
  const processedItems = pageContentItems.map(item => {
    const processingFunction = processingFunctions[item.__typename]
    return processingFunction ? {...processingFunction(item), componentType: item.__typename} : item
  })

  // Create an array of objects where each object contains the type of the component and the corresponding data
  const pageContent = processedItems.map(item => {
    return {
      type: item.componentType,
      data: {
        heroBanners: item.componentType === 'ComponentHeroBanner' ? [item] : [],
        duplexes: item.componentType === 'ComponentDuplex' ? [item] : [],
        infoBlocks: item.componentType === 'ComponentInfoBlock' && item.infoBlockConfig ? [item] : [],
        logoRacks: item.componentType === 'ComponentLogoRack' ? [item] : [],
        youtube: item.componentType === 'ComponentYouTube' ? [item] : [],
        faqs: item.componentType === 'ComponentFaq' ? [item] : [],
      }
    }
  })

  const seoData = processSEOTags(data.howItWorksCollection.items[0].seoMetadata);

  return {
    pageContent,
    seoData
  }
}
