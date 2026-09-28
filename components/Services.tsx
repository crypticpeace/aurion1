import {
  BadgeCheck,
  Bot,
  Clapperboard,
  Gem,
  Globe,
  Heart,
  Sparkles,
  Store,
  Target,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  sparkles: Sparkles,
  gem: Gem,
  heart: Heart,
  globe: Globe,
  clapperboard: Clapperboard,
  target: Target,
  badge: BadgeCheck,
  bot: Bot,
  store: Store,
};

/**
 * Services as a ruled grid rather than floating cards: shared hairlines keep
 * nine items calm, and an orange rule grows across the top of a cell on hover.
 */
export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading label="What we offer" title="Everything your brand needs" />
          <p className="max-w-sm text-lg leading-relaxed text-muted lg:pb-3">
            Nine connected disciplines, one team. Pick a single service or combine them into a full growth programme.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="group relative border-b border-r border-line p-8 transition-colors duration-300 hover:bg-brand-50/60 lg:p-10"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/30 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-ink lg:text-[22px]">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{service.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
