import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { shots, type ShotKey } from "@/lib/shots";

type Vars = CSSProperties & Record<`--${string}`, string>;
// A width in px, or any CSS length such as "clamp(150px, 17vw, 190px)".
type Size = number | string;
// [below 768px, from 768px]
export type Widths = [Size, Size];

const css = (v: Size) => (typeof v === "number" ? `${v}px` : v);
// The largest px value in a size, for the image's `sizes` hint.
const maxPx = (v: Size) => (typeof v === "number" ? v : Math.max(...[...v.matchAll(/(\d+)px/g)].map((m) => +m[1]), 200));
const sizesFor = (w: Widths) => `(min-width: 768px) ${maxPx(w[1])}px, ${maxPx(w[0])}px`;

// A phone screenshot in a bezel.
export function Phone({ shot, alt, w, shadow, bezel, preload }: { shot: ShotKey; alt: string; w: Widths; shadow?: string; bezel?: string; preload?: boolean }) {
  const img = shots[shot];
  const style: Vars = { "--pw-sm": css(w[0]), "--pw-lg": css(w[1]), "--ratio": `${img.width} / ${img.height}` };
  if (shadow) style["--shadow"] = shadow;
  if (bezel) style["--bezel"] = bezel;
  return (
    <div className="phone" style={style}>
      <Image src={img} alt={alt} fill sizes={sizesFor(w)} placeholder="blur" preload={preload} className="object-cover object-top" />
    </div>
  );
}

// A browser-window screenshot, cropped to `ratio` (width / height). "fluid" fills its column.
export function Browser({ shot, alt, w, ratio = 1.6, shadow, preload }: { shot: ShotKey; alt: string; w: Widths | "fluid"; ratio?: number; shadow?: string; preload?: boolean }) {
  const img = shots[shot];
  const style: Vars = w === "fluid" ? { "--bw-sm": "100%", "--bw-lg": "100%" } : { "--bw-sm": css(w[0]), "--bw-lg": css(w[1]) };
  if (shadow) style["--shadow"] = shadow;
  const sizes = w === "fluid" ? "(min-width: 1160px) 400px, (min-width: 768px) 40vw, 90vw" : sizesFor(w);
  return (
    <div className="browser" style={style}>
      <div aria-hidden className="flex h-6 items-center gap-[5px] bg-[#f4f4f5] px-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-[7px] rounded-full bg-[#d4d4d8]" />
        ))}
      </div>
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image src={img} alt={alt} fill sizes={sizes} placeholder="blur" preload={preload} className="object-cover object-top" />
      </div>
    </div>
  );
}

// A soft gradient panel that holds screenshots.
export function Stage({ colors, className = "", children }: { colors: [string, string]; className?: string; children: ReactNode }) {
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-2xl ${className}`} style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}>
      {children}
    </div>
  );
}

// A screenshot with its caption underneath.
export function Captioned({ caption, children, className = "" }: { caption: string; children: ReactNode; className?: string }) {
  return (
    <figure className={`flex flex-col items-center gap-3.5 ${className}`}>
      {children}
      <figcaption className="text-[13px] font-semibold text-ink">{caption}</figcaption>
    </figure>
  );
}
