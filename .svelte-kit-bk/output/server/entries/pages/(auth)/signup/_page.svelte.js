import { c as create_ssr_component, l as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { s as superForm, g as goto } from "../../../../chunks/index3.js";
import { g as getToastStore } from "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Signup_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<form method="POST" class="flex flex-col gap-4"><label class="label"><span data-svelte-h="svelte-1bg9cgq">Email</span> <input class="${"input " + escape($errors.email && "input-error", true)}"${add_attribute("aria-invalid", $errors.email ? "true" : void 0, 0)} id="email" name="email" type="email" placeholder="email address"${add_attribute("value", $form.email, 0)}> ${$errors.email ? `<span class="text-sm text-rose-500">${escape($errors.email)}</span>` : ``}</label> <label class="label"><span data-svelte-h="svelte-1nmk7y7">First Name</span> <input class="${"input " + escape($errors.first_name && "input-error", true)}"${add_attribute("aria-invalid", $errors.first_name ? "true" : void 0, 0)} id="first_name" name="first_name" type="text" placeholder="First Name"${add_attribute("value", $form.first_name, 0)}> ${$errors.first_name ? `<span class="text-sm text-rose-500">${escape($errors.first_name)}</span>` : ``}</label> <label class="label"><span data-svelte-h="svelte-cjy9jj">Last Name</span> <input class="${"input " + escape($errors.last_name && "input-error", true)}"${add_attribute("aria-invalid", $errors.last_name ? "true" : void 0, 0)} id="last_name" name="last_name" type="text" placeholder="Last Name"${add_attribute("value", $form.last_name, 0)}> ${$errors.last_name ? `<span class="text-sm text-rose-500">${escape($errors.last_name)}</span>` : ``}</label> <label class="label"><span data-svelte-h="svelte-1kvjhoz">Password</span> <input class="${"input " + escape($errors.password && "input-error", true)}"${add_attribute("aria-invalid", $errors.password ? "true" : void 0, 0)} id="password" name="password" type="password" placeholder="password"${add_attribute("value", $form.password, 0)}> ${$errors.password ? `<span class="text-sm text-rose-500">${escape($errors.password)}</span>` : ``}</label> <button class="variant-soft-primary btn" type="submit" data-svelte-h="svelte-z8jlli">Create Account</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto w-full md:w-2/3"><h1 class="gradient-heading-pink h1 mb-4 leading-relaxed" data-svelte-h="svelte-1bsgsmy">Sign Up</h1> ${validate_component(Signup_form, "SignupForm").$$render($$result, { data: data.form }, {}, {})} <p class="text-small text-primary mt-2 font-medium leading-none hover:underline" data-svelte-h="svelte-i0nnw6"><a href="/login">or login</a></p></div>`;
});
export {
  Page as default
};
