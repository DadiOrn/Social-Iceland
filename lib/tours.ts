export type TourCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  image: string;
  // Free-text query sent to the Viator Partner API (see lib/viator.ts) to
  // populate this category's tour listing with live results.
  viatorSearchTerm: string;
};

export const tourCategories: TourCategory[] = [
  {
    slug: "golden-circle",
    title: "Golden Circle Tours",
    shortTitle: "Golden Circle",
    icon: "⛰️",
    description:
      "Iceland's classic day-trip loop: Thingvellir National Park, the Geysir geothermal area, and Gullfoss waterfall.",
    image: "/images/category-golden-circle.jpg",
    viatorSearchTerm: "Golden Circle",
  },
  {
    slug: "reykjavik-day-tours",
    title: "Reykjavik Day Tours & Food Tours",
    shortTitle: "Reykjavik Day Tours",
    icon: "🍽️",
    description:
      "Walking tours, food crawls, and half-day trips that start and end in Reykjavik. No car needed.",
    image: "/images/category-reykjavik.jpg",
    viatorSearchTerm: "Reykjavik food walking tour",
  },
  {
    slug: "glacier-hikes",
    title: "Glacier Hikes & Ice Caves",
    shortTitle: "Glacier Hikes",
    icon: "🧊",
    description:
      "Guided glacier walks and ice cave tours with certified guides and gear included.",
    image: "/images/category-glacier-hikes.jpg",
    viatorSearchTerm: "glacier hike ice cave",
  },
  {
    slug: "south-coast",
    title: "South Coast Tours",
    shortTitle: "South Coast",
    icon: "🌊",
    description:
      "Black sand beaches, Seljalandsfoss and Skogafoss waterfalls, and the Reynisfjara sea stacks.",
    image: "/images/category-south-coast.jpg",
    viatorSearchTerm: "south coast waterfalls black sand beach",
  },
  {
    slug: "blue-lagoon",
    title: "Blue Lagoon Tours",
    shortTitle: "Blue Lagoon",
    icon: "♨️",
    description:
      "Geothermal spa entry and transfer packages, often combined with the airport transfer.",
    image: "/images/category-blue-lagoon.jpg",
    viatorSearchTerm: "Blue Lagoon",
  },
  {
    slug: "northern-lights",
    title: "Northern Lights Tours",
    shortTitle: "Northern Lights",
    icon: "🌌",
    description:
      "Evening minibus and small-group tours chasing the aurora away from Reykjavik's light pollution.",
    image: "/images/category-northern-lights.jpg",
    viatorSearchTerm: "northern lights",
  },
];

export function getCategory(slug: string): TourCategory | undefined {
  return tourCategories.find((c) => c.slug === slug);
}
