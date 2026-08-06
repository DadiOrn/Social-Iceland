import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/config";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PageHero from "@/components/PageHero";
import styles from "../guides/guides.module.css";

export const metadata: Metadata = {
  title: "Share Your Trip, Get Paid",
  description: `Write a paid review of your Iceland tour for ${BRAND_NAME}.`,
};

export default function ShareYourTripPage() {
  return (
    <>
      <PageHero
        image="/images/testimonial-hiker.jpg"
        imageAlt="A traveler crossing a river below Kirkjufellsfoss waterfall, Iceland"
        eyebrow="For travelers"
        title="Share your trip, get paid"
      />
      <div className="section">
      <div className="wrap">
        <div className={styles.article}>
          <p>
            If you&apos;ve recently taken (or are about to take) a tour in Iceland, we pay a flat
            fee for a written review and a few photos. It takes most people under an hour to
            put together.
          </p>

          <h2>What we&apos;re looking for</h2>
          <ul>
            <li>A short, honest written review of a specific tour: what was good, what wasn&apos;t, who it&apos;s a good fit for.</li>
            <li>3&ndash;6 of your own photos from the tour (no professional photography required).</li>
            <li>Your first name and the tour name/operator, for the review to display alongside.</li>
          </ul>

          <h2>How it works</h2>
          <ul>
            <li>We pay a flat fee, agreed before you write anything, not based on how positive the review is.</li>
            <li>We won&apos;t edit your review for sentiment. Constructive criticism is welcome and useful to other travelers.</li>
            <li>Your review is clearly labeled as an incentivized review when it&apos;s published. See our <Link href="/about">disclosure policy</Link>.</li>
          </ul>

          <p>
            Interested? Leave your email below and mention the tour you took (or plan to
            take), and we&apos;ll follow up with details and the payment amount.
          </p>

          <EmailCaptureForm source="share-your-trip" buttonLabel="I'm interested" />

          <p style={{ marginTop: "24px" }}>
            Prefer email? Reach us directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
