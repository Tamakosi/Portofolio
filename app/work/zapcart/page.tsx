import Image from "next/image";
import { Body, CaseStudy, caseMeta, Checks, Closing, Decision, Facts, Gallery, Hero, Lede, LinkRow, RoleBox, Row, Section } from "@/components/case-study";
import { Captioned, Phone, Stage, type Widths } from "@/components/shots";
import { InsightCard, TextCard, Why } from "@/components/ui";
import { getProject } from "@/lib/projects";
import { shots, type ShotKey } from "@/lib/shots";

const p = getProject("zapcart");
const summary =
  "My UI/UX project at JayJay School: an Indonesian shopping app designed in Figma, from onboarding to search, product page, cart, checkout and order tracking. I built its design system first, then linked every screen into a clickable prototype.";

export const metadata = caseMeta("zapcart", summary);

const heroW: Widths = ["min(24vw, 130px)", "clamp(150px, 18vw, 230px)"];

function DsCard({ title, shot, alt, children }: { title: string; shot: ShotKey; alt: string; children: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex justify-center bg-[#f4f8fa] p-4 md:p-6">
        <Image src={shots[shot]} alt={alt} sizes="(min-width: 1160px) 400px, (min-width: 768px) 45vw, 90vw" placeholder="blur" className="h-auto w-full rounded-lg bg-white" />
      </div>
      <div className="flex flex-col gap-2 p-5 md:p-6">
        <h3 className="text-[19px] leading-[1.25] font-semibold tracking-[-0.03em] md:text-[21px]">{title}</h3>
        <Body>{children}</Body>
      </div>
    </div>
  );
}

function DecisionVisual({ shot, alt }: { shot: ShotKey; alt: string }) {
  return (
    <Stage colors={p.stage} className="h-[300px] w-full flex-none xl:h-[440px] xl:w-[400px]">
      <Phone shot={shot} alt={alt} w={[112, 176]} shadow={p.shadow} />
    </Stage>
  );
}

export default function ZapCart() {
  return (
    <CaseStudy
      story={["Goals", "The flow", "Key decisions", "Design system", "Quality checks"]}
      hero={
        <Hero chips={["E-commerce", "Mobile app", "JayJay School project", "2026"]} title={<>ZapCart: from search <br className="hidden md:block" />to doorstep, fast and easy</>} summary={summary}>
          <Stage colors={p.stage} className="h-[300px] gap-3 sm:h-[400px] md:h-[640px] md:gap-10">
            <Phone shot="zap-home" alt="ZapCart home screen with search, promotions, categories and recommended products" w={heroW} shadow={p.shadow} preload />
            <div className="pb-5 md:pb-10">
              <Phone shot="zap-pdp" alt="ZapCart product page with the discounted price, rating, items sold and shipping estimate" w={heroW} shadow={p.shadow} preload />
            </div>
            <Phone shot="zap-cart" alt="ZapCart cart with items grouped by store, checkboxes and quantity steppers" w={heroW} shadow={p.shadow} preload />
          </Stage>
        </Hero>
      }
    >
      <Section id="overview" title="Overview">
        <Row cols={3}>
          <TextCard title="The challenge">
            A shopping app has a lot to show on a small screen: prices, discounts, vouchers, shipping and sellers. When everything competes for attention, it gets hard to compare products and to trust the total at checkout.
          </TextCard>
          <TextCard title="My solution">
            A calm cyan and navy app with one clear path: find it, check it, add it to the cart, pay. Discounts and shipping show up front on every product, so the checkout total holds no surprises.
          </TextCard>
          <TextCard title="What I delivered">
            17 high-fidelity screens, from the splash screen to order detail, a design system with colour, type, icons, forms and cards, and a clickable prototype of the whole flow.
          </TextCard>
        </Row>
        <Facts items={[["17 screens", "splash screen to order detail"], ["5 flows", "onboarding to order tracking"], ["5 form states", "default, focus, filled, error, disabled"]]} />
        <RoleBox items={[["My role", "UI/UX Designer"], ["Context", "JayJay School UI/UX Design program"], ["Timeline", "2026"], ["Tools", "Figma: styles, components, auto layout and prototyping"]]} />
      </Section>

      <Section id="goals" kicker="Goals" title="Two goals behind every screen">
        <Row cols={2} className="pt-3">
          <TextCard title="Shopper goal" accent>
            &ldquo;Help me find what I need, see the real price, and pay the way I like, without surprises at checkout.&rdquo;
          </TextCard>
          <TextCard title="My practice goal" accent>
            Put the JayJay School program into practice end to end: build a design system first, then design a complete shopping flow with it and link it into a prototype.
          </TextCard>
        </Row>
      </Section>

      <Section id="the-flow" kicker="The flow" title="From first open to order tracking">
        <Lede>ZapCart covers the whole journey in five flows, and each one starts where the last one ends.</Lede>
        <ol className="flex flex-col gap-3 pt-3 md:gap-4">
          <InsightCard n={1} title="Get started">
            A splash screen and three onboarding screens explain the promise: favourite products, easy payment and flexible delivery. Then people sign up or log in.
          </InsightCard>
          <InsightCard n={2} title="Discover">
            Home puts search, wishlist and cart at the top, then promotions, categories, recently viewed products and recommendations.
          </InsightCard>
          <InsightCard n={3} title="Decide">
            The product page shows the price and savings, rating and items sold, the shipping estimate and the variants, with Buy with promo and Add to cart pinned at the bottom.
          </InsightCard>
          <InsightCard n={4} title="Cart">
            Items are grouped by store. People choose what to buy, change quantities and see the total discount before they continue.
          </InsightCard>
          <InsightCard n={5} title="Pay and track">
            Checkout, a choice of payment methods, vouchers, and an order list with order details to follow each purchase.
          </InsightCard>
        </ol>
      </Section>

      <Section id="key-decisions" kicker="Key decisions" title="Three decisions that keep shopping clear">
        <div className="flex flex-col gap-9 pt-3 md:gap-8">
          <Decision n={1} title="Prices you can compare at a glance" visual={<DecisionVisual shot="zap-home" alt="ZapCart home screen, where each product card shows the discounted price, original price and free-shipping tag" />}>
            <Body>
              Every product card shows the price after discount, the original price crossed out, the discount percentage and a free-shipping tag, so people can compare without opening each product.
            </Body>
            <Why>discounts and shipping costs often decide an online purchase. Showing them early saves taps and keeps the checkout total from becoming a surprise.</Why>
          </Decision>
          <Decision n={2} flip title="A product page that answers questions in order" visual={<DecisionVisual shot="zap-pdp" alt="ZapCart product page, read from price to rating to shipping to variants" />}>
            <Body>
              The page reads top to bottom the way people check a product: price and savings, then name, rating and items sold, then the shipping estimate, then the variants. The actions stay pinned at the bottom.
            </Body>
            <Why>people decide on price, trust and delivery before options. Following that order means they never have to hunt for the next answer.</Why>
          </Decision>
          <Decision n={3} title="A cart grouped by store" visual={<DecisionVisual shot="zap-cart" alt="ZapCart cart with items grouped under each store" />}>
            <Body>
              Items sit under their store, each with its own free-shipping label. Every item and store has a checkbox, quantities have a stepper, and the total discount sits next to the total price.
            </Body>
            <Why>each store ships separately, so grouping makes delivery clear. Checkboxes let people buy part of their cart and keep the rest for later.</Why>
          </Decision>
        </div>
      </Section>

      <Section id="design-system" kicker="Design system" title="A design system before the first screen">
        <Lede>Before designing any screen, I set up the foundations in Figma. Every screen is built from these styles and components, which kept all 17 consistent.</Lede>
        <Row cols={2} className="pt-3">
          <DsCard title="Colour" shot="zap-ds-colors" alt="ZapCart colour palette: a cyan primary scale, a navy neutral scale and status colours">
            A 10-step cyan primary scale and a navy neutral scale, plus success, warning, info and danger colours.
          </DsCard>
          <DsCard title="Product cards" shot="zap-ds-card" alt="ZapCart product card components in two sizes">
            A product card in two sizes, with thumbnail, price, discount and store, reused on the home screen and in the cart.
          </DsCard>
        </Row>
        <Row cols={2}>
          <DsCard title="Forms in five states" shot="zap-ds-form" alt="ZapCart text fields and dropdowns in default, focus, filled, error and disabled states">
            Text fields and dropdowns for default, focus, filled, error and disabled, so every form behaves the same way.
          </DsCard>
          <DsCard title="Type scale" shot="zap-ds-type" alt="ZapCart type scale from 10 to 18 pixels in regular, medium and bold">
            Headings and body text from 10 to 18px in regular, medium and bold, with separate paragraph styles for longer text.
          </DsCard>
        </Row>
        <Row cols={2}>
          <TextCard small title="Local payment methods">
            Logos for Indonesian banks and e-wallets, such as BCA, Mandiri, GoPay and OVO, ready for the payment screen.
          </TextCard>
          <TextCard small title="Written for local shoppers">
            Most of the interface copy is in Bahasa Indonesia, from &ldquo;Keranjang&rdquo; to &ldquo;Beli Pakai Promo&rdquo;.
          </TextCard>
        </Row>
      </Section>

      <Section id="quality-checks" kicker="Quality checks" title="Walked through as a prototype">
        <Lede>This was a course project, so there were no real users to test with yet. I linked the screens into a clickable prototype in Figma and walked through every flow.</Lede>
        <Checks
          items={[
            ["5 flows linked", "Onboarding, account, browsing, buying and tracking are connected in one prototype."],
            ["12 extra frames", "Five log-in and seven sign-up frames, so the forms can be clicked through step by step."],
            ["1 component set", "App bar, navbar, buttons, form fields and product cards are components, so every screen stays consistent."],
          ]}
        />
      </Section>

      <Section id="final-design" kicker="Final design" title="The finished screens">
        <Gallery colors={p.stage} label="ZapCart final screens">
          {(
            [
              ["zap-splash", "Splash", "ZapCart splash screen with the logo on cyan"],
              ["zap-onboard-2", "Onboarding", "ZapCart onboarding screen about easy payment"],
              ["zap-login", "Log in", "ZapCart log-in screen with email, password and social sign-in"],
              ["zap-search", "Search results", "ZapCart search results for sneakers with filters"],
              ["zap-checkout", "Checkout", "ZapCart checkout with address, shipping, promo and payment method"],
              ["zap-payment", "Payment method", "ZapCart payment method list with e-wallets, cards and virtual accounts"],
              ["zap-orders", "Orders", "ZapCart order list with order status"],
              ["zap-order-detail", "Order detail", "ZapCart order detail with shipping info and payment summary"],
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
        slug="zapcart"
        learned={[
          "Starting with a design system made 17 screens faster to design and kept them consistent.",
          "Shopping is about trust: prices, discounts and shipping have to be clear at every step, not just at checkout.",
          "Linking a prototype shows how screens connect in a way static screens do not.",
        ]}
        next={[
          "Usability-test the checkout flow with five online shoppers.",
          "Check every colour pair against WCAG contrast, starting with white text on the cyan buttons.",
          "Design empty, loading and error states for search, cart and payment.",
        ]}
      />
    </CaseStudy>
  );
}
