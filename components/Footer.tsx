"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND_NAME } from "@/lib/config";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.columns}>
          <div>
            <div className={styles.brand}>{BRAND_NAME}</div>
            <p className={styles.blurb}>
              An independent guide to booking Iceland tours. We earn a commission on
              bookings made through our links, at no extra cost to you.
            </p>
          </div>

          <div>
            <div className={styles.heading}>Explore</div>
            <Link href="/tours" className={styles.link}>Tours</Link>
            <Link href="/guides" className={styles.link}>Guides</Link>
            <Link href="/reviews" className={styles.link}>Reviews</Link>
            <Link href="/about" className={styles.link}>About &amp; Disclosure</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {BRAND_NAME}</span>
          {!isHomepage && (
            <Link href="/share-your-trip" className={styles.recruitLink}>
              Share your trip, get paid →
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
