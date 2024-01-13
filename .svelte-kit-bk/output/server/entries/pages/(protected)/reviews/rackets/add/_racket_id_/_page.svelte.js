import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { R as Racket_review_form } from "../../../../../../../chunks/racket_review_form.js";
import { t as title_case } from "../../../../../../../chunks/title_case.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 leading-relaxed">Review ${escape(title_case(data.racket.name))} by ${escape(title_case(data.racket.brand.name))}</h1> ${validate_component(Racket_review_form, "RacketReviewForm").$$render($$result, { data: data.form }, {}, {})}`;
});
export {
  Page as default
};
