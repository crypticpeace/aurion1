"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { footerLinks, site } from "@/lib/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    // TODO: connect to the newsletter provider (Mailchimp, Brevo, etc.)
    setStatus("done");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Oversized wordmark, fading into the footer behind the columns */}
      <div className="pointer-events-none select-none overflow-hidden px-4 pt-16 lg:pt-24" aria-hidden>
        <p className="bg-gradient-to-b from-brand/30 to-brand/[0.04] bg-clip-text text-center text-[22vw] font-extrabold leading-[0.95] tracking-[-0.02em] text-transparent">
          AURION
        </p>
      </div>

      <div className="container grid gap-14 pb-20 pt-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:pb-24">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/70">{site.tagline}</p>

          <form onSubmit={onSubmit} className="mt-10 max-w-md" noValidate>
            <label htmlFor="footer-email" className="text-sm text-white/60">
              Get growth insights in your inbox
            </label>
            <div className="mt-3 flex border-b border-white/25 focus-within:border-brand">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="you@company.com"
                className="w-full bg-transparent py-4 text-base text-white placeholder:text-white/30 focus:outline-none"
                aria-describedby="footer-email-status"
              />
              <button
                type="submit"
                className="flex items-center gap-2 py-4 pl-4 text-sm font-medium text-brand transition-colors hover:text-white"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p id="footer-email-status" className="mt-3 min-h-5 text-sm" aria-live="polite">
              {status === "error" && <span className="text-brand-200">Enter a valid email address.</span>}
              {status === "done" && (
                <span className="flex items-center gap-2 text-white/70">
                  <Check className="h-4 w-4 text-brand" /> Subscribed. Watch your inbox.
                </span>
              )}
            </p>
          </form>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <nav key={group} aria-label={group}>
            <h3 className="text-sm text-white/50">{group}</h3>
            <ul className="mt-6 space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-lg text-white/85 transition-colors hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 pb-24 text-sm text-white/50 sm:flex-row sm:pb-6 sm:pr-56">
          <p>© {new Date().getFullYear()} Aurion Digital. All rights reserved.</p>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
