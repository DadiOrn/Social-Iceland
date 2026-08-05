import { Review } from "@/lib/reviews";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.header}>
        <span className={styles.stars}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
        {review.incentivized && <span className="badge">Incentivized review</span>}
      </div>
      <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
      <div className={styles.footer}>
        <span className={styles.name}>{review.reviewerName}</span>
        <span className={styles.tour}>{review.tourName}</span>
      </div>
    </article>
  );
}
