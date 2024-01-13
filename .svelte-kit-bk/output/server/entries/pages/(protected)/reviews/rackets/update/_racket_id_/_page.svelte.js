import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { R as Racket_review_form } from "../../../../../../../chunks/racket_review_form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Racket_review_form, "RacketReviewForm").$$render($$result, { data: data.form }, {}, {})}`;
});
export {
  Page as default
};
