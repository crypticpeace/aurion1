import { contact, faqs, site } from "@/lib/content";

/**
 * Structured data for the homepage.
 *
 * ProfessionalService describes the business for Google's local results, and
 * FAQPage marks up the ten questions in the FAQ section so search and AI tools
 * can read them. No Review schema: Google ignores self-published reviews for
 * rich results and marking them up can be flagged.
 *
 * Everything here reads from lib/content.ts, so the address, phone and profile
 * links stay in one place and must match the Google Business Profile exactly.
 */

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description:
    "Digital marketing agency in Kandivali West, Mumbai offering social media marketing, content creation and performance marketing for brands across India.",
  url: site.url,
  telephone: contact.phone,
  email: contact.email,
  image: `${site.url}/images/aurion-logo.png`,
  logo: `${site.url}/images/aurion-logo.png`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: `${contact.address.locality}, ${contact.address.city}`,
    addressRegion: contact.address.region,
    postalCode: contact.address.postalCode,
    addressCountry: contact.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    contact.socials.instagram,
    contact.socials.linkedin,
    contact.socials.facebook,
    contact.socials.googleMaps,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital marketing services",
    itemListElement: [
      "Social media marketing",
      "Content creation and strategy",
      "Performance marketing",
      "Branding",
      "Website design and SEO",
      "Influencer marketing",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomepageSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
