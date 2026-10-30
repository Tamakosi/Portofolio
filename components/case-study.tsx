import Link from "next/link";
import type { ReactNode } from "react";
import { getProject, nextProject, type Slug } from "@/lib/projects";
import { site } from "@/lib/site";
import { CopyEmailButton } from "./copy-email";
import { Footer, wideContainer as container } from "./site-chrome";
import { Toc, type TocGroup } from "./toc";
import { Bullets, ButtonLink, OutlineChip, StatCard, TextCard } from "./ui";

/* The case-study kit: one layout and the pieces every case study is built from.
   On phones, rows of cards stack and the contents list is dropped. */

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function CaseNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav aria-label="Main" className={`${container} flex h-[60px] items-center justify-between md:h-16`}>
        <Link href="/#work" className="text-[15px] text-muted transition-colors hover:text-ink">
          <span aria-hidden>←</span>&nbsp; All work
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden text-[15px] font-semibold md:block">
            {site.short}
          </Link>
          <CopyEmailButton kind="primary" />
        </div>
      </nav>
    </header>
  );
}

export function Hero({ chips, title, summary, children }: { chips: string[]; title: ReactNode; summary: string; children: ReactNode }) {
  return (
    <div className={`${container} flex flex-col gap-5 pt-10 pb-8 md:gap-6 md:pt-16 md:pb-10`}>
      <ul aria-label="Project tags" className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <OutlineChip key={c}>{c}</OutlineChip>
        ))}
      </ul>
      <h1 className="max-w-[1060px] text-[38px] leading-[1.06] font-semibold tracking-[-0.03em] md:text-[76px] md:leading-[1.02]">{title}</h1>
      <p className="max-w-[720px] text-[17px] leading-[1.65] text-muted md:text-xl">{summary}</p>
      {children}
    </div>
  );
}

// One block of the story, with its small all-caps kicker and a heading.
export function Section({ id, kicker, title, children }: { id: string; kicker?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="flex flex-col gap-4 border-b border-line py-12 md:gap-5 md:py-[72px]">
      {kicker && <p className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">{kicker}</p>}
      <h2 id={`${id}-title`} className="text-[30px] leading-[1.15] font-semibold tracking-[-0.03em] md:text-[44px] md:leading-[1.1]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="max-w-[720px] text-[17px] leading-[1.65] text-muted md:text-lg">{children}</p>;
}

// Two-up rows sit side by side from 768px, three-up rows from 1024px. Four-up rows go two by two until there is room for four.
export function Row({ cols, children, className = "" }: { cols: 2 | 3 | 4; children: ReactNode; className?: string }) {
  const grid = { 2: "md:grid-cols-2", 3: "lg:grid-cols-3", 4: "sm:grid-cols-2 xl:grid-cols-4" }[cols];
  return <div className={`grid gap-3 md:gap-4 ${grid} ${className}`}>{children}</div>;
}

export function Facts({ items }: { items: [string, string][] }) {
  return (
    <Row cols={3}>
      {items.map(([v, l]) => (
        <StatCard key={v} value={v} label={l} />
      ))}
    </Row>
  );
}

export function Checks({ items }: { items: [string, string][] }) {
  return (
    <Row cols={3} className="pt-3">
      {items.map(([v, l]) => (
        <StatCard key={v} value={v} label={l} check />
      ))}
    </Row>
  );
}

// Screens on a tinted panel: one row when there is room, wrapping onto more rows when not.
export function Gallery({ colors, label, children }: { colors: [string, string]; label: string; children: ReactNode }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap justify-center gap-x-5 gap-y-7 rounded-2xl px-3 py-7 md:gap-x-7 md:px-6 md:py-9"
      style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
    >
      {children}
    </div>
  );
}

export function RoleBox({ items }: { items: [string, string][] }) {
  return (
    <dl className="flex flex-col gap-4 rounded-2xl border border-line p-5 md:flex-row md:px-7 md:py-6">
      {items.map(([k, v]) => (
        <div key={k} className="flex flex-1 flex-col gap-1.5">
          <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">{k}</dt>
          <dd className="text-[15px] leading-[1.5]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

// A key decision: the screenshot on one side, what and why on the other. Side by side only on wide screens.
export function Decision({ n, title, visual, flip, children }: { n: number; title: string; visual: ReactNode; flip?: boolean; children: ReactNode }) {
  return (
    <div className={`flex flex-col gap-5 py-3 xl:items-center xl:gap-8 ${flip ? "xl:flex-row-reverse" : "xl:flex-row"}`}>
      {visual}
      <div className="flex flex-1 flex-col gap-3">
        <p aria-hidden className="text-[22px] font-semibold text-accent md:text-[28px]">
          {String(n).padStart(2, "0")}
        </p>
        <h3 className="text-[22px] leading-[1.2] font-semibold tracking-[-0.03em] md:text-[26px]">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="text-base leading-[1.65] text-muted">{children}</p>;
}

export function LinkRow({ links }: { links: { label: string; href: string; external?: boolean }[] }) {
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {links.map((l, i) => (
        <ButtonLink key={l.href} href={l.href} external={l.external} kind={i === 0 ? "primary" : "outline"}>
          {l.label}
        </ButtonLink>
      ))}
    </div>
  );
}

// Learnings, next steps, the hiring CTA and the link to the next case study.
export function Closing({ slug, learned, next }: { slug: Slug; learned: string[]; next: string[] }) {
  const upNext = nextProject(slug);
  return (
    <Section id="learnings" kicker="Reflection" title="What I learned, and what I'd do next">
      <Row cols={2} className="pt-3">
        <TextCard title="What I learned">
          <Bullets items={learned} />
        </TextCard>
        <TextCard title="What I'd do next">
          <Bullets items={next} />
        </TextCard>
      </Row>
      <div className="mt-4 flex flex-col gap-3.5 rounded-3xl bg-ink p-7 md:mt-8 md:p-14">
        <h3 className="max-w-[620px] text-[28px] leading-[1.15] font-semibold tracking-[-0.03em] text-bg md:text-[40px] md:leading-[1.1]">
          Looking for a junior UI/UX designer who can also code?
        </h3>
        <p className="max-w-[560px] text-base leading-[1.65] text-white/75 md:text-[17px]">
          I&apos;d love to bring this kind of care to your team. Email is the fastest way to reach me:{" "}
          <a href={`mailto:${site.email}`} className="break-all text-white underline underline-offset-4">
            {site.email}
          </a>
        </p>
        <div className="flex flex-wrap gap-3 pt-2 md:pt-3.5">
          <CopyEmailButton kind="primary" />
          <ButtonLink href={site.linkedin} kind="outlineDark">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={site.resume} kind="outlineDark">
            Resume (PDF)
          </ButtonLink>
        </div>
      </div>
      <Link
        href={`/work/${upNext.slug}`}
        className="group flex items-center justify-between gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-[#d6d3d1] hover:bg-surface md:p-7"
      >
        <span className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold tracking-[0.1em] text-muted">NEXT PROJECT</span>
          <span className="max-w-[640px] text-[19px] leading-[1.25] font-semibold tracking-[-0.03em] md:text-2xl">{upNext.title}</span>
        </span>
        <span aria-hidden className="text-[22px] transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </Section>
  );
}

// The page: nav, hero, then the contents list beside the story.
export function CaseStudy({ hero, story, children }: { hero: ReactNode; story: string[]; children: ReactNode }) {
  const groups: TocGroup[] = [
    { label: "Opening", links: [{ id: "overview", label: "Overview" }] },
    { label: "Story", links: story.map((s) => ({ id: slugify(s), label: s })) },
    { label: "Closing", links: [{ id: "final-design", label: "Final design" }, { id: "learnings", label: "Learnings" }] },
  ];
  return (
    <>
      <CaseNav />
      <main id="main" className="flex-1">
        {hero}
        <div className={`${container} flex gap-14`}>
          <aside className="hidden w-[200px] flex-none xl:block">
            <Toc groups={groups} />
          </aside>
          <article className="min-w-0 flex-1">{children}</article>
        </div>
      </main>
      <Footer wide />
    </>
  );
}

export const caseMeta = (slug: Slug, summary: string) => {
  const p = getProject(slug);
  const name = p.title.split(":")[0];
  return { title: `${name} case study`, description: summary, openGraph: { title: `${name} case study · ${site.short}`, description: summary } };
};
