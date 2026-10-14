// All site copy and links live here, so updates don't touch the layout code.
// Anything left as ph('...') shows as a dashed placeholder until it's filled in.

export const ph = (label: string) => `<span class="ph" title="To fill in">[${label}]</span>`;

// Live Netlify links. Leave empty until each site is deployed; the "live" buttons stay hidden until then.
export const LINKS = {
  github: 'https://github.com/bryanjoel11',
  email: '', // e.g. 'name@example.com'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/...'
  resume: '', // e.g. './resume.pdf' once the PDF is in /public
  afterglowLive: '',
  supplyLive: '',
  tomorrowlandLive: '',
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
    "What I'm looking for next: a product or project management role in streaming and entertainment, or a revenue and pricing role in theme parks.",
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
      { label: 'GitHub', href: 'https://github.com/bryanjoel11/streaming-dashboard' },
    ],
  },
  {
    num: '02',
    title: 'Supply Tracker',
    tagline: 'Inventory and reorder planning for small operations teams.',
    problem:
      'My team ordered supplies blind. Nobody could see what we had or how fast we used it, so we over-ordered some things and ran out of others.',
    did: 'I built an app with mobile and desktop versions that the team used to track stock, used by coordinators, leaders and the proprietor. Then I rebuilt the idea as a product: reorder suggestions from usage history, stock status at a glance, and a comparison of ordering on habit against ordering on data.',
    chips: ['Product case study', 'Reorder suggestions', 'Roadmap and success metrics'],
    img: './img/supply.jpg',
    accent: 'ember',
    buttons: [
      { label: 'Open the app', href: LINKS.supplyLive, primary: true },
      { label: 'Read the case study', href: LINKS.supplyLive ? `${LINKS.supplyLive}#/case-study` : '' },
      { label: 'GitHub', href: 'https://github.com/bryanjoel11/supply-tracker' },
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
      "As a fan, I've always had ideas for where Tomorrowland could go next. So I built the land in 3D with four upgrades: Sugar Rush, an indoor dual racing coaster where the Speedway was, with the PeopleMover running through it; wheelchair-accessible PeopleMover vehicles; Hyperspace Mountain, a Space Mountain refurbishment with its own story; and the old Stitch's Great Escape building brought back to life.",
    chips: ['3D in the browser', 'Built from scratch', 'Four upgrades'],
    img: './img/tomorrowland.jpg',
    buttons: [
      { label: 'Explore in 3D', href: LINKS.tomorrowlandLive, primary: true },
      { label: 'GitHub', href: 'https://github.com/bryanjoel11/tomorrowland-reimagined' },
    ],
    fineprint: 'Personal concept project. Not affiliated with Disney.',
  },
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
  heading: "Let's build something together.",
  text: "I'm open to product and project management roles in streaming and entertainment, and revenue and pricing roles in theme parks. Email is the fastest way to reach me.",
};
