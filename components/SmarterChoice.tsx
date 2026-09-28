import Image from "next/image";
import { ArrowRight, Sparkles, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { smarterChoice } from "@/lib/content";

function GrowthPanel() {
  // Illustrative trend only: no figures, so nothing reads as a claimed result.
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return (
    <div className="relative h-full w-full rounded-[20px] bg-ink p-6 text-white sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/50">Campaign overview</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">Qualified leads</p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Live
        </span>
      </div>

      <svg viewBox="0 0 600 300" className="mt-8 w-full" aria-hidden>
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FE5B07" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FE5B07" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" x2="600" y1={30 + i * 80} y2={30 + i * 80} stroke="white" strokeOpacity="0.08" />
        ))}
        <path
          d="M0 250 C 60 240, 90 205, 130 215 S 220 180, 260 170 S 350 150, 390 118 S 480 90, 520 60 S 580 34, 600 28 L600 300 L0 300 Z"
          fill="url(#area)"
        />
        <path
          d="M0 250 C 60 240, 90 205, 130 215 S 220 180, 260 170 S 350 150, 390 118 S 480 90, 520 60 S 580 34, 600 28"
          fill="none"
          stroke="#FE5B07"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="520" cy="60" r="7" fill="#FE5B07" />
        <circle cx="520" cy="60" r="16" fill="#FE5B07" fillOpacity="0.2" />
      </svg>
      <div className="mt-3 flex justify-between text-xs text-white/40">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-xs text-white/60">
        {["Research", "Create", "Optimise"].map((step) => (
          <span key={step} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {step}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SmarterChoice() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-24 lg:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading label="Why it works" title={smarterChoice.title} intro={smarterChoice.body} />

          <ol className="relative mt-12 space-y-8 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-line">
            {smarterChoice.points.map((p) => (
              <li key={p.title} className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-brand bg-white" />
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-muted">{p.body}</p>
              </li>
            ))}
          </ol>

          <a href="/#work" className="btn-primary mt-12">
            See how we scale brands <ArrowRight className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>

        <div className="relative">
          {/* Offset outline frame: a quiet line echo behind the visual */}
          <div className="absolute -right-4 -top-4 bottom-4 left-4 rounded-[28px] border border-brand/40 sm:-right-6 sm:-top-6 sm:bottom-6 sm:left-6" />
          <div className="relative overflow-hidden rounded-[24px] border border-line bg-white p-2 shadow-[0_40px_80px_-40px_rgba(22,22,22,0.35)]">
            {smarterChoice.image ? (
              <Image
                src={smarterChoice.image}
                alt="Aurion Digital strategy session"
                width={1200}
                height={800}
                className="aspect-[4/3] w-full rounded-[20px] object-cover"
              />
            ) : (
              <GrowthPanel />
            )}
          </div>

          <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:-left-10">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand">
              <Trophy className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">Proven expertise</span>
          </div>
          <div className="absolute -right-2 top-36 max-w-[220px] rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:-right-8">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-brand" /> AI-powered growth
            </span>
            <p className="mt-1 text-xs leading-snug text-muted">Smarter targeting, sharper creative, every week.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
