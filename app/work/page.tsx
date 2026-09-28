import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import Swoosh from "@/components/ui/Swoosh";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Our work | Aurion Digital",
  description: "Brands we build, grow and run campaigns for.",
};

const logoSrc = (logo: string, slug: string) => (logo.startsWith("/") ? logo : `/images/work/${slug}/${logo}`);

/**
 * Client index: a ruled wall of logos, each one opening that client's case
 * study. Logos sit in a consistent box so mixed formats still line up, and the
 * name and industry stay visible for brands whose mark is not well known.
 */
export default function WorkIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
          <Swoosh className="-z-10 hidden lg:block" d="M-10 330 C 220 270, 430 450, 650 390 S 900 250, 1010 320" animate />

          <div className="container">
            <SectionHeading
              label="Our work"
              title="Brands we grow"
              intro="Campaigns, content and platforms delivered for teams across finance, education, art and events."
            />

            <ul className="mt-16 grid grid-cols-2 border-l border-t border-line lg:grid-cols-3">
              {clients.map((client) => (
                <li key={client.slug}>
                  <a
                    href={`/work/${client.slug}`}
                    className="group flex h-full flex-col justify-between border-b border-r border-line p-7 transition-colors duration-300 hover:bg-brand-50/60 lg:p-10"
                  >
                    <span className="grid h-24 place-items-center lg:h-28">
                      {client.logo ? (
                        <Image
                          src={logoSrc(client.logo, client.slug)}
                          alt={client.name}
                          width={400}
                          height={160}
                          className="max-h-16 w-auto max-w-[180px] object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      ) : (
                        <span className="display text-center text-3xl text-ink lg:text-4xl">{client.name}</span>
                      )}
                    </span>

                    <span className="mt-10 flex items-end justify-between gap-4 border-t border-line pt-5">
                      <span>
                        {client.logo && (
                          <span className="block font-semibold tracking-tight">{client.name}</span>
                        )}
                        <span className="block text-sm text-muted">{client.industry}</span>
                      </span>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
