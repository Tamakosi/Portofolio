import Link from "next/link";
import type { ReactNode } from "react";

/* Buttons, chips and cards: the "06 Components" page of the design, in code. */

export type ButtonKind = "primary" | "dark" | "white" | "outline" | "outlineDark";

export const buttonClass = (kind: ButtonKind = "dark") =>
  [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-[18px] text-[15px] font-semibold whitespace-nowrap transition-colors duration-150 select-none",
    {
      primary: "bg-accent text-white hover:bg-accent-hover",
      dark: "bg-ink text-white hover:bg-[#2c2c2c]",
      white: "bg-white text-ink hover:bg-chip",
      outline: "border border-line bg-surface text-ink hover:border-[#d6d3d1] hover:bg-chip",
      outlineDark: "border border-white/25 text-white hover:border-white/40 hover:bg-white/10",
    }[kind],
  ].join(" ");

// Internal links use next/link; external links and files open in a new tab.
export function ButtonLink({ href, kind, external, children }: { href: string; kind?: ButtonKind; external?: boolean; children: ReactNode }) {
  if (external || href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(kind)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(kind)}>
      {children}
    </Link>
  );
}

export function KeywordChip({ children }: { children: ReactNode }) {
  return <li className="rounded-lg bg-chip px-3 py-[9px] font-mono text-[13px] leading-none text-[#3a3a3a]">{children}</li>;
}

export function OutlineChip({ children }: { children: ReactNode }) {
  return <li className="rounded-full border border-line bg-surface px-2.5 py-1.5 text-[13px] leading-none text-muted">{children}</li>;
}

export function StatusChip({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 font-mono text-[13px] leading-tight text-muted">
      <span aria-hidden className="size-2 flex-none rounded-full bg-[#16a34a]" />
      {children}
    </p>
  );
}

export function Tag({ accent, children }: { accent?: boolean; children: ReactNode }) {
  return (
    <span
      className={`inline-block self-start rounded-md px-2 py-1 text-xs font-semibold tracking-[0.08em] uppercase ${
        accent ? "bg-accent text-white" : "border border-line bg-surface text-muted"
      }`}
    >
      {children}
    </span>
  );
}

const card = "rounded-2xl border border-line bg-surface";

// A title and a paragraph, or a list. `small` is the secondary-row size; `accent` adds the blue top rule.
export function TextCard({ title, children, small, accent }: { title: string; children: ReactNode; small?: boolean; accent?: boolean }) {
  return (
    <div className={`${card} flex flex-col gap-2.5 p-5 ${small ? "" : "md:p-7"} ${accent ? "border-t-[3px] border-t-accent" : ""}`}>
      <h3 className={`text-[20px] leading-[1.25] font-semibold tracking-[-0.03em] ${small ? "" : "md:text-2xl"}`}>{title}</h3>
      {typeof children === "string" ? <p className="text-base leading-[1.65] text-muted">{children}</p> : children}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 text-base leading-[1.65] text-muted">
      {items.map((s) => (
        <li key={s} className="flex gap-3">
          <span aria-hidden>•</span>
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

// "Fact": a short value with a label. "Check": a value with a sentence that explains it.
export function StatCard({ value, label, check }: { value: string; label: string; check?: boolean }) {
  return (
    <div className={`${card} flex flex-col ${check ? "gap-2.5 p-5 md:p-7" : "gap-1 p-[18px] md:gap-2 md:p-6"}`}>
      <p className={`leading-none font-semibold tracking-[-0.03em] ${check ? "text-[26px] md:text-[30px]" : "text-[30px] md:text-[40px]"}`}>{value}</p>
      <p className={`leading-[1.6] text-muted ${check ? "text-base" : "text-sm"}`}>{label}</p>
    </div>
  );
}

// A numbered insight or step. Stacks on phones, sits in a row from 768px.
export function InsightCard({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className={`${card} flex flex-col gap-2 p-5 md:flex-row md:gap-4 md:p-6`}>
      <span aria-hidden className="w-14 flex-none text-[22px] leading-[1.1] font-semibold tracking-[-0.03em] text-accent md:text-[28px]">
        {String(n).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-[19px] leading-[1.3] font-semibold tracking-[-0.03em] md:text-[21px]">{title}</h3>
        <p className="text-base leading-[1.65] text-muted">{children}</p>
      </div>
    </li>
  );
}

export function PersonaCard({ title, children, prompt }: { title: string; children: ReactNode; prompt: string }) {
  return (
    <div className={`${card} flex flex-col gap-3 p-5 md:p-6`}>
      <h3 className="text-[20px] leading-[1.25] font-semibold tracking-[-0.03em] md:text-[21px]">{title}</h3>
      <p className="text-base leading-[1.65] text-muted">{children}</p>
      <div className="mt-auto rounded-[10px] bg-[#eaf3ec] px-3.5 py-3">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-[#3d5a49] uppercase">Example prompt</p>
        <p className="mt-1 text-sm leading-[1.6] text-ink">&ldquo;{prompt}&rdquo;</p>
      </div>
    </div>
  );
}

// The "Why:" note under a decision.
export function Why({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl bg-soft px-4 py-3.5 text-[15px] leading-[1.65] text-ink md:px-5 md:py-4">
      <strong className="font-bold">Why:</strong> {children}
    </p>
  );
}
