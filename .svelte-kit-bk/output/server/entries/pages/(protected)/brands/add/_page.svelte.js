import { c as create_ssr_component, l as subscribe, i as spread, k as escape_object, b as add_attribute, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { s as superForm } from "../../../../../chunks/index3.js";
import { g as getToastStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const New_brand_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
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
          window.history.back();
        }
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `<form method="POST"><label><span data-svelte-h="svelte-15ueaex">Name</span> <input${spread(
    [
      { class: "input" },
      { type: "text" },
      { name: "name" },
      escape_object($constraints.name)
    ],
    {}
  )}${add_attribute("value", $form.name, 0)}></label> <label class="label"><span data-svelte-h="svelte-1poeibp">About</span> <textarea${spread(
    [
      { name: "about" },
      { cols: "30" },
      { rows: "10" },
      { class: "textarea" },
      escape_object($constraints.about)
    ],
    {}
  )}>${escape($form.about || "")}</textarea></label> <button class="variant-glass-primary btn" data-svelte-h="svelte-1ge8q3s">Add Brand</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(New_brand_form, "NewBrandForm").$$render($$result, { data: data.form }, {}, {})}`;
});
export {
  Page as default
};
