// Server-only Viator Partner API client. Never import this from a client
// component — VIATOR_API_KEY has no NEXT_PUBLIC_ prefix on purpose.

const VIATOR_BASE_URL =
  process.env.VIATOR_API_ENV === "production"
    ? "https://api.viator.com/partner"
    : "https://api.sandbox.viator.com/partner";

const VIATOR_API_KEY = process.env.VIATOR_API_KEY ?? "";

// Reykjavik (not the Iceland-country id) — in Viator's catalog, Iceland-wide
// tours are attributed to Reykjavik as their primary destination, and the
// destination filter on /search/freetext only matches primary destination,
// not the country/region hierarchy (unlike /products/search).
const REYKJAVIK_DESTINATION_ID = "905";

type ViatorImageVariant = { width: number; height: number; url: string };
type ViatorImage = { variants?: ViatorImageVariant[] };

type ViatorProductSummary = {
  productCode: string;
  title: string;
  images?: ViatorImage[];
  reviews?: { combinedAverageRating?: number; totalReviews?: number };
  duration?: {
    fixedDurationInMinutes?: number;
    variableDurationFromMinutes?: number;
    variableDurationToMinutes?: number;
  };
  pricing?: { summary?: { fromPrice?: number }; currency?: string };
  productUrl?: string;
};

export type LiveTour = {
  id: string;
  name: string;
  imageUrl: string | null;
  rating: number;
  reviewCount: number;
  durationLabel: string;
  priceFromUsd: number;
  bookingUrl: string;
};

function pickImageUrl(images?: ViatorImage[]): string | null {
  const variants = images?.[0]?.variants;
  if (!variants || variants.length === 0) return null;
  const sorted = [...variants].sort((a, b) => Math.abs(a.width - 640) - Math.abs(b.width - 640));
  return sorted[0]?.url ?? null;
}

function formatDuration(duration?: ViatorProductSummary["duration"]): string {
  const mins =
    duration?.fixedDurationInMinutes ??
    duration?.variableDurationToMinutes ??
    duration?.variableDurationFromMinutes;
  if (!mins) return "Duration varies";
  if (mins >= 1440) {
    const days = Math.round(mins / 1440);
    return `${days} day${days === 1 ? "" : "s"}`;
  }
  const hours = Math.round((mins / 60) * 10) / 10;
  return `${hours} hour${hours === 1 ? "" : "s"}`;
}

function toLiveTour(product: ViatorProductSummary): LiveTour {
  return {
    id: product.productCode,
    name: product.title,
    imageUrl: pickImageUrl(product.images),
    rating: product.reviews?.combinedAverageRating ?? 0,
    reviewCount: product.reviews?.totalReviews ?? 0,
    durationLabel: formatDuration(product.duration),
    priceFromUsd: product.pricing?.summary?.fromPrice ?? 0,
    // productUrl already includes our affiliate tracking (pid/mcid) — use as-is.
    bookingUrl: product.productUrl ?? "https://www.viator.com/",
  };
}

/**
 * Live-searches Viator's catalog for tours matching a free-text term,
 * scoped to Iceland. Returns an empty array (rather than throwing) on any
 * API error so a single failed category never takes down the page.
 */
export async function searchToursByTerm(searchTerm: string, count = 6): Promise<LiveTour[]> {
  if (!VIATOR_API_KEY) return [];

  try {
    const res = await fetch(`${VIATOR_BASE_URL}/search/freetext`, {
      method: "POST",
      headers: {
        "exp-api-key": VIATOR_API_KEY,
        Accept: "application/json;version=2.0",
        "Accept-Language": "en-US",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchTerm,
        productFiltering: { destination: REYKJAVIK_DESTINATION_ID },
        searchTypes: [{ searchType: "PRODUCTS", pagination: { start: 1, count } }],
        currency: "USD",
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`[viator] search failed for "${searchTerm}": ${res.status}`);
      return [];
    }

    const data = await res.json();
    const products: ViatorProductSummary[] = data?.products?.results ?? [];
    return products.map(toLiveTour);
  } catch (err) {
    console.error(`[viator] search threw for "${searchTerm}"`, err);
    return [];
  }
}
