import "clsx";
import { v as pop, t as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<section class="px-6 py-20 grid place-items-center"><div class="max-w-4xl w-full grid gap-10"><header class="grid gap-2"><h1 class="text-3xl md:text-5xl font-semibold">Digital Garden</h1> <p class="text-muted max-w-prose">Thoughts, projects, and notes. Built with SvelteKit, Tailwind, Sanity, and a Rust Game of Life hero.</p></header> <div class="border border-black/10 rounded-lg p-4 overflow-x-auto"><canvas class="block mx-auto"></canvas> <p class="sr-only">Conway's Game of Life animation</p></div></div></section>`);
  pop();
}
export {
  _page as default
};
