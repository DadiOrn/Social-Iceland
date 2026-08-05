// PLACEHOLDER structure only. Real entries come from reviewers recruited
// via Facebook groups (paid flat fee for a written review + photos) before
// launch — see app/share-your-trip/page.tsx for the recruitment pitch.
// Replace this array with real submissions; keep `incentivized: true` on
// any review that was paid for, per the disclosure on app/about/page.tsx.

export type Review = {
  id: string;
  reviewerName: string;
  tourName: string;
  rating: number;
  quote: string;
  incentivized: boolean;
};

export const reviews: Review[] = [
  {
    id: "placeholder-1",
    reviewerName: "Example Reviewer",
    tourName: "Golden Circle Classic Day Tour",
    rating: 5,
    quote:
      "This is a placeholder review. Real reviewer quotes and photos go here once recruitment is complete.",
    incentivized: true,
  },
  {
    id: "placeholder-2",
    reviewerName: "Example Reviewer",
    tourName: "Solheimajokull Glacier Hike",
    rating: 4,
    quote:
      "This is a placeholder review. Real reviewer quotes and photos go here once recruitment is complete.",
    incentivized: true,
  },
  {
    id: "placeholder-3",
    reviewerName: "Example Reviewer",
    tourName: "Reykjavik Food Lovers Walking Tour",
    rating: 5,
    quote:
      "This is a placeholder review. Real reviewer quotes and photos go here once recruitment is complete.",
    incentivized: false,
  },
];
