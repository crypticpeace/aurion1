import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | Aurion Digital, Mumbai",
  description:
    "Practical guides on social media marketing, content strategy and performance marketing from a digital marketing agency in Kandivali West, Mumbai.",
  alternates: { canonical: "/blog" },
};

/**
 * Blog index: the newest post leads at full width, the rest sit in a ruled grid
 * that matches the services section. Cards carry the whole article link, so the
 * title stays a plain heading.
 */
export default function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div className="container">
            <SectionHeading
              as="h1"
              label="Blog"
              title="Marketing notes from the team"
              intro="What we have learned running social media, content and ad campaigns for brands in Mumbai and across India."
            />

            {lead && (
              <article className="group mt-16 border-t border-line pt-10">
                <a href={`/blog/${lead.slug}`} className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-paper">
                    {lead.cover ? (
                      <Image
                        src={lead.cover}
                        alt={lead.title}
                        fill
                        sizes="(min-width: 1024px) 640px, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,rgba(254,91,7,0.3),transparent_62%),linear-gradient(160deg,#f5f5f5,#e6e6e6)]" />
                    )}
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                      Latest
                    </span>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span className="font-medium text-brand">{lead.category}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={lead.dateISO}>{lead.date}</time>
                      <span aria-hidden>·</span>
                      <span>{lead.readingTime}</span>
                    </p>
                    <h2 className="display mt-5 text-[34px] text-ink sm:text-[44px] lg:text-[52px]">{lead.title}</h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{lead.excerpt}</p>
                    <span className="mt-8 inline-flex items-center gap-2 font-medium text-ink transition-colors group-hover:text-brand">
                      Read the article <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </a>
              </article>
            )}

            {rest.length > 0 && (
              <ul className="mt-20 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <li key={post.slug} className="group border-b border-r border-line">
                    <a href={`/blog/${post.slug}`} className="flex h-full flex-col">
                      <span className="relative block aspect-[16/10] overflow-hidden bg-paper">
                        {post.cover ? (
                          <Image
                            src={post.cover}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <span className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_0%,rgba(254,91,7,0.3),transparent_62%),linear-gradient(160deg,#f5f5f5,#e6e6e6)]" />
                        )}
                      </span>
                      <span className="flex flex-1 flex-col p-8 transition-colors duration-300 group-hover:bg-brand-50/60 lg:p-10">
                      <p className="flex flex-wrap items-center gap-2 text-sm text-muted">
                        <span className="font-medium text-brand">{post.category}</span>
                        <span aria-hidden>·</span>
                        <time dateTime={post.dateISO}>{post.date}</time>
                      </p>
                      <h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-ink lg:text-[22px]">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 leading-relaxed text-muted">{post.excerpt}</p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-brand">
                        {post.readingTime} <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
