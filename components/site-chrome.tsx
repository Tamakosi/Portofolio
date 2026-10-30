import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { CopyEmailButton } from "./copy-email";

// 1080px of content on desktop, 16px gutters on phones.
export const container = "mx-auto w-full max-w-[1144px] px-4 md:px-8";
// Case studies are a little wider: 1160px of content.
export const wideContainer = "mx-auto w-full max-w-[1224px] px-4 md:px-8";

// A small all-caps label with a rule that runs to the edge, as in "SELECTED WORK ———".
export function SectionLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div className="flex items-center gap-3">
      <h2 id={id} className="font-mono text-[13px] tracking-[0.08em] whitespace-nowrap text-muted">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-line" />
    </div>
  );
}

// The sticky bar at the top of the homepage.
export function HomeNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-bg/90 backdrop-blur-md">
      <nav aria-label="Main" className={`${container} flex h-16 items-center justify-between`}>
        <Link href="/" className="text-base font-semibold">
          {site.short}
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <ul className="hidden items-center gap-7 text-[15px] text-muted md:flex">
            <li>
              <a href="#work" className="transition-colors hover:text-ink">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-ink">
                About
              </a>
            </li>
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                Resume
              </a>
            </li>
          </ul>
          <CopyEmailButton kind="primary" />
        </div>
      </nav>
    </header>
  );
}

export function Footer({ wide }: { wide?: boolean }) {
  const links = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: "Resume", href: site.resume },
    { label: "Email", href: `mailto:${site.email}` },
  ];
  return (
    <footer className={`${wide ? wideContainer : container} flex flex-wrap items-center justify-between gap-4 pt-8 pb-12`}>
      <p className="text-sm text-muted">© 2026 {site.name}</p>
      <ul className="flex flex-wrap gap-5 text-sm text-muted">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
