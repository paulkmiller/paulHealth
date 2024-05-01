import { c as create_ssr_component, d as each, a as add_attribute } from "./index3.js";
const TextWithLineBreaks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputText = "" } = $$props;
  let segments = inputText.split("<br/>");
  if ($$props.inputText === void 0 && $$bindings.inputText && inputText !== void 0)
    $$bindings.inputText(inputText);
  return `${each(segments, (segment, i) => {
    return `<span${add_attribute("key", i, 0)} style="display: block; min-height: 24px;"><!-- HTML_TAG_START -->${segment}<!-- HTML_TAG_END -->
  </span>`;
  })}`;
});
export {
  TextWithLineBreaks as T
};
