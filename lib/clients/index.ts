/**
 * Every client on the site, in the order they appear on /work.
 * To add a client: copy an existing ./<slug>.ts file, import it here, add it to
 * the list below, and create /public/images/work/<slug>/ for its media.
 */

import type { Client } from "./types";
import c_5paisa from "./5paisa";
import c_art_mumbai from "./art-mumbai";
import c_catch_25 from "./catch-25";
import c_debt2nodebt from "./debt2nodebt";
import c_rikaayin from "./rikaayin";
import c_all_things_design from "./all-things-design";
import c_scholar_medico_services from "./scholar-medico-services";
import c_nyraj_vasani from "./nyraj-vasani";
import c_bellocorp_international from "./bellocorp-international";

export type { Client, Post, Metric } from "./types";
export { draftPosts } from "./types";

export const clients: Client[] = [
  c_5paisa,
  c_art_mumbai,
  c_catch_25,
  c_debt2nodebt,
  c_rikaayin,
  c_all_things_design,
  c_scholar_medico_services,
  c_nyraj_vasani,
  c_bellocorp_international,
];

export const getClient = (slug: string) => clients.find((c) => c.slug === slug);
