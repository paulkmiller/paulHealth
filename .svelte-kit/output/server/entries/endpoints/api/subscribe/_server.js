import pkg from "contentful-management";
import { C as CONTENTFUL_MANAGEMENT_TOKEN, a as CONTENTFUL_SPACE_ID, b as CONTENTFUL_ENVIRONMENT } from "../../../../chunks/private.js";
const { createClient } = pkg;
async function POST(event) {
  const body = await event.request.json();
  const { email } = body;
  const client = createClient({
    accessToken: CONTENTFUL_MANAGEMENT_TOKEN
  });
  const space = await client.getSpace(CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT);
  await environment.createEntry("newsletterSubscription", {
    fields: {
      email: { "en-US": email }
    }
  });
  return new Response(JSON.stringify({
    message: "Form submitted successfully"
  }), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}
export {
  POST
};
