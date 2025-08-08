import { z as ensure_array_like, x as bind_props, v as pop, t as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like(data.posts);
  $$payload.out.push(`<section class="px-6 py-12 max-w-4xl mx-auto"><h1 class="text-2xl font-semibold mb-6">Posts</h1> <ul class="space-y-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let p = each_array[$$index];
    $$payload.out.push(`<li class="border border-black/10 rounded p-4"><h2 class="font-medium">${escape_html(p.title)}</h2> `);
    if (p.excerpt) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="text-sm text-muted">${escape_html(p.excerpt)}</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> `);
    if (p.publishedAt) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="text-xs text-muted mt-1">${escape_html(new Date(p.publishedAt).toLocaleDateString())}</p>`);
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
