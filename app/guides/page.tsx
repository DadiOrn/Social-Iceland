import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import PageHero from "@/components/PageHero";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  title: "Iceland Trip Planning Guides",
  description:
    "Practical, factual logistics guides for planning an Iceland trip: airport transfers, renting a car vs. tours, and when to see the northern lights.",
};

export default function GuidesIndexPage() {
  return (
    <>
      <PageHero
        image="/images/hero-ring-road.jpg"
        imageAlt="Aerial view of Iceland's ring road winding along a fjord"
        eyebrow="Trip planning"
        title="Guides"
        subtitle="Practical logistics, not personal travel stories: the stuff you need to plan before you land."
      />
      <div className="section">
        <div className="wrap">
          <div className={styles.grid}>
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className={`card ${styles.card}`}>
                <span className={styles.icon}>{guide.icon}</span>
                <h2 className={styles.title}>{guide.title}</h2>
                <p className={styles.description}>{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
