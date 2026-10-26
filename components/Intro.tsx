import { services } from "@/lib/content";

/**
 * Positioning statement set as large type, followed by a ruled ticker of the
 * service names. The statement is the section's <h2>; the ticker repeats its
 * items to loop, so every set after the first is aria-hidden and Google reads
 * the list once.
 */
export default function Intro() {
  const ticker = services.map((s) => s.title);

  return (
    <section id="intro" className="relative border-t border-line bg-white">
      <div className="container py-24 lg:py-32">
        <h2 className="mx-auto max-w-5xl text-center text-[28px]/[1.2] font-semibold tracking-[-0.03em] text-ink sm:text-[40px]/[1.18] lg:text-[52px]/[1.14]">
          At Aurion Digital, a <span className="text-brand">digital marketing agency in Kandivali West, Mumbai</span>,
          we grow brands across India through{" "}
          <span className="text-brand">social media marketing, content creation and performance marketing</span>,
          powered by AI and measured by real leads and ROI.
        </h2>
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
