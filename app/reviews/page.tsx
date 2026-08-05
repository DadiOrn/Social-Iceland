import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/lib/reviews";
import ReviewCard from "@/components/ReviewCard";
import PageHero from "@/components/PageHero";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Traveler Reviews",
  description: "Real traveler reviews of Iceland tours, including our incentivized review program.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        image="/images/testimonial-hiker.jpg"
        imageAlt="A traveler crossing a river below Kirkjufellsfoss waterfall, Iceland"
        eyebrow="Reviews"
        title="What travelers say"
      />
      <div className="section">
        <div className="wrap">
          <p className={styles.intro}>
            Reviews below come from real travelers we work with directly. Some are compensated
            for their time writing the review and providing photos — those are marked
            &ldquo;Incentivized review.&rdquo; See our{" "}
            <Link href="/about">About &amp; Disclosure page</Link> for details on how that works.
          </p>

          <div className={styles.grid}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
