// Slow three-layer starfield behind the hero. It's the only continuous motion on the page,
// and it freezes into a still sky when the visitor prefers reduced motion.

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  layer: number;
}

const LAYERS = [
  { count: 0.00012, speed: 0.004, size: [0.4, 0.9] },
  { count: 0.00006, speed: 0.009, size: [0.8, 1.3] },
  { count: 0.00002, speed: 0.016, size: [1.2, 1.9] },
];

export function startStarfield(canvas: HTMLCanvasElement, reduce: boolean) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0;
  let h = 0;
  let stars: Star[] = [];
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const build = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = [];
    LAYERS.forEach((L, layer) => {
      const n = Math.round(w * h * L.count);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: L.size[0] + Math.random() * (L.size[1] - L.size[0]),
          a: 0.35 + Math.random() * 0.6,
          tw: Math.random() * Math.PI * 2,
          layer,
        });
      }
    });
  };

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => (scrollY = window.scrollY), { passive: true });

  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const L = LAYERS[s.layer];
      // Drift left slowly; nearer layers move faster and shift a little with scroll for depth.
      const x = (((s.x - t * L.speed) % w) + w) % w;
      const y = (((s.y - scrollY * (0.03 + s.layer * 0.04)) % h) + h) % h;
      const twinkle = reduce ? 1 : 0.75 + 0.25 * Math.sin(t * 0.0012 + s.tw);
      ctx.globalAlpha = s.a * twinkle;
      ctx.fillStyle = s.layer === 2 && s.tw > 5.4 ? '#FFB15C' : s.layer === 1 && s.tw < 0.6 ? '#B9A8FF' : '#E8ECFF';
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  build();
  window.addEventListener('resize', () => {
    build();
    if (reduce) draw(0);
  });

  if (reduce) {
    draw(0);
    return;
  }
  let visible = true;
  document.addEventListener('visibilitychange', () => (visible = !document.hidden));
  const loop = (t: number) => {
    if (visible) draw(t);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
