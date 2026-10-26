import {
  BadgeCheck,
  Camera,
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
  camera: Camera,
  store: Store,
};

/**
 * Services as a ruled grid rather than floating cards: shared hairlines keep
 * nine items calm, and an orange rule grows across the top of a cell on hover.
 *
 * Each card becomes a link as soon as a service page exists: set `href` on the
 * service in lib/content.ts (e.g. "/services/social-media-marketing") and the
 * card wraps itself in an anchor.
 */
export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Our digital marketing services"
            title="Everything your brand needs to grow online"
          />
          <p className="max-w-sm text-lg leading-relaxed text-muted lg:pb-3">
            Multiple digital marketing services, one in-house team in Mumbai. Pick a single service or combine them
            into a complete growth plan for your brand.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            const card = (
              <>
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/30 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-ink lg:text-[22px]">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{service.body}</p>
              </>
            );

            return (
              <li key={service.title} className="group relative border-b border-r border-line">
                {service.href ? (
                  <a
                    href={service.href}
                    className="flex h-full flex-col p-8 transition-colors duration-300 hover:bg-brand-50/60 lg:p-10"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="flex h-full flex-col p-8 transition-colors duration-300 group-hover:bg-brand-50/60 lg:p-10">
                    {card}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
