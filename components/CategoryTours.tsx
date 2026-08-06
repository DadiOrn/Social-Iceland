import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/lib/tours";
import { searchToursByTerm } from "@/lib/viator";
import TourCard from "@/components/TourCard";
import PageHero from "@/components/PageHero";
import styles from "@/app/tours/tours.module.css";

export default async function CategoryTours({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) notFound();

  const tours = await searchToursByTerm(category.viatorSearchTerm);

  return (
    <>
      <PageHero
        image={category.image}
        imageAlt={category.title}
        eyebrow={`${category.icon} ${category.shortTitle}`}
        title={category.title}
        subtitle={category.description}
      />
      <div className="section">
        <div className="wrap">
          <p className={styles.breadcrumb}>
            <Link href="/tours">All tours</Link> / {category.shortTitle}
          </p>

          {tours.length > 0 ? (
            <div className={styles.tourGrid}>
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <p className={styles.breadcrumb}>
              We couldn&apos;t load live tours for this category right now. Please check back shortly.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
