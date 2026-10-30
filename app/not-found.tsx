import { Footer, HomeNav } from "@/components/site-chrome";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <HomeNav />
      <main id="main" className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center justify-center gap-5 px-4 py-24 text-center">
        <p className="font-mono text-[13px] tracking-[0.08em] text-muted">404</p>
        <h1 className="text-[38px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[52px]">This page doesn&apos;t exist</h1>
        <p className="text-[17px] leading-[1.6] text-muted">The link may be old or mistyped. My case studies are all on the homepage.</p>
        <ButtonLink href="/#work" kind="dark">
          See my work
        </ButtonLink>
      </main>
      <Footer />
    </>
  );
}
