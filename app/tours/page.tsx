import type { Metadata } from "next";
import { tourCategories } from "@/lib/tours";
import CategoryCard from "@/components/CategoryCard";
import PageHero from "@/components/PageHero";
import styles from "./tours.module.css";

export const metadata: Metadata = {
  title: "Iceland Tours by Category",
  description:
    "Browse Iceland tours organized by category: Golden Circle, glacier hikes, Reykjavik day tours, the Blue Lagoon, south coast, and northern lights.",
};

export default function ToursIndexPage() {
  return (
    <>
      <PageHero
        image="/images/hero-ring-road.jpg"
        imageAlt="Aerial view of Iceland's ring road winding along a fjord"
        eyebrow="All tours"
        title="Browse Iceland tours by category"
      />
      <div className="section">
        <div className="wrap">
          <p className={styles.intro}>
            Pick a category below to see tours with price, duration, and rating side by side.
          </p>
          <div className={styles.grid}>
            {tourCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
