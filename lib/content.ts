/**
 * All site copy lives here so the team can edit text without touching layout.
 * Items marked CHECK were read from low-resolution screenshots and should be
 * confirmed against the live site before launch.
 */

export const site = {
  name: "Aurion Digital",
  tagline: "AI-powered marketing & creative solutions for global growth.",
  // Kept for any email link you want to add. Every CTA on the site now opens
  // WhatsApp via whatsappHref below. CHECK: replace with the real address.
  contactHref: "mailto:hello@auriondigital.com",
  /** WhatsApp number in international format, digits only, no + or spaces. CHECK. */
  whatsapp: "918451957165",
  whatsappMessage: "Hi Aurion Digital, I would like to discuss a project.",
};

/**
 * Contact details and social profiles. CHECK every value here before launch:
 * these are placeholders, and the WhatsApp number drives the floating chat button.
 */
export const contact = {
  // Digits only, with country code and no "+" or spaces (wa.me format)
  whatsapp: "918451957165",
  whatsappMessage: "Hi Aurion Digital, I'd like to discuss a project.",
  phone: "8451957165",
  email: "hello@auriondigital.com",
  address: ["Add street address", "Add area, city", "Mumbai 400 000"],
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

/** Shared WhatsApp link, used by the floating button and the header button. */
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/#contact" },
  { label: "About", href: "/#why-aurion" },
];

export const services = [
  {
    icon: "sparkles",
    title: "Automated Content Generation",
    body: "AI-assisted production of captions, blogs, scripts and ad copy at scale, kept on-brand and consistent across every channel.",
  },
  {
    icon: "gem",
    title: "Branding",
    body: "Names, identities, messaging and brand architecture that make a business memorable and connect it with the right audience.",
  },
  {
    icon: "heart",
    title: "Organic Social",
    body: "Content that sparks conversations, builds loyalty and grows a real community, with no paid boost needed.",
  },
  {
    icon: "globe",
    title: "Website & SEO",
    body: "Fast, modern websites engineered to rank on Google and turn consistent organic traffic into enquiries.",
  },
  {
    icon: "clapperboard",
    title: "Graphic & Motion Design",
    body: "Original visuals and immersive animation, from digital graphics to motion pieces that bring a brand to life.",
  },
  {
    icon: "target",
    title: "Ad Operations",
    body: "Google, Meta and programmatic campaigns run with AI-driven precision for sharper targeting and higher ROI.",
  },
  {
    icon: "badge",
    title: "Influencer Marketing",
    body: "Partnerships with trusted creators that build authentic relationships, amplify reach and drive engagement.",
  },
  {
    icon: "bot",
    title: "Personalized Chatbot",
    body: "Custom AI chatbots that engage visitors, answer queries and automate conversations around the clock.",
  },
  {
    icon: "store",
    title: "Offline Marketing",
    body: "Print, outdoor, events and brand activations blended with digital so the brand shows up everywhere it matters.",
  },
] as const;

export const smarterChoice = {
  title: "The smarter choice for growth",
  body: "We blend AI-driven insights with creative strategy to deliver scalable campaigns, powerful brand positioning and measurable business growth.",
  points: [
    { title: "Proven expertise", body: "Campaigns shipped across finance, education, lifestyle and events." },
    { title: "AI-powered growth", body: "Machine-assisted research, content and optimisation on every account." },
    { title: "Measured end to end", body: "Every campaign is tied to leads, conversions and cost per result." },
  ],
  /** Set to a file in /public (e.g. "/images/strategy-session.jpg") to show a photo instead of the dashboard graphic. */
  image: null as string | null,
};

export const work = [
  // CHECK: add reel thumbnails in /public/images/work and set `image`
  { slug: "5paisa", client: "5paisa", project: "Pay Later (MTF)", category: "Performance creative", image: null as string | null },
  { slug: "art-mumbai", client: "Art Mumbai", project: "Brand content", category: "Art & events", image: null as string | null },
  { slug: "catch-25", client: "Catch 25", project: "Parent-student orientation", category: "Education marketing", image: null as string | null },
];

export const comparison = [
  { others: "Generic, one-size-fits-all strategies", aurion: "Custom strategies built around your goals" },
  { others: "Vanity metrics over real results", aurion: "Focus on KPIs: leads, ROI and conversions" },
  { others: "Slow response and weak communication", aurion: "Fast, transparent communication" },
  { others: "Outdated marketing tactics", aurion: "AI-driven tools and data-backed decisions" },
  { others: "Little to no post-launch support", aurion: "Ongoing support and growth optimisation" },
];

export const testimonials = [
  {
    // CHECK: name and company spelling
    quote:
      "The team brought clarity, creativity and a results-driven approach to our marketing. From refining our brand messaging to generating high-quality leads, their strategies have added real value. Their professionalism and prompt execution make them a trusted partner.",
    name: "Nick Nag",
    role: "CEO, ABH Capital",
  },
  {
    quote:
      "Aurion Digital has elevated our presence in the education space. They helped us communicate our mission with clarity and impact, improved our visibility and trust with parents and students, and delivered higher engagement, more enquiries and a stronger brand identity.",
    name: "Saurabh Patel",
    role: "Director, Catch 25 Science Academy",
  },
];

export const faqs = [
  {
    q: "How does your marketing approach stand out from competitors?",
    a: "Every plan starts from your business goals, not a template. We pair AI-driven research and content tools with hands-on creative strategy, then report on the numbers that matter to you: leads, conversions and return on spend.",
  },
  {
    q: "What makes your lead generation strategies effective?",
    a: "We combine precise audience targeting, landing experiences built to convert and continuous testing of creative and offers. Budget moves toward what performs, so cost per lead falls as the campaign matures.",
  },
  {
    q: "How do you measure the success of a campaign?",
    a: "KPIs are agreed before launch and tracked in shared dashboards. Typical measures include qualified leads, conversion rate, cost per acquisition, engagement and ROI, reviewed with you on a regular reporting cadence.",
  },
  {
    q: "How quickly can I get started?",
    a: "After a discovery call we share a proposal and plan, usually within a few working days. Onboarding, account access and the first content or campaign sprint follow right after approval.",
  },
  {
    q: "What platforms do you specialise in?",
    a: "Instagram, Facebook, LinkedIn, YouTube and Google Ads, plus programmatic, website and SEO work. Offline formats such as print, outdoor and events are planned alongside digital when they fit the brief.",
  },
  {
    q: "Do you offer tailored solutions for different industries?",
    a: "Yes. We have worked with brands in finance, education, art and events, lifestyle and more, and every engagement is scoped to the industry, audience and regulations the brand operates in.",
  },
];

export const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#why-aurion" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faq" },
  ],
  Services: [
    { label: "Automated content", href: "/#services" },
    { label: "Branding", href: "/#services" },
    { label: "Organic social", href: "/#services" },
    { label: "Website & SEO", href: "/#services" },
    { label: "Ad operations", href: "/#services" },
    { label: "Offline marketing", href: "/#services" },
  ],
};
