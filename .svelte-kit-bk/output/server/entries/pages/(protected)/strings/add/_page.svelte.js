import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { S as String_form } from "../../../../../chunks/string_form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 leading-relaxed" data-svelte-h="svelte-u4oo5t">Add A String</h1> ${validate_component(String_form, "StringForm").$$render($$result, { brands: data.brands, data: data.form }, {}, {})}`;
});
export {
  Page as default
};
