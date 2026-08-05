import Image from "next/image";
import { LiveTour } from "@/lib/viator";
import styles from "./TourCard.module.css";

export default function TourCard({ tour }: { tour: LiveTour }) {
  return (
    <article className={`card ${styles.card}`}>
      {tour.imageUrl && (
        <div className={styles.imageWrap}>
          <Image
            src={tour.imageUrl}
            alt={tour.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.name}>{tour.name}</h3>

        <div className={styles.meta}>
          {tour.rating > 0 && (
            <>
              <span className={styles.rating}>
                ★ {tour.rating.toFixed(1)}
                <span className={styles.reviewCount}> ({tour.reviewCount.toLocaleString()})</span>
              </span>
              <span className={styles.dot}>•</span>
            </>
          )}
          <span>{tour.durationLabel}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <span className={styles.priceLabel}>from</span>
          <span className={styles.price}> ${tour.priceFromUsd.toFixed(0)}</span>
        </div>
        <a
          href={tour.bookingUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn btn-primary"
        >
          Book Now
        </a>
      </div>
    </article>
  );
}
