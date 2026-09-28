import Image from "next/image";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Annotation, HandArrow } from "@/components/ui/Annotation";
import { comparison } from "@/lib/content";

/**
 * Side-by-side comparison as a ruled table so each pain point lines up with its
 * answer. The "others" column is struck through; the Aurion column carries the
 * brand colour and a raised panel.
 */
export default function WhyChoose() {
  return (
    <section id="why-aurion" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="relative">
          <SectionHeading
            align="center"
            label="Why Aurion Digital"
            title="Not your usual agency"
            intro="How our AI-powered approach delivers clarity, scalability and real growth compared with traditional agencies."
          />
          <div className="absolute -bottom-10 right-[6%] hidden xl:block">
            <Annotation rotate={-6}>spot the difference</Annotation>
            <HandArrow variant="down-left" className="ml-6 w-12" />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          {/* Header row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="flex items-end px-4 pb-5 sm:px-8">
              <span className="text-base font-medium text-muted sm:text-lg">Other agencies</span>
            </div>
            <div className="flex items-end rounded-t-2xl bg-ink px-4 pb-5 pt-7 sm:px-8">
              <Image
                src="/images/aurion-logo-light.png"
                alt="Aurion Digital"
                width={550}
                height={166}
                className="h-auto w-[120px] sm:w-[150px]"
              />
            </div>
          </div>

          <ul>
            {comparison.map((row, i) => (
              <li key={row.aurion} className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="flex items-start gap-3 border-t border-line px-4 py-6 sm:gap-4 sm:px-8">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-ink/30" strokeWidth={2} />
                  <span className="text-sm text-muted line-through decoration-ink/25 sm:text-base">{row.others}</span>
                </div>
                <div
                  className={`flex items-start gap-3 border-t border-white/10 bg-ink px-4 py-6 text-white sm:gap-4 sm:px-8 ${
                    i === comparison.length - 1 ? "rounded-b-2xl" : ""
                  }`}
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{row.aurion}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
