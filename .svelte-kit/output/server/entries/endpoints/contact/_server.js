import { ServerClient } from "postmark";
import pkg from "contentful-management";
import { C as CONTENTFUL_MANAGEMENT_TOKEN, a as CONTENTFUL_SPACE_ID, b as CONTENTFUL_ENVIRONMENT, P as POSTMARK_ACCESS_TOKEN } from "../../../chunks/private.js";
const { createClient } = pkg;
async function GET() {
  return new Response(null, { status: 200 });
}
async function POST(event) {
  const body = await event.request.json();
  const { name, email, who, company, message } = body;
  const client = createClient({
    accessToken: CONTENTFUL_MANAGEMENT_TOKEN
  });
  const space = await client.getSpace(CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT);
  try {
    const entry = await environment.createEntry("contactFormEntry", {
      fields: {
        name: { "en-US": name },
        email: { "en-US": email },
        who: { "en-US": who },
        company: { "en-US": company },
        message: {
          "en-US": {
            "nodeType": "document",
            "content": [
              {
                "nodeType": "paragraph",
                "content": [
                  {
                    "nodeType": "text",
                    "value": message,
                    "marks": [],
                    "data": {}
                  }
                ],
                "data": {}
              }
            ],
            "data": {}
          }
        }
      }
    });
  } catch (error) {
    console.error("Error saving data to Contentful:", error);
    return new Response(JSON.stringify({ message: "Error saving data to Contentful" }), { status: 500 });
  }
  const postmarkClient = new ServerClient(POSTMARK_ACCESS_TOKEN);
  const emailContent = {
    "From": `"${email}"`,
    "To": "hello@paul.health",
    "Subject": `New contact form submission from ${name}`,
    "TextBody": `Name: ${name}
Email: ${email}
Who: ${who}
Company: ${company}
Message: ${message}`
  };
  try {
    await postmarkClient.sendEmail(emailContent);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
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
  GET,
  POST
};
