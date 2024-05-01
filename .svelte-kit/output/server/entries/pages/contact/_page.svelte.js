import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/index3.js";
import "devalue";
import { H as Hero } from "../../../chunks/Hero.js";
import { C as Container, R as Row } from "../../../chunks/Row.js";
import { C as Col } from "../../../chunks/Col.js";
import { S as SEOMetaData } from "../../../chunks/SEOMetaData.js";
import { B as ButtonLink } from "../../../chunks/ButtonLink.js";
import { T as TextWithLineBreaks } from "../../../chunks/TextWithLineBreaks.js";
import { C as Carousel } from "../../../chunks/Carousel.js";
const Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.svelte-zc8ai1{position:relative;display:inline-block;width:100%;margin:1rem auto;padding:1rem 3rem;background:var(--background-color);border:none;border-radius:30px;color:var(--link-color);line-height:18px;font-size:18px;text-align:center;text-decoration:none;transition:all 0.25s ease-out;z-index:1}button.svelte-zc8ai1:hover{cursor:pointer;box-shadow:#444444 0.2rem 0.3rem 0.3rem;color:#fff}button.svelte-zc8ai1::before{position:absolute;content:"";top:0;right:0;bottom:0;left:0;background:linear-gradient(90deg,rgba(173,235,239,1) 0%, rgba(41,57,122,1) 30%, rgba(218,47,92,1) 70%, rgba(255,193,38,1) 100%);z-index:-1;transition:opacity 0.5s linear;opacity:0;border-radius:30px}button.svelte-zc8ai1:hover::before{opacity:1}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { text } = $$props;
  let { background_color } = $$props;
  let { color = "" } = $$props;
  if (background_color === "") {
    background_color = "#fff";
  }
  if (color === "") {
    color = "#29397a";
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.background_color === void 0 && $$bindings.background_color && background_color !== void 0)
    $$bindings.background_color(background_color);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<button${add_attribute("type", type, 0)} style="${"--link-color: " + escape(color, true) + "; --background-color: " + escape(background_color, true) + ";"}" class="svelte-zc8ai1">${escape(text)}
  </button>`;
});
const CarouselDefault_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-wayqns{height:100%;object-fit:contain;object-position:center}@media only screen and (max-width: 768px){img.svelte-wayqns{margin:0 auto}}",
  map: null
};
const CarouselDefault = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [];
  $$result.css.add(css$1);
  return `${validate_component(Carousel, "Carousel").$$render($$result, { autoplay: true }, {}, {
    default: () => {
      return `${each(images, (image) => {
        return `<div><img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.description, 0)} class="svelte-wayqns">
    </div>`;
      })}`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1r6ek7i.svelte-1r6ek7i{font-weight:400;text-align:left;margin-bottom:0.5rem}p.svelte-1r6ek7i.svelte-1r6ek7i{font-weight:900;color:#29387a}.form-group.svelte-1r6ek7i label.svelte-1r6ek7i{font-weight:800}.form-control.svelte-1r6ek7i.svelte-1r6ek7i{border:none;border-radius:0;border-bottom:1px solid #000;margin-bottom:1rem}.tagline.svelte-1r6ek7i.svelte-1r6ek7i{font-family:'PolySans Median', Arial, Helvetica, sans-serif;color:#d93561;text-transform:uppercase}.duplex-container.svelte-1r6ek7i.svelte-1r6ek7i{display:grid;grid-template-columns:1fr 2fr}.right-container.svelte-1r6ek7i.svelte-1r6ek7i{display:grid;margin:0 auto 0 6rem;padding:4rem 0}.left-container.svelte-1r6ek7i.svelte-1r6ek7i{padding:0}.row-reverse.svelte-1r6ek7i.svelte-1r6ek7i,.row-reverse.svelte-1r6ek7i .right-container.svelte-1r6ek7i{transform:scaleX(-1)}.row-reverse.svelte-1r6ek7i .right-container.svelte-1r6ek7i{grid-template-rows:1fr auto;padding:4rem;align-self:center}.row-reverse.small-image .right-container.svelte-1r6ek7i .svelte-1r6ek7i{text-align:right;align-self:self-end;margin-left:auto}.duplex-container.svelte-1r6ek7i h3.big{font-size:4.5rem;color:#29397a;margin-bottom:2rem}.duplex-container.svelte-1r6ek7i h3{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:4rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.svelte-1r6ek7i h3.small{font-family:'PolySans Neutral', Arial, Helvetica, sans-serif;font-weight:500;font-size:3rem;margin-bottom:0.25rem;align-self:self-end}.duplex-container.svelte-1r6ek7i p{font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:1.125rem;font-weight:500;line-height:1.5rem;letter-spacing:0.25px;margin:1rem 0;text-align:left;align-self:center}.duplex-container.svelte-1r6ek7i ol:first-of-type > li > p:not(ol li ol li p){font-family:'PolySans Slim', Arial, Helvetica, sans-serif;font-size:4.5rem}.duplex-container.svelte-1r6ek7i p b{font-family:'PolySans Median', Arial, Helvetica, sans-serif}.duplex-container.svelte-1r6ek7i ul li p{margin:0.5rem 0}.duplex-container.svelte-1r6ek7i h5 b{color:#d93561}.normal-image.svelte-1r6ek7i.svelte-1r6ek7i{padding:3rem 0}.normal-image.svelte-1r6ek7i .left-container.svelte-1r6ek7i{max-width:420px;margin:0 auto}.duplex-container.svelte-1r6ek7i ol{list-style:none;counter-reset:numList}.duplex-container.svelte-1r6ek7i ol li{position:relative}.duplex-container.svelte-1r6ek7i ol:first-child > li::before{counter-increment:numList;content:counter(numList);float:left;position:absolute;left:-50px;top:0.5rem;font:bold 1rem sans-serif;text-align:center;color:#fff;line-height:2rem;width:2rem;height:2rem;background:#29397a;-moz-border-radius:100%;border-radius:100%}.duplex.svelte-1r6ek7i .sc-carousel__arrow-container {display:none}.duplex.svelte-1r6ek7i .sc-carousel__pages-container img{width:100%;height:100%}.duplex.svelte-1r6ek7i .sc-carousel-dots__container{display:none !important}@media only screen and (max-width: 768px){.duplex-container.svelte-1r6ek7i p{text-align:center;align-self:normal}.row-reverse.small-image .right-container.svelte-1r6ek7i .svelte-1r6ek7i{text-align:center;align-self:auto;margin:1rem auto}.row-reverse.svelte-1r6ek7i .right-container.svelte-1r6ek7i,.right-container.svelte-1r6ek7i.svelte-1r6ek7i{width:100%;padding:3rem}.right-container.svelte-1r6ek7i.svelte-1r6ek7i{margin:4rem auto;text-align:center}.right-container.svelte-1r6ek7i h3{font-size:3.5rem;margin:1rem auto}.right-container.svelte-1r6ek7i p{max-width:97.5%;margin:0.5rem auto}.right-container.svelte-1r6ek7i a{margin:2rem auto}}@media only screen and (max-width: 991px){.duplex-container.svelte-1r6ek7i.svelte-1r6ek7i{grid-template-columns:1fr}}@media only screen and (max-width: 1250px){.right-container.svelte-1r6ek7i.svelte-1r6ek7i{padding:2rem 1rem}}@media only screen and (max-width: 1680px){.right-container.svelte-1r6ek7i.svelte-1r6ek7i{margin:0 auto;padding:2rem}}",
  map: null
};
async function GET() {
  return new Response(null, { status: 200 });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  let company = "";
  let { data } = $$props;
  if ($$props.GET === void 0 && $$bindings.GET && GET !== void 0)
    $$bindings.GET(GET);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(SEOMetaData, "SEOMetaData").$$render($$result, { data }, {}, {})}

${validate_component(Hero, "Hero").$$render($$result, { data: data.heroBanners[0] }, {}, {})}

${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render(
        $$result,
        {
          class: "justify-content-center align-items-center justify-items-center pt-5 pb-5"
        },
        {},
        {
          default: () => {
            return `${validate_component(Col, "Col").$$render($$result, { csm: 12, md: 6 }, {}, {
              default: () => {
                return `<p class="svelte-1r6ek7i">Greetings!</p>
      <h1 class="svelte-1r6ek7i">Feel free to say hi.</h1>`;
              }
            })}
    ${validate_component(Col, "Col").$$render($$result, { csm: 12, md: 6 }, {}, {
              default: () => {
                return `
      <form action="/contact" method="POST" id="contactForm"><div class="form-group svelte-1r6ek7i"><label for="paulInputPassword1" class="svelte-1r6ek7i">Name</label>
          <input type="text" class="form-control svelte-1r6ek7i" id="paulInputPassword1" placeholder="Enter your name..." name="name" required${add_attribute("value", name, 0)}></div>
        <div class="form-group svelte-1r6ek7i"><label for="paulInputEmail1" class="svelte-1r6ek7i">Email address</label>
          <input type="email" class="form-control svelte-1r6ek7i" id="paulInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address..." name="email" required${add_attribute("value", email, 0)}></div>
        <div class="form-group svelte-1r6ek7i"><label for="paulFormControlSelect1" class="svelte-1r6ek7i">Who are you?</label>
          <select class="form-control svelte-1r6ek7i" id="paulFormControlSelect1" name="who" required><option disabled="" selected="" data-component-field="field" value="">Select...</option><option data-component-field="option" value="Clinician">Clinician</option><option data-component-field="option" value="Patient in need of 
            
            ">Patient in need of help</option><option data-component-field="option" value="Research Stakeholder">Research Stakeholder</option><option data-component-field="option" value="Health Innovator">Health Innovator</option><option data-component-field="option" value="I need Access to Patient App">I need Access to Patient App</option></select></div>
        <div class="form-group svelte-1r6ek7i"><label for="paulInputPassword1" class="svelte-1r6ek7i">Your Company</label>
          <input type="text" class="form-control svelte-1r6ek7i" id="paulInputPassword1" placeholder="Enter your company name..." name="company"${add_attribute("value", company, 0)}></div>
        <div class="form-group svelte-1r6ek7i"><label for="paulFormControlTextarea1" class="svelte-1r6ek7i">How can we help?</label>
          <textarea class="form-control svelte-1r6ek7i" id="paulFormControlTextarea1" rows="3" placeholder="Enter your message..." name="message" required>${escape("")}</textarea></div>
        <div class="form-check"><input type="checkbox" class="form-check-input" id="paulCheck1" required>
          <label class="form-check-label" for="paulCheck1">I ALLOW THIS WEBSITE TO STORE MY SUBMISSION SO THEY CAN RESPOND TO MY INQUIRY.</label>
          <div class="invalid-feedback">You must agree before submitting.</div></div>
        ${validate_component(Button, "Button").$$render(
                  $$result,
                  {
                    type: "submit",
                    text: "Submit",
                    color: "#FFF",
                    background_color: "#29397a"
                  },
                  {},
                  {}
                )}</form>`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}

<div class="duplex normal-container container svelte-1r6ek7i"><div class="${"duplex-container normal-image " + escape(data.duplexes[0].containerLayout ? "" : "row-reverse", true) + " svelte-1r6ek7i"}"><div class="left-container svelte-1r6ek7i">${validate_component(CarouselDefault, "CarouselDefault").$$render($$result, {}, {}, {})}</div>
    <div class="right-container svelte-1r6ek7i">${data.duplexes[0].tagline ? `<p class="tagline svelte-1r6ek7i">${escape(data.duplexes[0].tagline)}</p>` : ``}
      ${data.duplexes[0].headline ? `<h3 class="svelte-1r6ek7i">${validate_component(TextWithLineBreaks, "TextWithLineBreaks").$$render($$result, { inputText: data.duplexes[0].headline }, {}, {})}</h3>` : ``}
      ${data.duplexes[0].bodyText ? `<p class="svelte-1r6ek7i"><!-- HTML_TAG_START -->${data.duplexes[0].bodyText}<!-- HTML_TAG_END --></p>` : ``}
      ${data.duplexes[0].ctaText != null ? `${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: data.duplexes[0].ctaText || "Learn More",
      path: data.duplexes[0].targetPage ? `${data.duplexes[0].targetPage}` : "/contact",
      color: "#FFF",
      background_color: "#D93561",
      ariaText: data.duplexes[0].ctaText,
      ariaLink: data.duplexes[0].targetPage
    },
    {},
    {}
  )}` : ``}</div></div>
</div>`;
});
export {
  Page as default
};
