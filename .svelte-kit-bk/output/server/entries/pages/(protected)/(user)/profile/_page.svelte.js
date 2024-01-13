import { c as create_ssr_component, l as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { t as title_case } from "../../../../../chunks/title_case.js";
import { s as superForm, g as goto } from "../../../../../chunks/index3.js";
import { g as getToastStore } from "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Profile_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const toast = getToastStore();
  const { form, errors, enhance } = superForm(data, {
    async onUpdated({ form: form2 }) {
      if (form2.message) {
        toast.trigger({
          message: form2.message.text,
          background: form2.message.type === "error" ? "variant-filled-error" : "variant-filled-success"
        });
        if (form2.message?.type === "success") {
          await goto("/profile");
        }
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return `<form method="POST" class="flex flex-col gap-4"><label class="label"><span data-svelte-h="svelte-1bg9cgq">Email</span> <input class="${"input variant-glass " + escape($errors.email && "input-error", true)}"${add_attribute("aria-invalid", $errors.email ? "true" : void 0, 0)} name="email" type="email" placeholder="email address"${add_attribute("value", $form.email, 0)}> ${$errors.email ? `<span class="text-sm text-rose-500">${escape($errors.email)}</span>` : ``}</label> <label class="label"><span data-svelte-h="svelte-1nmk7y7">First Name</span> <input class="${"input variant-glass " + escape($errors.first_name && "input-error", true)}"${add_attribute("aria-invalid", $errors.first_name ? "true" : void 0, 0)} name="first_name" type="text" placeholder="First Name"${add_attribute("value", $form.first_name, 0)}> ${$errors.first_name ? `<span class="text-sm text-rose-500">${escape($errors.first_name)}</span>` : ``}</label> <label class="label"><span data-svelte-h="svelte-cjy9jj">Last Name</span> <input class="${"input variant-glass " + escape($errors.last_name && "input-error", true)}"${add_attribute("aria-invalid", $errors.last_name ? "true" : void 0, 0)} name="last_name" type="text" placeholder="Last Name"${add_attribute("value", $form.last_name, 0)}> ${$errors.last_name ? `<span class="text-sm text-rose-500">${escape($errors.last_name)}</span>` : ``}</label> <button class="variant-soft-secondary btn" data-svelte-h="svelte-1i6onyu">Update Account</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="gradient-heading-pink h1 mb-3 leading-relaxed">Hello ${escape(title_case(data.session.user.first_name))}</h1> <section class="grid grid-cols-1 gap-5 md:grid-cols-2"><article data-svelte-h="svelte-hgfxvm"><h2 class="gradient-heading-red h2 leading-relaxed">Your reviews</h2></article> <article><h2 class="gradient-heading-red h2 leading-relaxed" data-svelte-h="svelte-7qmzga">Edit Your Profile</h2> ${validate_component(Profile_form, "ProfileForm").$$render($$result, { data: data.form }, {}, {})}</article></section>`;
});
export {
  Page as default
};
