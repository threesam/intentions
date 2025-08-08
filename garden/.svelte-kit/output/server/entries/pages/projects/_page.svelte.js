import { z as ensure_array_like, x as bind_props, v as pop, t as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.projects);
  $$payload.out.push(`<section class="px-6 py-12 max-w-4xl mx-auto"><h1 class="text-2xl font-semibold mb-6">Projects</h1> <ul class="space-y-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let p = each_array[$$index];
    $$payload.out.push(`<li class="border border-black/10 rounded p-4"><h2 class="font-medium">${escape_html(p.title)}</h2> `);
    if (p.summary) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="text-sm text-muted">${escape_html(p.summary)}</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></li>`);
  }
  $$payload.out.push(`<!--]--></ul></section>`);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
