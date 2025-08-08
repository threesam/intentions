<script lang="ts">
  import { onMount } from 'svelte';
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  // JS fallback mini life
  const cols = 80, rows = 40, cell = 8;
  let grid: Uint8Array = new Uint8Array(cols * rows);
  let raf = 0;

  function idx(x: number, y: number) { return y * cols + x; }
  function rnd() { return Math.random() > 0.7 ? 1 : 0; }
  function init() { for (let y=0;y<rows;y++) for (let x=0;x<cols;x++) grid[idx(x,y)] = rnd(); }
  function step() {
    const next = new Uint8Array(cols * rows);
    for (let y=0;y<rows;y++) for (let x=0;x<cols;x++) {
      let n=0; for (let dy=-1;dy<=1;dy++) for (let dx=-1;dx<=1;dx++) if (dx||dy) {
        const xx=(x+dx+cols)%cols, yy=(y+dy+rows)%rows; n += grid[idx(xx,yy)];
      }
      const alive = grid[idx(x,y)]===1;
      next[idx(x,y)] = (alive && (n===2||n===3)) || (!alive && n===3) ? 1 : 0;
    }
    grid = next;
  }
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-foreground').trim() || '#3b3c36';
    for (let y=0;y<rows;y++) for (let x=0;x<cols;x++) if (grid[idx(x,y)]) {
      ctx.fillRect(x*cell, y*cell, cell-1, cell-1);
    }
  }

  onMount(async () => {
    canvas.width = cols * cell; canvas.height = rows * cell;
    ctx = canvas.getContext('2d');
    init();
    const loop = () => { step(); draw(); raf = requestAnimationFrame(loop); };
    loop();
    return () => cancelAnimationFrame(raf);
  });
</script>

<section class="px-6 py-20 grid place-items-center">
  <div class="max-w-4xl w-full grid gap-10">
    <header class="grid gap-2">
      <h1 class="text-3xl md:text-5xl font-semibold">Digital Garden</h1>
      <p class="text-muted max-w-prose">Thoughts, projects, and notes. Built with SvelteKit, Tailwind, Sanity, and a Rust Game of Life hero.</p>
    </header>
    <div class="border border-black/10 rounded-lg p-4 overflow-x-auto">
      <canvas bind:this={canvas} class="block mx-auto"></canvas>
      <p class="sr-only">Conway's Game of Life animation</p>
    </div>
  </div>
</section>