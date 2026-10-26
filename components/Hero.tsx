import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/content";
import { Annotation } from "@/components/ui/Annotation";

/**
 * Hero. The tracked eyebrow carries the page's only <h1> because it holds the
 * search terms; "Brands That Grow" stays the visual headline but is marked up
 * as plain text so it does not compete for heading weight.
 *
 * The three 3D objects are JPEGs rather than PNGs: they are rendered on white
 * and the section is white, so there is no transparency to keep, and at this
 * size JPEG is roughly a third of the bytes. They all load with `priority`, so
 * that weight is on the critical path.
 *
 * The 3D objects are positioned as percentages of the section so the
 * composition scales with the viewport. Each object sits in its own lane
 * (left 5-28%, right 72-97%) clear of the centre column, which is capped at
 * 34rem, so nothing can overlap the copy.
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      <div className="relative mx-auto flex min-h-[720px] max-w-[1920px] flex-col items-center px-5 pb-16 pt-32 lg:min-h-[100svh] lg:justify-center lg:pb-28 lg:pt-32">
        {/* Desktop objects */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <span className="absolute left-[7.5%] top-[21%] z-10" aria-hidden>
            <Annotation rotate={-10} className="text-[34px]">
              More
              <br />
              <span className="ml-3">Reach</span>
            </Annotation>
          </span>
          <Image
            src="/images/megaphone.jpg"
            alt="Social media marketing agency in Mumbai"
            width={840}
            height={730}
            priority
            className="absolute left-[6%] top-[31%] w-[22%] max-w-[420px] animate-rise [animation-delay:200ms]"
          />

          <span className="absolute right-[4%] top-[18%] z-10 text-right" aria-hidden>
            <Annotation rotate={-10} className="text-[34px]">
              Better
              <br />
              <span className="ml-1">Strategy</span>
            </Annotation>
          </span>
          <div className="absolute left-[78%] top-[27%] w-[13%] max-w-[250px] animate-rise [animation-delay:350ms]">
            <Image
              src="/images/paper-plane.jpg"
              alt="Digital marketing strategy for brands"
              width={500}
              height={420}
              priority
              className="w-full animate-float"
            />
          </div>

          <span className="absolute left-[72%] top-[74%] z-10" aria-hidden>
            <Annotation rotate={-10} className="text-[34px]">
              Real
              <br />
              Results
            </Annotation>
          </span>
          <Image
            src="/images/growth-chart.jpg"
            alt="Performance marketing results and growth"
            width={600}
            height={540}
            priority
            className="absolute left-[81%] top-[60%] w-[16%] max-w-[310px] animate-rise [animation-delay:500ms]"
          />
        </div>

        {/* Copy */}
        <h1 className="eyebrow animate-rise max-w-2xl text-center">
          Digital marketing agency in Kandivali West, Mumbai
        </h1>
        <p className="display mt-7 animate-rise text-center text-[64px] [animation-delay:120ms] sm:text-[92px] lg:text-[clamp(88px,7vw,140px)]">
          Brands
          <br />
          That <span className="text-brand">Grow</span>
        </p>
        <p className="mt-6 max-w-[34rem] animate-rise text-center text-lg leading-relaxed text-ink-700/80 [animation-delay:240ms] sm:text-xl">
          Social media marketing, content creation and performance marketing by an in-house team in Mumbai. We help
          brands across India get seen, get leads and grow faster, without the stress.
        </p>
        <div className="mt-10 flex animate-rise flex-col items-center gap-6 [animation-delay:360ms] sm:flex-row sm:gap-12">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-[18px] text-lg"
          >
            Get a Free Quote <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </a>
          <a href="/work" className="link-underline text-lg">
            See Our Work
          </a>
        </div>

        {/* Mobile objects */}
        <div className="mt-12 grid w-full max-w-md grid-cols-3 items-end gap-2 lg:hidden">
          <Image
            src="/images/megaphone.jpg"
            alt="Social media marketing agency in Mumbai"
            width={840}
            height={730}
            className="w-full"
          />
          <Image
            src="/images/paper-plane.jpg"
            alt="Digital marketing strategy for brands"
            width={500}
            height={420}
            className="mb-8 w-full"
          />
          <Image
            src="/images/growth-chart.jpg"
            alt="Performance marketing results and growth"
            width={600}
            height={540}
            className="w-full"
          />
        </div>

        <a
          href="#intro"
          className="mt-14 hidden flex-col items-center gap-4 lg:absolute lg:bottom-6 lg:left-1/2 lg:flex lg:-translate-x-1/2"
        >
          <span className="eyebrow text-[11px]">Scroll to explore</span>
          <span className="relative h-10 w-px overflow-hidden bg-brand/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-float bg-brand" />
          </span>
        </a>
      </div>
    </section>
  );
}
