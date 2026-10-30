"use client";

import { useEffect, useState } from "react";

export type TocGroup = { label: string; links: { id: string; label: string }[] };

// The sticky contents list beside a case study. The section nearest the top of the screen is marked.
export function Toc({ groups }: { groups: TocGroup[] }) {
  const ids = groups.flatMap((g) => g.links.map((l) => l.id));
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;
    // The current section is the last one whose top has passed just under the sticky nav.
    // At the very bottom of the page the last section wins, since it may never reach the top.
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
    // ids come from static props, so they never change for a page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav aria-label="On this page" className="sticky top-[88px] flex flex-col">
      {groups.map((g, gi) => (
        <div key={g.label} className={gi === 0 ? "pt-2" : "pt-[18px]"}>
          <p className="pb-1.5 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{g.label}</p>
          <ul className="flex flex-col gap-0.5">
            {g.links.map((l) => {
              const on = l.id === active;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={on ? "location" : undefined}
                    className={`block border-l-2 py-[5px] pl-3 text-sm transition-colors ${on ? "border-accent text-ink" : "border-line text-muted hover:text-ink"}`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
