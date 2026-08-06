// Real entries come from reviewers recruited via Facebook groups (paid flat
// fee for a written review + photos) — see app/share-your-trip/page.tsx for
// the recruitment pitch. Add real submissions here as they come in; keep
// `incentivized: true` on any review that was paid for, per the disclosure
// on app/about/page.tsx.

export type Review = {
  id: string;
  reviewerName: string;
  tourName: string;
  rating: number;
  quote: string;
  incentivized: boolean;
};

export const reviews: Review[] = [];
