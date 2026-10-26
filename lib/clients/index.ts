/**
 * Every client on the site, in the order they appear on /work.
 * To add a client: copy an existing ./<slug>.ts file, import it here, add it to
 * the list below, and create /public/images/work/<slug>/ for its media.
 *
 * Live events (Art Mumbai, Stir ADFF, ID Mumbai) are not clients: they live in
 * lib/events.ts and render at /events.
 */

import type { Client } from "./types";
import c_catch_25 from "./catch-25";
import c_freelance from "./freelance";
import c_nyraj_vasani from "./nyraj-vasani";
import c_all_things_design from "./all-things-design";
import c_scholar_medico_services from "./scholar-medico-services";
import c_uws from "./uws";
import c_tabu from "./tabu";
import c_5paisa from "./5paisa";
import c_ah_capital from "./ah-capital";
import c_maxus_cakes from "./maxus-cakes";
import c_vit_and_rich from "./vit-and-rich";
import c_rikaayin from "./rikaayin";
import c_debt2nodebt from "./debt2nodebt";
import c_bellcorp from "./bellcorp";

export type { Client, Post, Outcome, Collection, Website } from "./types";
export { draftPosts } from "./types";

export const clients: Client[] = [
  c_catch_25,
  c_freelance,
  c_nyraj_vasani,
  c_all_things_design,
  c_scholar_medico_services,
  c_uws,
  c_tabu,
  c_5paisa,
  c_ah_capital,
  c_maxus_cakes,
  c_vit_and_rich,
  c_rikaayin,
  c_debt2nodebt,
  c_bellcorp,
];

export const getClient = (slug: string) => clients.find((c) => c.slug === slug);
