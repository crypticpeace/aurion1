import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Our work | Aurion Digital",
  description: "Brands we build, grow and run campaigns for.",
};

/**
 * Client index: a ruled wall of brand names, each one opening that client's
 * case study. Names are set in type rather than as logo images, so the wall
 * stays consistent across brands whose marks differ in shape, weight and
 * colour, and nothing depends on a logo file being supplied.
 */
export default function WorkIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">

          <div className="container">
            <SectionHeading
              as="h1"
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
                      <span className="display w-full break-words text-center text-2xl text-ink sm:text-3xl lg:text-4xl">
                        {client.name}
                      </span>
                    </span>

                    <span className="mt-10 flex items-end justify-between gap-4 border-t border-line pt-5">
                      <span className="block text-sm text-muted">{client.industry ?? ""}</span>
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
