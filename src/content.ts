// All site copy and links live here, so updates don't touch the layout code.
// Anything left as ph('...') shows as a dashed placeholder until it's filled in.

export const ph = (label: string) => `<span class="ph" title="To fill in">[${label}]</span>`;

// Live Netlify links. Leave empty until each site is deployed; the "live" buttons stay hidden until then.
export const LINKS = {
  github: 'https://github.com/bryanjoel11',
  email: 'gonzalezmoral67@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bryan-gonz%C3%A1lez',
  resume: './Bryan-Gonzalez-Resume.pdf',
  afterglowLive: 'https://afterglow-insights.netlify.app',
  supplyLive: 'https://supply-tracker-app.netlify.app',
  tomorrowlandLive: 'https://tomorrowland-reimagined.netlify.app',
};

export const PERSON = {
  first: 'Bryan',
  last: 'González',
};

export const HERO = {
  eyebrow: "Hi, I'm",
  pitch:
    'I turn everyday problems into products people actually use, from a supply tracker my team relied on to a pricing dashboard for a streaming service.',
  roles: ['Product management', 'Streaming and entertainment', 'Theme park revenue'],
};

export const ABOUT = {
  heading: 'I build the tools I wish I had.',
  paragraphs: [
    "I'm Bryan. I've worked in theme park attractions operations, and I'm a theme park fan as much as I am an employee. Working there, I noticed my team was ordering supplies blind, so I built an app to track what we had and what we used. Seeing people change how they worked because of something I built is what pulled me toward product management.",
    'Now I build products and case studies that show how I think: find the real problem, build something simple that fixes it, and measure whether it worked. I care about the commercial side too, like what a price change does to revenue and why customers stay or leave.',
    "What I'm looking for next: a product or project management role where I can turn problems I understand into products that work.",
  ],
  currently: [
    'Project Analyst, Disney Live Entertainment',
    "Bachelor's in Business Analytics",
    'Building product case studies in pricing, retention and operations',
  ],
};

export interface WorkItem {
  num: string;
  title: string;
  tagline: string;
  problem: string;
  did: string;
  chips: string[];
  img: string;
  accent: 'ember' | 'nebula';
  buttons: { label: string; href: string; primary?: boolean }[];
}

export const WORK: WorkItem[] = [
  {
    num: '01',
    title: 'Afterglow Insights',
    tagline: 'Subscription health and pricing for a streaming service.',
    problem:
      "Streaming services grow fast but lose subscribers just as fast. Raising prices can grow revenue or drive people away, and it's hard to tell which.",
    did: 'I built a subscriber analytics site that tracks growth by plan, retention by signup month, and what each subscriber is worth compared with what it costs to win one. A Pricing Lab lets you change a price or launch a bundle and see 12 months of projected revenue and churn. It ends with a one-page pricing recommendation.',
    chips: ['Churn and retention', 'Lifetime value vs. acquisition cost', 'Pricing what-ifs', 'Recommendation memo'],
    img: './img/afterglow.jpg',
    accent: 'nebula',
    buttons: [
      { label: 'Open the dashboard', href: LINKS.afterglowLive, primary: true },
    ],
  },
  {
    num: '02',
    title: 'Supply Tracker',
    tagline: 'Inventory and reorder planning for small operations teams.',
    problem:
      'My team ordered supplies blind. Nobody could see what we had or how fast we used it, so we over-ordered some things and ran out of others.',
    did: 'I built an app with mobile and desktop versions that the team used to track stock, used by coordinators, leaders and the proprietor. Then I rebuilt the idea as a product: reorder suggestions from usage history, stock status at a glance, and a comparison of ordering on habit against ordering on data.',
    chips: ['Product thinking', 'Reorder suggestions', 'Roadmap and success metrics'],
    img: './img/supply.jpg',
    accent: 'ember',
    buttons: [
      { label: 'Open the app', href: LINKS.supplyLive, primary: true },
      { label: 'Read the story', href: LINKS.supplyLive ? `${LINKS.supplyLive}#/case-study` : '' },
    ],
  },
];

export const CREATIVE = {
  heading: 'What I build for fun.',
  intro:
    "Not every project starts with a business case. These are the ones I make because I can't stop thinking about them.",
  featured: {
    title: 'Tomorrowland Reimagined',
    tagline: "A fan's redesign of Tomorrowland, built in 3D and explorable in your browser.",
    description:
      "As a fan, I've always had ideas for where Tomorrowland could go next. So I built the land in 3D, with detailed buildings I modeled in Blender and every attraction placed to match the real park map. It shows four upgrades: Sugar Rush, an indoor dual racing coaster where the Speedway was, with the PeopleMover running through it; wheelchair-accessible PeopleMover vehicles; Hyperspace Mountain, a Space Mountain refurbishment with its own story; and the old Stitch's Great Escape building brought back to life.",
    chips: ['3D in the browser', 'Modeled in Blender', 'Four upgrades'],
    img: './img/tomorrowland.jpg',
    buttons: [
      { label: 'Explore in 3D', href: LINKS.tomorrowlandLive, primary: true },
    ],
    fineprint: 'Personal concept project. Not affiliated with Disney.',
  },
  // Second creative project, shown under the featured one with the image on the right.
  droid: {
    title: 'BD-1 Droid',
    status: 'In progress',
    tagline: 'A companion droid I designed to wear on my back.',
    description:
      "I've always loved scrappy little companion droids, so I'm designing my own from scratch. My BD-1 is a mechanic's helper that rides on a back harness, looks over my shoulder, and shows its mood with head poses, a glowing grid eye and sound. Over 35 design rounds it went from a character brief to a print-ready, 32-part model. Next up: printing, wiring and programming it.",
    chips: ['Character design', 'Modeled in Blender', 'Animatronics', '35 design rounds'],
    img: './img/scout/card.jpg',
    buttons: [{ label: 'See the design process', href: './bd1-droid.html', primary: true, internal: true }],
    fineprint: 'Personal fan project. Not affiliated with Lucasfilm.',
  },
};

// Project page for the BD-1 droid (bd1-droid.html).
export const SCOUT = {
  title: 'BD-1 Droid',
  eyebrow: 'Creative project · In progress',
  hook: "A curious, scrappy mechanic's-helper droid that rides on your back, looks over your shoulder and reacts on cue. I took it from a first sketch to print-ready parts.",
  facts: [
    { k: 'My role', v: 'Designer and creative director' },
    { k: 'Tools', v: 'Blender, 3D printing (PETG), ESP32 microcontroller' },
    { k: 'Status', v: 'Concept, sketches and 3D model done. Build is next.' },
  ],
  cover: { img: './img/scout/01-hero-droid-v35.jpg', caption: 'Version 35, the final 3D design, with a weathered black face plate and green grid eye.' },
  challenge:
    'I wanted to take one character all the way from an idea to a working animatronic myself: a companion droid, worn on the body, that feels alive. A character worn on the body has to read from a distance, survive real wear and fit a budget, so the limits were tight. It had to weigh under 1.5 lb with its battery, cost around $100, have no visible screws, and be buildable by someone new to electronics and 3D modeling.',
  role:
    "I wrote the character brief, set the look and the quality bar, marked up every round by hand, and made every call on when a design was locked. Concept images and 3D models were generated with Claude, an AI collaborator, from my brief, written direction and markups. I'll build and program the physical droid myself.",
  steps: [
    {
      title: 'Character first',
      text: "Before any shapes, I defined who it is: curious, loyal, a little scrappy, a mechanic's helper rebuilt from scrapyard parts. Then I ranked features for version 1 (moving head, grid eye, sound, idle moves and a remote) and moved walking to a later version.",
      imgs: [{ src: './img/scout/04-head-exploration-three-eye.jpg', caption: 'Head exploration: three-eye visor options, pushed toward a scrappier, rebuilt look.' }],
    },
    {
      title: '33 rounds of sketches',
      text: 'I explored a welder-mask head, then a three-eye visor head, then the full body. My hand markups drove each change, from the head shape to a hooded face and longer plate legs. I locked round 33.',
      imgs: [{ src: './img/scout/09-sketch-v33-locked.jpg', caption: 'Round 33, locked: detailed plate legs and a hooded face.' }],
    },
    {
      title: 'Knowing when it was not good enough',
      text: 'The first 3D model of the locked sketch felt flat next to strong reference droids, so I unlocked it. Version 34 got a deeper head, bigger eyes, chunkier legs and a two-color palette. Version 35 added a detailed face plate and moved the droid onto a back harness.',
      imgs: [
        { src: './img/scout/10-first-3d-model-v33.jpg', caption: 'Before: the first 3D model of round 33.' },
        { src: './img/scout/11-redesign-v34.jpg', caption: 'After: the version 34 redesign.' },
      ],
    },
    {
      title: 'Built to be worn',
      text: 'Two small motors turn and tilt the head about 255 degrees, and I checked it clears my own head at every angle. The shell snaps together instead of using screws, the power cable breaks away with a magnet if it snags, and a handheld pad styled like a worn control panel triggers moods and sounds.',
      imgs: [
        { src: './img/scout/02-worn-over-shoulder.jpg', caption: 'Worn on a back harness, looking over my right shoulder.' },
        { src: './img/scout/12-mechanism-layout.jpg', caption: 'Motors, gears and electronics placed inside the shell.' },
      ],
    },
    {
      title: 'Ready to print',
      text: 'I split the model into 32 parts sized for common printers, in three colors of PETG (about 750 g). I packaged the files with a parts list and a quote request, compared six print options, and chose a local print service.',
      imgs: [{ src: './img/scout/17-print-parts.jpg', caption: 'The print-ready parts, in three colors of PETG.' }],
    },
  ],
  decisions: [
    { k: 'Posed legs, not walking', v: 'Walking would break the weight and budget limits, so it moved to version 2.' },
    { k: 'Snap clips, not screws', v: 'Clean surfaces and fast access. The visible screws are printed decoration.' },
    { k: 'PETG, not PLA', v: 'Florida heat softens PLA, and printing in color saves painting.' },
    { k: 'About $140, not $100', v: "I owned no parts, and a reliable kit mattered more. I listed trims to bring it back down." },
  ],
  learned: [
    'Character first saves time. A clear brief made it easy to reject shapes that looked cool but did not feel scrappy or curious.',
    'Iteration is the work. Round 33 felt done until I put it next to strong references. The redesign that followed was the biggest jump in quality.',
    'Check in the model before cutting features. An early estimate said the head would hit mine; measuring the 3D model showed at least an inch of clearance at every angle.',
  ],
  fineprint: 'Personal fan project. Not affiliated with Lucasfilm.',
  next: 'Print the parts, test-fit the head first, wire the motors, eye light and sound, then program its moods and idle moves. I will add build photos and a short video here as it comes together.',
};

export const SKILLS: { group: string; chips: string[] }[] = [
  { group: 'Product', chips: ['User needs and pain points', 'Roadmaps', 'Success metrics', 'Prioritization', 'Writing recommendations'] },
  { group: 'Commercial', chips: ['Pricing what-ifs', 'Churn and retention', 'Lifetime value vs. acquisition cost', 'Revenue modeling'] },
  { group: 'Operations', chips: ['Inventory and reorder planning', 'Guest experience', 'Working with frontline teams'] },
  { group: 'Tools', chips: ['Microsoft Excel', 'Business intelligence', 'Data analytics', 'GitHub', 'AI tools like Claude'] },
  { group: 'Working style', chips: ['Breaking big ideas into small steps', 'Explaining numbers in plain words'] },
];

export const CERTS: { name: string; issuer: string; url: string }[] = [
  { name: 'Microsoft Office Specialist: Excel Associate', issuer: 'Microsoft', url: '' },
  { name: 'Data and Analytics: Business Intelligence', issuer: 'Disney', url: '' },
];

export const STORY: { when: string; title: string; text: string }[] = [
  {
    when: 'Growing up',
    title: 'A fan first.',
    text: 'I grew up loving theme parks, and I always wanted to know how they really work behind the rides.',
  },
  {
    when: '2023',
    title: 'Joining attractions operations.',
    text: 'I started working in theme park attractions and learned how much planning it takes to give guests a great day.',
  },
  {
    when: '2025',
    title: 'My first product.',
    text: 'My team was ordering supplies blind, so I built a tracker with mobile and desktop versions. It changed how we ordered and showed me I love building products.',
  },
  {
    when: '2026',
    title: "Bachelor's in Business Analytics.",
    text: 'My degree gave me the tools to back up ideas with data, from analysis and forecasting to business intelligence.',
  },
  {
    when: '2026',
    title: 'Building in public.',
    text: 'I built a streaming pricing dashboard, rebuilt my supply tracker as a product, and redesigned Tomorrowland in 3D.',
  },
  {
    when: 'Now',
    title: 'Project Analyst, Disney Live Entertainment.',
    text: "Today I work as a project analyst, and I'm looking for a product role where I can turn problems I understand into products that work.",
  },
];

export const CONNECT = {
  heading: "Let's connect.",
  text: "I'm open to product and project management roles. Email is the fastest way to reach me.",
};
