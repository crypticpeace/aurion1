import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/content";
import Swoosh from "@/components/ui/Swoosh";
import { Annotation, HandArrow } from "@/components/ui/Annotation";

/**
 * Brand reference section. Positions are percentages taken from the approved
 * desktop comp so the composition scales with the viewport.
 * The 3D renders sit on pure white, so they also mask the swoosh lines that pass
 * behind them.
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      {/* Arcs */}
      <Swoosh
        className="-z-10 hidden lg:block"
        d="M-10 350 C 70 410, 130 470, 175 545 S 250 800, 320 1010"
        animate
        delay={300}
      />
      <Swoosh className="-z-10 hidden lg:block" d="M855 392 C 930 420, 975 470, 1010 575" animate delay={900} />
      <Swoosh className="-z-10 lg:hidden" d="M-10 560 C 250 640, 600 700, 1010 980" animate delay={300} />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1920px] flex-col items-center px-5 pb-16 pt-32 lg:min-h-[100svh] lg:justify-center lg:pb-24 lg:pt-28">
        {/* Desktop objects */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          <div className="absolute z-10 left-[7.5%] top-[22%] animate-rise [animation-delay:900ms]">
            <Annotation rotate={-10} className="text-[34px]">
              More
              <br />
              <span className="ml-3">Reach</span>
            </Annotation>
            <HandArrow variant="down-right" className="ml-12 mt-1 w-16" />
          </div>
          <Image
            src="/images/megaphone.png"
            alt=""
            width={840}
            height={730}
            priority
            className="absolute left-[7.5%] top-[31%] w-[22.5%] max-w-[440px] animate-rise [animation-delay:200ms]"
          />

          <div className="absolute z-10 right-[3%] top-[17%] flex flex-col items-end animate-rise [animation-delay:1000ms]">
            <Annotation rotate={-10} className="text-[34px]">
              Better
              <br />
              <span className="ml-1">Strategy</span>
            </Annotation>
          </div>
          <HandArrow variant="down-left" className="absolute z-10 right-[8.5%] top-[21%] w-16 animate-rise [animation-delay:1100ms]" />
          <div className="absolute left-[77%] top-[24%] w-[14%] max-w-[270px] animate-rise [animation-delay:350ms]">
            <Image src="/images/paper-plane.png" alt="" width={500} height={420} priority className="w-full animate-float" />
          </div>

          <div className="absolute z-10 left-[73%] top-[76%] animate-rise [animation-delay:1200ms]">
            <Annotation rotate={-10} className="text-[34px]">
              Real
              <br />
              Results
            </Annotation>
            <HandArrow variant="right" className="-mt-1 ml-14 w-20 rotate-6" />
          </div>
          <Image
            src="/images/growth-chart.png"
            alt=""
            width={600}
            height={540}
            priority
            className="absolute left-[80.5%] top-[61%] w-[16.5%] max-w-[320px] animate-rise [animation-delay:500ms]"
          />
        </div>

        {/* Copy */}
        <p className="eyebrow animate-rise text-center">Digital marketing. Real impact.</p>
        <h1 className="display mt-7 animate-rise text-center text-[64px] [animation-delay:120ms] sm:text-[96px] lg:text-[clamp(96px,7.6vw,150px)]">
          Brands
          <br />
          That <span className="text-brand">Grow</span>
        </h1>
        <p className="mt-6 max-w-[34rem] animate-rise text-center text-lg leading-relaxed text-ink-700/80 [animation-delay:240ms] sm:text-2xl">
          Strategy, content, ads and more. We help brands get seen, get clicks and grow faster.
        </p>
        <div className="mt-10 flex animate-rise flex-col items-center gap-6 [animation-delay:360ms] sm:flex-row sm:gap-14">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-[18px] text-lg"
          >
            Start a Project <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a href="/work" className="link-underline text-lg">
            See Our Work
          </a>
        </div>

        {/* Mobile objects */}
        <div className="mt-12 grid w-full max-w-md grid-cols-3 items-end gap-2 lg:hidden" aria-hidden>
          <Image src="/images/megaphone.png" alt="" width={840} height={730} className="w-full" />
          <Image src="/images/paper-plane.png" alt="" width={500} height={420} className="mb-8 w-full" />
          <Image src="/images/growth-chart.png" alt="" width={600} height={540} className="w-full" />
        </div>

        <a
          href="#intro"
          className="mt-14 hidden flex-col items-center gap-4 lg:absolute lg:bottom-8 lg:left-1/2 lg:flex lg:-translate-x-1/2"
        >
          <span className="eyebrow text-[11px]">Scroll to explore</span>
          <span className="relative h-12 w-px overflow-hidden bg-brand/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-float bg-brand" />
          </span>
        </a>
      </div>
    </section>
  );
}
