import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import { careers, contact, whatsappHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers at Aurion Digital | Mumbai",
  description:
    "Work with an in-house digital marketing team in Kandivali West, Mumbai. Open roles across content, design, video and performance marketing. Apply here.",
  alternates: { canonical: "/careers" },
};

/**
 * Careers page. The application form is a Google Form embedded in an iframe,
 * so applications land in the Aurion Google account with no backend here.
 * Both URLs live in lib/content.ts.
 *
 * The iframe is the primary route, but some browsers and privacy extensions
 * block third-party frames, so the page also carries a plain link that opens
 * the same form in a new tab. Without that fallback, a blocked frame looks
 * like a broken page and the application is simply lost.
 */

const whyUs = [
  {
    title: "Work that ships",
    body: "Campaigns go live in weeks, not quarters. You see your work in the feed and in the numbers soon after you make it.",
  },
  {
    title: "A small in-house team",
    body: "Strategy, design, video and ads sit in one room. Nothing is outsourced, so you learn the parts of the job next to yours.",
  },
  {
    title: "Real client contact",
    body: "You hear the brief from the client and see the result land, rather than working from a ticket someone else wrote.",
  },
  {
    title: "Room to specialise",
    body: "Pick a craft and go deep, whether that is short-form video, performance creative, copy or design.",
  },
];

const roles = [
  { title: "Social Media Executive", type: "Full time", place: "Kandivali West, Mumbai" },
  { title: "Video Editor, short form", type: "Full time", place: "Kandivali West, Mumbai" },
  { title: "Graphic Designer", type: "Full time", place: "Kandivali West, Mumbai" },
  { title: "Performance Marketing Executive", type: "Full time", place: "Kandivali West, Mumbai" },
  { title: "Content Writer", type: "Full time or freelance", place: "Mumbai or remote" },
  { title: "Marketing Intern", type: "Internship", place: "Kandivali West, Mumbai" },
];

export default function Careers() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pb-20 pt-32 lg:pt-40">
          <div className="container">
            <SectionHeading
              as="h1"
              label="Careers"
              title="Build brands with us"
              intro="We are an in-house marketing team in Kandivali West, Mumbai, working across social, content, video and performance for brands around the country. If you want your work seen rather than filed, send us an application."
            />
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="container">
            <h2 className="text-sm uppercase tracking-eyebrow text-muted">Why work here</h2>
            <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {whyUs.map((item) => (
                <li key={item.title} className="border-t border-line pt-6">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper py-20 lg:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-sm uppercase tracking-eyebrow text-muted">Open roles</h2>
                <p className="display mt-4 text-[32px] text-ink sm:text-[40px]">What we are hiring for</p>
              </div>
              <p className="max-w-md leading-relaxed text-muted">
                Apply through the form below and name the role you want. If none of these fit but you think you belong
                here, apply anyway and tell us what you do.
              </p>
            </div>

            {/* CHECK: keep this list current. Remove a role once it is filled. */}
            <ul className="mt-12 border-t border-line">
              {roles.map((role) => (
                <li
                  key={role.title}
                  className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{role.title}</h3>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span>{role.type}</span>
                    <span aria-hidden>·</span>
                    <span>{role.place}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="apply" className="bg-white py-20 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="display text-[36px] text-ink sm:text-[48px]">Apply</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Fill in the form below. Attach your CV, and a portfolio or reel if the role calls for one. Everything
                goes straight to our team, and we reply to the applications that fit.
              </p>
              <a
                href={careers.formShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Trouble with the form? Open it in a new tab <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line bg-paper">
              <iframe
                src={careers.formEmbedUrl}
                title="Aurion Digital job application form"
                width="100%"
                height={careers.formHeight}
                loading="lazy"
                className="w-full border-0"
              >
                Loading the application form…
              </iframe>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
              Prefer email? Send your CV to{" "}
              <a
                href={`mailto:${contact.email}?subject=Application`}
                className="font-medium text-ink underline-offset-4 hover:text-brand hover:underline"
              >
                {contact.email}
              </a>
              , or{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline-offset-4 hover:text-brand hover:underline"
              >
                message us on WhatsApp
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
