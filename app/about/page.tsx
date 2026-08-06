import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/config";
import PageHero from "@/components/PageHero";
import styles from "../guides/guides.module.css";

export const metadata: Metadata = {
  title: "About & Disclosure",
  description: `About ${BRAND_NAME} and how we're compensated: affiliate commissions and our incentivized review program.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/hero-glacier-lagoon.jpg"
        imageAlt="Icebergs floating in Jökulsárlón glacier lagoon, Iceland"
        eyebrow="About"
        title={`About ${BRAND_NAME}`}
      />
      <div className="section">
      <div className="wrap">
        <div className={styles.article}>
          <p>
            {BRAND_NAME} is an independent guide to booking tours in Iceland. We built it
            because comparing tour operators, prices, and reviews across a dozen browser tabs
            is tedious, and we wanted one place organized around what you actually want to do
            (glaciers, waterfalls, food, the northern lights) instead of one long
            undifferentiated list.
          </p>
          <p>
            We don&apos;t operate any tours ourselves. Every tour listed is bookable through our
            partner, Viator, and we curate, categorize, and describe them to make comparison
            easier.
          </p>

          <h2>How we make money</h2>
          <p>
            When you book a tour through a link on this site, we earn a commission from
            Viator. This costs you nothing extra. The price you pay is the same whether you
            book through us or go directly to the operator. Our incentive is to point you
            toward tours you&apos;ll actually enjoy, since that&apos;s what keeps people coming back
            to this site.
          </p>

          <h2>Our review program</h2>
          <p>
            Some of the reviews on our <Link href="/reviews">reviews page</Link>{" "}
            come from
            travelers we&apos;ve directly recruited and paid a flat fee to write an honest review
            and provide photos, rather than from unsolicited submissions. We disclose this
            clearly: any review that was compensated is marked{" "}
            <span className="badge">Incentivized review</span>{" "}
            wherever it appears. We don&apos;t
            edit reviews for sentiment or pay for a specific rating. Reviewers are compensated
            for their time and honesty, not for praise.
          </p>

          <h2>Questions or corrections</h2>
          <p>
            If you spot outdated information in one of our guides, or you booked a tour
            through us and want to flag something, you can reach us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
