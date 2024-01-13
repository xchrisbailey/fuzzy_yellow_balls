import { c as create_ssr_component, l as subscribe, v as validate_component, e as escape } from "./ssr.js";
import { S as Star_rating } from "./star_rating.js";
import { g as getToastStore } from "./ProgressBar.svelte_svelte_type_style_lang.js";
import { s as superForm } from "./index3.js";
const Review_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const toast = getToastStore();
  const { form, enhance } = superForm(data, {
    async onUpdated({ form: form2 }) {
      if (form2.message) {
        toast.trigger({
          message: form2.message.text,
          background: form2.message.type === "error" ? "variant-filled-error" : "variant-filled-success"
        });
        if (form2.message?.type === "success") {
          window.history.back();
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
        name: "durability",
        max: 5,
        step: 1,
        value: $form.durability
      },
      {
        value: ($$value) => {
          $form.durability = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Star_rating, "StarRating").$$render(
      $$result,
      {
        name: "spin",
        max: 5,
        step: 1,
        value: $form.spin
      },
      {
        value: ($$value) => {
          $form.spin = $$value;
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
        name: "playability",
        max: 5,
        step: 1,
        value: $form.playability
      },
      {
        value: ($$value) => {
          $form.playability = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <label class="label"><span data-svelte-h="svelte-ki1h94">Comments</span> <textarea name="comments" cols="30" rows="10" class="textarea">${escape($form.comments || "")}</textarea></label> <button class="variant-glass-primary btn" data-svelte-h="svelte-187i48v">Add Review</button></form>`;
  } while (!$$settled);
  $$unsubscribe_form();
  return $$rendered;
});
export {
  Review_form as R
};
