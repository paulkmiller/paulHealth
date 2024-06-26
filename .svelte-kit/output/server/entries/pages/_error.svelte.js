import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { B as ButtonLink } from "../../chunks/ButtonLink.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-moz-keyframes svelte-vxogw6-rocket-movement{100%{-moz-transform:translate(1200px, -600px)}}@-webkit-keyframes svelte-vxogw6-rocket-movement{100%{-webkit-transform:translate(1200px, -600px)}}@keyframes svelte-vxogw6-rocket-movement{100%{transform:translate(1200px, -600px)}}@-moz-keyframes svelte-vxogw6-spin-earth{100%{-moz-transform:rotate(-360deg);transition:transform 20s}}@-webkit-keyframes svelte-vxogw6-spin-earth{100%{-webkit-transform:rotate(-360deg);transition:transform 20s}}@keyframes svelte-vxogw6-spin-earth{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);transition:transform 20s}}@-moz-keyframes svelte-vxogw6-move-astronaut{100%{-moz-transform:translate(-160px, -160px)}}@-webkit-keyframes svelte-vxogw6-move-astronaut{100%{-webkit-transform:translate(-160px, -160px)}}@keyframes svelte-vxogw6-move-astronaut{100%{-webkit-transform:translate(-160px, -160px);transform:translate(-160px, -160px)}}@-moz-keyframes svelte-vxogw6-rotate-astronaut{100%{-moz-transform:rotate(-720deg)}}@-webkit-keyframes svelte-vxogw6-rotate-astronaut{100%{-webkit-transform:rotate(-720deg)}}@keyframes svelte-vxogw6-rotate-astronaut{100%{-webkit-transform:rotate(-720deg);transform:rotate(-720deg)}}@-moz-keyframes svelte-vxogw6-glow-star{40%{-moz-opacity:0.3}90%,100%{-moz-opacity:1;-moz-transform:scale(1.2)}}@-webkit-keyframes svelte-vxogw6-glow-star{40%{-webkit-opacity:0.3}90%,100%{-webkit-opacity:1;-webkit-transform:scale(1.2)}}@keyframes svelte-vxogw6-glow-star{40%{-webkit-opacity:0.3;opacity:0.3}90%,100%{-webkit-opacity:1;opacity:1;-webkit-transform:scale(1.2);transform:scale(1.2);border-radius:999999px}}.error.svelte-vxogw6.svelte-vxogw6{height:100%;width:100%;z-index:2;display:flex;position:relative;flex-direction:column;justify-content:center;align-items:center;font-family:'PolySans Slim', Arial, Helvetica, sans-serif;color:#fff}.error__title.svelte-vxogw6.svelte-vxogw6{font-size:10em}.error__subtitle.svelte-vxogw6.svelte-vxogw6{font-size:2em}.space.svelte-vxogw6.svelte-vxogw6{display:flex;position:relative;height:calc(100vh - 21.9rem);min-height:500px;background:radial-gradient(circle at center bottom, #70376f, #3d2f62);align-items:center;justify-content:center}.content.svelte-vxogw6.svelte-vxogw6{height:100%;width:100%;text-align:center}.objects.svelte-vxogw6 img.svelte-vxogw6{z-index:90;pointer-events:none}.space__button.svelte-vxogw6.svelte-vxogw6{margin-top:2rem}.object_rocket.svelte-vxogw6.svelte-vxogw6{z-index:95;position:absolute;transform:translateX(-50px);top:75%;pointer-events:none;animation:svelte-vxogw6-rocket-movement 100s linear infinite both running}.object_earth.svelte-vxogw6.svelte-vxogw6{position:absolute;top:20%;left:15%;z-index:90}.object_moon.svelte-vxogw6.svelte-vxogw6{position:absolute;top:12%;left:25%}.object_astronaut.svelte-vxogw6.svelte-vxogw6{animation:svelte-vxogw6-rotate-astronaut 200s infinite linear both alternate}.box_astronaut.svelte-vxogw6.svelte-vxogw6{position:absolute;top:60%;right:20%;will-change:transform;animation:svelte-vxogw6-move-astronaut 50s infinite linear both alternate}.stars.svelte-vxogw6.svelte-vxogw6{height:100%;width:100%;background:url(/overlay_stars.svg);background-repeat:repeat;background-size:contain;background-position:left top}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6{position:absolute;border-radius:100%;background-color:#fff;width:3px;height:3px;opacity:0.3;will-change:opacity}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6:nth-child(1){top:80%;left:25%;animation:svelte-vxogw6-glow-star 2s infinite ease-in-out alternate 1s}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6:nth-child(2){top:20%;left:40%;animation:svelte-vxogw6-glow-star 2s infinite ease-in-out alternate 3s}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6:nth-child(3){top:25%;left:25%;animation:svelte-vxogw6-glow-star 2s infinite ease-in-out alternate 5s}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6:nth-child(4){top:75%;left:80%;animation:svelte-vxogw6-glow-star 2s infinite ease-in-out alternate 7s}.glowing_stars.svelte-vxogw6 .star.svelte-vxogw6:nth-child(5){top:90%;left:50%;animation:svelte-vxogw6-glow-star 2s infinite ease-in-out alternate 9s}@media only screen and (max-width: 768px){.box_astronaut.svelte-vxogw6.svelte-vxogw6{top:70%}.space.svelte-vxogw6.svelte-vxogw6{height:calc(100vh - 39.4rem)}.error.svelte-vxogw6.svelte-vxogw6{backdrop-filter:brightness(70%)}}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("%cShoutout to %cSaleh Riaz%c for their lovely SVGs & design: %chttps://www.salehriaz.com/", "font-size: 16px; color: white;", "font-size: 16px; color: red; font-weight: bold;", "font-size: 16px; color: white;", "font-size: 16px; color: green; text-decoration: underline;");
  $$result.css.add(css);
  return `<div class="space svelte-vxogw6"><div class="stars svelte-vxogw6"><div class="content svelte-vxogw6"><div class="error svelte-vxogw6"><div class="error__title svelte-vxogw6">404</div>
        <div class="error__subtitle svelte-vxogw6">Hmmm...</div>
        <div class="error__description">It looks like one of the developers fell asleep</div>
        <span class="space__button svelte-vxogw6">${validate_component(ButtonLink, "ButtonLink").$$render(
    $$result,
    {
      text: "Report An Error-oid ☄️",
      path: "/contact",
      color: "#FFF",
      background_color: "#D93561",
      ariaText: "A button that links to the contact page",
      ariaLink: "/contact"
    },
    {},
    {}
  )}</span></div></div>
    <div class="objects svelte-vxogw6"><img class="object_rocket svelte-vxogw6" src="/rocket.svg" width="50px" alt="A red rocket.">
      <div class="earth-moon"><img class="object_earth svelte-vxogw6" src="/earth.svg" width="100px" alt="A blue Earth.">
        <img class="object_moon svelte-vxogw6" src="/moon.svg" width="80px" alt="A grey moon."></div>
      <div class="box_astronaut svelte-vxogw6"><img class="object_astronaut svelte-vxogw6" src="/astronaut.svg" width="70px" alt="A lost astronaut."></div></div>
    <div class="glowing_stars svelte-vxogw6"><div class="star svelte-vxogw6"></div>
      <div class="star svelte-vxogw6"></div>
      <div class="star svelte-vxogw6"></div>
      <div class="star svelte-vxogw6"></div>
      <div class="star svelte-vxogw6"></div></div></div>
</div>`;
});
export {
  Error as default
};
