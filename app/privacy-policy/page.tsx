import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contact, legal, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Aurion Digital",
  description:
    "How Aurion Digital collects, uses, stores and shares personal information from this website and our marketing services.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

/**
 * Privacy policy.
 *
 * NOT LEGAL ADVICE. This is a working draft written to match what the site
 * actually does today: a newsletter field, WhatsApp enquiries, a Google Form on
 * the careers page, Instagram embeds and whatever analytics gets added. India's
 * Digital Personal Data Protection Act, 2023 is the relevant law, and its rules
 * were still being phased in when this was written. Have a lawyer read it
 * before launch, and update it whenever a new tool starts collecting data.
 *
 * Anything in square brackets needs a real answer before this goes live.
 */

type Section = { heading: string; paragraphs?: string[]; bullets?: string[]; after?: string[] };

const address = `${contact.address.street}, ${contact.address.locality}, ${contact.address.city} ${contact.address.postalCode}, India`;

const sections: Section[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `${site.legalName} is a digital marketing agency based in ${contact.address.locality}, ${contact.address.city}. This policy explains what personal information we collect through ${site.url}, why we collect it, how long we keep it and what rights you have over it.`,
      `In this policy, "we", "us" and "our" mean ${site.legalName}. "You" means anyone who visits this website, contacts us, subscribes to our updates or applies for a role with us.`,
    ],
  },
  {
    heading: "Information you give us",
    paragraphs: ["We collect information only when you choose to send it to us. That happens in a few places:"],
    bullets: [
      "Enquiries: when you message us on WhatsApp or email us, we receive your name, phone number or email address, and whatever you write in the message.",
      "Newsletter: if you enter your email address in the subscribe field in our footer, we store that address so we can send you updates.",
      "Job applications: our careers page uses a Google Form. What you enter there, including your name, contact details, work history and any file you attach, goes to our Google account.",
      "Client work: if you become a client, we handle the account details and material you share with us so we can run the work. That relationship is governed by our agreement with you, not only by this policy.",
    ],
  },
  {
    heading: "Information collected automatically",
    paragraphs: [
      "Like most websites, our hosting provider records basic technical information when you load a page: your IP address, browser and device type, the pages you open and the site you arrived from. This is used to keep the site running and to understand which pages are useful.",
      "[If you add Google Analytics, Meta Pixel, Google Ads tags or any other tracking tool, list each one here and say what it does. Say nothing about tools you have not actually installed.]",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "A cookie is a small file a website stores in your browser. This site does not set advertising or tracking cookies of its own.",
      "Pages that embed content from other services can set their own cookies. Instagram posts embedded in our case studies are loaded from Instagram, and the careers form is loaded from Google. Those embeds are controlled by Meta and Google respectively, under their own privacy policies, not ours. You can block or delete cookies in your browser settings; the site will still work.",
    ],
  },
  {
    heading: "How we use your information",
    bullets: [
      "To reply to your enquiry and to prepare a proposal or quote",
      "To deliver and manage the services you have engaged us for",
      "To send updates you have subscribed to, each of which carries a way to unsubscribe",
      "To assess job applications and contact candidates",
      "To maintain and improve this website and keep it secure",
      "To meet tax, accounting and other legal obligations",
    ],
  },
  {
    heading: "Who we share it with",
    paragraphs: [
      "We do not sell your personal information, and we do not share it for anyone else's marketing.",
      "We do share it with the service providers who help us operate, and only as far as each of them needs it:",
    ],
    bullets: [
      "Our website host and infrastructure providers",
      "Google, for email, documents and the careers form",
      "WhatsApp and Meta, when you contact us through those channels",
      "Our email or newsletter provider, for subscriber addresses",
      "Advertising and analytics platforms, where we run campaigns on your instruction as a client",
      "Professional advisers, and any authority we are legally required to disclose to",
    ],
    after: [
      "Some of these providers store data outside India. Where that happens, we rely on the provider's own safeguards and on the transfer terms in their agreements with us.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "Enquiries are kept while we are in conversation and for a reasonable period afterwards, in case you come back to us. Client records are kept for the length of the engagement and then for as long as tax and accounting rules require. Newsletter subscriptions are kept until you unsubscribe. Job applications are kept for [period, for example twelve months] so we can consider you for future openings, unless you ask us to delete them sooner.",
    ],
  },
  {
    heading: "Keeping it secure",
    paragraphs: [
      "We use reputable providers, limit access to the people who need it and apply the access controls those platforms offer. No method of transmission or storage is completely secure, so we cannot promise absolute security, but we take reasonable steps to protect what you send us.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You can ask us to show you the personal information we hold about you, correct it if it is wrong, delete it, or stop using it for marketing. Every marketing email carries an unsubscribe link, and you can reply to any WhatsApp message asking us to stop.",
      `To make a request, write to ${contact.email}. We may need to confirm who you are before we act, and we will respond within a reasonable period.`,
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website is meant for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has sent us personal information, contact us and we will delete it.",
    ],
  },
  {
    heading: "Other websites",
    paragraphs: [
      "Our site links out to client Instagram profiles, Google and other third-party sites. We are not responsible for how those sites handle your information. Read their privacy policies before sharing anything with them.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We update this policy when our practices or the tools we use change. The date at the top of this page shows the most recent version. Significant changes will be made clear on this page.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about this policy, or about the information we hold, can go to ${contact.email} or ${contact.phone}.`,
      `${site.legalName}, ${address}`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <article className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div className="container">
            <header className="max-w-[46rem] border-b border-line pb-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand" />
                <span className="eyebrow">Legal</span>
              </div>
              <h1 className="display mt-5 text-[44px] sm:text-6xl lg:text-[72px]">Privacy Policy</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                How we collect, use and protect personal information on this website and across our services.
              </p>
              <p className="mt-4 text-sm text-muted">Last updated: {legal.privacyUpdated}</p>
            </header>

            <div className="mt-14 max-w-[42rem]">
              {sections.map((section) => (
                <section key={section.heading} className="mt-12 first:mt-0">
                  <h2 className="text-[24px] font-semibold tracking-tight text-ink sm:text-[28px]">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((para) => (
                    <p key={para.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted">
                          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.after?.map((para) => (
                    <p key={para.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
