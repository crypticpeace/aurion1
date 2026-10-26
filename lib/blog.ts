/**
 * Blog posts.
 *
 * The three posts below are SAMPLE ARTICLES written to show the layout and to
 * target the homepage's keyword cluster. Review the facts, pricing ranges and
 * author names before publishing, or replace them with your own posts.
 *
 * To add a post: copy an entry, give it a new slug, and drop its cover image in
 * /public/images/blog/<slug>.jpg. Covers are 1600x1000 (16:10), which works for
 * the lead card, the small cards and the article hero. Leave `cover` as null
 * and the card shows a gradient placeholder instead.
 *
 * The current covers are geometric compositions built from the brand's own
 * language rather than stock photography, so the index reads as one set.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  /** Used for the <title> tag; keep under about 60 characters. */
  metaTitle: string;
  /** Used for the meta description; keep under about 155 characters. */
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO date for <time> and schema. */
  dateISO: string;
  readingTime: string;
  author: string;
  cover: string | null;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "digital-marketing-cost-mumbai",
    title: "What digital marketing actually costs in Mumbai in 2026",
    metaTitle: "Digital Marketing Cost in Mumbai (2026 Guide)",
    metaDescription:
      "What social media marketing, content and Meta ads cost in Mumbai in 2026, what sits inside a retainer, and how to tell a fair quote from a thin one.",
    excerpt:
      "Agency quotes in Mumbai range from a few thousand rupees a month to several lakhs. Here is what sits behind those numbers and how to compare two quotes properly.",
    category: "Pricing",
    date: "2 October 2026",
    dateISO: "2026-10-02",
    readingTime: "6 min read",
    author: "Aurion Digital",
    cover: "/images/blog/digital-marketing-cost-mumbai.jpg",
    body: [
      {
        type: "p",
        text: "Most people asking what digital marketing costs are really asking a harder question: how do I tell whether a quote is fair? Two agencies can quote the same monthly figure and deliver work that differs by an order of magnitude, because the scope hiding behind the number is rarely written down in the same way.",
      },
      {
        type: "p",
        text: "This is how quotes in Mumbai are usually built, what moves the price, and the questions worth asking before signing anything.",
      },
      { type: "h2", text: "What goes into a monthly retainer" },
      {
        type: "p",
        text: "A social media retainer is priced on output volume and production quality. The variables that matter most are how many reels are shot and edited each month, whether a shoot is involved or the content is designed at a desk, how many platforms the calendar covers, and who handles community management.",
      },
      {
        type: "ul",
        items: [
          "Content volume: a calendar of 12 static posts is a different job from 12 reels with scripting, shooting and editing.",
          "Production: desk-designed graphics cost less than a shoot day with a crew, talent and location.",
          "Platforms: each extra platform adds reformatting, scheduling and reporting work, not just a copy-paste.",
          "Community management: replying to comments and DMs daily is a staffed activity, not an afterthought.",
          "Reporting: a monthly dashboard review takes analyst time that a screenshot of Insights does not.",
        ],
      },
      { type: "h2", text: "Ad spend is not the agency fee" },
      {
        type: "p",
        text: "This trips up more first-time clients than anything else. The money that goes to Meta or Google is yours and is billed by the platform. The agency fee is the cost of planning, building and optimising the campaigns that spend it. Some agencies charge a flat management fee, some a percentage of spend, usually in the ten to twenty percent range once spend is meaningful.",
      },
      {
        type: "p",
        text: "Percentage pricing is simple but creates an obvious tension: the agency earns more when you spend more, whether or not the extra spend performs. If you go that route, agree on a performance measure in the same breath, such as cost per qualified lead, so the incentive points in the right direction.",
      },
      { type: "h2", text: "Why the same scope gets quoted differently" },
      {
        type: "p",
        text: "A freelancer with no overheads can quote below an agency and often does good work, but capacity is a real constraint and a single person cannot cover strategy, design, video and ads at depth. A large agency carries account management layers that add cost and sometimes distance from the work. A small in-house team usually sits between the two.",
      },
      {
        type: "p",
        text: "The other hidden variable is outsourcing. An agency that routes your video to a freelancer is adding a margin to someone else's work, and quality moves with whoever is free that week.",
      },
      { type: "h2", text: "Questions that reveal the real scope" },
      {
        type: "ul",
        items: [
          "How many pieces of content, by format, are included each month?",
          "Who shoots and edits, and is that person on your team?",
          "Is ad spend included in the fee or billed separately by the platform?",
          "What happens if a campaign underperforms: who changes what, and how fast?",
          "What does the monthly report contain, and which numbers are we judged on?",
          "What is the notice period, and who owns the content and ad accounts afterwards?",
        ],
      },
      {
        type: "quote",
        text: "The cheapest quote is rarely the cheapest outcome. A retainer that produces content nobody engages with costs you the fee plus the months you did not grow.",
      },
      { type: "h2", text: "A simple way to compare two quotes" },
      {
        type: "p",
        text: "Divide the monthly fee by the number of content pieces to get a cost per asset, then ask what each asset involves. A reel that needs a shoot, a script and three rounds of edits is not comparable to a template carousel, and the spreadsheet will not tell you which you are buying. Add the cost of the strategy and reporting layer separately, because that is the part that stops the content being busywork.",
      },
      {
        type: "p",
        text: "If you want a number for your own scope, send us what you are trying to achieve and we will put a quote together, with the scope written out line by line.",
      },
    ],
  },
  {
    slug: "instagram-reels-strategy-indian-brands",
    title: "An Instagram reels strategy that works for Indian brands",
    metaTitle: "Instagram Reels Strategy for Indian Brands",
    metaDescription:
      "How to plan reels that reach a new audience: hooks that hold attention, a repeatable format mix, posting rhythm and the metrics that matter.",
    excerpt:
      "Reach on Instagram is decided in the first two seconds. Here is the format mix, hook structure and posting rhythm we use across client accounts.",
    category: "Social media",
    date: "18 September 2026",
    dateISO: "2026-09-18",
    readingTime: "7 min read",
    author: "Aurion Digital",
    cover: "/images/blog/instagram-reels-strategy-indian-brands.jpg",
    body: [
      {
        type: "p",
        text: "Reels are the one format on Instagram that still routinely reaches people who have never seen your account. That makes them the growth engine of almost every account we run, and it also makes them unforgiving: the algorithm decides within the first couple of seconds whether to keep showing your video to new viewers.",
      },
      { type: "h2", text: "The first two seconds decide everything" },
      {
        type: "p",
        text: "Retention is the signal that matters. If viewers drop off immediately, distribution stops, regardless of how good the rest of the video is. So the opening frame has to do real work: state the payoff, show the end result, or ask the question your audience already has in their head.",
      },
      {
        type: "ul",
        items: [
          "Lead with the outcome, not the setup. Show the finished thing, then explain it.",
          "Put a text hook on screen in the first frame for the majority who watch on mute.",
          "Cut the introduction. Nobody needs your name before they know why they should care.",
          "Make the first line specific. 'Three mistakes that cost you a home loan approval' beats 'some tips about loans'.",
        ],
      },
      { type: "h2", text: "A format mix that does not burn out" },
      {
        type: "p",
        text: "Posting the same kind of video every day exhausts both the audience and the team. We plan a month across four buckets, roughly in this ratio.",
      },
      { type: "h3", text: "Educational, about half the calendar" },
      {
        type: "p",
        text: "Answer one question per reel, properly. These are the videos that get saved and sent, and saves are a strong signal to the algorithm.",
      },
      { type: "h3", text: "Behind the scenes, about a quarter" },
      {
        type: "p",
        text: "How the product is made, how the service runs, who is on the team. These build trust and cost very little to produce because they are filmed on a phone during work you are doing anyway.",
      },
      { type: "h3", text: "Social proof, about a fifth" },
      {
        type: "p",
        text: "Customer stories, results, before and after. For regulated categories such as finance, education and medical, every claim here needs to be checkable, so keep documentation for anything you state.",
      },
      { type: "h3", text: "Trends, the remainder" },
      {
        type: "p",
        text: "Use a trending audio or format only when it genuinely fits the brand. A forced trend reads as a brand trying too hard, and the reach rarely converts into anything.",
      },
      { type: "h2", text: "Language matters more than polish" },
      {
        type: "p",
        text: "For most consumer brands in India, Hinglish outperforms formal English, because it is how the audience actually speaks. Scripts that read naturally when spoken aloud beat scripts that read well on paper. Captions should be burned in, because a large share of viewing happens on mute.",
      },
      { type: "h2", text: "Posting rhythm and what to measure" },
      {
        type: "p",
        text: "Consistency beats volume. Three strong reels a week, every week, outperform a burst of ten and then silence for a month. Build a content bank by shooting in batches, then publish on a steady schedule.",
      },
      {
        type: "ul",
        items: [
          "Watch average watch time and retention, not just views.",
          "Track saves and shares: they predict reach better than likes.",
          "Measure profile visits and link clicks to connect reach to business outcomes.",
          "Review hooks monthly. Keep the ones that held attention and rewrite the rest.",
        ],
      },
      {
        type: "quote",
        text: "Treat each reel as a test of one hook. After a month you stop guessing what works for your audience and start repeating what already did.",
      },
      {
        type: "p",
        text: "The accounts that grow are not the ones chasing every trend. They are the ones that found three or four formats their audience reliably responds to and kept producing them at a quality the competition cannot be bothered to match.",
      },
    ],
  },
  {
    slug: "meta-ads-vs-google-ads-lead-generation",
    title: "Meta ads or Google ads: which one brings better leads?",
    metaTitle: "Meta Ads vs Google Ads for Lead Generation",
    metaDescription:
      "Meta ads create demand, Google ads capture it. How to choose between them for lead generation, what each costs, and when to run both together.",
    excerpt:
      "The honest answer is that they do different jobs. One creates demand, the other captures it, and the right split depends on whether people are already searching for you.",
    category: "Performance marketing",
    date: "5 September 2026",
    dateISO: "2026-09-05",
    readingTime: "6 min read",
    author: "Aurion Digital",
    cover: "/images/blog/meta-ads-vs-google-ads-lead-generation.jpg",
    body: [
      {
        type: "p",
        text: "Every lead generation conversation eventually arrives at this question, and the answer is less about which platform is better and more about what your buyer is doing right before they become a lead.",
      },
      { type: "h2", text: "The difference in one line" },
      {
        type: "p",
        text: "Google captures demand that already exists. Someone typing 'NEET coaching in Kandivali' has decided they want something and is choosing where to get it. Meta creates demand. Nobody opens Instagram looking for a coaching class, but a well-targeted reel can make them consider one.",
      },
      {
        type: "p",
        text: "That difference drives everything else: the cost, the creative, the follow-up and how quickly you see results.",
      },
      { type: "h2", text: "When Google ads make more sense" },
      {
        type: "ul",
        items: [
          "People actively search for what you sell, with real monthly search volume behind those terms.",
          "The purchase is urgent or problem-driven: repairs, medical services, legal help, last-minute bookings.",
          "You can compete on the keywords that matter, or find longer, cheaper variants of them.",
          "Your landing page answers the exact query, rather than dropping everyone on a homepage.",
        ],
      },
      {
        type: "p",
        text: "Search leads usually convert at a higher rate because intent is already there. They also cost more per click in competitive categories, and the ceiling is fixed: you cannot get more leads than there are people searching.",
      },
      { type: "h2", text: "When Meta ads make more sense" },
      {
        type: "ul",
        items: [
          "The product is visual, or the value is easier to show than to search for.",
          "Nobody is searching for your category yet, or the search volume is tiny.",
          "You know your audience by demographics, interests or behaviour rather than by keyword.",
          "You have creative capacity, because Meta burns through creative far faster than Google.",
        ],
      },
      {
        type: "p",
        text: "Meta leads are usually cheaper and higher in volume, and usually colder. Someone who filled a form after watching a reel was not looking for you a minute earlier, so the follow-up has to be fast and the qualification tighter.",
      },
      { type: "h2", text: "Why creative fatigue is the real constraint on Meta" },
      {
        type: "p",
        text: "A Google ad can run for months with the same copy because the query changes, not the ad. On Meta the same audience sees your creative repeatedly, performance decays, and cost per result climbs. Plan for a fresh batch of creative every few weeks, and treat that production capacity as part of the campaign budget rather than an extra.",
      },
      { type: "h2", text: "The combination most lead-gen businesses end up with" },
      {
        type: "p",
        text: "If budget allows only one, start where intent already exists. If people are searching, take that demand first, because it is the cheapest path to a qualified lead. Once search is capped, Meta is how you grow beyond the people already looking.",
      },
      {
        type: "quote",
        text: "Search takes the demand that exists today. Social creates the demand you will capture next quarter. A lead engine that only does one of those eventually stalls.",
      },
      { type: "h2", text: "Judge both on the same number" },
      {
        type: "p",
        text: "Cost per lead flatters whichever platform generates the most forms, which is usually Meta. The number that matters is cost per qualified lead, which means tracking what happened after the form: who answered the call, who showed up, who bought. Until that loop is closed, you are optimising for volume rather than revenue.",
      },
      {
        type: "p",
        text: "Set that tracking up before you increase spend, not after. It is the difference between scaling a campaign and scaling a cost.",
      },
    ],
  },
  {
    slug: "live-event-content-coverage",
    title: "How to get usable content out of a live event",
    metaTitle: "Live Event Content Coverage: A Practical Guide",
    metaDescription:
      "What it takes to leave an event with content worth posting: planning the route, the kit, the edit cycle, and why same-day beats perfect.",
    excerpt:
      "Most event coverage fails in the planning, not the shooting. Here is how we work a venue so the footage is usable before the doors close.",
    category: "Event marketing",
    date: "16 October 2026",
    dateISO: "2026-10-16",
    readingTime: "7 min read",
    author: "Aurion Digital",
    cover: "/images/blog/live-event-content-coverage.jpg",
    body: [
      {
        type: "p",
        text: "An event is the one day a brand has more happening in front of it than it can possibly use. That sounds like an easy brief. It is the opposite: the failure mode is not too little footage, it is a hard drive full of clips nobody ever edits, delivered three weeks after anyone stopped caring.",
      },
      {
        type: "p",
        text: "What follows is how we work a venue, whether it is an art fair, a design festival or a product launch.",
      },
      { type: "h2", text: "Plan a route, not a schedule" },
      {
        type: "p",
        text: "The instinct is to build a timetable around the programme: this talk at eleven, that panel at two. The problem is that the best material at any event is unscheduled, and a crew tied to a timetable spends the gaps standing still.",
      },
      {
        type: "p",
        text: "We plan a circuit of the floor instead, and walk it repeatedly through the day. Every area gets covered several times in different light and different crowd density, and the edit has a predictable supply of material rather than a feast at eleven and nothing at three. Scheduled sessions sit on top of the circuit as fixed points, with a position taken before the room fills.",
      },
      { type: "h2", text: "Decide what each piece is for before you shoot it" },
      {
        type: "p",
        text: "Event footage usually has to serve several jobs, and they want different shots:",
      },
      {
        type: "ul",
        items: [
          "Same-day posts that tell people the event is happening now, and that they should come.",
          "Speaker and interview clips that work on their own, long after the event, as evidence of who was there.",
          "A recap edit that carries the event past its final day and sells the next edition.",
          "A stills library for decks, recaps and next year's promotion.",
        ],
      },
      {
        type: "p",
        text: "A crew that knows which of these it is feeding will shoot the same moment differently. Without that, you get footage that is almost right for everything and correct for nothing.",
      },
      { type: "h2", text: "Same-day beats perfect" },
      {
        type: "p",
        text: "The single biggest lever is an edit station running alongside the shoot, on site. Footage cut and published while the doors are still open reaches people who can still act on it. The same cut, polished for another two days, reaches people for whom the event is already over.",
      },
      {
        type: "quote",
        text: "A rough edit posted at four in the afternoon is worth more than a beautiful one posted on Thursday. The event is the deadline, not your export settings.",
      },
      {
        type: "p",
        text: "This changes what you shoot. If the edit is happening in the next hour, you shoot with the cut in mind: fewer takes, cleaner in and out points, audio checked at the source rather than fixed later.",
      },
      { type: "h2", text: "Interviews need a position, not a plan" },
      {
        type: "p",
        text: "Catching speakers and guests is a matter of standing in the right place rather than booking slots. Find a spot with a clean background, controllable light and foot traffic between sessions, then stay there. People who would never agree to a scheduled interview will give you ninety seconds on their way past.",
      },
      {
        type: "ul",
        items: [
          "Keep the question list to two, so the answer stays short enough to use.",
          "Record a name and title on camera, or you will be chasing spellings for a week.",
          "Watch the background as the room changes through the day.",
          "Burn in captions: most of this will be watched on mute.",
        ],
      },
      { type: "h2", text: "Light and sound are the two real constraints" },
      {
        type: "p",
        text: "Venues are lit for the audience, not for the camera, and the light changes stand to stand. Halls are loud in a way that ruins otherwise usable interviews. Neither is fixable in the edit, so both have to be handled in the room: a light you control for interviews, a microphone close to the speaker, and a position chosen for what it sounds like as much as what it looks like.",
      },
      { type: "h2", text: "Give the exhibitors something to post" },
      {
        type: "p",
        text: "If you are covering for the organiser, the cheapest reach available is content the exhibitors will share themselves. Cut a few clips that put an individual stand or brand at the centre, and hand them over. Each one goes out to an audience the organiser does not own and could not have bought, and the goodwill makes next year's access easier.",
      },
      { type: "h2", text: "What to agree before the day" },
      {
        type: "ul",
        items: [
          "Who approves posts, and how fast they can do it from the floor.",
          "What goes out live versus what is held for the recap.",
          "Where the edit station sits, and whether it has power and a reliable connection.",
          "Who has the authority to pull a clip if a guest objects.",
        ],
      },
      {
        type: "p",
        text: "None of this is glamorous, and all of it decides whether you leave with content or with footage. If you have an event coming up, tell us the venue and the programme and we will put a coverage plan together.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
