import { site } from "./site";

export type Slug = "zapcart" | "vaya" | "mellow" | "atma-barbershop";

export type ProjectLink = { label: string; href: string; external?: boolean };

export type Project = {
  slug: Slug;
  title: string;
  short: string;
  // "Featured" cards also show `kind` next to the tag.
  tag: string;
  kind: string;
  meta: string[];
  desc: string[];
  facts: [string, string][];
  // The colour of the image stages on the card and the case study.
  stage: [string, string];
  shadow: string;
  links: ProjectLink[];
};

const figmaFile = "https://www.figma.com/design/k44CgiOn6gINdFP9Q7Kz09/Hi-Fi-Design";

// Homepage order, and the order the "Next project" links follow.
export const projects: Project[] = [
  {
    slug: "zapcart",
    title: "ZapCart: a shopping app that keeps prices clear from search to doorstep",
    short: "ZapCart shopping app",
    tag: "Featured",
    kind: "JayJay School project",
    meta: ["E-commerce · Mobile app", "UI/UX design", "2026"],
    desc: [
      "My UI/UX project at JayJay School: an Indonesian shopping app that takes people from search to checkout to order tracking, with prices, discounts and shipping clear at every step.",
      "I built a design system in Figma first, with colour, type, icons, forms and product cards, then used it to design 17 screens and link them into a clickable prototype.",
    ],
    facts: [["17 screens", "splash screen to order detail"], ["5 flows", "onboarding to order tracking"], ["Design system", "colour, type, forms and cards"]],
    stage: ["#DDF5FA", "#F2FBFD"],
    shadow: "#0B4A5A40",
    links: [
      { label: "Open the prototype ↗", href: "https://www.figma.com/proto/k44CgiOn6gINdFP9Q7Kz09/Hi-Fi-Design?node-id=706-5313&starting-point-node-id=706-5313", external: true },
      { label: "View in Figma ↗", href: `${figmaFile}?node-id=52-55`, external: true },
    ],
  },
  {
    slug: "vaya",
    title: 'Vaya: a travel app that takes you from "where to?" to a planned trip',
    short: "Vaya travel app",
    tag: "Featured",
    kind: "Personal project",
    meta: ["Travel · Mobile app", "UI/UX + coded prototype", "2026"],
    desc: [
      "A personal project to practise end-to-end mobile design. Vaya helps travelers discover places, save favorites, and plan a trip by month, nights and travelers, all in one app.",
      "I designed every flow in Figma, built a clickable prototype in HTML, CSS and JavaScript with Claude and ChatGPT as AI partners, and wrote a design spec for its spacing, type, colour, touch and motion rules.",
    ],
    facts: [["5 tabs", "one clear job per tab"], ["4px grid", "one spacing scale for every screen"], ["WCAG AA", "text contrast checked at 4.5 : 1"]],
    stage: ["#E3EDFD", "#F2F6FF"],
    shadow: "#0E1A3640",
    links: [
      { label: "Open the prototype ↗", href: "https://www.figma.com/proto/MzT7omrQoefOhiAXiEAFpK/Vaya?node-id=1-2613&starting-point-node-id=1-2613", external: true },
      { label: "View in Figma ↗", href: "https://www.figma.com/design/MzT7omrQoefOhiAXiEAFpK/Vaya?node-id=1-1", external: true },
    ],
  },
  {
    slug: "mellow",
    title: "Mellow: an AI slide maker that turns one sentence into a deck",
    short: "Mellow AI slide maker",
    tag: "Personal project",
    kind: "Personal project",
    meta: ["AI · Web app", "Product design + frontend", "2026"],
    desc: [
      "A product concept for people who need slides but not a design degree: describe your idea, review an AI-drafted outline, then watch Mellow write and design the slides. Its assistant, Mel, helps edit each one.",
      "I designed the product end to end in Figma and built it with Next.js, React, TypeScript and Tailwind CSS, with Claude and ChatGPT as AI partners. It's responsive from phone to desktop.",
    ],
    facts: [["4 steps", "Prompt → Outline → Design → Export"], ["12 screens", "from landing page to brand kit"], ["3 breakpoints", "phone, tablet and desktop"]],
    stage: ["#E4EFE6", "#F4F6F0"],
    shadow: "#1F3A2A40",
    links: [
      { label: "Open the prototype ↗", href: "https://mellow-romeo.vercel.app/", external: true },
      { label: "View the code ↗", href: "https://github.com/Tamakosi/Mellow", external: true },
    ],
  },
  {
    slug: "atma-barbershop",
    title: "Atma Barbershop: a barbershop admin dashboard we built in Next.js",
    short: "Atma Barbershop dashboard",
    tag: "University team project",
    kind: "Course project",
    meta: ["Admin dashboard · Web app", "Frontend + database", "2024"],
    desc: [
      "A team project from my Information Systems degree: an admin dashboard where a barbershop can see what has been paid and what is pending, and manage invoices, customers and reservations.",
      "We built it with Next.js, React, Tailwind CSS and MySQL on top of the Next.js App Router course, added a branded landing page and a reservations section of our own, and put it online with Vercel.",
    ],
    facts: [["4 pages", "Home, Invoices, Customers, Reservations"], ["3 forms", "new invoices, customers and reservations"], ["Live site", "deployed on Vercel"]],
    stage: ["#EFE4DA", "#F8F3EE"],
    shadow: "#3A1E0A40",
    links: [
      { label: "Open the live site ↗", href: "https://ugd-siweb-b-1997.vercel.app/", external: true },
      { label: "View the code ↗", href: "https://github.com/Tamakosi/UGD_SIWEB_B_1997", external: true },
    ],
  },
];

export const getProject = (slug: Slug) => projects.find((p) => p.slug === slug)!;

export const nextProject = (slug: Slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const contactLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Resume (PDF)", href: site.resume },
];
