export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

// Metadata only — each guide's actual content lives in its page.tsx.
export const guides: GuideMeta[] = [
  {
    slug: "golden-circle-itineraries",
    title: "Top 3 Golden Circle Itineraries",
    description:
      "Three ready-made day plans — timing, stops, and what to skip if you're short on daylight.",
    icon: "🗺️",
  },
  {
    slug: "keflavik-airport-to-reykjavik",
    title: "Keflavik Airport to Reykjavik: Every Way to Get There",
    description:
      "Flybus, rental car, taxi, or private transfer — timing, cost, and which one fits your trip.",
    icon: "✈️",
  },
  {
    slug: "renting-a-car-vs-taking-tours",
    title: "Renting a Car vs. Taking Tours in Iceland",
    description:
      "The real tradeoffs: winter driving conditions, cost comparison, and when a guided tour is simply safer.",
    icon: "🚗",
  },
  {
    slug: "best-time-to-see-northern-lights",
    title: "Best Time to See the Northern Lights in Iceland",
    description:
      "Season, weather, and light-pollution factors that actually affect your odds of seeing the aurora.",
    icon: "🌌",
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}
