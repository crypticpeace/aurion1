import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { getPost, posts, type Block } from "@/lib/blog";
import { site, whatsappHref } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Blog | Aurion Digital" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.dateISO,
    },
  };
}

/** One measure column, so the article reads as a single ruled text block. */
function Body({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-12 max-w-[42rem]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-14 text-[26px] font-semibold tracking-tight text-ink sm:text-[32px]">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-10 text-xl font-semibold tracking-tight text-ink">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-12 border-l-2 border-brand pl-6 text-xl leading-relaxed tracking-[-0.01em] text-ink sm:text-[22px]"
              >
                {block.text}
              </blockquote>
            );
          default:
            return (
              <p key={i} className="mt-6 text-lg leading-relaxed text-muted">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/images/aurion-logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main>
        <article className="bg-white pb-24 pt-32 lg:pt-40">
          <div className="container">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
            </a>

            <header className="mt-8 max-w-[46rem]">
              <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="font-medium text-brand">{post.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.dateISO}>{post.date}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </p>
              <h1 className="display mt-5 text-[38px] text-ink sm:text-[52px] lg:text-[64px]">{post.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-muted">{post.excerpt}</p>
            </header>

            {post.cover && (
              <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-paper">
                <Image src={post.cover} alt={post.title} fill sizes="100vw" className="object-cover" priority />
              </div>
            )}

            <Body blocks={post.body} />

            <div className="mt-16 max-w-[42rem] rounded-2xl border border-line p-8">
              <p className="text-lg font-semibold tracking-tight text-ink">
                Want this handled for your brand?
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                Tell us what you are trying to grow and we will send a plan and a quote.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Get a Free Quote <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </a>
            </div>

            {more.length > 0 && (
              <section className="mt-24 border-t border-line pt-12">
                <h2 className="text-sm uppercase tracking-eyebrow text-muted">Keep reading</h2>
                <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {more.map((p) => (
                    <li key={p.slug} className="bg-white">
                      <a href={`/blog/${p.slug}`} className="group flex h-full flex-col p-8 transition-colors hover:bg-brand-50/60">
                        <span className="text-sm font-medium text-brand">{p.category}</span>
                        <span className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink">
                          {p.title}
                        </span>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-brand">
                          Read the article <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
