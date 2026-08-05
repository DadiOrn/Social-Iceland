import Link from "next/link";
import Image from "next/image";
import { tourCategories } from "@/lib/tours";
import CategoryCard from "@/components/CategoryCard";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <PageHero
        tall
        image="/images/hero-glacier-lagoon.jpg"
        imageAlt="Icebergs floating in Jökulsárlón glacier lagoon, Iceland"
        eyebrow="Iceland tours, sorted for you"
        title="Find the right Iceland tour, without the 40 open tabs."
        subtitle="We organize every tour by what you actually want to do — glaciers, waterfalls, food, the Blue Lagoon, the aurora — with price, duration, and rating up front."
        actions={
          <>
            <Link href="/tours" className="btn btn-primary">Browse all tours</Link>
            <Link href="/guides" className="btn btn-outline">Read the trip guides</Link>
          </>
        }
      />

      <section className={styles.featureRow}>
        <div className={`wrap ${styles.featureGrid}`}>
          <div>
            <h3 className={styles.featureTitle}>Transparent pricing</h3>
            <p className={styles.featureText}>See price, duration, and rating before you ever click through.</p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>Organized by activity</h3>
            <p className={styles.featureText}>Golden Circle, glaciers, food, the lagoon, the lights — not one long list.</p>
          </div>
          <div>
            <h3 className={styles.featureTitle}>Book directly</h3>
            <p className={styles.featureText}>Every tour books through Viator, at the same price you&apos;d pay going direct.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2>Featured tour categories</h2>
            <p className={styles.sectionSubtitle}>Jump straight to the kind of day you want to have.</p>
          </div>
          <div className={styles.categoryGrid}>
            {tourCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <Image
          src="/images/testimonial-hiker.jpg"
          alt="A traveler crossing a river below Kirkjufellsfoss waterfall, Iceland"
          fill
          sizes="100vw"
          className={styles.testimonialImage}
        />
        <div className={styles.testimonialOverlay} />
        <div className={`wrap ${styles.testimonialContent}`}>
          <p className={styles.testimonialQuote}>
            &ldquo;Having the price and duration right there next to the tour, instead of ten browser
            tabs, is what actually got me to book.&rdquo;
          </p>
          <div className={styles.testimonialAttribution}>
            <span className={styles.testimonialName}>Example Reviewer</span>
            <span className={styles.testimonialTour}>Golden Circle Classic Day Tour</span>
          </div>
        </div>
      </section>

      <section className={styles.leadBanner}>
        <div className={`wrap ${styles.leadInner}`}>
          <div>
            <span className="eyebrow eyebrow-light">Free download</span>
            <h2 className={styles.leadTitle}>Get our Free 7-Day Iceland Itinerary</h2>
            <p className={styles.leadSubtitle}>
              A day-by-day PDF covering the Golden Circle, the South Coast, glacier hikes, the
              Blue Lagoon, and the northern lights — delivered straight to your inbox.
            </p>
          </div>
          <EmailCaptureForm
            source="homepage-lead-magnet"
            buttonLabel="Send me the guide"
            buttonVariant="secondary"
          />
        </div>
      </section>
    </>
  );
}
