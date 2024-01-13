import { c as create_ssr_component, o as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../chunks/card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-1 gap-4 md:grid-cols-2"><section class="flex flex-col gap-4"><h2 class="gradient-heading-pink h2" data-svelte-h="svelte-1grbtrt">String Reviews</h2> ${!data.reviews ? `<p class="text-warning-500" data-svelte-h="svelte-13258q1">you have not reviews anything yet!</p>` : `${each(data.reviews, (review) => {
    return `${validate_component(Card, "ReviewCard").$$render(
      $$result,
      {
        user_id: data.session?.user.userId,
        review,
        header: true
      },
      {},
      {}
    )}`;
  })}`}</section> <section class="flex flex-col gap-4" data-svelte-h="svelte-7uiv4z"><h2 class="gradient-heading-pink h2">Racket Reviews</h2></section></div>`;
});
export {
  Page as default
};
