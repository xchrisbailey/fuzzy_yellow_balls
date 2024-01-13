import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { t as title_case } from "../../../../../../../chunks/title_case.js";
import { R as Review_form } from "../../../../../../../chunks/review_form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 leading-relaxed">Review ${escape(title_case(data.string.name))} by ${escape(title_case(data.string.brand.name))}</h1> ${validate_component(Review_form, "ReviewForm").$$render($$result, { data: data.form }, {}, {})}`;
});
export {
  Page as default
};
