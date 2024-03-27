import pkg from 'contentful-management';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN, CONTENTFUL_ENVIRONMENT } from '$env/static/private'

const { createClient } = pkg;

export async function POST(event) {

  const body = await event.request.json();

  const { email } = body;

  const client = createClient({
    accessToken: CONTENTFUL_MANAGEMENT_TOKEN,
  })

  const space = await client.getSpace(CONTENTFUL_SPACE_ID)
  const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT) 

  // Save the form data to Contentful
  const entry = await environment.createEntry('newsletterSubscription', {
    fields: {
      email: { 'en-US': email },
    },
  });

  return new Response(JSON.stringify({
    message: 'Form submitted successfully',
  }), {
    status : 200,
    headers: {        
        'content-type': 'application/json'
    },
  })
}
