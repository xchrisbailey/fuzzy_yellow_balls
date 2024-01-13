import { c as create_ssr_component, l as subscribe, i as spread, k as escape_object, b as add_attribute, o as each, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { g as getToastStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { s as superForm, g as goto } from "../../../../../chunks/index3.js";
const Racket_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { brands } = $$props;
  let { data } = $$props;
  const id = $page.params.id;
  const toast = getToastStore();
  const { form, enhance, constraints } = superForm(data, {
    async onUpdated({ form: form2 }) {
      if (form2.message) {
        toast.trigger({
          message: form2.message.text,
          background: form2.message.type === "error" ? "variant-filled-error" : "variant-filled-success"
        });
      }
      if (form2.message?.type === "success") {
        await goto(`/rackets/${id}`);
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  if ($$props.brands === void 0 && $$bindings.brands && brands !== void 0)
    $$bindings.brands(brands);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `<form method="POST" class="flex flex-col gap-4"><label class="label"><span data-svelte-h="svelte-15ueaex">Name</span> <input${spread(
    [
      { type: "text" },
      { name: "name" },
      { class: "input" },
      escape_object($constraints.name)
    ],
    {}
  )}${add_attribute("value", $form.name, 0)}></label> <label class="label"><span data-svelte-h="svelte-ycuka8">Model Year</span> <input${spread(
    [
      { type: "number" },
      { name: "year" },
      { class: "input" },
      escape_object($constraints.year)
    ],
    {}
  )}${add_attribute("value", $form.year, 0)}></label> <label class="label"><span data-svelte-h="svelte-ue7njp">Brand</span> <select${spread(
    [
      { name: "brand_id" },
      { class: "select" },
      escape_object($constraints.brand_id)
    ],
    {}
  )}>${each(brands, (brand) => {
    return `<option${add_attribute("value", brand.id, 0)}>${escape(brand.name)}</option>`;
  })}</select> <span class="text-sm"><a${add_attribute("href", `/brands/add?return_to=${$page.url.pathname}`, 0)}>add brand</a></span></label> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><label class="label flex-grow"><span data-svelte-h="svelte-1ovkba2">Weight</span> <div class="input-group input-group-divider grid-cols-[1fr_auto]"><input${spread(
    [
      { type: "number" },
      { name: "weight" },
      escape_object($constraints.weight),
      { class: "input flex-grow" }
    ],
    {}
  )}${add_attribute("value", $form.weight, 0)}> <select name="weight_unit" class="select"><option value="grams" data-svelte-h="svelte-1nphule">Grams</option><option value="ounces" data-svelte-h="svelte-1eakli2">Ounces</option></select></div></label> <label class="label flex-grow"><span data-svelte-h="svelte-1p76sne">Balance</span> <div class="input-group input-group-divider grid-cols-[1fr_auto]"><input${spread(
    [
      { type: "number" },
      { name: "balance" },
      escape_object($constraints.balance),
      { class: "input flex-grow" }
    ],
    {}
  )}${add_attribute("value", $form.balance, 0)}> <select name="balance_unit" class="select"><option value="points" data-svelte-h="svelte-1hqvq3k">Points HL</option><option value="inches" data-svelte-h="svelte-i6ldzy">Inches</option><option value="centimeters" data-svelte-h="svelte-1wrcu9c">Centimeters</option></select></div></label> <label class="label flex-grow"><span data-svelte-h="svelte-dkgvgg">Head Size (inches)</span> <input${spread(
    [
      { type: "number" },
      { name: "head_size" },
      { class: "input" },
      escape_object($constraints.head_size)
    ],
    {}
  )}${add_attribute("value", $form.head_size, 0)}></label> <label class="label flex-grow"><span data-svelte-h="svelte-9d8hew">Swingweight</span> <input${spread(
    [
      { type: "number" },
      { name: "swingweight" },
      { class: "input" },
      escape_object($constraints.swingweight)
    ],
    {}
  )}${add_attribute("value", $form.swingweight, 0)}></label></div> <div class="rounded border border-surface-500/20 bg-surface-400/20 p-4"><span class="text-lg font-bold" data-svelte-h="svelte-xc42yq">String Pattern</span> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><label class="label"><span data-svelte-h="svelte-1s01dck">Mains</span> <input${spread(
    [
      { type: "number" },
      { name: "mains" },
      { class: "input" },
      escape_object($constraints.mains)
    ],
    {}
  )}${add_attribute("value", $form.mains, 0)}></label> <label class="label"><span data-svelte-h="svelte-x862vq">Crosses</span> <input${spread(
    [
      { type: "number" },
      { name: "crosses" },
      { class: "input" },
      escape_object($constraints.crosses)
    ],
    {}
  )}${add_attribute("value", $form.crosses, 0)}></label></div></div> <label class="label"><span data-svelte-h="svelte-rmspr8">Description</span> <textarea${spread(
    [
      { class: "textarea" },
      { name: "description" },
      escape_object($constraints.description),
      { cols: "30" },
      { rows: "10" }
    ],
    {}
  )}>${escape($form.description || "")}</textarea></label> <button class="variant-ghost-primary btn" data-svelte-h="svelte-1705h7c">Add</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Racket_form, "RacketForm").$$render($$result, { brands: data.brands, data: data.form }, {}, {})}`;
});
export {
  Page as default
};
