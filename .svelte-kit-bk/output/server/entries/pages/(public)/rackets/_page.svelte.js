import { c as create_ssr_component, o as each, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { t as title_case } from "../../../../chunks/title_case.js";
import { E as Eye, P as Plus } from "../../../../chunks/plus.js";
import { P as Pen } from "../../../../chunks/pen.js";
const css = {
  code: ".add_action.svelte-ocbuqj{position:absolute;bottom:1rem;right:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 class="gradient-heading-pink h1 mb-3 leading-relaxed" data-svelte-h="svelte-193rx53">Tennis Rackets</h1> ${!data.rackets || data.rackets.length === 0 ? `<p data-svelte-h="svelte-jtd7w0">No rackets found</p>` : `<div class="table-container"><table class="table table-hover"><thead data-svelte-h="svelte-g9q9qh"><tr><th>Name</th> <th>Brand</th> <th>Year</th> <th>Weight</th> <th>Balance</th> <th>Head Size</th> <th>Swingweight</th> <th>String Pattern</th> <th></th></tr></thead> <tbody>${each(data.rackets, (racket) => {
    return `<tr><td>${escape(title_case(racket.name))}</td> <td>${escape(title_case(racket.brand.name))}</td> <td>${escape(racket.year)}</td> <td>${escape(`${racket.weight} ${racket.weight_unit}`)}</td> <td>${escape(racket.balance)} ${escape(racket.balance_unit === "points" ? "pts HL" : racket.balance_unit)}</td> <td>${escape(racket.head_size)}</td> <td>${escape(racket.swingweight)}</td> <td>${escape(`${racket.mains}M/${racket.crosses}C`)}</td> <td class="flex gap-3"><a href="${"/rackets/" + escape(racket.id, true)}" class="variant-soft-primary btn-icon btn-icon-sm">${validate_component(Eye, "Eye").$$render($$result, { class: "h-4 w-4" }, {}, {})}</a> ${data.session?.user?.role === "ADMIN" ? `<a href="${"/rackets/" + escape(racket.id, true) + "/update"}" class="variant-soft-secondary btn-icon btn-icon-sm">${validate_component(Pen, "Pen").$$render($$result, { class: "h-4 w-4" }, {}, {})} </a>` : ``}</td> </tr>`;
  })}</tbody></table></div>`} <div class="add_action svelte-ocbuqj"><a href="/rackets/add" class="variant-soft-tertiary btn btn-icon shadow">${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})}</a> </div>`;
});
export {
  Page as default
};
