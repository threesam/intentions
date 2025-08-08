import { w as slot, x as bind_props } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  const data = void 0;
  $$payload.out.push(`<div class="min-h-screen flex flex-col font-sans"><nav class="w-full py-4 px-6 flex items-center justify-between border-b border-black/10"><div class="text-lg font-semibold select-none">[Logo]</div></nav> <main class="flex-1"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main> <footer class="w-full border-t border-black/10 py-10 px-6 grid gap-6 sm:grid-cols-3"><div><p class="text-sm text-muted svelte-1bmdbxd">“Add a thoughtful quote here.”</p></div> <div><h2 class="font-medium mb-2 text-sm">Contact</h2> <ul class="space-y-1 text-sm"><li><a class="underline hover:no-underline" href="mailto:you@example.com">you@example.com</a></li></ul></div> <div><h2 class="font-medium mb-2 text-sm">Social</h2> <ul class="space-y-1 text-sm"><li><a class="underline hover:no-underline" href="/" aria-disabled="true">Twitter</a></li> <li><a class="underline hover:no-underline" href="/" aria-disabled="true">GitHub</a></li> <li><a class="underline hover:no-underline" href="/" aria-disabled="true">LinkedIn</a></li></ul></div></footer></div>`);
  bind_props($$props, { data });
}
export {
  _layout as default
};
