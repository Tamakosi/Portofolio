import { CaseStudy, caseMeta, Checks, Closing, Facts, Gallery, Hero, Lede, LinkRow, RoleBox, Row, Section } from "@/components/case-study";
import { Captioned, Phone, Stage, type Widths } from "@/components/shots";
import { InsightCard, Tag, TextCard, Why } from "@/components/ui";
import { getProject } from "@/lib/projects";
import type { ShotKey } from "@/lib/shots";

const p = getProject("vaya");
const summary =
  "A personal project to practise end-to-end mobile design. I designed a travel app in Figma that helps people discover places, save favorites and plan a trip, then built it as a clickable prototype and documented every design rule in a spec.";

export const metadata = caseMeta("vaya", summary);

const heroW: Widths = ["min(24vw, 130px)", "clamp(150px, 18vw, 230px)"];

function Swatch({ color, name, use, big }: { color: string; name: string; use: string; big?: boolean }) {
  return (
    <li className="flex items-center gap-3.5 rounded-xl border border-line bg-surface px-3.5 py-3">
      <span aria-hidden className={`flex-none rounded-full ${big ? "size-11" : "size-9"}`} style={{ background: color }} />
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] font-semibold">{name}</span>
        <span className="text-[13px] leading-[1.4] text-muted">{use}</span>
      </span>
    </li>
  );
}

function Iteration({ shot, alt, title, children }: { shot: ShotKey; alt: string; title: string; children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Stage colors={p.stage} className="h-[280px] md:h-[330px]">
        <Phone shot={shot} alt={alt} w={[110, 128]} shadow={p.shadow} />
      </Stage>
      <h3 className="pt-1.5 text-[19px] leading-[1.3] font-semibold tracking-[-0.03em]">{title}</h3>
      <p className="text-[15px] leading-[1.65] text-muted">{children}</p>
    </div>
  );
}

export default function Vaya() {
  return (
    <CaseStudy
      story={["Goals", "Research", "Key decision", "Iterations", "Quality checks"]}
      hero={
        <Hero chips={["Travel", "Mobile app", "Personal project", "2026"]} title={<>Vaya: from &ldquo;where to?&rdquo; <br className="hidden md:block" />to a planned trip</>} summary={summary}>
          <Stage colors={p.stage} className="h-[300px] gap-3 sm:h-[400px] md:h-[640px] md:gap-10">
            <Phone shot="vaya-home" alt="Vaya home screen with photo-first destination cards" w={heroW} shadow={p.shadow} preload />
            <div className="pb-5 md:pb-10">
              <Phone shot="vaya-detail" alt="Vaya destination detail screen for Santorini, Greece" w={heroW} shadow={p.shadow} preload />
            </div>
            <Phone shot="vaya-plan" alt="Vaya Plan trip sheet with the next 12 months, nights and travelers" w={heroW} shadow={p.shadow} preload />
          </Stage>
        </Hero>
      }
    >
      <Section id="overview" title="Overview">
        <Row cols={3}>
          <TextCard title="The challenge">
            Inspiration, planning and booking usually live in different apps, and a phone screen gets crowded fast. I wanted one calm app that covers the whole trip.
          </TextCard>
          <TextCard title="My solution">
            Five tabs with one job each: Home to get inspired, Explore to search, Trips to plan, Favorites to compare, and Profile for settings.
          </TextCard>
          <TextCard title="What I delivered">
            A clickable prototype with trip planning, reviews, a mock booking flow and full sign-in with guest mode, plus a written design spec.
          </TextCard>
        </Row>
        <Facts items={[["5 tabs", "one clear job per tab"], ["Light + dark", "every colour has both values"], ["4px grid", "one spacing scale for every screen"]]} />
        <RoleBox
          items={[
            ["My role", "UI/UX Designer & frontend prototyper"],
            ["Team", "Solo personal project"],
            ["Timeline", "October 2026"],
            ["Tools", "Figma · HTML, CSS, JavaScript · Claude & ChatGPT as AI partners"],
          ]}
        />
      </Section>

      <Section id="goals" kicker="Goals" title="Two goals behind every screen">
        <Row cols={2} className="pt-3">
          <TextCard title="Traveler goal" accent>
            &ldquo;Help me find a place I&apos;ll love, know when to go, and plan it without juggling five apps.&rdquo;
          </TextCard>
          <TextCard title="My practice goal" accent>
            Design a complete mobile system, with one spacing scale, one type scale and light and dark colour tokens, and use it the same way on every screen.
          </TextCard>
        </Row>
      </Section>

      <Section id="research" kicker="Research" title="What I learned before designing">
        <Lede>I studied popular travel-app patterns, web.dev&apos;s sign-up form guidance, and published critiques of Airbnb&apos;s sign-in flow. Three ideas shaped Vaya.</Lede>
        <ol className="flex flex-col gap-3 pt-3 md:gap-4">
          <InsightCard n={1} title="Photos sell the trip">
            Travel apps lead with big imagery, so every card is photo-first. Each photo has its own focal point, so the subject survives every crop.
          </InsightCard>
          <InsightCard n={2} title="Timing is part of the decision">
            Every place has a best season. The Plan trip sheet lists the next 12 months in order and marks the best months for that destination.
          </InsightCard>
          <InsightCard n={3} title="Signing up shouldn't block exploring">
            Show password rules before typing, skip the confirm-password field, and offer a guest mode so people can explore first.
          </InsightCard>
        </ol>
      </Section>

      <Section id="key-decision" kicker="Key decision" title="One colour, one meaning">
        <Lede>
          In my first version, one red did four jobs: saved places, errors, unread badges and &ldquo;filters applied&rdquo; dots. A red dot could mean &ldquo;you saved this&rdquo; or &ldquo;something broke&rdquo;.
        </Lede>
        <div className="grid gap-5 pt-3 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-2.5">
            <Tag>Before</Tag>
            <div className="flex flex-1 flex-col gap-2.5 rounded-2xl border border-line bg-surface p-5">
              <ul>
                <Swatch big color="#D6336C" name="One red for everything" use="Saved places · Errors · Unread badges · Filters applied" />
              </ul>
              <p className="text-sm leading-[1.65] text-muted">Four meanings, one colour. People had to read the context to know which one they were looking at.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <Tag accent>After</Tag>
            <ul className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-5">
              <Swatch color="#D6336C" name="Heart pink-red" use="Saved places only" />
              <Swatch color="#C62828" name="Danger red" use="Errors and destructive actions" />
              <Swatch color="#1F6FE0" name="Accent blue" use="Unread and “filters applied” dots" />
              <Swatch color="#B7791F" name="Star amber" use="Ratings, with outlined empty stars" />
            </ul>
          </div>
        </div>
        <Why>
          colour should never be the only clue, and it should never be ambiguous. I gave each meaning its own token with a light and a dark value, checked each one&apos;s contrast, and drew empty
          stars as outlines so filled versus empty never relies on colour.
        </Why>
      </Section>

      <Section id="iterations" kicker="Iterations" title="From one screen to a full app">
        <Row cols={3} className="gap-8 pt-3 md:gap-4">
          <Iteration shot="santorini-v1" alt="Vaya version 1: a single Santorini home screen with a serif headline" title="V1: One Santorini screen">
            Where Vaya started: a single home screen with a serif headline, set up to try out the look.
          </Iteration>
          <Iteration shot="vaya-home" alt="Vaya version 2: the five-tab home screen with a blue accent" title="V2: Five-tab prototype">
            Roboto and Inter, a blue accent, real photos, and every tab wired up: Home, Explore, Trips, Favorites, Profile.
          </Iteration>
          <Iteration shot="vaya-home-dark" alt="Vaya version 3: the home screen in dark mode" title="V3: Reviewed and polished">
            Design-review passes added dark mode, sign-in and guest mode, clearer colour roles, and back navigation that closes sheets.
          </Iteration>
        </Row>
      </Section>

      <Section id="quality-checks" kicker="Quality checks" title="Checked against rules, not just my eyes">
        <Lede>This was a practice project, so there were no users to test with yet. Instead, I checked the design against accessibility rules and my own spec.</Lede>
        <Checks
          items={[
            ["4.5 : 1", "Minimum contrast for all text (WCAG AA), measured with the WCAG formula for every colour pair."],
            ["44 px", "Minimum touch target, with 52px primary buttons and padded tap areas on small links."],
            ["Reduced motion", "Every animation respects the reduced-motion setting, keeping only gentle fades."],
          ]}
        />
      </Section>

      <Section id="final-design" kicker="Final design" title="The finished prototype">
        <Gallery colors={p.stage} label="Vaya final screens">
          {(
            [
              ["vaya-explore", "Explore", "Vaya Explore tab with search and filters"],
              ["vaya-trips", "Trips", "Vaya Trips tab with planned trips"],
              ["vaya-detail-dark", "Detail · dark", "Vaya destination detail in dark mode"],
              ["vaya-login", "Log in", "Vaya log-in screen with a guest mode option"],
            ] as [ShotKey, string, string][]
          ).map(([shot, cap, alt]) => (
            <Captioned key={shot} caption={cap}>
              <Phone shot={shot} alt={alt} w={[128, 170]} shadow={p.shadow} />
            </Captioned>
          ))}
        </Gallery>
        <LinkRow links={p.links} />
      </Section>

      <Closing
        slug="vaya"
        learned={[
          "A written spec keeps you honest: checking every value against it exposed five small mismatches, which I fixed.",
          "One colour should mean one thing. Splitting colour roles made every screen easier to read.",
          "Accessibility is design work. Contrast, touch size and motion were decided up front, not patched later.",
        ]}
        next={["Usability-test the Plan trip flow with five travelers.", "Connect real booking, weather and map data.", "Add Bahasa Indonesia as a second language."]}
      />
    </CaseStudy>
  );
}
