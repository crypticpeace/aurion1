import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-white pb-24 lg:pb-32">
      <div className="container">
        <div className="overflow-hidden rounded-[28px] bg-brand px-6 py-20 text-center text-white sm:px-12 lg:py-28">
          <p className="eyebrow text-white/80">Let&apos;s build it together</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[44px] sm:text-6xl lg:text-[88px]">
            Ready to grow smarter, faster, stronger?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Join the brands already scaling with us and unlock your next level of success.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light px-10 py-[18px] text-lg"
            >
              Get a Free Quote <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </a>
            <a href="/work" className="link-underline text-lg text-white after:bg-white">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
