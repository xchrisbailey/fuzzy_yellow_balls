import { c as create_ssr_component, e as escape, o as each, v as validate_component, b as add_attribute } from "../../../../../chunks/ssr.js";
import { htmlUnescape } from "escape-goat";
import { t as title_case } from "../../../../../chunks/title_case.js";
import { C as Card, P as Pencil } from "../../../../../chunks/card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 mb-4 leading-relaxed">${escape(data.racket.year)} ${escape(title_case(data.racket.name))} by ${escape(title_case(data.racket.brand.name))}</h1> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><section><article><h2 class="gradient-heading-blue h2 drop-shadow-sm" data-svelte-h="svelte-100v1hi">Info</h2> <p class="whitespace-pre-line py-2">${escape(data.racket.description)}</p></article> <hr class="my-5 divide-gray-50"> <article><h2 class="gradient-heading-blue h2 drop-shadow-sm" data-svelte-h="svelte-1nhxfk6">Specs</h2> <dl class="list-dl"><div><span class="badge bg-primary-500/20" data-svelte-h="svelte-1cvsk2a">✔️</span> <span class="flex-auto"><dt class="font-bold" data-svelte-h="svelte-15jjpi">Weight</dt> <dd>${escape(data.racket.weight)} ${escape(data.racket.weight_unit)}</dd></span></div></dl> <dl class="list-dl"><div><span class="badge bg-primary-500/20" data-svelte-h="svelte-1cvsk2a">✔️</span> <span class="flex-auto"><dt class="font-bold" data-svelte-h="svelte-rl116e">Balance</dt> <dd>${escape(data.racket.balance)} ${escape(data.racket.balance_unit === "points" ? "pts HL" : data.racket.balance_unit)}</dd></span></div></dl> <dl class="list-dl"><div><span class="badge bg-primary-500/20" data-svelte-h="svelte-1cvsk2a">✔️</span> <span class="flex-auto"><dt class="font-bold" data-svelte-h="svelte-36fwrj">Head Size</dt> <dd>${escape(data.racket.head_size)} Inches</dd></span></div></dl> <dl class="list-dl"><div><span class="badge bg-primary-500/20" data-svelte-h="svelte-1cvsk2a">✔️</span> <span class="flex-auto"><dt class="font-bold" data-svelte-h="svelte-1j8y5q4">Swingweight</dt> <dd>${escape(data.racket.swingweight)}</dd></span></div></dl> <dl class="list-dl"><div><span class="badge bg-primary-500/20" data-svelte-h="svelte-1cvsk2a">✔️</span> <span class="flex-auto"><dt class="font-bold" data-svelte-h="svelte-73150l">String Pattern</dt> <dd>${escape(data.racket.mains)} Mains / ${escape(data.racket.crosses)} Crosses</dd></span></div></dl></article></section> <section><div class="mb-4"><h2 class="gradient-heading-blue h2 mb-2 drop-shadow-sm" data-svelte-h="svelte-1ek53gq">User Reviews</h2> ${data.racket.reviews?.length > 0 ? `${each(data.racket.reviews, (review) => {
    return `${validate_component(Card, "ReviewCard").$$render(
      $$result,
      {
        user_id: data.session?.user.userId,
        review
      },
      {},
      {}
    )}`;
  })}` : `<p data-svelte-h="svelte-1o59nid">No reviews yet. Be the first!</p>`} <div class="mt-3 flex justify-center"><a href="${"/reviews/rackets/add/" + escape(data.racket.id.trimEnd(), true)}" class="variant-glass-primary btn">${validate_component(Pencil, "Pencil").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})}Add Review</a></div></div> <hr class="my-5 divide-gray-50"> <div><h2 class="gradient-heading-blue h2 mb-2 drop-shadow-sm" data-svelte-h="svelte-u406rk">YouTube Reviews</h2> <div class="space-y-4">${data.youtube_reviews.items.length > 0 ? `${each(data.youtube_reviews.items, (youtube_review) => {
    return `<article><h3><a${add_attribute("href", `https://www.youtube.com/watch?v=${youtube_review.id.videoId}`, 0)} target="_blank">${escape(htmlUnescape(youtube_review.snippet.title))} </a></h3> <p>${escape(youtube_review.snippet.description)}</p> </article>`;
  })}` : `<p data-svelte-h="svelte-17f5edd">no YouTube reviews found</p>`}</div></div></section></div>`;
});
export {
  Page as default
};
