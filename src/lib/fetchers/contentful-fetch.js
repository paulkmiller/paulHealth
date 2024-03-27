import pkg from 'contentful-management';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_MANAGEMENT_TOKEN, CONTENTFUL_ENVIRONMENT } from '$env/static/private'

const { createClient } = pkg;

const client = createClient({
  accessToken: CONTENTFUL_MANAGEMENT_TOKEN,
})

const getEnvironment = async () => {
  const space = await client.getSpace(CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT)
  return environment
}

const contentfulFetch = async (query) => {
  const environment = await getEnvironment()
  // Check environment value
  if (environment.sys.id !== CONTENTFUL_ENVIRONMENT) {
    throw new Error(`Invalid environment. CONTENTFUL_ENVIRONMENT should be "${CONTENTFUL_ENVIRONMENT}".`);
  }

  const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })
  return response
}

export default contentfulFetch
