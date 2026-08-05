# Social Iceland — Iceland Tours

Domain: **socialiceland.com**

Faceless affiliate site for Iceland tours, monetized via the Viator affiliate program.
Built with Next.js (App Router).

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in `VIATOR_API_KEY` (see below) and
`NEXT_PUBLIC_SITE_URL` for production.

## Viator Partner API

Tour listings are **live** — `lib/viator.ts` calls the Viator Partner API
(`/search/freetext`) at request/build time and `components/CategoryTours.tsx` renders
whatever comes back. There's no sample/mock tour data left in the codebase.

- `VIATOR_API_KEY` (server-only, no `NEXT_PUBLIC_` prefix — never exposed to the browser)
  and `VIATOR_API_ENV` (`sandbox` or `production`) live in `.env.local`.
- Each category in `lib/tours.ts` has a `viatorSearchTerm` used as the free-text query,
  scoped to destination id `905` (Reykjavik — Iceland-wide tours use it as their primary
  destination in Viator's catalog; see the comment in `lib/viator.ts`).
- `productUrl` from the API already includes our affiliate tracking (`pid`/`mcid`), so
  `TourCard` links straight to it — no separate link-building step needed for real data.
- Category pages revalidate hourly (`next: { revalidate: 3600 }`) and fail gracefully
  (empty state, not a crash) if the API is unreachable.
- **Currently wired to the sandbox key** — swap `VIATOR_API_KEY` and set
  `VIATOR_API_ENV=production` once you have production credentials (requires filling out
  contact details in the Viator partner dashboard first).

## Project structure

- `lib/config.ts` — brand name and site URL. Change `BRAND_NAME` here to rebrand the
  whole site in one place.
- `lib/viator.ts` — the Viator Partner API client (server-only).
- `lib/tours.ts` — tour category metadata (title, description, hero image, Viator search
  term) — no tour-level data lives here anymore, that all comes from the API live.
- `lib/guides.ts` — metadata for the pillar guide pages under `app/guides/`.
- `lib/reviews.ts` — **placeholder** review data. Replace with real submissions from
  recruited reviewers (see `app/share-your-trip/page.tsx`).
- `app/tours/[category]/page.tsx` (one file per category, all thin wrappers around
  `components/CategoryTours.tsx`) — tour listing pages, organized by keyword-cluster
  category rather than one long list.
- `app/api/subscribe/route.ts` — email capture endpoint. **Not wired to a real email
  service yet** — see the `TODO(esp-integration)` comment. It currently just validates
  and logs the email; wire up Mailchimp/ConvertKit/Beehiiv (all have free tiers) before
  relying on it to actually deliver the lead magnet.
- `components/PageHero.tsx` — the full-bleed photo hero (with the nav overlaid on top)
  used at the top of every page. `app/globals.css` holds the color system (icy blue +
  navy, matched to the photography rather than a generic SaaS palette).
- `public/images/` — Iceland photography sourced from Unsplash (free license, no
  attribution required). See `public/images/SOURCES.md` for where each one came from.

## Known gaps before launch

1. **Production Viator key**: still running on the sandbox key — see the Viator Partner
   API section above for what changes once production access is granted.
2. **Email delivery**: the subscribe form accepts and validates emails but doesn't send
   anything or store them durably — needs a real ESP integration.
3. **Reviews**: `lib/reviews.ts` has placeholder entries only, pending the 3-5 recruited
   reviewers.
4. **Production domain**: set `NEXT_PUBLIC_SITE_URL=https://socialiceland.com` in
   production (see `.env.example`) once the domain is pointed at the deployment.

## Deploy

Deploys cleanly to Vercel or Netlify (`npm run build && npm run start` to test a
production build locally first).
