/**
 * Debt2NoDebt
 *
 * Media for this client lives in /public/images/work/debt2nodebt/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number. *
 * Covers were supplied in reverse against the links, so scripts/reel_thumbs.py
 * lists them flipped. The two carousels were identified by the img_index in
 * their URLs.
 *
 * DRAFT COPY: the summary, outcomes and highlights below were written from the
 * content on this page, not from the brief. Read them against what the
 * engagement actually covered and correct anything that overstates it.
 *
 * CHECK: instagramUrl is still a placeholder. Note also that figures quoted
 * inside the creative, such as the 39% on one post, are the client's own
 * claim; the captions here describe the post rather than repeat them.
 *
 * CHECK: The previous shortcodes here duplicated Catch25's and have been reset to placeholders.
 * CHECK: 01.png is a real preview: add the matching post link for it first.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "debt2nodebt",
  name: "Debt2NoDebt",
  handle: "@debt2nodebt",
  industry: "Debt relief and advisory",
  period: "Ongoing",
  summary:
    "Social content for a debt advisory service, written to explain a subject people are anxious about in plain language, and to make the first step feel approachable.",
  services: ["Organic social", "Content strategy"],
  outcomes: [
    {
      title: "A subject explained without jargon",
      body: "Debt is a category where plain language is the whole job, so posts are written to be understood on first read.",
    },
    {
      title: "Trust built before contact",
      body: "Clear, accurate explanation does more for credibility here than any promise about results.",
    },
    {
      title: "A steady publishing rhythm",
      body: "Regular posting keeps the brand present for an audience that researches quietly before reaching out.",
    },
    {
      title: "Content that answers the fear, not just the question",
      body: "Posts lead on what the service does and does not do, because the first thing a worried reader needs is to know they are in the right place.",
    },
  ],
  highlights: [
    "A subject explained in plain Hindi and English, without jargon",
    "Clear separation between what is offered and what is not",
    "A steady posting rhythm so the account looks active when someone checks it",
  ],
  posts: [
    { shortcode: "DbN1rgotnNd", type: "reel", thumb: "01.jpg", caption: "Loan ka status: closed ya settled" },
    { shortcode: "DbQ0wI-jd-P", type: "carousel", thumb: "02.jpg", caption: "Red flags that mark out a fake debt-relief company" },
    { shortcode: "DbSyEqYNdhc", type: "reel", thumb: "03.jpg", caption: "Four red flags to remember" },
    { shortcode: "DbVW3CwNiWQ", type: "post", thumb: "04.jpg", caption: "Abusive recovery calls, and what can be done about them" },
    { shortcode: "DbX4rngjddp", type: "carousel", thumb: "05.jpg", caption: "Six simple steps to financial freedom" },
    { shortcode: "Dbah2NAtvLl", type: "reel", thumb: "06.jpg", caption: "What does written off actually mean?" },
  ],
  instagramUrl: "https://www.instagram.com/",
};

export default client;
