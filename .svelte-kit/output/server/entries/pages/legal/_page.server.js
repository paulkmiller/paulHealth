import { e as error } from "../../../chunks/index.js";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { c as contentfulFetch } from "../../../chunks/contentful-fetch.js";
async function load({ params }) {
  const query = `
  {
    legalPageCollection(limit: 1) {
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
      }
    }
  }
`;
  const processHeroBanner = (item) => {
    return {
      ...item,
      bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
      targetPage: item.targetPage?.path ?? ""
    };
  };
  const processDuplex = (item) => {
    return {
      ...item,
      bodyText: documentToHtmlString(item.bodyText?.json ?? ""),
      targetPage: item.targetPage?.slug ?? "",
      containerSize: item.containerSize ?? ""
    };
  };
  const processInfoBlock = (item) => {
    return {
      ...item,
      content1: documentToHtmlString(item.block1Body?.json ?? ""),
      content2: documentToHtmlString(item.block2Body?.json ?? ""),
      content3: documentToHtmlString(item.block3Body?.json ?? "")
    };
  };
  const processLogoRack = (item) => {
    return {
      ...item,
      logoText1: documentToHtmlString(item.logoText1?.json ?? ""),
      logoText2: documentToHtmlString(item.logoText2?.json ?? ""),
      logoText3: documentToHtmlString(item.logoText3?.json ?? ""),
      logoText4: documentToHtmlString(item.logoText4?.json ?? ""),
      logoText5: documentToHtmlString(item.logoText5?.json ?? ""),
      logoText6: documentToHtmlString(item.logoText6?.json ?? "")
    };
  };
  const processingFunctions = {
    "ComponentHeroBanner": processHeroBanner,
    "ComponentDuplex": processDuplex,
    "ComponentInfoBlock": processInfoBlock,
    "ComponentLogoRack": processLogoRack
  };
  const response = await contentfulFetch(query);
  if (!response.ok) {
    throw error(404, {
      message: `Mistakes were made: Error ${response.status} - ${response.statusText} 
      ${response.url}`
    });
  }
  const { data } = await response.json();
  const { items: pageContentItems } = data.legalPageCollection.items[0].pageContentCollection;
  const processedItems = pageContentItems.map((item) => {
    if (item) {
      const processingFunction = processingFunctions[item.__typename];
      return processingFunction ? { ...processingFunction(item), componentType: item.__typename } : item;
    } else {
      return {};
    }
  });
  const pageContent = processedItems.map((item) => {
    return {
      type: item.componentType,
      data: {
        heroBanners: item.componentType === "ComponentHeroBanner" ? [item] : [],
        duplexes: item.componentType === "ComponentDuplex" ? [item] : [],
        infoBlocks: item.componentType === "ComponentInfoBlock" && item.infoBlockConfig ? [item] : [],
        logoRacks: item.componentType === "ComponentLogoRack" ? [item] : [],
        faqs: item.componentType === "ComponentFaq" ? [item] : []
      }
    };
  });
  return {
    pageContent
  };
}
export {
  load
};
