import { c as create_ssr_component, a as add_attribute } from "../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal.svelte-1qfvi74{display:flex;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4);align-items:center;justify-content:center}.modal-content.svelte-1qfvi74{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%}.modal-footer.svelte-1qfvi74{border-top:0px}",
  map: null
};
function load({ data }) {
  if (data.isAuthenticated) {
    return { status: 302, redirect: "/home" };
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAuthenticated } = $$props;
  let password = "";
  let showModal = !isAuthenticated;
  if ($$props.isAuthenticated === void 0 && $$bindings.isAuthenticated && isAuthenticated !== void 0)
    $$bindings.isAuthenticated(isAuthenticated);
  $$result.css.add(css);
  return `${showModal ? `<div class="modal show svelte-1qfvi74" style="display: block;"><div class="modal-dialog modal-dialog-centered"><div class="modal-content svelte-1qfvi74"><div class="modal-header"><h5 class="modal-title">Enter Password to Proceed</h5>
          <button type="button" class="btn btn-close" aria-label="Close"><span aria-hidden="true"></span></button></div>
        <div class="modal-body"><input type="password" class="form-control" placeholder="Enter password"${add_attribute("value", password, 0)}></div>
        <div class="modal-footer svelte-1qfvi74"><button type="button" class="btn btn-primary">Submit</button></div></div></div></div>
  <style>.navbar, .footer {
      display: none !important;
    }
  </style>` : ``}`;
});
export {
  Page as default,
  load
};
