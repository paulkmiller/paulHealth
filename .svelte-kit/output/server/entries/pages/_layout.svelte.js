import { c as create_ssr_component, i as escape, v as validate_component, h as add_attribute, r as add_styles, f as each, j as null_to_empty, p as subscribe, t as add_classes } from "../../chunks/index2.js";
import { I as IconBase } from "../../chunks/IconBase.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import AOS from "aos";
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".wrapper.svelte-7wj78d{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-7wj78d{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-7wj78d{animation:svelte-7wj78d-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-7wj78d{width:44px;height:44px;position:absolute}.ball.svelte-7wj78d{width:20px;height:20px;border-radius:50%;position:absolute;animation:svelte-7wj78d-ballOne var(--duration) infinite ease}.pause-animation.svelte-7wj78d{animation-play-state:paused}.ball-top-left.svelte-7wj78d{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-7wj78d{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-7wj78d{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-7wj78d{background-color:var(--ballBottomRightColor);top:24px;left:24px}@keyframes svelte-7wj78d-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-7wj78d-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}",
  map: null
};
const Circle3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { pause = false } = $$props;
  let { ballTopLeft = "#FF3E00" } = $$props;
  let { ballTopRight = "#F8B334" } = $$props;
  let { ballBottomLeft = "#40B3FF" } = $$props;
  let { ballBottomRight = "#676778" } = $$props;
  let { duration = "1.5s" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.ballTopLeft === void 0 && $$bindings.ballTopLeft && ballTopLeft !== void 0)
    $$bindings.ballTopLeft(ballTopLeft);
  if ($$props.ballTopRight === void 0 && $$bindings.ballTopRight && ballTopRight !== void 0)
    $$bindings.ballTopRight(ballTopRight);
  if ($$props.ballBottomLeft === void 0 && $$bindings.ballBottomLeft && ballBottomLeft !== void 0)
    $$bindings.ballBottomLeft(ballBottomLeft);
  if ($$props.ballBottomRight === void 0 && $$bindings.ballBottomRight && ballBottomRight !== void 0)
    $$bindings.ballBottomRight(ballBottomRight);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-7wj78d" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --floatSize: " + escape(size, true) + "; --ballTopLeftColor: " + escape(ballTopLeft, true) + "; --ballTopRightColor: " + escape(ballTopRight, true) + "; --ballBottomLeftColor: " + escape(ballBottomLeft, true) + "; --ballBottomRightColor: " + escape(ballBottomRight, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="inner svelte-7wj78d"><div class="${["ball-container svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"><div class="single-ball svelte-7wj78d"><div class="${["ball ball-top-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"> </div></div>
			<div class="contener_mixte"><div class="${["ball ball-top-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"> </div></div>
			<div class="contener_mixte"><div class="${["ball ball-bottom-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"> </div></div>
			<div class="contener_mixte"><div class="${["ball ball-bottom-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"> </div></div></div></div>
</div>`;
});
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const Backdrop_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".backdrop.svelte-ckei2y.svelte-ckei2y{position:fixed;width:100%;height:100%;background:#202d64;z-index:100;top:0;left:0}.backdrop.svelte-ckei2y div.svelte-ckei2y{display:flex;justify-content:center;margin-top:45vh}",
  map: null
};
const Backdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="backdrop svelte-ckei2y"><div class="svelte-ckei2y">${validate_component(Circle3, "Circle3").$$render(
    $$result,
    {
      size: "180",
      ballTopLeft: "#ADEBEF",
      ballTopRight: "#DA2F5C",
      ballBottomLeft: "#FFC126",
      ballBottomRight: "#FBF6E2",
      unit: "px",
      duration: "4s"
    },
    {},
    {}
  )}</div>
</div>`;
});
const FaChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => {
      return `<path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>`;
    }
  })}`;
});
const LinkItem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".linkItem.svelte-z3mwrh.svelte-z3mwrh{display:grid}li.svelte-z3mwrh.svelte-z3mwrh{padding:1rem 0;list-style-type:none}li.svelte-z3mwrh a.svelte-z3mwrh{font-family:'PolySans Slim', Arial, sans-serif;font-weight:500;text-decoration:none;padding:2rem 1rem;color:#fff;letter-spacing:0.5px}li.svelte-z3mwrh a.svelte-z3mwrh:hover{text-decoration:underline;cursor:pointer}.icon.svelte-z3mwrh.svelte-z3mwrh{width:0.7rem;display:inline-block;transition:all 0.25s ease-out;transform:translate(2px, 2px)}.icon.svelte-z3mwrh svg{margin-top:-0.4rem}.rotated.svelte-z3mwrh.svelte-z3mwrh{transform:rotate(-180deg);transform-origin:center center}.linkItem.svelte-z3mwrh ul.svelte-z3mwrh{padding:0}.linkItem.svelte-z3mwrh .dropdown.svelte-z3mwrh{display:grid}.dropdown.svelte-z3mwrh .dropbtn.svelte-z3mwrh{border:none;outline:none;color:#fff;font-weight:700;box-shadow:none;background-color:inherit;font-family:inherit;margin:0;padding:0}.dropdown-content.svelte-z3mwrh.svelte-z3mwrh{position:absolute;top:3.5rem;background-color:#fff;min-width:10rem;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);z-index:1}.dropdown-content.svelte-z3mwrh a.svelte-z3mwrh{color:#29397a;display:block;background:#fff;padding:0.75rem 1rem;text-decoration:none;text-align:left;font-size:0.95rem;letter-spacing:0.5px;font-weight:lighter}.dropdown-content.svelte-z3mwrh a.svelte-z3mwrh:hover{color:#29397a;background-color:#adebef}.bgwhite.svelte-z3mwrh.svelte-z3mwrh{background:#fff;color:#29397a}@media(max-width: 768px){.dropdown-content.svelte-z3mwrh a.svelte-z3mwrh{color:#29397a;display:block;background:#fff;border-bottom:2px solid #6d6d6d}.dropdown-content.svelte-z3mwrh a.svelte-z3mwrh:first-child{border-top:2px solid #6d6d6d}.dropdown-content.svelte-z3mwrh a.svelte-z3mwrh:hover{background-color:#fff;color:#000}.linkItem.svelte-z3mwrh.svelte-z3mwrh{border-top:2px solid black}.linkItem.svelte-z3mwrh.svelte-z3mwrh:first-child{border-top:0px solid black}.linkItem.svelte-z3mwrh a.svelte-z3mwrh{color:black}.dropdown-content.svelte-z3mwrh.svelte-z3mwrh{position:relative;min-width:100%;box-shadow:none;z-index:1}li.svelte-z3mwrh.svelte-z3mwrh{height:100%}.linkItem.svelte-z3mwrh li.svelte-z3mwrh{margin:auto}.dropdown.svelte-z3mwrh .dropbtn a.svelte-z3mwrh,li.svelte-z3mwrh a.svelte-z3mwrh{display:flex;align-items:center;text-align:left;height:100%;font-size:2rem;padding-left:5rem}.dropdown-content.svelte-z3mwrh.svelte-z3mwrh{top:0.5rem}.icon.svelte-z3mwrh.svelte-z3mwrh{width:1.1rem;margin-left:0.33rem}.dropdown.svelte-z3mwrh .dropdown-content a.svelte-z3mwrh{display:flex;text-align:center;padding-left:6rem;font-size:1.5rem;font-weight:lighter}.dropdown.svelte-z3mwrh .dropdown-content:first-child a.svelte-z3mwrh:hover{background:#fff !important;color:#fff !important}}",
  map: null
};
const LinkItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nav_item } = $$props;
  let { isDropdownOpen } = $$props;
  let { dropdownClick } = $$props;
  let { drawerToggle } = $$props;
  let { id } = $$props;
  if ($$props.nav_item === void 0 && $$bindings.nav_item && nav_item !== void 0)
    $$bindings.nav_item(nav_item);
  if ($$props.isDropdownOpen === void 0 && $$bindings.isDropdownOpen && isDropdownOpen !== void 0)
    $$bindings.isDropdownOpen(isDropdownOpen);
  if ($$props.dropdownClick === void 0 && $$bindings.dropdownClick && dropdownClick !== void 0)
    $$bindings.dropdownClick(dropdownClick);
  if ($$props.drawerToggle === void 0 && $$bindings.drawerToggle && drawerToggle !== void 0)
    $$bindings.drawerToggle(drawerToggle);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$5);
  return `<li class="linkItem svelte-z3mwrh"${add_attribute("id", id, 0)}><ul class="svelte-z3mwrh">${nav_item.childItemsCollection.items.length >= 1 ? `<li class="dropdown dropbtnWrapper svelte-z3mwrh"><div class="dropbtn svelte-z3mwrh"><a${add_attribute("href", nav_item.path, 0)} class="${["dropdownlink svelte-z3mwrh", isDropdownOpen[id] ? "bgwhite" : ""].join(" ").trim()}" aria-label="${"Link to the " + escape(nav_item.internalName, true) + " page."}">${escape(nav_item.internalName)}
            <div class="${["icon svelte-z3mwrh", isDropdownOpen[id] ? "rotated" : ""].join(" ").trim()}">${validate_component(FaChevronDown, "FaChevronDown").$$render($$result, {}, {}, {})}</div></a></div>
        <div class="dropdown-content svelte-z3mwrh"${add_styles({
    "display": isDropdownOpen[id] ? "block" : "none"
  })}>${each(nav_item.childItemsCollection.items, (child_item) => {
    return `<a${add_attribute("href", child_item.path, 0)} class="submenu-link svelte-z3mwrh" aria-label="${"Link to the " + escape(child_item.internalName, true) + " page."}">${escape(child_item.internalName)}</a>`;
  })}</div></li>` : `<li class="svelte-z3mwrh"><a${add_attribute("href", nav_item.path, 0)} aria-label="${"Link to the " + escape(nav_item.internalName, true) + " page."}" class="svelte-z3mwrh">${escape(nav_item.internalName)}</a></li>`}</ul>
</li>`;
});
const SideDrawer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".sideDrawer.svelte-9glfll.svelte-9glfll{height:100%;background:#fff;box-shadow:1px 0px 7px rgba(0, 0, 0, 0.5);position:fixed;top:0;left:0;width:100%;z-index:1000;transform:translateX(-100%);transition:transform 0.3s ease-out;overflow-y:scroll}.sideDrawer.open.svelte-9glfll.svelte-9glfll{transform:translateX(0)}.sideDrawer.svelte-9glfll ul.svelte-9glfll{display:grid;grid-template-rows:repeat(5, 1fr);width:100%;height:100%;list-style:none;padding:0}@media(min-width: 769px){.sideDrawer.svelte-9glfll.svelte-9glfll{display:none}}",
  map: null
};
const SideDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let { data } = $$props;
  let { isDropdownOpen } = $$props;
  let { dropdownClick } = $$props;
  let { drawerToggle } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.isDropdownOpen === void 0 && $$bindings.isDropdownOpen && isDropdownOpen !== void 0)
    $$bindings.isDropdownOpen(isDropdownOpen);
  if ($$props.dropdownClick === void 0 && $$bindings.dropdownClick && dropdownClick !== void 0)
    $$bindings.dropdownClick(dropdownClick);
  if ($$props.drawerToggle === void 0 && $$bindings.drawerToggle && drawerToggle !== void 0)
    $$bindings.drawerToggle(drawerToggle);
  $$result.css.add(css$4);
  return `<nav class="${escape(null_to_empty(show), true) + " svelte-9glfll"}"><ul class="svelte-9glfll">${each(data.nav_items, (nav_item, index) => {
    return `${validate_component(LinkItem, "LinkItem").$$render(
      $$result,
      {
        nav_item,
        isDropdownOpen,
        drawerToggle,
        dropdownClick,
        id: index
      },
      {},
      {}
    )}`;
  })}</ul>
</nav>`;
});
const DrawerToggleButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".toggle-button.svelte-dcltgg.svelte-dcltgg{display:flex;flex-direction:column;justify-content:space-around;height:24px;width:30px;background:transparent;border:none;cursor:pointer;margin:1em 0 1em 0.75em;padding:0;box-sizing:border-box;box-shadow:none;z-index:10001\n  }.toggle-button.svelte-dcltgg.svelte-dcltgg:focus{outline:none}.toggle-button.svelte-dcltgg div.svelte-dcltgg{position:relative;width:2em;height:4px;background-color:#fff;transition:all 0.3s ease-in-out}.navbar.white .toggle-button div{background:#29397a}.navbar.scrolled:not(.white) .toggle-button div{background-color:#fff}.navbar.open .toggle-button div{background-color:red}.navbar.open .toggle-button-line:nth-child(1){transform:translateY(11px) rotate(45deg)}.navbar.open .toggle-button-line:nth-child(2){opacity:0}.navbar.open .toggle-button-line:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar.open.scrolled .toggle-button div{background-color:red !important}@media(min-width: 768px){.toggle-button.svelte-dcltgg.svelte-dcltgg{display:none}}",
  map: null
};
const DrawerToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$3);
  return `<button class="${["toggle-button svelte-dcltgg", isOpen ? "open" : ""].join(" ").trim()}" aria-label="Button to Open and Close the mobile menu"><div class="toggle-button-line svelte-dcltgg"></div>
  <div class="toggle-button-line svelte-dcltgg"></div>
  <div class="toggle-button-line svelte-dcltgg"></div>
</button>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".logo.svelte-p9s28g.svelte-p9s28g{max-height:3em;max-width:10rem}.navbar.svelte-p9s28g.svelte-p9s28g{position:fixed;width:100%;max-width:2300px;background-color:transparent;transition:all 0.5s ease-out;align-content:center;padding:1rem 2rem;opacity:1;z-index:10001}.navbar.open.svelte-p9s28g .logo_wrapper.svelte-p9s28g{opacity:0}.navbar.white.svelte-p9s28g.svelte-p9s28g{position:static;background-color:#fff}.navbar.white .navbar_nav_right a{color:black;letter-spacing:0.5px}.navbar.white .navbar_nav_right a:hover{color:black}.scrolled.svelte-p9s28g.svelte-p9s28g{background-color:#29397a;box-shadow:0 3px 5px rgba(0, 0, 0, 0.2)}.scrolled.open.svelte-p9s28g.svelte-p9s28g{background:transparent;box-shadow:none}.navbar_nav_right.svelte-p9s28g.svelte-p9s28g{list-style:none;margin:0;padding:0;display:flex}.spacer.svelte-p9s28g.svelte-p9s28g{flex:1}.logo_wrapper.svelte-p9s28g.svelte-p9s28g{margin-left:0.75em}@media(max-width: 768px){.navbar_nav_right.svelte-p9s28g.svelte-p9s28g{display:none}.logo.svelte-p9s28g.svelte-p9s28g{max-height:2em}}@media(max-width: 820px){.navbar.svelte-p9s28g.svelte-p9s28g{padding:1rem 2rem}}@media(max-width: 1440px){.logo.svelte-p9s28g.svelte-p9s28g{max-height:3em;max-width:10rem}.navbar.svelte-p9s28g.svelte-p9s28g{padding:1rem}}",
  map: null
};
let logoLight$1 = "/paul_logo.svg";
let logoDark = "/paul_logoDark.svg";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { isDropdownOpen } = $$props;
  let { drawerToggle } = $$props;
  let { dropdownClick } = $$props;
  let { show } = $$props;
  let isNewsPage;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.isDropdownOpen === void 0 && $$bindings.isDropdownOpen && isDropdownOpen !== void 0)
    $$bindings.isDropdownOpen(isDropdownOpen);
  if ($$props.drawerToggle === void 0 && $$bindings.drawerToggle && drawerToggle !== void 0)
    $$bindings.drawerToggle(drawerToggle);
  if ($$props.dropdownClick === void 0 && $$bindings.dropdownClick && dropdownClick !== void 0)
    $$bindings.dropdownClick(dropdownClick);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$2);
  isNewsPage = $page.url.pathname.startsWith("/news");
  {
    isDropdownOpen = false;
  }
  $$unsubscribe_page();
  return `

<nav class="${[
    "navbar svelte-p9s28g",
    " " + (isNewsPage ? "white" : "") + " " + (show ? "open" : "")
  ].join(" ").trim()}" id="navbar_nav"><div class="logo_wrapper svelte-p9s28g"><a href="/home" aria-label="A link back to the home page"><img class="${escape(isNewsPage ? "logoDark" : "logoLight", true) + " logo svelte-p9s28g"}"${add_attribute("src", isNewsPage ? logoDark : logoLight$1, 0)} alt="The Paul Health logo."></a></div>

  <div class="spacer svelte-p9s28g"></div>

  <div><ul class="navbar_nav_right svelte-p9s28g">${each(data.nav_items, (nav_item, index) => {
    return `${validate_component(LinkItem, "LinkItem").$$render(
      $$result,
      {
        nav_item,
        isDropdownOpen,
        drawerToggle,
        dropdownClick,
        id: index
      },
      {},
      {}
    )}`;
  })}</ul></div>
  ${validate_component(DrawerToggleButton, "DrawerToggleButton").$$render($$result, { isOpen: isDropdownOpen }, {}, {})}
</nav>`;
});
async function getPersonCollection() {
  const response = await fetch("/api/personCollection");
  const personCollections = await response.json();
  return personCollections;
}
async function getHeroBanner() {
  const response = await fetch("/api/heroBanner");
  const heroBanners = await response.json();
  return heroBanners;
}
const aos = "";
const FaFacebookF = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 320 512" }, $$props), {}, {
    default: () => {
      return `<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>`;
    }
  })}`;
});
const FaTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 512 512" }, $$props), {}, {
    default: () => {
      return `<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>`;
    }
  })}`;
});
const FaLinkedinIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IconBase, "IconBase").$$render($$result, Object.assign({}, { viewBox: "0 0 448 512" }, $$props), {}, {
    default: () => {
      return `<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>`;
    }
  })}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-15o1vvh.svelte-15o1vvh{display:flex;justify-content:space-between;padding:4rem;background-color:#29397a;color:#fff}small.svelte-15o1vvh.svelte-15o1vvh{font-size:14px;margin-top:4rem;text-transform:none}.left-section.svelte-15o1vvh.svelte-15o1vvh{display:flex;flex-direction:column;justify-content:space-between;max-width:500px;padding-right:2rem;order:1}.left-section.svelte-15o1vvh p.svelte-15o1vvh{font-family:'PolySans Neutral', Arial, sans-serif}.right-section.svelte-15o1vvh.svelte-15o1vvh{display:flex;justify-content:space-between;position:relative;order:2}.column.svelte-15o1vvh.svelte-15o1vvh{display:flex;flex-direction:column;margin-right:2rem}.column.svelte-15o1vvh a.svelte-15o1vvh{font-family:'PolySans Neutral', Arial, sans-serif;font-weight:400;text-decoration:none;margin-bottom:0.5rem;color:#fff}.column.svelte-15o1vvh a.svelte-15o1vvh:hover{text-decoration:underline}.social-icon.svelte-15o1vvh.svelte-15o1vvh{color:#fff}.logo.svelte-15o1vvh.svelte-15o1vvh{background-position:center;background-repeat:no-repeat;background-size:contain;height:3em;width:5rem}.social-media-container.svelte-15o1vvh.svelte-15o1vvh{display:flex;justify-content:space-between;position:absolute;bottom:0;right:0;margin-top:1rem;margin-bottom:8px;margin-right:5px}.social-icon.svelte-15o1vvh.svelte-15o1vvh{text-decoration:none;max-height:20px;max-width:30px}.social-icon.svelte-15o1vvh.svelte-15o1vvh:hover{opacity:0.7}@media screen and (max-width: 1000px){.footer.svelte-15o1vvh.svelte-15o1vvh{padding:4rem 2rem}}@media screen and (max-width: 767px){.footer.svelte-15o1vvh.svelte-15o1vvh{flex-direction:column-reverse;padding:3rem 2rem;text-align:center}.left-section.svelte-15o1vvh.svelte-15o1vvh{max-width:100%}.left-section.svelte-15o1vvh p.svelte-15o1vvh{margin:3rem 0}.right-section.svelte-15o1vvh.svelte-15o1vvh{flex-direction:column;align-items:flex-start}.column.svelte-15o1vvh.svelte-15o1vvh{margin-bottom:1rem;width:100%}.social-media-container.svelte-15o1vvh.svelte-15o1vvh{visibility:hidden}small.svelte-15o1vvh.svelte-15o1vvh{margin-top:0}.logo.svelte-15o1vvh.svelte-15o1vvh{margin-left:calc(50% - 20px);margin-right:calc(-50%)}}",
  map: null
};
let logoLight = "/paul_logo.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="footer svelte-15o1vvh"><div class="left-section svelte-15o1vvh"><div class="column svelte-15o1vvh"><div class="logo_wrapper"><a href="/" aria-label="Lorem ipsum logo that works as a link back to the home page." class="svelte-15o1vvh"><div class="logo svelte-15o1vvh" style="${"background-image: url(" + escape(logoLight, true) + ")"}"></div></a></div>
       <p class="svelte-15o1vvh">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​</p>
       <small class="svelte-15o1vvh"><span>1234 Lorem Ipsum Street, Suite 5678, Lorem City, LR 90001</span>
         <br>
         <span>© 2024 Lorem Ipsum Inc. All rights reserved.</span></small></div></div>
  <div class="right-section svelte-15o1vvh"><div class="column svelte-15o1vvh"><a href="/how-it-works" aria-label="Link to Lorem Ipsum's how it works page." class="svelte-15o1vvh">How it works</a>
       <a href="/services/patients" aria-label="Link to Lorem Ipsum's patients page." class="svelte-15o1vvh">Patients</a>
       <a href="/services/clinicians" aria-label="Link to Lorem Ipsum's clinicians page." class="svelte-15o1vvh">Clinicians</a>
       <a href="/services/researchers" aria-label="Link to Lorem Ipsum's researchers page." class="svelte-15o1vvh">Researchers</a></div>
     <div class="column svelte-15o1vvh"><a href="/contact" aria-label="Link to Lorem Ipsum's contact page." class="svelte-15o1vvh">Contact</a>
       <a href="https://loremipsum.zendesk.com/hc/en-us" aria-label="Link to Lorem Ipsum's help center." class="svelte-15o1vvh">Help Center</a>
       <a href="/legal" aria-label="Link to Lorem Ipsum's privacy and terms of use page." class="svelte-15o1vvh">Privacy &amp; <br> Terms of Use</a></div>
     <div class="social-media-container svelte-15o1vvh"><a href="https://twitter.com" class="social-icon svelte-15o1vvh" target="_blank" rel="noopener noreferrer" aria-label="Link to Lorem Ipsum's Twitter">${validate_component(FaTwitter, "FaTwitter").$$render($$result, {}, {}, {})}</a>
       <a href="https://facebook.com" class="social-icon svelte-15o1vvh" target="_blank" rel="noopener noreferrer" aria-label="Link to Lorem Ipsum's Facebook">${validate_component(FaFacebookF, "FaFacebookF").$$render($$result, {}, {}, {})}</a>
       <a href="https://linkedin.com" class="social-icon svelte-15o1vvh" target="_blank" rel="noopener noreferrer" aria-label="Link to Lorem Ipsum's LinkedIn">${validate_component(FaLinkedinIn, "FaLinkedinIn").$$render($$result, {}, {}, {})}</a></div></div>
 </footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import './global.css';",
  map: null
};
async function load() {
  const heroBanners = await getHeroBanner();
  const personCollections = await getPersonCollection();
  return {
    props: { heroBanners, personCollections }
  };
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  let container;
  let show = false;
  let isLoading = true;
  let drawerClasses = "sideDrawer";
  function drawerToggleHandler() {
    show = !show;
    if (show) {
      drawerClasses = "sideDrawer open";
    } else {
      drawerClasses = "sideDrawer";
    }
  }
  let isDropdownOpen = {};
  const handleDropdownClick = (id, nav_item, e) => {
    e.preventDefault();
    if (nav_item.childItemsCollection.items.length >= 1) {
      isDropdownOpen[id] = !isDropdownOpen[id];
    } else {
      drawerToggleHandler();
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    show = false;
  }
  {
    $page.url, AOS.refresh();
  }
  $$unsubscribe_page();
  $$unsubscribe_navigating();
  return `
${$navigating || isLoading ? `${validate_component(Backdrop, "Backdrop").$$render($$result, {}, {}, {})}` : `<div${add_attribute("this", container, 0)}><div${add_classes((show ? "open" : "").trim())}>${validate_component(Nav, "Nav").$$render(
    $$result,
    {
      data,
      drawerToggle: drawerToggleHandler,
      dropdownClick: handleDropdownClick,
      isDropdownOpen,
      show
    },
    {},
    {}
  )}</div>
    ${validate_component(SideDrawer, "SideDrawer").$$render(
    $$result,
    {
      data,
      show: drawerClasses,
      drawerToggle: drawerToggleHandler,
      dropdownClick: handleDropdownClick,
      isDropdownOpen
    },
    {},
    {}
  )}
    <main>${slots.default ? slots.default({}) : ``}
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main></div>`}`;
});
export {
  Layout as default,
  load
};
