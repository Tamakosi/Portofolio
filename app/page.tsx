import Image from "next/image";
import Link from "next/link";
import romeo from "@/assets/romeo.jpg";
import { CopyEmailButton } from "@/components/copy-email";
import { ProjectThumb } from "@/components/project-thumb";
import { container, Footer, HomeNav, SectionLabel } from "@/components/site-chrome";
import { ButtonLink, KeywordChip, StatusChip } from "@/components/ui";
import { projects, type Project } from "@/lib/projects";
import { about, site } from "@/lib/site";

const b = "font-semibold text-ink";

function Hero() {
  return (
    <section className={`${container} flex flex-col items-center gap-7 pt-16 pb-14 text-center md:pt-28 md:pb-24`}>
      <StatusChip>
        <span className="md:hidden">Open to UI/UX roles · Indonesia / Remote</span>
        <span className="hidden md:inline">Open to UI/UX &amp; Product Design roles · Indonesia / Remote</span>
      </StatusChip>
      <h1 className="max-w-[1080px] text-[38px] leading-[1.05] font-semibold tracking-[-0.035em] text-balance md:text-[64px]">
        I design clear, friendly interfaces <br className="hidden md:block" />
        and build them in code.
      </h1>
      <p className="max-w-[700px] text-[17px] leading-[1.55] text-muted md:text-[19px]">
        <strong className={b}>UI/UX designer</strong> and <strong className={b}>Information Systems</strong> graduate from{" "}
        <strong className={b}>Atma Jaya Yogyakarta University</strong>, trained at <strong className={b}>JayJay School</strong> and{" "}
        <strong className={b}>certified in UI/UX design</strong>. Former <strong className={b}>IT&nbsp;Support Intern</strong> at{" "}
        <strong className={b}>Medika Sangatta General Hospital</strong>. I&nbsp;design in <strong className={b}>Figma</strong> and build the frontend with{" "}
        <strong className={b}>TypeScript and CSS</strong>.
      </p>
      <ul aria-label="Keywords" className="flex flex-wrap justify-center gap-2">
        {["UI/UX Certified", "JayJay School", "Atma Jaya Yogyakarta", "Figma", "TypeScript · CSS", "Prototyping", "UX Research"].map((k) => (
          <KeywordChip key={k}>{k}</KeywordChip>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-3">
        <ButtonLink href="#work" kind="dark">
          View my work
        </ButtonLink>
        <CopyEmailButton kind="outline" />
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const featured = p.tag === "Featured";
  return (
    <article className="group relative flex flex-col gap-4 rounded-[20px] border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-[#d6d3d1] hover:shadow-[0_24px_48px_-32px_#14141440] md:rounded-3xl md:p-10">
      <p className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[13px] text-muted">
        <span className="text-accent">{p.tag}</span>
        {featured && <span>{p.kind}</span>}
        {p.meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </p>
      <h3 className="max-w-[680px] text-[25px] leading-[1.15] font-semibold tracking-[-0.025em] md:text-4xl">
        {/* The link covers the whole card, so the card is one big target. */}
        <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0 after:rounded-[inherit] after:content-['']">
          {p.title}
        </Link>
      </h3>
      <div className="flex max-w-[680px] flex-col gap-3 text-base leading-[1.6] text-muted">
        {p.desc.map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>
      <ul aria-label="What I built" className="flex flex-col gap-4 border-y border-line py-6 md:grid md:grid-cols-3 md:gap-6">
        {p.facts.map(([v, l]) => (
          <li key={v} className="flex flex-col gap-1">
            <span className="text-2xl font-semibold tracking-[-0.03em] lg:text-[30px]">{v}</span>
            <span className="text-sm text-muted">{l}</span>
          </li>
        ))}
      </ul>
      <ProjectThumb p={p} />
      <p aria-hidden className="flex items-center gap-2 text-base font-semibold">
        Read case study <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </p>
    </article>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className={`${container} flex flex-col gap-6 pt-6 pb-10 md:gap-8`}>
      <SectionLabel id="work-title">SELECTED WORK</SectionLabel>
      {projects.map((p) => (
        <ProjectCard key={p.slug} p={p} />
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={`${container} flex flex-col gap-6 py-10 md:gap-8`}>
      <SectionLabel id="about-title">ABOUT ME</SectionLabel>
      <div className="flex flex-col gap-7 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image src={romeo} alt={`Portrait of ${site.name}`} width={64} height={64} placeholder="blur" className="size-16 flex-none rounded-full object-cover" />
            <div>
              <p className="text-lg font-semibold md:text-xl">{site.name}</p>
              <p className="text-sm text-muted">{site.role}</p>
            </div>
          </div>
          <p className="text-[17px] leading-[1.65]">{about.bio[0]}</p>
          <p className="text-[17px] leading-[1.65] text-muted">{about.bio[1]}</p>
          <ul aria-label="Toolkit" className="flex flex-wrap gap-2 pt-2">
            {about.tools.map((t) => (
              <KeywordChip key={t}>{t}</KeywordChip>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 md:w-[420px] md:flex-none">
          {about.groups.map(([title, items]) => (
            <div key={title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="font-mono text-xs tracking-[0.08em] text-accent uppercase">{title}</h3>
              <ul className="flex flex-col gap-2 text-[15px] leading-[1.5]">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section aria-labelledby="contact-title" className={`${container} pt-12 pb-10 md:pt-20 md:pb-16`}>
      <div className="flex flex-col gap-5 rounded-[28px] bg-ink p-8 md:p-[72px]">
        <h2 id="contact-title" className="max-w-[640px] text-[32px] leading-[1.08] font-semibold tracking-[-0.035em] text-white md:text-[52px]">
          Let&apos;s build something people enjoy using.
        </h2>
        <p className="max-w-[580px] text-base leading-[1.6] text-white/70">
          I&apos;m a fresh graduate looking for my first UI/UX or Product Design role, based in Indonesia and open to remote work. I bring design and frontend skills,
          and I&apos;m happiest on teams that collaborate closely and care about the details.
        </p>
        <a href={`mailto:${site.email}`} className="self-start font-mono text-[15px] break-all text-white underline-offset-4 hover:underline md:text-[17px]">
          {site.email}
        </a>
        <div className="flex flex-wrap gap-3 pt-3">
          <CopyEmailButton kind="white" />
          <ButtonLink href={site.linkedin} kind="outlineDark">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={site.resume} kind="outlineDark">
            Resume (PDF)
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HomeNav />
      <main id="main" className="flex-1">
        <Hero />
        <Work />
        <About />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
