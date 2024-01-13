import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "./ssr.js";
import { t as title_case } from "./title_case.js";
import { I as Icon } from "./Icon.js";
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
      }
    ],
    ["path", { "d": "m15 5 4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pencil" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pencil$1 = Pencil;
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star$1 = Star;
const Racket_fields = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { review } = $$props;
  if ($$props.review === void 0 && $$bindings.review && review !== void 0)
    $$bindings.review(review);
  return `<div class="flex items-center gap-1">groundstrokes: ${each(Array(review.groundstrokes), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">volleys: ${each(Array(review.volleys), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">serves: ${each(Array(review.serves), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">returns: ${each(Array(review.returns), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">power: ${each(Array(review.power), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">control: ${each(Array(review.control), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">maneuverability: ${each(Array(review.maneuverability), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">stability: ${each(Array(review.stability), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">comfort: ${each(Array(review.comfort), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">feel: ${each(Array(review.feel), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">topspin: ${each(Array(review.topspin), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-1">slice: ${each(Array(review.slice), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div>`;
});
const String_fields = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { review } = $$props;
  if ($$props.review === void 0 && $$bindings.review && review !== void 0)
    $$bindings.review(review);
  return `<div class="flex items-center gap-1">comfort: ${each(Array(review.comfort), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">power: ${each(Array(review.power), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">feel: ${each(Array(review.feel), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">control: ${each(Array(review.control), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">durability: ${each(Array(review.durability), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">spin: ${each(Array(review.spin), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div> <div class="flex items-center gap-2">playability: ${each(Array(review.playability), (id) => {
    return `${validate_component(Star$1, "Star").$$render($$result, { id, class: "h-4 w-4" }, {}, {})}`;
  })}</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user_id } = $$props;
  let { review } = $$props;
  let { header = false } = $$props;
  const isRacketReview = (review2) => {
    return review2.racket_id !== void 0;
  };
  const isStringReview = (review2) => {
    return review2.string_id !== void 0;
  };
  if ($$props.user_id === void 0 && $$bindings.user_id && user_id !== void 0)
    $$bindings.user_id(user_id);
  if ($$props.review === void 0 && $$bindings.review && review !== void 0)
    $$bindings.review(review);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  return `<article class="card variant-glass p-4">${header && isStringReview(review) ? `<h3 class="gradient-heading-red h3 mb-1">${escape(title_case(review.string.name))} by ${escape(title_case(review.string.brand.name))}</h3>` : `${header && isRacketReview(review) ? `<h3 class="gradient-heading-red h3 mb-1">${escape(title_case(review.racket.name))} by ${escape(title_case(review.racket.brand.name))}</h3>` : ``}`} ${isStringReview(review) ? `<h4 class="h4" data-svelte-h="svelte-1clerm6">Rating</h4> <div class="gird-cols-1 mt-1 grid gap-1 md:grid-cols-2">${validate_component(String_fields, "StringFields").$$render($$result, { review }, {}, {})}</div>` : `${isRacketReview(review) ? `<h4 class="h4" data-svelte-h="svelte-1clerm6">Rating</h4> <div class="gird-cols-1 mt-1 grid gap-1 md:grid-cols-2">${validate_component(Racket_fields, "RacketFields").$$render($$result, { review }, {}, {})}</div>` : ``}`} <hr class="my-3 divide-gray-200"> <h4 class="h4" data-svelte-h="svelte-184pzkj">Reviewer Notes</h4> <p>${escape(review.comments)}</p> <div class="flex justify-end">${review.user_id === user_id && isStringReview(review) ? `<a href="${"/reviews/strings/update/" + escape(review.id, true)}" class="variant-ghost-primary btn-icon btn-icon-sm">${validate_component(Pencil$1, "Pencil").$$render($$result, { class: "h-4 w-4" }, {}, {})}</a>` : `${review.user_id === user_id && isRacketReview(review) ? `<a href="${"/reviews/rackets/update/" + escape(review.id, true)}" class="variant-ghost-primary btn-icon btn-icon-sm">${validate_component(Pencil$1, "Pencil").$$render($$result, { class: "h-4 w-4" }, {}, {})}</a>` : ``}`}</div></article>`;
});
export {
  Card as C,
  Pencil$1 as P
};
