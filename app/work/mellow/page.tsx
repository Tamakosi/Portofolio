import { Body, CaseStudy, caseMeta, Checks, Closing, Decision, Facts, Gallery, Hero, Lede, LinkRow, RoleBox, Row, Section } from "@/components/case-study";
import { Browser, Captioned, Phone, Stage } from "@/components/shots";
import { PersonaCard, TextCard, Why } from "@/components/ui";
import { getProject } from "@/lib/projects";
import type { ShotKey } from "@/lib/shots";

const p = getProject("mellow");
const summary =
  "A personal product concept for people who need slides but aren't designers. I designed Mellow end to end in Figma and built it as a working Next.js prototype, with Claude and ChatGPT as AI partners.";

export const metadata = caseMeta("mellow", summary);

// Desktop screenshots get too small to read on a phone, so phones see Mellow's own phone layout.
function Responsive({ name, alt, browser = 400, ratio }: { name: string; alt: string; browser?: number; ratio?: number }) {
  return (
    <>
      <div className="md:hidden">
        <Phone shot={`mellow-phone-${name}` as ShotKey} alt={alt} w={[112, 112]} shadow={p.shadow} />
      </div>
      <div className="hidden w-full justify-center px-6 md:flex">
        <Browser shot={`mellow-${name}` as ShotKey} alt={alt} w={[browser, browser]} ratio={ratio} shadow={p.shadow} />
      </div>
    </>
  );
}

function DecisionVisual({ name, alt }: { name: string; alt: string }) {
  return (
    <Stage colors={p.stage} className="h-[300px] w-full flex-none xl:h-[330px] xl:w-[460px]">
      <Responsive name={name} alt={alt} />
    </Stage>
  );
}

function Feature({ title, name, alt, ratio, children }: { title: string; name: string; alt: string; ratio: number; children: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <Stage colors={p.stage} className="h-[300px] rounded-none md:h-[270px]">
        <Responsive name={name} alt={alt} browser={360} ratio={ratio} />
      </Stage>
      <div className="flex flex-col gap-2 p-5 md:p-6">
        <h3 className="text-[19px] leading-[1.25] font-semibold tracking-[-0.03em] md:text-[21px]">{title}</h3>
        <Body>{children}</Body>
      </div>
    </div>
  );
}

export default function Mellow() {
  return (
    <CaseStudy
      story={["Goals", "Who it's for", "Key decisions", "Details", "Quality checks"]}
      hero={
        <Hero chips={["AI", "Web app", "Personal project", "2026"]} title={<>Mellow: from one sentence <br className="hidden md:block" />to a deck you&apos;d present</>} summary={summary}>
          <Stage colors={p.stage} className="h-[340px] gap-5 sm:h-[420px] md:h-[640px]">
            <div className="flex items-start gap-5 md:hidden">
              <Phone shot="mellow-phone-landing" alt="Mellow landing page on a phone" w={[120, 120]} shadow={p.shadow} />
              <div className="pt-8">
                <Phone shot="mellow-phone-editor" alt="Mellow slide editor on a phone" w={[120, 120]} shadow={p.shadow} />
              </div>
            </div>
            <div className="hidden w-full justify-center px-8 md:flex">
              <Browser shot="mellow-landing" alt="Mellow landing page with a prompt box and example decks" w={[920, 920]} shadow={p.shadow} />
            </div>
          </Stage>
        </Hero>
      }
    >
      <Section id="overview" title="Overview">
        <Row cols={3}>
          <TextCard title="The challenge">
            Most people who present aren&apos;t designers. A blank slide is slow to start from, and AI tools that jump straight to a finished deck can get the story wrong, which is painful to fix slide by slide.
          </TextCard>
          <TextCard title="My solution">
            A calm four-step flow: Prompt → Outline → Design → Export. You approve the plan before anything is designed, and Mel, a friendly helper, is one tap away on every screen.
          </TextCard>
          <TextCard title="What I delivered">
            A working prototype with 12 screens, from landing page to brand kit, built in Next.js, React, TypeScript and Tailwind CSS and responsive from phone to desktop.
          </TextCard>
        </Row>
        <Facts items={[["4 steps", "Prompt → Outline → Design → Export"], ["12 screens", "from landing page to brand kit"], ["5 themes", "Meadow, Paper, Harbor, Petal and Night"]]} />
        <RoleBox
          items={[
            ["My role", "Product designer & frontend developer"],
            ["Team", "Solo personal project"],
            ["Timeline", "October 2026"],
            ["Tools", "Figma · Next.js, React, TypeScript, Tailwind CSS · Claude & ChatGPT as AI partners"],
          ]}
        />
      </Section>

      <Section id="goals" kicker="Goals" title="Two goals behind every screen">
        <Row cols={2} className="pt-3">
          <TextCard title="Presenter goal" accent>
            &ldquo;My deck is due tomorrow. Help me get a good first draft without learning design.&rdquo;
          </TextCard>
          <TextCard title="My practice goal" accent>
            Design a whole product, not just screens: a multi-step task, an AI helper, settings and sharing, and then build it in a real frontend framework.
          </TextCard>
        </Row>
      </Section>

      <Section id="who-its-for" kicker="Who it's for" title="Designed for people who aren't designers">
        <Lede>I shaped Mellow around four everyday presenters and wrote a ready-made example prompt for each, so the prompt box never feels like a blank page.</Lede>
        <Row cols={4} className="pt-3">
          <PersonaCard title="Teachers" prompt="A 10-slide science lesson on the water cycle for grade 5, with a short quiz at the end.">
            Lesson decks with speaker notes and a quiz slide at the end.
          </PersonaCard>
          <PersonaCard title="Students" prompt="A book report on a novel I just finished: plot, main characters, themes, and my opinion.">
            Turn research notes into a clear class presentation.
          </PersonaCard>
          <PersonaCard title="Founders" prompt="A 12-slide investor pitch for a meal-kit startup: the problem, our solution, early traction, and what we are raising.">
            Pitch decks that tell one story, from problem to ask.
          </PersonaCard>
          <PersonaCard title="Teams" prompt="A monthly team update: what shipped, what slipped, what is next, and where we need help.">
            Monthly updates and onboarding guides in their brand colours.
          </PersonaCard>
        </Row>
      </Section>

      <Section id="key-decisions" kicker="Key decisions" title="Three decisions that keep people in control">
        <div className="flex flex-col gap-9 pt-3 md:gap-8">
          <Decision n={1} title="Review the plan before anything is designed" visual={<DecisionVisual name="outline" alt="Mellow outline step, with one line per section and tools to expand, shorten, split or remove each one" />}>
            <Body>
              Mellow drafts an outline first, one line per section. Each section can be expanded, shortened, split in two, rewritten or removed, and gets its own layout.
            </Body>
            <Why>fixing the order of a plan is much faster than redoing finished slides, and it keeps the person in charge of the story, not the AI.</Why>
          </Decision>
          <Decision n={2} flip title="Watch, pause or stop, and keep what's done" visual={<DecisionVisual name="generate" alt="Mellow writing the slides, with a progress bar, a step list and pause and stop buttons" />}>
            <Body>
              While slides are written, a progress bar and a step list show what is happening. You can pause, stop, run it in the background, or open finished slides straight away.
            </Body>
            <Why>waiting on AI feels long when you can&apos;t see it working. Showing progress, and keeping finished slides when you stop, means no time is wasted.</Why>
          </Decision>
          <Decision n={3} title="Every AI change comes with an undo" visual={<DecisionVisual name="editor" alt="Mellow editor where Mel says what it changed on slide 3, with an Undo changes button" />}>
            <Body>You ask Mel for a change in plain words. Mel says exactly what it changed and on which slide, with an Undo button right there.</Body>
            <Why>people only try ideas when trying is safe. A clear summary plus one-click undo makes asking for a change feel low-risk.</Why>
          </Decision>
        </div>
      </Section>

      <Section id="details" kicker="Details" title="A friendly helper and careful details">
        <Row cols={2} className="pt-3">
          <Feature title="Mel, a helper on every screen" name="mel" ratio={1.6} alt="Mel, Mellow's helper, in its side panel">
            Mel explains, edits and undoes. Each screen offers a few questions to pick from, so nobody has to know what to ask. Mel even has moods: thinking, cheering, or unsure when something goes wrong.
          </Feature>
          <Feature title="A brand kit that checks readability" name="brandkit" ratio={1150 / 790} alt="Mellow brand kit with logo, colours, fonts and an Easy to read contrast check">
            Add a logo, colours and fonts once. Mellow checks text and accent colours against the background with the WCAG contrast formula, and says &ldquo;Easy to read&rdquo; before you present on a projector.
          </Feature>
        </Row>
        <Row cols={3}>
          <TextCard small title="Saves as you go">
            Settings save the moment you change them, with a note to confirm. There is no Save button to forget.
          </TextCard>
          <TextCard small title="Safe to delete">
            Deleting an account lists exactly what will disappear, and asks you to type a word to confirm.
          </TextCard>
          <TextCard small title="Easy to share">
            A share link can be open to anyone or only to invited people, and always shows the latest version.
          </TextCard>
        </Row>
      </Section>

      <Section id="quality-checks" kicker="Quality checks" title="Checked at every size, by a script">
        <Lede>This was a personal practice project, so there were no users to test with yet. To check my own work, I wrote a Playwright script that opens every screen and captures it at three sizes.</Lede>
        <Checks
          items={[
            ["13 routes", "Every page, including log in, settings and the “page not found” screen."],
            ["3 sizes + 2 modes", "Phone 320, tablet 768 and desktop 1440, plus dark-mode and reduced-motion settings on phone."],
            ["Automatic flags", "Flags sideways scrolling and touch targets below the minimum size, and records each main flow as a video."],
          ]}
        />
      </Section>

      <Section id="final-design" kicker="Final design" title="The finished prototype">
        <div
          role="group"
          aria-label="Mellow desktop screens"
          className="grid gap-6 rounded-2xl px-4 py-6 md:grid-cols-3 md:gap-4 md:px-3"
          style={{ background: `linear-gradient(135deg, ${p.stage[0]}, ${p.stage[1]})` }}
        >
          {(
            [
              ["mellow-create", "Create", "Mellow create screen with the prompt box and example prompts"],
              ["mellow-export", "Share", "Mellow share and export screen"],
              ["mellow-settings", "Settings", "Mellow settings screen"],
            ] as [ShotKey, string, string][]
          ).map(([shot, cap, alt]) => (
            <Captioned key={shot} caption={cap}>
              <Browser shot={shot} alt={alt} w="fluid" shadow={p.shadow} />
            </Captioned>
          ))}
        </div>
        <Gallery colors={p.stage} label="Mellow phone screens">
          {(
            [
              ["mellow-phone-landing", "Landing", "Mellow landing page on a phone"],
              ["mellow-phone-create", "Create", "Mellow create screen on a phone"],
              ["mellow-phone-editor", "Editor", "Mellow slide editor on a phone"],
              ["mellow-phone-export", "Share", "Mellow share screen on a phone"],
            ] as [ShotKey, string, string][]
          ).map(([shot, cap, alt]) => (
            <Captioned key={shot} caption={cap}>
              <Phone shot={shot} alt={alt} w={[128, 160]} shadow={p.shadow} />
            </Captioned>
          ))}
        </Gallery>
        <LinkRow links={p.links} />
      </Section>

      <Closing
        slug="mellow"
        learned={[
          "Designing an AI feature means designing its behaviour: when it acts, what it tells you, and how you take it back.",
          "Real example content, like prompts, slides and speaker notes, made every screen easier to judge than placeholder text.",
          "A visual-check script made it quick to review every screen at every size after each change.",
        ]}
        next={[
          "Test the prompt-to-outline flow with five non-designers, starting with teachers and students.",
          "Fix the small touch targets the script flagged, and finish real exports such as PDF and PowerPoint.",
          "Connect a real AI model and add writing in Bahasa Indonesia.",
        ]}
      />
    </CaseStudy>
  );
}
