import { c as create_ssr_component, l as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { g as getToastStore } from "./ProgressBar.svelte_svelte_type_style_lang.js";
import { s as superForm, g as goto } from "./index3.js";
import { S as Star_rating } from "./star_rating.js";
import { p as page } from "./stores.js";
const Racket_review_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $form, $$unsubscribe_form;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const toast = getToastStore();
  const racket_id = $page.params.racket_id;
  const { form, enhance } = superForm(data, {
    async onUpdated({ form: form2 }) {
      if (form2.message) {
        toast.trigger({
          message: form2.message.text,
          background: form2.message.type === "error" ? "variant-filled-error" : "variant-filled-success"
        });
        if (form2.message.type === "success") {
          await goto(`/rackets/${racket_id}`);
        }
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form method="POST"><div class="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "groundstrokes",
        max: 5,
        step: 1,
        value: $form.groundstrokes
      },
      {
        value: ($$value) => {
          $form.groundstrokes = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "volleys",
        max: 5,
        step: 1,
        value: $form.volleys
      },
      {
        value: ($$value) => {
          $form.volleys = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "serves",
        max: 5,
        step: 1,
        value: $form.serves
      },
      {
        value: ($$value) => {
          $form.serves = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "returns",
        max: 5,
        step: 1,
        value: $form.returns
      },
      {
        value: ($$value) => {
          $form.returns = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "power",
        max: 5,
        step: 1,
        value: $form.power
      },
      {
        value: ($$value) => {
          $form.power = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "control",
        max: 5,
        step: 1,
        value: $form.control
      },
      {
        value: ($$value) => {
          $form.control = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "maneuverability",
        max: 5,
        step: 1,
        value: $form.maneuverability
      },
      {
        value: ($$value) => {
          $form.maneuverability = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "stability",
        max: 5,
        step: 1,
        value: $form.stability
      },
      {
        value: ($$value) => {
          $form.stability = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "comfort",
        max: 5,
        step: 1,
        value: $form.comfort
      },
      {
        value: ($$value) => {
          $form.comfort = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "feel",
        max: 5,
        step: 1,
        value: $form.feel
      },
      {
        value: ($$value) => {
          $form.feel = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "topspin",
        max: 5,
        step: 1,
        value: $form.topspin
      },
      {
        value: ($$value) => {
          $form.topspin = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "slice",
        max: 5,
        step: 1,
        value: $form.slice
      },
      {
        value: ($$value) => {
          $form.slice = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <label class="label"><span data-svelte-h="svelte-ki1h94">Comments</span> <textarea name="comments" cols="30" rows="10" class="textarea">${escape($form.comments || "")}</textarea></label> <button class="variant-glass-primary btn" data-svelte-h="svelte-187i48v">Add Review</button></form>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_form();
  return $$rendered;
});
export {
  Racket_review_form as R
};
