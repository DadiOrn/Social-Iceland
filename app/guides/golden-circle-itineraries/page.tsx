import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "../guides.module.css";

export const metadata: Metadata = {
  title: "Top 3 Golden Circle Itineraries",
  description:
    "Three ready-made Golden Circle day plans for Iceland — timing, stops, and what to skip if you're short on daylight.",
};

export default function Page() {
  return (
    <>
      <PageHero
        image="/images/category-golden-circle.jpg"
        imageAlt="Strokkur geyser erupting in the Geysir geothermal area, Iceland"
        eyebrow="Trip planning"
        title="Top 3 Golden Circle Itineraries"
        subtitle="Three ready-made day plans for the same route — pick the one that matches how much time and daylight you actually have."
      />
      <div className="section">
        <div className="wrap">
          <p className={styles.breadcrumb}>
            <Link href="/guides">Guides</Link> / Golden Circle Itineraries
          </p>

          <div className={styles.article}>
            <p>
              Every Golden Circle route covers the same three anchor stops — Þingvellir
              National Park, the Geysir geothermal area, and Gullfoss waterfall — in a loop
              east from Reykjavik. What changes between a rushed trip and a great one is how
              much time you give each stop, and whether you add anything to the basic loop.
              Here are three versions built around how much time you actually have.
            </p>

            <h2>1. The Essentials — 6 hours</h2>
            <p>
              For short daylight (winter visits) or when the Golden Circle is squeezed
              between other plans. Covers the three core stops only, with just enough time
              at each to see the highlight without rushing.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Time there</th>
                  <th>Don&apos;t miss</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Þingvellir National Park</td>
                  <td>45 min</td>
                  <td>Almannagjá gorge — the rift walk between the North American and Eurasian tectonic plates</td>
                </tr>
                <tr>
                  <td>Geysir geothermal area</td>
                  <td>30 min</td>
                  <td>Strokkur, which erupts every 5–10 minutes — worth waiting for two eruptions</td>
                </tr>
                <tr>
                  <td>Gullfoss waterfall</td>
                  <td>30 min</td>
                  <td>The upper viewing platform for the full two-tier drop</td>
                </tr>
              </tbody>
            </table>
            <p>
              Driving time between stops adds roughly 2 hours on top of the above, plus the
              return leg to Reykjavik (about 1.5 hours from Gullfoss). If you&apos;re on a
              guided tour instead of self-driving, this is close to what a standard
              &ldquo;Golden Circle Classic&rdquo; day tour covers.
            </p>

            <h2>2. The Classic Day — 8 hours</h2>
            <p>
              The most common version, and the one most full-day tours are built around.
              Same three core stops with more breathing room, plus one extra: Kerið, a
              volcanic crater lake with red-toned slopes, right off the main route between
              Þingvellir and Geysir.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Time there</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Þingvellir National Park</td>
                  <td>1 hour</td>
                  <td>Enough time to walk further along the rift, not just the main viewpoint</td>
                </tr>
                <tr>
                  <td>Kerið crater</td>
                  <td>30 min</td>
                  <td>Small entrance fee; a short walk around the rim</td>
                </tr>
                <tr>
                  <td>Geysir geothermal area</td>
                  <td>45 min</td>
                  <td>Time for a coffee stop — there&apos;s a cafe at the visitor center</td>
                </tr>
                <tr>
                  <td>Gullfoss waterfall</td>
                  <td>45 min</td>
                  <td>Walk down to the lower path if conditions allow — a much closer view</td>
                </tr>
              </tbody>
            </table>
            <p>
              This is the itinerary to pick if it&apos;s your only full day near Reykjavik and
              you want the complete experience without an extremely long day.
            </p>

            <h2>3. The Extended Circle — 10–12 hours</h2>
            <p>
              For long summer daylight, or when you&apos;d rather dedicate a full day to this
              route and see everything nearby. Adds Faxi — a smaller, much less crowded
              waterfall a short detour from Gullfoss — and either Friðheimar (a working
              tomato greenhouse with a lunch restaurant inside it) or the Secret Lagoon in
              Flúðir, Iceland&apos;s oldest swimming pool, geothermally heated.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Time there</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Þingvellir National Park</td>
                  <td>1 hour</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Kerið crater</td>
                  <td>30 min</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Friðheimar or Secret Lagoon</td>
                  <td>1–1.5 hours</td>
                  <td>Friðheimar for lunch, Secret Lagoon if you&apos;d rather swim than eat</td>
                </tr>
                <tr>
                  <td>Geysir geothermal area</td>
                  <td>45 min</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Gullfoss waterfall</td>
                  <td>1 hour</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Faxi waterfall</td>
                  <td>20 min</td>
                  <td>Usually near-empty compared to the main stops</td>
                </tr>
              </tbody>
            </table>
            <p>
              This version only makes sense with a rental car — a fixed-schedule bus tour
              won&apos;t have room for the detours. See our guide on{" "}
              <Link href="/guides/renting-a-car-vs-taking-tours">renting a car vs. taking tours</Link>{" "}
              if you&apos;re deciding between the two.
            </p>

            <div className={styles.callout}>
              Whichever version you pick, start early. All three routes get significantly
              busier from mid-morning once tour buses from Reykjavik arrive — Þingvellir and
              Gullfoss especially. Leaving by 8am puts you ahead of most of the day&apos;s
              traffic at the first two stops.
            </div>

            <p>
              Ready to book? See our <Link href="/tours/golden-circle">Golden Circle tours</Link>{" "}
              — every listing shows price, duration, and rating up front so you can compare
              which version of the route each one actually covers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
