import { c as create_ssr_component, l as subscribe, i as spread, k as escape_object, b as add_attribute, o as each, e as escape } from "./ssr.js";
import { s as superForm, g as goto } from "./index3.js";
import { p as page } from "./stores.js";
import { g as getToastStore } from "./ProgressBar.svelte_svelte_type_style_lang.js";
const String_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { brands } = $$props;
  let { data } = $$props;
  const toast = getToastStore();
  const { form, enhance, constraints } = superForm(data, {
    async onUpdated({ form: form2 }) {
      if (form2.message) {
        toast.trigger({
          message: form2.message.text,
          background: form2.message.type === "error" ? "variant-filled-error" : "variant-filled-success"
        });
        if (form2.message?.type === "success") {
          await goto(`/strings/`);
        }
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const materials = ["polyester", "multifilament", "natural gut", "synthetic gut"];
  if ($$props.brands === void 0 && $$bindings.brands && brands !== void 0)
    $$bindings.brands(brands);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  $$unsubscribe_page();
  return `<form method="POST" class="flex flex-col gap-4"><label class="label"><span data-svelte-h="svelte-15ueaex">Name</span> <input${spread(
    [
      { type: "text" },
      { name: "name" },
      { class: "input variant-glass-surface" },
      escape_object($constraints.name)
    ],
    {}
  )}${add_attribute("value", $form.name, 0)}></label> <label class="label"><span data-svelte-h="svelte-ue7njp">Brand</span> <select${spread(
    [
      { name: "brand_id" },
      { class: "select variant-glass-surface" },
      escape_object($constraints.brand_id)
    ],
    {}
  )}>${each(brands, (brand) => {
    return `<option${add_attribute("value", brand.id, 0)}>${escape(brand.name)}</option>`;
  })}</select> <span class="text-sm"><a${add_attribute("href", `/brands/add?return_to=${$page.url.pathname}`, 0)}>add brand</a></span></label> <label class="label"><span data-svelte-h="svelte-1obuo2z">Material</span> <select${spread(
    [
      { name: "material" },
      { class: "select variant-glass-surface" },
      escape_object($constraints.material)
    ],
    {}
  )}>${each(materials, (material) => {
    return `<option${add_attribute("value", material, 0)}>${escape(material)}</option>`;
  })}</select></label> <label class="label"><span data-svelte-h="svelte-rmspr8">Description</span> <textarea${spread(
    [
      { name: "description" },
      { cols: "30" },
      { rows: "10" },
      { class: "textarea variant-glass-surface" },
      escape_object($constraints.description)
    ],
    {}
  )}>${escape($form.description || "")}</textarea></label> <button class="variant-glass-primary btn" data-svelte-h="svelte-5bcvf6">Add String</button></form>`;
});
export {
  String_form as S
};
