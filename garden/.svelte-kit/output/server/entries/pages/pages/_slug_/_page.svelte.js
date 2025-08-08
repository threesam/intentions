import { x as bind_props, v as pop, t as push } from "../../../../chunks/index.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out.push(`<section class="px-6 py-12 max-w-3xl mx-auto"><h1 class="text-2xl font-semibold mb-4">${escape_html(data.page.title)}</h1> <div class="prose prose-neutral max-w-none"><p class="text-muted">This is a placeholder. Connect Portable Text renderer later.</p></div></section>`);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
