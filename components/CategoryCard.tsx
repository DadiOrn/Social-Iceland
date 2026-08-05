import Link from "next/link";
import Image from "next/image";
import { TourCategory } from "@/lib/tours";
import styles from "./CategoryCard.module.css";

export default function CategoryCard({ category }: { category: TourCategory }) {
  return (
    <Link href={`/tours/${category.slug}`} className={styles.tile}>
      <Image
        src={category.image}
        alt={category.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.label}>
        <span className={styles.title}>{category.shortTitle}</span>
        <span className={styles.cta}>View tours →</span>
      </div>
    </Link>
  );
}
