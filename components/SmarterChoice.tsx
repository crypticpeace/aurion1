import Image from "next/image";
import { ArrowRight, RotateCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { smarterChoice } from "@/lib/content";

const stages = [
  { title: "Plan", body: "A month of content and campaigns agreed up front, against what the brand needs to sell." },
  { title: "Shoot", body: "Filming grouped by location and brand, so one day supplies several weeks of posts." },
  { title: "Publish", body: "Edits, captions and ads go out on a schedule, not in bursts when someone remembers." },
  { title: "Report", body: "What ran, what reached people and what it cost, in one monthly read you can act on." },
];

/**
 * How a month actually runs, as a numbered loop on a rail.
 *
 * This panel replaced an illustrative growth chart. A rising line with no
 * figures on it still reads as a claimed result, and we cannot stand behind a
 * result nobody measured. The process is a real thing we can show instead, and
 * it backs up the four points on the left rather than decorating them.
 */
function ProcessPanel() {
  return (
    <div className="relative h-full w-full rounded-[20px] bg-ink p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/50">How we work</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">One month, one team</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
          <RotateCw className="h-3.5 w-3.5 text-brand" aria-hidden /> Repeats monthly
        </span>
      </div>

      <ol className="relative mt-8">
        {/* The rail: a hairline behind the markers, orange where it is walked */}
        <span className="absolute bottom-6 left-[15px] top-3 w-px bg-gradient-to-b from-brand via-brand/60 to-white/10" aria-hidden />
        {stages.map((stage, i) => (
          <li key={stage.title} className={`relative flex gap-5 ${i === stages.length - 1 ? "" : "pb-7"}`}>
            <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 bg-ink text-[11px] font-semibold tabular-nums text-white/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5">
              <span className="block font-semibold tracking-tight">{stage.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-white/55">{stage.body}</span>
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/50">
        <RotateCw className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
        The report sets the next month&rsquo;s plan, so each cycle starts from what worked.
      </p>
    </div>
  );
}

export default function SmarterChoice() {
  return (
    <section className="border-t border-line bg-white py-24 lg:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading label="Why it works" title={smarterChoice.title} intro={smarterChoice.body} />

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {smarterChoice.points.map((p) => (
              <li key={p.title}>
                <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                  <span className="h-[15px] w-[15px] shrink-0 rounded-full border-2 border-brand bg-white" />
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>

          <a href="/work" className="btn-primary mt-12">
            See our case studies <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </a>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-line bg-white p-2 shadow-[0_40px_80px_-40px_rgba(22,22,22,0.35)]">
          {smarterChoice.image ? (
            <Image
              src={smarterChoice.image}
              alt="The Aurion Digital team planning a campaign at the Kandivali West office"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-[20px] object-cover"
            />
          ) : (
            <ProcessPanel />
          )}
        </div>
      </div>
    </section>
  );
}
