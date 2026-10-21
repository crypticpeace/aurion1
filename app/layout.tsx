import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/content";
import "./globals.css";

/**
 * Fonts are self-hosted from ./fonts rather than fetched with next/font/google.
 *
 * next/font/google downloads the font at BUILD time. When that request fails on
 * the build machine (Vercel's builders are rate-limited by Google Fonts often
 * enough to matter), Next.js does not fail the build: it quietly substitutes a
 * system fallback, and the deployed site renders in the wrong typeface while
 * local builds stay correct. Shipping the .woff2 files in the repo removes the
 * network from the build entirely, so every deploy renders identically.
 *
 * These are the variable versions of the same families, so one file covers
 * every weight. The latin subset is loaded; inter-tight-latin-ext.woff2 sits
 * beside it for European accented characters and can be swapped in if the site
 * ever needs them. To update a font, replace the woff2 with a new download
 * from Google Fonts or the @fontsource-variable npm package.
 */
const sans = localFont({
  src: "./fonts/inter-tight-latin.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const script = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "400 700",
  variable: "--font-script",
  display: "swap",
  fallback: ["cursive"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Digital Marketing Agency in Kandivali West | Aurion Digital",
  description:
    "Digital marketing agency in Kandivali West, Mumbai. Social media marketing, content creation and performance marketing for brands across India. Get a quote.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: "Aurion Digital: Digital Marketing Agency in Mumbai",
    description:
      "Social media marketing, content creation and performance marketing by an in-house team in Kandivali West, Mumbai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurion Digital: Digital Marketing Agency in Mumbai",
    description:
      "Social media marketing, content creation and performance marketing by an in-house team in Kandivali West, Mumbai.",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${script.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
