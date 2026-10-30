import type { Project } from "@/lib/projects";
import type { ShotKey } from "@/lib/shots";
import { Browser, Phone, Stage, type Widths } from "./shots";

const phoneW: Widths = ["min(20vw, 150px)", "clamp(150px, 17vw, 190px)"];

// Three phones, the middle one raised.
function PhoneTrio({ p, keys }: { p: Project; keys: [ShotKey, string][] }) {
  return (
    <div className="flex items-center gap-3 md:gap-8">
      {keys.map(([shot, alt], i) => (
        <div key={shot} className={i === 1 ? "pb-8" : "pt-8"}>
          <Phone shot={shot} alt={alt} w={phoneW} shadow={p.shadow} />
        </div>
      ))}
    </div>
  );
}

// The screenshot panel on each homepage project card.
export function ProjectThumb({ p }: { p: Project }) {
  const body = {
    zapcart: (
      <PhoneTrio
        p={p}
        keys={[
          ["zap-home", "ZapCart home screen with promotions, categories and product cards"],
          ["zap-pdp", "ZapCart product page with the price, rating and shipping estimate"],
          ["zap-cart", "ZapCart cart with items grouped by store"],
        ]}
      />
    ),
    vaya: (
      <PhoneTrio
        p={p}
        keys={[
          ["vaya-home", "Vaya home screen with photo-first destination cards"],
          ["vaya-detail", "Vaya destination detail screen"],
          ["vaya-plan", "Vaya Plan trip sheet with months, nights and travelers"],
        ]}
      />
    ),
    mellow: <Browser shot="mellow-editor" alt="Mellow slide editor with Mel, the helper, beside the slide" w={["min(78vw, 520px)", "min(70vw, 760px)"]} shadow={p.shadow} />,
    "atma-barbershop": (
      <div className="flex items-start gap-8">
        <Browser shot="barber-home" alt="Atma Barbershop landing page with a photo of a barber at work" w={["min(78vw, 520px)", "min(40vw, 440px)"]} shadow={p.shadow} />
        <div className="hidden pt-16 md:block">
          <Browser shot="barber-dashboard" alt="Atma Barbershop dashboard with summary cards and a revenue chart" w={["0px", "min(40vw, 440px)"]} shadow={p.shadow} />
        </div>
      </div>
    ),
  }[p.slug];
  return (
    <Stage colors={p.stage} className="aspect-video w-full">
      {body}
    </Stage>
  );
}
