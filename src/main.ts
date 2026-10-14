import './style.css';
import { ABOUT, CERTS, CONNECT, CREATIVE, HERO, LINKS, PERSON, SKILLS, STORY, WORK, ph } from './content';
import { startStarfield } from './stars';

const ICON = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 11v6M9 14l3 3 3-3"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

const NAV = [
  ['about', 'About'],
  ['work', 'Work'],
  ['creative', 'Creative'],
  ['skills', 'Skills'],
  ['story', 'Story'],
  ['connect', 'Contact'],
];

// A button whose link isn't set yet renders as a dashed placeholder instead of a dead link.
function button(b: { label: string; href: string; primary?: boolean }) {
  const isGit = b.label === 'GitHub';
  if (!b.href) {
    return `<span class="btn ${b.primary ? 'primary' : 'ghost'} pending" title="Link added once the site is live on Netlify">${b.label}<small>link after deploy</small></span>`;
  }
  return `<a class="btn ${b.primary ? 'primary' : 'ghost'}" href="${b.href}" target="_blank" rel="noopener">${isGit ? ICON.github : ''}${b.label}${isGit ? '' : ICON.ext}</a>`;
}

function sectionHead(eyebrow: string, heading: string, intro = '') {
  return `<header class="sec-head reveal">
    <p class="eyebrow">${eyebrow}</p>
    <h2>${heading}</h2>
    ${intro ? `<p class="sec-intro">${intro}</p>` : ''}
  </header>`;
}

const header = `
<header class="nav-wrap">
  <nav class="nav" aria-label="Main">
    <a class="brand" href="#top" aria-label="Back to top"><span class="brand-dot"></span>${PERSON.first}</a>
    <div class="nav-links" id="nav-links">
      ${NAV.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}
    </div>
    <a class="btn primary sm nav-cta" href="#connect">Let's connect</a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">${ICON.menu}</button>
  </nav>
</header>`;

const hero = `
<section class="hero" id="top">
  <div class="wrap hero-inner">
    <div class="orbit hero-in" style="--d:300ms" aria-hidden="true">
      <div class="ring" style="--i:0%;--t:90s"><span class="sat" style="--c:#7C5CFF"></span></div>
      <div class="ring" style="--i:14%;--t:64s;rotate:140deg"><span class="sat" style="--c:#FF7A3D"></span></div>
      <div class="ring" style="--i:28%;--t:44s;rotate:250deg"><span class="sat" style="--c:#3DDCC0"></span></div>
      <div class="core"></div>
    </div>
    <p class="eyebrow hero-in" style="--d:0ms">${HERO.eyebrow}</p>
    <h1 class="hero-name hero-in" style="--d:80ms"><span class="grad shimmer">${PERSON.first}</span> <span class="last">${PERSON.last}</span></h1>
    <p class="hero-pitch hero-in" style="--d:160ms">${HERO.pitch}</p>
    <ul class="role-line hero-in" style="--d:240ms">${HERO.roles.map((r) => `<li>${r}</li>`).join('')}</ul>
    <div class="hero-ctas hero-in" style="--d:320ms">
      <a class="btn primary lg" href="#work">See my work ${ICON.arrow}</a>
      <a class="btn ghost lg" href="#connect">Let's connect</a>
    </div>
    <dl class="stats hero-in" style="--d:420ms">
      ${HERO.stats.map((s) => `<div class="stat"><dt>${s.label}</dt><dd>${s.n}</dd></div>`).join('')}
    </dl>
  </div>
  <a class="scroll-cue" href="#about" aria-label="Scroll to About"><span></span></a>
</section>`;

const about = `
<section class="band" id="about">
  <div class="wrap about-grid">
    <div>
      ${sectionHead('About me', ABOUT.heading)}
      <div class="prose reveal">${ABOUT.paragraphs.map((p) => `<p>${p}</p>`).join('')}</div>
    </div>
    <aside class="card currently reveal">
      <p class="card-label"><span class="live-dot"></span>Currently</p>
      <ul>${ABOUT.currently.map((c) => `<li>${c}</li>`).join('')}</ul>
    </aside>
  </div>
</section>`;

const work = `
<section class="band alt" id="work">
  <div class="wrap">
    ${sectionHead('My work', 'Products, from problem to result.', "Each project starts with a real business question. Here's the problem, what I built, and what it shows.")}
    <div class="work-list">
      ${WORK.map(
        (w, i) => `
      <article class="work-card accent-${w.accent} reveal ${i % 2 ? 'flip' : ''}">
        <div class="work-media">
          <img src="${w.img}" alt="Screenshot of ${w.title}" width="1440" height="900" />
        </div>
        <div class="work-body">
          <p class="work-num">${w.num}</p>
          <h3>${w.title}</h3>
          <p class="work-tag">${w.tagline}</p>
          <dl class="work-detail">
            <div><dt>The problem</dt><dd>${w.problem}</dd></div>
            <div><dt>What I did</dt><dd>${w.did}</dd></div>
          </dl>
          <ul class="chips">${w.chips.map((c) => `<li>${c}</li>`).join('')}</ul>
          <div class="btn-row">${w.buttons.map(button).join('')}</div>
        </div>
      </article>`,
      ).join('')}
    </div>
  </div>
</section>`;

const f = CREATIVE.featured;
const creative = `
<section class="band" id="creative">
  <div class="wrap">
    ${sectionHead('Creative projects', CREATIVE.heading, CREATIVE.intro)}
    <article class="feature-card reveal">
      <div class="feature-media"><img src="${f.img}" alt="3D view of Tomorrowland Reimagined" width="1440" height="900" /></div>
      <div class="feature-body">
        <p class="eyebrow">Featured</p>
        <h3>${f.title}</h3>
        <p class="work-tag">${f.tagline}</p>
        <p class="feature-desc">${f.description}</p>
        <ul class="chips">${f.chips.map((c) => `<li>${c}</li>`).join('')}</ul>
        <div class="btn-row">${f.buttons.map(button).join('')}</div>
        <p class="fineprint">${f.fineprint}</p>
      </div>
    </article>
    <article class="card mini-card reveal">
      <h3>${CREATIVE.second.title}</h3>
      <p class="work-tag">${CREATIVE.second.tagline}</p>
      <p>${CREATIVE.second.description}</p>
    </article>
  </div>
</section>`;

const skills = `
<section class="band alt" id="skills">
  <div class="wrap">
    ${sectionHead('Skills', 'What I bring to a team.')}
    <div class="skills-grid">
      ${SKILLS.map(
        (s) => `<div class="card skill-card reveal"><h3>${s.group}</h3><ul class="chips">${s.chips.map((c) => `<li>${c}</li>`).join('')}</ul></div>`,
      ).join('')}
    </div>
  </div>
</section>`;

const certs = `
<section class="band" id="certifications">
  <div class="wrap">
    ${sectionHead('Certifications', 'Verified, not just listed.')}
    <div class="cert-grid">
      ${CERTS.map(
        (c) => `<div class="card cert-card reveal">
          <span class="cert-badge">${ICON.check}</span>
          <h3>${c.name}</h3>
          <p>${c.issuer} · ${c.date}</p>
          ${c.url ? `<a class="text-link" href="${c.url}" target="_blank" rel="noopener">Verify ${ICON.ext}</a>` : `<span class="text-link muted">Verify ${ph('link')}</span>`}
        </div>`,
      ).join('')}
    </div>
  </div>
</section>`;

const story = `
<section class="band story-band" id="story">
  <div class="wrap">
    ${sectionHead('My story', 'How I got here.')}
    <ol class="timeline">
      ${STORY.map(
        (s) => `<li class="reveal"><span class="tl-dot"></span><p class="tl-when">${s.when}</p><h3>${s.title}</h3><p>${s.text}</p></li>`,
      ).join('')}
    </ol>
  </div>
</section>`;

function contactLink(icon: string, label: string, value: string, href: string) {
  if (!href) return `<span class="contact-link pending">${icon}<span><b>${label}</b>${value}</span></span>`;
  return `<a class="contact-link" href="${href}" target="_blank" rel="noopener">${icon}<span><b>${label}</b>${value}</span></a>`;
}

const connect = `
<section class="band" id="connect">
  <div class="wrap">
    <div class="connect-card reveal">
      <p class="eyebrow">Let's connect</p>
      <h2>${CONNECT.heading}</h2>
      <p class="sec-intro">${CONNECT.text}</p>
      <div class="contact-grid">
        ${contactLink(ICON.mail, 'Email me', LINKS.email || ph('your email'), LINKS.email ? `mailto:${LINKS.email}` : '')}
        ${contactLink(ICON.linkedin, 'LinkedIn', LINKS.linkedin ? 'View profile' : ph('profile link'), LINKS.linkedin)}
        ${contactLink(ICON.github, 'GitHub', 'github.com/bryanjoel11', LINKS.github)}
        ${contactLink(ICON.file, 'Résumé', LINKS.resume ? 'Download PDF' : ph('PDF'), LINKS.resume)}
      </div>
    </div>
  </div>
</section>`;

const footer = `
<footer class="footer">
  <div class="wrap footer-inner">
    <p>© 2026 ${PERSON.first} ${PERSON.last}</p>
    <a href="#top" class="text-link">Back to top ↑</a>
  </div>
</footer>`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  header + `<main>${hero}${about}${work}${creative}${skills}${certs}${story}${connect}</main>` + footer;

// ---------- behaviour ----------
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
startStarfield(document.querySelector<HTMLCanvasElement>('#stars')!, reduce);

// Scroll reveal: once per element, with a small stagger for items in the same grid.
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = `${Math.max(0, siblings.indexOf(el)) * 80}ms`;
        el.classList.add('in');
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  reveals.forEach((el) => io.observe(el));
}

// Nav: solid background after scrolling, active section highlight, mobile menu.
const navWrap = document.querySelector<HTMLElement>('.nav-wrap')!;
const onScroll = () => navWrap.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav]');
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('active', l.dataset.nav === e.target.id));
    });
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
NAV.forEach(([id]) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});

const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')!;
toggle.addEventListener('click', () => {
  const open = navWrap.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('#nav-links a').forEach((a) =>
  a.addEventListener('click', () => {
    navWrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }),
);
