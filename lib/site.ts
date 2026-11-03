// Who the site is about and where to reach him. Every contact button reads from here.
export const site = {
  name: "Romeo Parulian Marpaung",
  short: "Romeo Marpaung",
  role: "UI/UX Designer · Product Designer · Frontend",
  email: "romeo.parulian@gmail.com",
  linkedin: "https://www.linkedin.com/in/romeo-parulian-marpaung-33297b35a",
  github: "https://github.com/Tamakosi",
  resume: "/Romeo-Parulian-Marpaung-CV.pdf",
  description:
    "UI/UX designer from Indonesia who designs in Figma and builds the frontend in code. Case studies: ZapCart, Vaya, Mellow and Atma Barbershop.",
};

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time; locally the dev server is used.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const about = {
  bio: [
    "Hi, I'm Romeo, a UI/UX designer from Indonesia. I graduated in Information Systems from Atma Jaya Yogyakarta University in August 2026 and completed JayJay School's UI/UX Design program in July 2026. From September 2025 to March 2026, I was an IT Support Intern at Medika Sangatta General Hospital, troubleshooting systems and managing data.",
    "I enjoy the whole path from idea to interface: researching, designing the UI in Figma, and coding the frontend. I like working with people, collaborating, and analyzing problems. Off screen, you'll find me playing games or watching movies.",
  ],
  groups: [
    ["Experience", ["IT Support Intern · Medika Sangatta General Hospital", "Sep 2025 – Mar 2026 · Troubleshooting and data management"]],
    ["Education", ["Information Systems · Atma Jaya Yogyakarta University · Graduated Aug 2026", "UI/UX Design program · JayJay School · Completed Jul 2026"]],
    ["Certificates", ["UI/UX Design Certificate · JayJay School", "British Council English Score Certificate"]],
    ["Leadership", ["Leader · Asrama Putra Kutai Timur Banua Etam", "Coordinator · Mahasiswa Batak Atma Jaya Yogyakarta"]],
  ] as [string, string[]][],
  tools: ["Figma", "VS Code", "TypeScript", "CSS", "SQL", "Prototyping", "UX Research", "Microsoft Office", "AI partners: Claude · ChatGPT"],
};
