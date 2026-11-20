import './style.css';
import { PERSON, SCOUT } from './content';
import { startStarfield } from './stars';

const back = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
const S = SCOUT;

const figure = (src: string, caption: string) =>
  `<figure class="cs-fig"><img src="${src}" alt="${caption}" loading="lazy" /><figcaption>${caption}</figcaption></figure>`;

const html = `
<header class="nav-wrap">
  <nav class="nav" aria-label="Main">
    <a class="brand" href="./index.html" aria-label="Back to portfolio"><span class="brand-dot"></span></a>
    <a class="btn ghost sm cs-back" href="./index.html#creative">${back}Back to portfolio</a>
  </nav>
</header>
<main>
  <section class="cs-hero">
    <div class="wrap">
      <p class="eyebrow hero-in" style="--d:0ms">${S.eyebrow}</p>
      <h1 class="cs-title hero-in" style="--d:80ms"><span class="grad">${S.title}</span></h1>
      <p class="cs-hook hero-in" style="--d:160ms">${S.hook}</p>
      <dl class="cs-facts hero-in" style="--d:240ms">
        ${S.facts.map((f) => `<div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join('')}
      </dl>
      <figure class="cs-cover hero-in" style="--d:320ms">
        <img src="${S.cover.img}" alt="${S.cover.caption}" width="1600" height="912" />
        <figcaption>${S.cover.caption}</figcaption>
      </figure>
    </div>
  </section>

  <section class="band cs-band">
    <div class="wrap cs-two">
      <div class="reveal"><p class="eyebrow">The challenge</p><p class="cs-text">${S.challenge}</p></div>
      <div class="reveal"><p class="eyebrow">How I worked</p><p class="cs-text">${S.role}</p></div>
    </div>
  </section>

  <section class="band alt cs-band">
    <div class="wrap">
      <header class="sec-head reveal"><p class="eyebrow">The process</p><h2>From brief to printable parts.</h2></header>
      <ol class="cs-steps">
        ${S.steps
          .map(
            (s, i) => `<li class="cs-step reveal">
          <div class="cs-step-text"><p class="work-num">0${i + 1}</p><h3>${s.title}</h3><p>${s.text}</p></div>
          <div class="cs-step-media ${s.imgs.length > 1 ? 'pair' : ''}">${s.imgs.map((m) => figure(m.src, m.caption)).join('')}</div>
        </li>`,
          )
          .join('')}
      </ol>
    </div>
  </section>

  <section class="band cs-band">
    <div class="wrap">
      <header class="sec-head reveal"><p class="eyebrow">Key decisions</p><h2>What I chose, and what it cost.</h2></header>
      <div class="cs-decisions">
        ${S.decisions.map((d) => `<div class="card reveal"><h3>${d.k}</h3><p>${d.v}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="band alt cs-band">
    <div class="wrap cs-two">
      <div class="reveal">
        <p class="eyebrow">What I learned</p>
        <ul class="cs-list">${S.learned.map((l) => `<li>${l}</li>`).join('')}</ul>
      </div>
      <div class="reveal">
        <p class="eyebrow"><span class="live-dot"></span>Next</p>
        <p class="cs-text">${S.next}</p>
        <div class="btn-row cs-end"><a class="btn primary" href="./index.html#creative">${back}Back to portfolio</a></div>
        <p class="fineprint">${S.fineprint}</p>
      </div>
    </div>
  </section>
</main>
<footer class="footer">
  <div class="wrap footer-inner">
    <p>© 2026 ${PERSON.first} ${PERSON.last}</p>
    <a href="#" class="text-link">Back to top ↑</a>
  </div>
</footer>`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
startStarfield(document.querySelector<HTMLCanvasElement>('#stars')!, reduce);

const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  reveals.forEach((el) => io.observe(el));
}

const navWrap = document.querySelector<HTMLElement>('.nav-wrap')!;
const onScroll = () => navWrap.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
