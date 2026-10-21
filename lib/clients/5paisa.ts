/**
 * 5paisa
 *
 * Media for this client lives in /public/images/work/5paisa/
 *   01.jpg ... -> grid previews, 4:5 at 1080x1350, referenced as thumb: "01.jpg"
 *   01.mp4 ... -> optional self-hosted reel, referenced as video: "01.mp4"
 * Posts can be added or removed freely: the grid flows to any number.
 *
 * Links were supplied newest-first and covers oldest-first, so
 * scripts/reel_thumbs.py lists them flipped. CHECK that each tile opens the
 * reel it shows.
 *
 * CHECK: Listed as Tab 12 in the portfolio doc, with no post links. Add shortcodes when available.
 */

import type { Client } from "./types";

const client: Client = {
  slug: "5paisa",
  name: "5paisa",
  handle: "@5paisa",
  industry: "Finance",
  period: "Jan 2026 to Jun 2026",
  summary:
    "Performance creative for the Pay Later (MTF) product, built as a series of short-form films that explain a complex trading feature in everyday language.",
  services: ["Performance creative", "Reel production", "Ad operations"],
  outcomes: [
    {
      title: "A complex product explained simply",
      body: "Margin trading was broken into single-idea films in Hinglish, pitched at someone opening their first trading account.",
    },
    {
      title: "Creative kept ahead of fatigue",
      body: "New variants were produced on a rolling basis, so the campaign had fresh creative before performance on the old set dropped away.",
    },
    {
      title: "Hooks chosen on evidence",
      body: "Openings were tested against retention data rather than opinion, and the ones that held attention were reused as a template.",
    },
    {
      title: "Compliance built into the script",
      body: "Every claim was written to stand up in a regulated category, which kept creative moving without legal rounds holding up launches.",
    },
  ],
  highlights: [
    "Product explainers scripted in Hinglish for first-time investors",
    "Creative refreshed on a rolling basis against retention data",
    "Scripts written to clear compliance review the first time",
  ],
  posts: [
    { shortcode: "DNA6H_Qz9-D", type: "reel", thumb: "01.jpg", caption: "Is MTF risky? Myth versus fact" },
    { shortcode: "DM-RJr5pb3Z", type: "reel", thumb: "02.jpg", caption: "What is Pay Later (MTF)?" },
    { shortcode: "DM7bChHzTp3", type: "reel", thumb: "03.jpg", caption: "The 5paisa stand on the expo floor" },
    { shortcode: "DM2Cid2CI2m", type: "reel", thumb: "04.jpg", caption: "Traders reacting to the market mood" },
    { shortcode: "DMxcajftmO-", type: "reel", thumb: "05.jpg", caption: "Who actually manages your mutual funds?" },
    { shortcode: "DMuN4V_zEZ2", type: "reel", thumb: "06.jpg", caption: "When he is not replying because the market is open" },
    { shortcode: "DMpi_8-tu21", type: "reel", thumb: "07.jpg", caption: "Saying breakout and stop loss to a non-trader" },
    { shortcode: "DMmesk7ilZX", type: "reel", thumb: "08.jpg", caption: "What trading without a plan looks like" },
    { shortcode: "DMkcL9tNq7d", type: "reel", thumb: "09.jpg", caption: "A sign to try 5paisa MCP if you cannot code a strategy" },
    { shortcode: "DMcFJnJzmZe", type: "reel", thumb: "10.jpg", caption: "What traders say about the 5paisa app" },
    { shortcode: "DMVUouRNoWP", type: "reel", thumb: "11.jpg", caption: "Move the thumb with the circle" },
    { shortcode: "DMKVumKTIu1", type: "reel", thumb: "12.jpg", caption: "Trading options manually, and what it costs you" },
    { shortcode: "DMCmcfqTzz1", type: "reel", thumb: "13.jpg", caption: "Every dip is just a setup" },
    { shortcode: "DL9uxBptLX-", type: "reel", thumb: "14.jpg", caption: "Mutual funds, your way" },
    { shortcode: "DL6uhwkzr6t", type: "reel", thumb: "15.jpg", caption: "A trader's 9:15 to 3:30" },
    { shortcode: "DLxChJKTbby", type: "reel", thumb: "16.jpg", caption: "Ask MCP what actually matters for your trades" },
    { shortcode: "DLueaLWtTHS", type: "reel", thumb: "17.jpg", caption: "Guess the stock: the beauty and personal care listing" },
  ],
  instagramUrl: "https://www.instagram.com/5paisa/",
};

export default client;
