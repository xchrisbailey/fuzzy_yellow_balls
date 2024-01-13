import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../chunks/ssr.js";
import { t as title_case } from "../../../../../../chunks/title_case.js";
import { S as String_form } from "../../../../../../chunks/string_form.js";
function find_brand_by_id(id, brands) {
  const brand = brands.find((brand2) => brand2.id === id);
  return brand?.name || "Unknown";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 leading-relaxed">Update ${escape(title_case(data.form.data.name))} by
	${escape(title_case(find_brand_by_id(data.form.data.brand_id, data.brands)))}</h1> ${validate_component(String_form, "StringForm").$$render($$result, { data: data.form, brands: data.brands }, {}, {})}`;
});
export {
  Page as default
};
