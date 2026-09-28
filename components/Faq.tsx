"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Annotation, HandArrow } from "@/components/ui/Annotation";
import { faqs, whatsappHref } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            label="FAQs"
            title="Got questions? We've got answers."
            intro="The questions businesses ask most before getting started."
          />
          <div className="mt-12 hidden items-start gap-2 lg:flex">
            <Annotation rotate={-4}>
              still curious?
              <br />
              just ask us
            </Annotation>
            <HandArrow variant="right" className="mt-6 w-20" />
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-8 inline-flex items-center gap-2"
          >
            Talk to the team <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="border-t border-ink">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={cn(
                        "text-lg font-semibold tracking-tight transition-colors sm:text-xl",
                        isOpen ? "text-brand" : "text-ink group-hover:text-brand",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen ? "rotate-45 border-brand bg-brand text-white" : "border-line text-ink",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-8 pr-14 leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
