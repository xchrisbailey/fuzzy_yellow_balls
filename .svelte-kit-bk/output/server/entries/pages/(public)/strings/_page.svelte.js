import { c as create_ssr_component, o as each, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { t as title_case } from "../../../../chunks/title_case.js";
import { E as Eye, P as Plus } from "../../../../chunks/plus.js";
import { P as Pen } from "../../../../chunks/pen.js";
function get_average_rating(reviews) {
  if (!reviews)
    return "-";
  const average = (reviews.map((review) => {
    return (review.power + review.control + review.feel + review.spin + review.comfort + review.durability + review.playability) / 7;
  }).reduce((a, b) => a + b, 0) / reviews.length).toFixed(2);
  if (isNaN(Number(average)))
    return "-";
  return average;
}
const css = {
  code: ".add_action.svelte-ocbuqj{position:absolute;bottom:1rem;right:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 class="gradient-heading-pink h1 mb-3 leading-relaxed" data-svelte-h="svelte-ydx44e">Tennis Strings</h1> ${!data.strings || data.strings.length === 0 ? `<p data-svelte-h="svelte-1fwq8mg">no tennis strings added yet</p>` : `<div class="table-container"><table class="table table-hover"><thead data-svelte-h="svelte-ipoqii"><tr><th>Brand</th> <th>Name</th> <th>Material</th> <th>Description</th> <th>Rating</th> <th></th></tr></thead> <tbody>${each(data.strings, (string) => {
    return `<tr><td>${escape(title_case(string.brand.name))}</td> <td>${escape(title_case(string.name))}</td> <td>${escape(title_case(string.material))}</td> <td><p class="whitespace-pre-line">${escape(string.description)}</p></td> <td>${escape(get_average_rating(string.reviews))}/5</td> <td class="flex gap-3"><a href="${"/strings/" + escape(string.id, true)}" class="variant-soft-primary btn-icon btn-icon-sm">${validate_component(Eye, "Eye").$$render($$result, { class: "h-4 w-4" }, {}, {})}</a> ${data.session?.user?.role === "ADMIN" ? `<a href="${"/strings/" + escape(string.id, true) + "/update"}" class="variant-soft-secondary btn-icon btn-icon-sm">${validate_component(Pen, "Pen").$$render($$result, { class: "h-4 w-4" }, {}, {})} </a>` : ``}</td> </tr>`;
  })}</tbody></table></div>`} <div class="add_action svelte-ocbuqj"><a href="/strings/add" class="variant-soft-tertiary btn btn-icon shadow">${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})}</a> </div>`;
});
export {
  Page as default
};
