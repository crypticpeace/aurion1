import { Annotation, HandArrow } from "@/components/ui/Annotation";
import { services } from "@/lib/content";

/**
 * Positioning statement set as large type, followed by a ruled ticker of the
 * service lines. The ticker is the page's one ambient motion below the hero.
 */
export default function Intro() {
  const ticker = services.map((s) => s.title);

  return (
    <section id="intro" className="relative border-t border-line bg-white">
      <div className="container relative py-24 lg:py-36">
        <div className="absolute right-6 top-10 hidden lg:right-16 lg:top-20 lg:block">
          <Annotation rotate={6}>the whole idea</Annotation>
          <HandArrow variant="down-left" className="-mt-1 ml-2 w-12" />
        </div>

        <p className="mx-auto max-w-5xl text-center text-[28px]/[1.2] font-semibold tracking-[-0.03em] text-ink sm:text-[40px]/[1.18] lg:text-[54px]/[1.14]">
          At Aurion Digital, we drive measurable growth through{" "}
          <span className="text-brand">AI-powered marketing solutions</span> designed to scale brands globally, engage
          the right audience and <span className="text-brand">maximise ROI with data-driven precision.</span>
        </p>
      </div>

      <div className="relative overflow-hidden border-y border-line bg-paper py-5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {ticker.map((t) => (
                <li key={t} className="flex items-center whitespace-nowrap">
                  <span className="px-8 text-lg font-medium tracking-tight text-ink sm:text-xl">{t}</span>
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-brand" aria-hidden>
                    <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
