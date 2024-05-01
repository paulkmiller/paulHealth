import { e as error } from "../../chunks/index.js";
import { c as contentfulFetch } from "../../chunks/contentful-fetch.js";
async function load() {
  const query = `
  query {
    navigationMenu(id: "4Vtc0yrr7IsXwAdeoJBqzm") {
      menuItemsCollection {
        items {
          ... on MenuItem {
            path
            internalName
            childItemsCollection {
              items {
                ... on MenuItem {
                  path
                  internalName
                }
              }
            }
          }
        }
      }
    }
  }
  `;
  const response = await contentfulFetch(query);
  if (!response.ok) {
    throw error(404, {
      message: `Mistakes were made: Error ${response.status} - ${response.statusText} 
        ${response.url}`
    });
  }
  const { data } = await response.json();
  const { items: nav_items } = data.navigationMenu.menuItemsCollection;
  return {
    nav_items: nav_items.map((e) => {
      return {
        ...e
      };
    })
  };
}
export {
  load
};
