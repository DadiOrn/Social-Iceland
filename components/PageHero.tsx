import Image from "next/image";
import { ReactNode } from "react";
import Header from "@/components/Header";
import styles from "./PageHero.module.css";

export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  actions,
  tall = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className={tall ? styles.heroTall : styles.heroShort}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <Header />
      <div className={`wrap ${styles.content}`}>
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </section>
  );
}
