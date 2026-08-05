import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "../guides.module.css";

export const metadata: Metadata = {
  title: "Best Time to See the Northern Lights in Iceland",
  description:
    "Season, weather, and light-pollution factors that actually affect your odds of seeing the aurora in Iceland.",
};

export default function Page() {
  return (
    <>
      <PageHero
        image="/images/category-northern-lights.jpg"
        imageAlt="Green aurora borealis over a snow-covered mountain in Iceland"
        eyebrow="Trip planning"
        title="Best Time to See the Northern Lights in Iceland"
      />
      <div className="section">
      <div className="wrap">
        <p className={styles.breadcrumb}>
          <Link href="/guides">Guides</Link> / Best Time to See the Northern Lights
        </p>

        <div className={styles.article}>
          <p>
            Seeing the aurora is a mix of three things lining up: dark enough skies, clear
            enough weather, and enough solar activity. You can plan around the first one
            completely and the second one partially — the third is out of anyone&apos;s control.
          </p>

          <h2>Season</h2>
          <p>
            The aurora is present year-round, but it&apos;s only visible when the sky is dark
            enough — which rules out Icelandic summer almost entirely, since late May through
            July has near-continuous daylight. The realistic viewing season runs roughly
            late August through mid-April, with the longest, darkest nights (and therefore
            the most viewing hours per night) in December and January.
          </p>

          <h2>Weather</h2>
          <p>
            Clear skies matter more than most people expect — a strong aurora is invisible
            behind cloud cover. Iceland&apos;s weather is genuinely unpredictable and changes
            fast, so checking a short-range cloud-cover forecast the same evening is far more
            useful than picking a date months out based on general seasonal odds.
          </p>

          <h2>Getting away from light pollution</h2>
          <p>
            Reykjavik&apos;s city lights wash out all but the brightest displays. This is the
            main reason organized{" "}
            <Link href="/tours/northern-lights">northern lights tours</Link> exist: a minibus
            or small group can drive 30&ndash;60 minutes out to a dark, open area with a wide
            horizon, which dramatically improves visibility compared to viewing from
            downtown.
          </p>

          <h2>Practical tips</h2>
          <ul>
            <li>Give yourself multiple nights if the aurora is a priority — no single night is guaranteed, regardless of season.</li>
            <li>Many tour operators offer a free reschedule if clouds or low activity ruin a given night — worth confirming before booking.</li>
            <li>Bring a way to check activity levels for your own peace of mind, but treat clear skies as the deciding factor over any single number.</li>
            <li>Dress for standing outside in winter temperatures for 20&ndash;40 minutes at a time; the wind chill matters more than the air temperature.</li>
          </ul>

          <div className={styles.callout}>
            Bottom line: pick a dark-season month, book a tour or self-drive to an area away
            from city lights, and stay flexible on which night — flexibility does more for
            your odds than any single date choice.
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
