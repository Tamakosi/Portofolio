import { Body, CaseStudy, caseMeta, Checks, Closing, Decision, Facts, Gallery, Hero, Lede, LinkRow, RoleBox, Row, Section } from "@/components/case-study";
import { Browser, Captioned, Phone, Stage } from "@/components/shots";
import { InsightCard, TextCard, Why } from "@/components/ui";
import { getProject } from "@/lib/projects";
import type { ShotKey } from "@/lib/shots";

const p = getProject("atma-barbershop");
const summary =
  "A team project to complete the Sistem Informasi Berbasis Web (Web-Based Information System) course at Atma Jaya Yogyakarta University. We built an admin dashboard for a barbershop in Next.js with a MySQL database and put it online with Vercel, starting from the Next.js App Router course and adding a landing page and a reservations section of our own.";

export const metadata = caseMeta("atma-barbershop", summary);

// Desktop captures get too small to read on a phone, so phones see the site's own phone layout.
function DecisionVisual({ name, alt }: { name: string; alt: string }) {
  return (
    <Stage colors={p.stage} className="h-[300px] w-full flex-none xl:h-[330px] xl:w-[460px]">
      <div className="md:hidden">
        <Phone shot={`barber-phone-${name}` as ShotKey} alt={alt} w={[112, 112]} shadow={p.shadow} />
      </div>
      <div className="hidden w-full justify-center px-6 md:flex">
        <Browser shot={`barber-${name}` as ShotKey} alt={alt} w={[400, 400]} shadow={p.shadow} />
      </div>
    </Stage>
  );
}

export default function AtmaBarbershop() {
  return (
    <CaseStudy
      story={["Goals", "What I built", "What I added", "How it's built", "Looking back"]}
      hero={
        <Hero chips={["Web app", "Admin dashboard", "University team project", "2024"]} title={<>Atma Barbershop: an admin <br className="hidden md:block" />dashboard coded in Next.js</>} summary={summary}>
          <Stage colors={p.stage} className="h-[340px] sm:h-[420px] md:h-[600px]">
            <div className="flex items-start gap-5 md:hidden">
              <Phone shot="barber-phone-home" alt="Atma Barbershop landing page on a phone" w={[120, 120]} shadow={p.shadow} />
              <div className="pt-8">
                <Phone shot="barber-phone-dashboard" alt="Atma Barbershop dashboard on a phone" w={[120, 120]} shadow={p.shadow} />
              </div>
            </div>
            <div className="hidden items-start gap-8 px-8 md:flex">
              <Browser shot="barber-home" alt="Atma Barbershop landing page with a full-bleed photo of a barber at work" w={["0px", "min(40vw, 520px)"]} shadow={p.shadow} />
              <div className="pt-[72px]">
                <Browser shot="barber-dashboard" alt="Atma Barbershop dashboard with summary cards, a revenue chart and the latest invoices" w={["0px", "min(40vw, 520px)"]} shadow={p.shadow} />
              </div>
            </div>
          </Stage>
        </Hero>
      }
    >
      <Section id="overview" title="Overview">
        <Row cols={3}>
          <TextCard title="The challenge">
            A barbershop runs on bookings and payments. Staff need one place to see what has been collected and what is still pending, look up customers, and keep track of reservations.
          </TextCard>
          <TextCard title="My approach">
            We worked through the Next.js App Router course, which builds a finance dashboard step by step, then turned it into a barbershop&apos;s: a photo-led landing page, the shop&apos;s name and colour in the
            sidebar, and a new Reservations section.
          </TextCard>
          <TextCard title="What I delivered">
            A live web app: a landing page, an overview with summary cards and a 12-month revenue chart, tables for invoices, customers and reservations, and forms that save new records.
          </TextCard>
        </Row>
        <Facts items={[["4 pages", "Home, Invoices, Customers, Reservations"], ["3 forms", "new invoices, customers and reservations"], ["Responsive", "the sidebar becomes a top bar on phones"]]} />
        <RoleBox
          items={[
            ["My role", "Frontend and database developer"],
            ["Context", "Team project for Sistem Informasi Berbasis Web (Web-Based Information System), Atma Jaya Yogyakarta University"],
            ["Timeline", "2024"],
            ["Tools", "Next.js App Router, React, Tailwind CSS, MySQL, Vercel"],
          ]}
        />
      </Section>

      <Section id="goals" kicker="Goals" title="Two goals behind the build">
        <Row cols={2} className="pt-3">
          <TextCard title="Shop owner goal" accent>
            &ldquo;Show me what has been paid, what is still pending and who is booked, without digging through notes.&rdquo;
          </TextCard>
          <TextCard title="My learning goal" accent>
            Learn how a real web app fits together: pages and shared layouts, reading and saving data, forms, and putting it online for anyone to open.
          </TextCard>
        </Row>
      </Section>

      <Section id="what-i-built" kicker="What I built" title="From the front door to the back office">
        <Lede>The app has a public landing page and a dashboard behind it. Every dashboard page shares one sidebar, so staff learn the layout once.</Lede>
        <ol className="flex flex-col gap-3 pt-3 md:gap-4">
          <InsightCard n={1} title="Landing page">
            A full-screen photo of a barber at work, the Atma Barbershop logo and a bold headline, with one link: Go to Dashboard.
          </InsightCard>
          <InsightCard n={2} title="Overview">
            Four summary cards for money collected, money pending, total invoices and total customers, a revenue chart for the last 12 months, and the latest invoices and reservations.
          </InsightCard>
          <InsightCard n={3} title="Invoices">
            A table with customer, email, amount, date and a green Paid or grey Pending badge, a search bar, and edit and delete buttons on every row.
          </InsightCard>
          <InsightCard n={4} title="Customers and Reservations">
            Two more tables in the same pattern, so staff use one layout everywhere.
          </InsightCard>
          <InsightCard n={5} title="Create forms">
            Pick a customer, enter an amount and choose Pending or Paid. The form saves the record to the database.
          </InsightCard>
        </ol>
      </Section>

      <Section id="what-i-added" kicker="What I added" title="Three changes that made it a barbershop">
        <div className="flex flex-col gap-9 pt-3 md:gap-8">
          <Decision n={1} title="A landing page with the shop's own character" visual={<DecisionVisual name="home" alt="Atma Barbershop landing page with a dark photo, the logo and a headline set in Anton" />}>
            <Body>
              Before the dashboard, people land on a dark, full-bleed photo of a barber at work. The logo sits top left, and the headline is set in Anton, a tall condensed typeface, with Kanit for the
              smaller text.
            </Body>
            <Why>an admin tool still belongs to a business. The photo and type set the shop&apos;s mood before staff get to the numbers.</Why>
          </Decision>
          <Decision n={2} flip title="The shop's brand on every page" visual={<DecisionVisual name="dashboard" alt="Atma Barbershop dashboard with the shop's name on a deep brown block at the top of the sidebar" />}>
            <Body>
              The sidebar opens with the shop&apos;s name on a deep brown block. Home, Invoices, Customers and Reservations sit below it, with Back and Sign Out at the bottom. On phones, it turns into a row
              of icons at the top.
            </Body>
            <Why>the brown links the dashboard to the landing page, and one sidebar on every page means staff always know where they are.</Why>
          </Decision>
          <Decision n={3} title="Reservations next to invoices" visual={<DecisionVisual name="reservations" alt="Atma Barbershop reservations table with search and a Create Reservations button" />}>
            <Body>
              We added Reservations as a fourth section: its own menu item, a table with search, a Create Reservations form, and a Latest Reservations card on the overview.
            </Body>
            <Why>a barbershop runs on bookings, so reservations belong in the main menu, at the same level as payments.</Why>
          </Decision>
        </div>
      </Section>

      <Section id="how-its-built" kicker="How it's built" title="What happens under the hood">
        <Lede>I set up the MySQL database behind the app, and Next.js handles the pages, the forms and the deployment. These are the parts we built on.</Lede>
        <Row cols={2} className="pt-3">
          <TextCard title="Three tables in MySQL">
            I set up the database: one table each for customers, invoices and reservations. Invoices and reservations are both linked to a customer, so the tables can show the customer&apos;s name and email
            without storing them twice.
          </TextCard>
          <TextCard title="Pages that read from the database">
            The dashboard pages query MySQL on the server and hand the rows to the page, so the summary cards and the three tables always show what is stored.
          </TextCard>
        </Row>
        <Row cols={2}>
          <TextCard title="One layout for every page">
            The sidebar lives in a shared Next.js layout. Moving between pages only swaps the content area, so the menu never reloads.
          </TextCard>
          <TextCard title="Forms that save on the server">
            The create forms use Next.js Server Actions: each form sends its data straight to a function on the server, with no separate API to build.
          </TextCard>
        </Row>
        <Row cols={2}>
          <TextCard title="Fonts that load without a jump">
            Anton, Kanit and Lusitana load through next/font, which hosts them with the site and sizes a fallback font to match, so text does not shift while the fonts load.
          </TextCard>
          <TextCard title="Images sized for each screen">
            The hero photo uses the Next.js Image component, which serves a resized, compressed copy for each screen width.
          </TextCard>
        </Row>
      </Section>

      <Section id="looking-back" kicker="Looking back" title="Reviewing our 2024 code as a designer">
        <Lede>This was a course project, so there were no real users to test with. Looking at it again in 2026, after JayJay School, these are the first things I would fix.</Lede>
        <Checks
          items={[
            ["Sign-in", "The Login button on the landing page does not open a sign-in page yet, so the dashboard is open to anyone with the link."],
            ["Copied labels", "Some labels were copied between forms. The invoice form's button says Create Reservations, and the Create Reservations button links to a page that does not exist."],
            ["Sample data", "The tables still show the course's sample customers and amounts in US dollars, not barbershop services priced in rupiah."],
          ]}
        />
      </Section>

      <Section id="final-design" kicker="Final design" title="The finished web app">
        <div
          role="group"
          aria-label="Atma Barbershop desktop screens"
          className="grid gap-6 rounded-2xl px-4 py-6 md:grid-cols-3 md:gap-4 md:px-3"
          style={{ background: `linear-gradient(135deg, ${p.stage[0]}, ${p.stage[1]})` }}
        >
          {(
            [
              ["barber-invoices", "Invoices", "Atma Barbershop invoices table with Paid and Pending badges"],
              ["barber-create", "New invoice", "Atma Barbershop form for creating an invoice"],
              ["barber-res-create", "New reservation", "Atma Barbershop form for creating a reservation"],
            ] as [ShotKey, string, string][]
          ).map(([shot, cap, alt]) => (
            <Captioned key={shot} caption={cap}>
              <Browser shot={shot} alt={alt} w="fluid" shadow={p.shadow} />
            </Captioned>
          ))}
        </div>
        <Gallery colors={p.stage} label="Atma Barbershop on a phone">
          {(
            [
              ["barber-phone-home", "Landing", "Atma Barbershop landing page on a phone"],
              ["barber-phone-dashboard", "Overview", "Atma Barbershop overview on a phone"],
              ["barber-phone-invoices", "Invoices", "Atma Barbershop invoices on a phone"],
              ["barber-phone-reservations", "Reservations", "Atma Barbershop reservations on a phone"],
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
        slug="atma-barbershop"
        learned={[
          "How a web app fits together: shared layouts, data from a database, and forms that save back to it.",
          "A course gives you a solid structure. Making it fit a real business, with its own brand and features, is where I learned the most.",
          "Copying a pattern is fast, but every copied label and link needs checking afterwards.",
        ]}
        next={[
          "Add sign-in, so only staff can open the dashboard.",
          "Replace the sample data with real services, barbers and prices in rupiah.",
          "Redesign it in Figma first, then rebuild it, starting with a booking calendar in place of the reservations table.",
        ]}
      />
    </CaseStudy>
  );
}
