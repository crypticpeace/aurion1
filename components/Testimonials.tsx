import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line bg-paper py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          label="What our clients say"
          title="In their words"
          intro="Feedback from the teams we grow with."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative flex flex-col justify-between bg-white p-8 sm:p-12">
              <svg viewBox="0 0 48 36" className="h-9 w-12 fill-brand" aria-hidden>
                <path d="M0 36V21.6C0 9.9 6 2.7 18 0l2.2 4.5C13.6 6.6 10.5 10.5 10.2 16.2H20V36H0Zm28 0V21.6C28 9.9 34 2.7 46 0l2 4.5c-6.6 2.1-9.7 6-10 11.7H48V36H28Z" />
              </svg>
              <blockquote className="mt-8 text-xl leading-[1.5] tracking-[-0.01em] text-ink sm:text-[22px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
