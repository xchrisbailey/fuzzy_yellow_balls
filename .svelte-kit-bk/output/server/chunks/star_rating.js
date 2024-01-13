import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
import { t as title_case } from "./title_case.js";
const css = {
  code: `.rating.svelte-ahczgd{--dir:right;--fill:gold;--fillbg:rgba(100, 100, 100, 0.15);--star:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');--stars:5;--starsize:2rem;--symbol:var(--star);--value:1;--w:calc(var(--stars) * var(--starsize));--x:calc(100% * (var(--value) / var(--stars)));block-size:var(--starsize);inline-size:var(--w);position:relative;touch-action:manipulation;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none}.rating.svelte-ahczgd::-moz-range-track{background:linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));block-size:100%;mask:repeat left center/var(--starsize) var(--symbol)}.rating.svelte-ahczgd::-webkit-slider-runnable-track{background:linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));block-size:100%;mask:repeat left center/var(--starsize) var(--symbol);-webkit-mask:repeat left center/var(--starsize) var(--symbol)}.rating.svelte-ahczgd::-moz-range-thumb{height:var(--starsize);opacity:0;width:var(--starsize)}.rating.svelte-ahczgd::-webkit-slider-thumb{height:var(--starsize);opacity:0;width:var(--starsize);-webkit-appearance:none}.rating.svelte-ahczgd{display:block;font-family:ui-sans-serif, system-ui, sans-serif}.rating.svelte-ahczgd::-moz-range-track{background:var(--fillbg)}.rating.svelte-ahczgd::-moz-range-progress{background:var(--fill);block-size:100%;mask:repeat left center/var(--starsize) var(--star)}.rating.svelte-ahczgd::-webkit-slider-runnable-track{background:var(--fillbg)}.rating.svelte-ahczgd::-webkit-slider-thumb{background-color:var(--fill);box-shadow:calc(0rem - var(--w)) 0 0 var(--w) var(--fill);opacity:1;width:1px}`,
  map: null
};
const Star_rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { max } = $$props;
  let { step } = $$props;
  let { value = 0 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<label class="label"><span>${escape(title_case(name))}</span> <input type="range" class="rating svelte-ahczgd"${add_attribute("value", value, 0)}${add_attribute("step", step, 0)}${add_attribute("max", max, 0)}${add_attribute("name", name, 0)}> </label>`;
});
export {
  Star_rating as S
};
