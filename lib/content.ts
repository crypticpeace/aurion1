/**
 * All site copy lives here so the team can edit text without touching layout.
 * Homepage copy follows the SEO content plan (Oct 2026): one primary keyword,
 * "digital marketing agency in Kandivali West", supported by social media
 * marketing, content creation and strategy, and performance marketing.
 *
 * Items marked CHECK are placeholders that must be confirmed before launch.
 */

export const site = {
  name: "Aurion Digital",
  legalName: "Aurion Digital",
  tagline: "AI-powered marketing & creative solutions for global growth.",
  /** Used for canonical URLs, Open Graph and schema. */
  url: "https://auriondigital.in",
  // Kept for any email link you want to add. Every CTA on the site opens
  // WhatsApp via whatsappHref below. CHECK: replace with the real address.
  contactHref: "mailto:hello@auriondigital.com",
  /** WhatsApp number in international format, digits only, no + or spaces. CHECK. */
  whatsapp: "918451957165",
  whatsappMessage: "Hi Aurion Digital, I'd like a quote for digital marketing.",
};

/**
 * Contact details, address and social profiles. These feed the local business
 * schema, so they must match the Google Business Profile exactly.
 * CHECK every value before launch.
 */
export const contact = {
  // Digits only, with country code and no "+" or spaces (wa.me format)
  whatsapp: "918451957165",
  phone: "+918451957165",
  email: "hello@auriondigital.com",
  address: {
    street: "Swami Vivekanand Road, above Bank of Baroda, Parekh Nagar",
    locality: "Kandivali West",
    region: "Maharashtra",
    city: "Mumbai",
    postalCode: "400067",
    country: "IN",
  },
  // CHECK: paste the real profile and Google Maps URLs
  socials: {
    instagram: "https://www.instagram.com/auriondigital/",
    linkedin: "https://www.linkedin.com/company/auriondigital/",
    facebook: "https://www.facebook.com/auriondigital/",
    googleMaps: "https://maps.google.com/?cid=16427292075193859289",
  },
  /**
   * Link behind "Read our reviews" under the testimonials. It opens the REVIEW
   * LIST, not the map pin: Google redirects this URL to the search result with
   * the reviews panel already open.
   *
   * The place id below was derived from the profile's feature id
   * (0x3be7b7be428e0d29:0xe3f9771b5b84fcd9) and checked against the listing,
   * which resolves to Aurion Digital, Jyoti Plaza, Kandivali West.
   *
   * Prefer this canonical form over a copied browser URL: a pasted one carries
   * the rlz and session parameters of whoever copied it, and the query text
   * they happened to type.
   */
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJKQ2OQr635zsR2fyEWxt3-eM",
  /**
   * Shown next to the reviews link. CHECK this against the live profile and
   * update it when the rating moves: a stale rating on the page is a claim we
   * cannot back up.
   */
  googleRating: "5.0",
};

/**
 * Careers page. The application form is a Google Form: create it in the Aurion
 * Google account, then Send -> embed (<>) and copy the src URL out of the
 * iframe snippet. It ends in /viewform?embedded=true.
 *
 * To get applications by email, open the form's Responses tab and turn on
 * "Get email notifications for new responses". For the answers themselves,
 * link the form to a Google Sheet from the same tab.
 *
 * CHECK: both URLs below are placeholders.
 */
export const careers = {
  /**
   * Google Form behind /careers. Responses land in the form's own sheet and,
   * if the notification is switched on in the form, in the owner's inbox.
   *
   * CHECK two settings on the form itself, because the page cannot:
   *   - Responses -> Accepting responses is ON.
   *   - Settings -> Responses -> "Restrict to users in <org>" is OFF, or no
   *     applicant outside the organisation can submit.
   */
  /** The embed URL (ends in /viewform?embedded=true). Used in the iframe. */
  formEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfU3riJNI_CFSfPEExyktWldRZaepDWRGpM3OigJ0PcBdKkrQ/viewform?embedded=true",
  /** The normal share URL, for the "open in a new tab" fallback link. */
  formShareUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfU3riJNI_CFSfPEExyktWldRZaepDWRGpM3OigJ0PcBdKkrQ/viewform",
  /** Height of the embedded form in pixels. Raise it if the form scrolls. */
  formHeight: 1200,
};

/** Legal pages. The date shows at the top of the privacy policy. */
export const legal = {
  privacyUpdated: "19 October 2026",
};

/** Shared WhatsApp link, used by every call to action on the site. */
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Live Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#why-aurion" },
];

/**
 * Service cards, in the order they appear on the homepage. The three priority
 * services come first and use the terms people actually search for.
 * `href` wraps the card in a link once individual service pages exist.
 */
export const services = [
  {
    icon: "heart",
    title: "Social Media Marketing",
    body: "Instagram, YouTube, Facebook, LinkedIn and X management that grows your presence, sparks conversations and builds a community around your brand.",
    href: null as string | null,
  },
  {
    icon: "sparkles",
    title: "Content Creation & Strategy",
    body: "Reels, carousels, captions, blogs and ad scripts planned around a clear content strategy, produced fast and kept on-brand across every channel.",
    href: null as string | null,
  },
  {
    icon: "target",
    title: "Performance Marketing",
    body: "Meta ads and Google ads managed for leads, sales and lower cost per result, with AI-assisted targeting and weekly optimisation.",
    href: null as string | null,
  },
  {
    icon: "gem",
    title: "Branding",
    body: "Names, identities, messaging and brand architecture that make a business memorable and connect it with the right audience.",
    href: null as string | null,
  },
  {
    icon: "globe",
    title: "Website Design & SEO",
    body: "Fast, mobile-first websites built to rank on Google and turn organic traffic into steady enquiries.",
    href: null as string | null,
  },
  {
    icon: "clapperboard",
    title: "Graphic & Motion Design",
    body: "Original visuals and immersive animation, from digital graphics to motion pieces that bring a brand to life.",
    href: null as string | null,
  },
  {
    icon: "badge",
    title: "Influencer Marketing",
    body: "Campaigns with trusted creators across Mumbai and India that build authentic reach and drive real engagement.",
    href: null as string | null,
  },
  {
    icon: "camera",
    title: "Live Event Coverage",
    body: "On-ground photo and video coverage for launches, fairs and festivals, edited fast so the content goes out while the event is still running.",
    href: "/events" as string | null,
  },
  {
    icon: "store",
    title: "Offline Marketing",
    body: "Print, outdoor, events and brand activations blended with digital so the brand shows up everywhere it matters.",
    href: null as string | null,
  },
] as const;

export const smarterChoice = {
  title: "The smarter choice for social media and performance marketing",
  body: "Our in-house team in Kandivali West blends AI-driven insights with creative content strategy to deliver campaigns that grow your brand, bring in qualified leads and show clear results every month.",
  points: [
    {
      title: "Proven expertise",
      body: "Social media and ad campaigns delivered for brands in finance, education, lifestyle and events.",
    },
    {
      title: "In-house team, faster delivery",
      body: "Strategy, design, content and ads handled by one in-house team, so work ships fast without compromising quality.",
    },
    {
      title: "Measured end to end",
      body: "Every campaign is tied to leads, conversions and cost per result.",
    },
    {
      title: "Zero stress for you",
      body: "We manage planning, approvals and reporting end to end, so you focus on running your business.",
    },
  ],
  /** Set to a file in /public (e.g. "/images/strategy-session.jpg") to show a photo instead of the process panel. */
  image: null as string | null,
};

export const work = [
  // Covers are 9:16 at 1080x1920 in /public/images/work/<slug>/cover.jpg, each
  // one a real reel cover from that client, built by scripts/home_covers.py.
  // A client earns a card here once there is real work to show on it.
  {
    slug: "5paisa",
    client: "5paisa",
    project: "Performance creative for Pay Later (MTF)",
    category: "Performance creative",
    linkText: "View 5paisa case study",
    image: "/images/work/5paisa/cover.jpg" as string | null,
  },
  {
    slug: "freelance",
    client: "Freelance",
    project: "Reels across the brand roster",
    category: "Multi-brand content",
    linkText: "View the Freelance case study",
    image: "/images/work/freelance/cover.jpg" as string | null,
  },
  {
    slug: "catch-25",
    client: "Catch25 Science Academy",
    project: "Parent-student orientation campaign",
    category: "Education marketing",
    linkText: "View Catch25 case study",
    image: "/images/work/catch-25/cover.jpg" as string | null,
  },
  {
    slug: "all-things-design",
    client: "All Things Design",
    project: "Studio reels",
    category: "Design",
    linkText: "View All Things Design case study",
    image: "/images/work/all-things-design/cover.jpg" as string | null,
  },
  {
    slug: "nyraj-vasani",
    client: "Nyraj Vasani",
    project: "Personal brand reels and the Poison Cup",
    category: "Personal branding",
    linkText: "View Nyraj Vasani case study",
    image: "/images/work/nyraj-vasani/cover.jpg" as string | null,
  },
  {
    slug: "tabu",
    client: "TABU",
    project: "Bridal work, shot and cut for reels",
    category: "Beauty",
    linkText: "View TABU case study",
    image: "/images/work/tabu/cover.jpg" as string | null,
  },
  {
    slug: "scholar-medico-services",
    client: "Scholar Medico Services",
    project: "Admissions questions answered on camera",
    category: "Education marketing",
    linkText: "View Scholar Medico Services case study",
    image: "/images/work/scholar-medico-services/cover.jpg" as string | null,
  },
];

export const comparison = [
  { others: "Generic, one-size-fits-all strategies", aurion: "Custom strategies built around your goals" },
  { others: "Vanity metrics over real results", aurion: "Focus on KPIs: leads, ROI and conversions" },
  { others: "Slow response and weak communication", aurion: "Fast, transparent communication" },
  { others: "Outdated marketing tactics", aurion: "AI-driven tools and data-backed decisions" },
  { others: "Little to no post-launch support", aurion: "Ongoing support and growth optimisation" },
  { others: "Work outsourced to freelancers", aurion: "Full in-house team in Kandivali West, Mumbai" },
  { others: "You chase them for updates", aurion: "Zero stress: we handle everything end to end" },
];

/**
 * Client testimonials.
 *
 * Every quote here must be words a client actually said or wrote. Do not
 * draft one and attribute it to a real person or company: a written testimonial
 * on a commercial site is a representation the client can be asked to stand
 * behind, and an invented one is a fake review whoever typed it.
 *
 * To add one: copy the client's own words from their WhatsApp message, email or
 * Google review, trim only for length, and keep their name and role as they
 * give them. Ask permission before publishing anything from a private message.
 *
 * Three more slots are sketched out below, commented so nothing unverified can
 * render. Paste the real words in, delete the comment markers, and the section
 * lays out four or five quotes on its own.
 */
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
    role: "Director, Catch25 Science Academy",
  },

  // ---------------------------------------------------------------------
  // PLACEHOLDERS. The three below are not real. They carry no real person's
  // name and no real company, so nothing here misrepresents a client while
  // they sit on the page, and they are obvious enough that nobody reads them
  // as genuine.
  //
  // Replace BOTH the words and the attribution. Putting a real client's name
  // on a quote they did not say is a fake review, whoever typed it, so the
  // sentences have to come from them too: a WhatsApp message at the end of a
  // campaign month, a Google review, or a reply to "would you write two lines
  // on working with us that we can put on the site?".
  //
  // Delete any that are still unfilled before the site goes live.
  {
    quote:
      "Placeholder. Replace with the client's own words about the work, roughly this length, trimmed only for brevity.",
    name: "Client name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder. Two or three sentences reads best here: what the problem was, what changed, and what it is like to work with the team.",
    name: "Client name",
    role: "Role, Company",
  },
  {
    quote:
      "Placeholder. A short quote works too. The section lays out four or five of these on its own, and an odd one runs full width.",
    name: "Client name",
    role: "Role, Company",
  },
];

/** These ten questions also populate the FAQPage JSON-LD in the page head. */
export const faqs = [
  {
    q: "What makes Aurion Digital different from other digital marketing agencies in Mumbai?",
    a: "Every plan starts from your business goals, not a template. Our in-house team in Kandivali West pairs AI-driven research and content tools with hands-on creative strategy, then reports on the numbers that matter to you: leads, conversions and return on ad spend.",
  },
  {
    q: "How does your performance marketing generate quality leads?",
    a: "We combine precise audience targeting on Meta and Google ads, landing pages built to convert and continuous testing of creatives and offers. Budget moves toward what performs, so your cost per lead falls as the campaign matures.",
  },
  {
    q: "How do you measure the success of a digital marketing campaign?",
    a: "KPIs are agreed before launch and tracked in shared dashboards. Typical measures include qualified leads, conversion rate, cost per acquisition, engagement and ROI, reviewed with you on a regular reporting schedule.",
  },
  {
    q: "How quickly can I start working with your agency?",
    a: "It starts with a free discovery call, online or at our Kandivali West office. We share a proposal and plan within a few working days, and onboarding, account access and the first content or campaign sprint follow right after approval.",
  },
  {
    q: "Which social media and advertising platforms do you work on?",
    a: "Instagram, Facebook, LinkedIn and YouTube for social media marketing and content, and Meta Ads and Google Ads for performance marketing. We also handle programmatic advertising, websites and SEO, and plan offline formats like print, outdoor and events alongside digital when they fit the brief.",
  },
  {
    q: "Do you offer digital marketing for different industries?",
    a: "Yes. We have worked with brands in finance, education, art and events, lifestyle and more. Every engagement is scoped to the industry, audience and regulations your brand operates in.",
  },
  {
    q: "What is included in your social media marketing services?",
    a: "Content strategy and monthly calendars, reels and carousel production, captions, scheduling, community management and monthly performance reports across Instagram, Facebook and LinkedIn. Paid boosts and ads can be added as part of performance marketing.",
  },
  {
    q: "Where is Aurion Digital located, and do you work with clients outside Mumbai?",
    a: "Our office is on Swami Vivekanand Road, above Bank of Baroda, Parekh Nagar, Kandivali West, Mumbai 400067. We meet clients in person across Kandivali, Borivali and Malad, and work remotely with brands across India.",
  },
  {
    q: "How much do your digital marketing services cost?",
    a: "Pricing depends on your goals, the channels you need and the volume of content. Share your requirements on a call or WhatsApp and we will send a custom quote.",
  },
  {
    q: "Do you have an in-house team, or do you outsource work?",
    a: "Everything is done in-house. Strategy, design, video, copywriting and ad management are handled by our own team, which keeps quality consistent, turnaround fast and the process stress-free for you.",
  },
];

export const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#why-aurion" },
    { label: "Services", href: "/#services" },
    { label: "Case studies", href: "/work" },
    { label: "Live events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "/#faq" },
  ],
  Services: [
    { label: "Social media marketing", href: "/#services" },
    { label: "Content creation & strategy", href: "/#services" },
    { label: "Performance marketing", href: "/#services" },
    { label: "Branding", href: "/#services" },
    { label: "Website design & SEO", href: "/#services" },
    { label: "Influencer marketing", href: "/#services" },
    { label: "Live event coverage", href: "/events" },
  ],
};
