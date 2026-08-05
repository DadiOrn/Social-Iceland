import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "../guides.module.css";

export const metadata: Metadata = {
  title: "Keflavik Airport to Reykjavik: Every Way to Get There",
  description:
    "Flybus, rental car, taxi, or private transfer from Keflavik International Airport to Reykjavik — timing, cost range, and which one fits your trip.",
};

export default function Page() {
  return (
    <>
      <PageHero
        image="/images/hero-ring-road.jpg"
        imageAlt="Aerial view of Iceland's ring road winding along a fjord"
        eyebrow="Trip planning"
        title="Keflavik Airport to Reykjavik: Every Way to Get There"
      />
      <div className="section">
      <div className="wrap">
        <p className={styles.breadcrumb}>
          <Link href="/guides">Guides</Link> / Keflavik Airport to Reykjavik
        </p>

        <div className={styles.article}>
          <p>
            Keflavik International Airport (KEF) sits about 50 km (30 miles) southwest of
            Reykjavik — roughly a 45-minute drive on a good road with no traffic. There is no
            train link in Iceland, so every option below is either a bus, a shared/private
            transfer, or a rental car.
          </p>

          <h2>Airport shuttle bus</h2>
          <p>
            The scheduled coach shuttle (operated by companies such as Flybus and Airport
            Direct) is the default choice for most visitors without a rental car. Buses meet
            every arriving flight and run on a fixed schedule the rest of the day, dropping
            off at Reykjavik&apos;s main bus terminal (BSI) or, for a higher-tier ticket, directly
            at your hotel. The ride takes about 45 minutes to BSI, plus 20&ndash;40 minutes more
            if your ticket includes hotel drop-off on a shared route.
          </p>
          <ul>
            <li>Tickets are typically sold as a base fare (BSI drop-off) or a hotel-transfer add-on.</li>
            <li>Buy in advance online — it&apos;s usually cheaper than buying at the airport counter.</li>
            <li>Luggage is stowed underneath; no need to book a separate bag allowance for standard suitcases.</li>
          </ul>

          <h2>Private transfer</h2>
          <p>
            A private car or van picks you up at arrivals and takes you straight to your
            address, no shared stops. It costs more than the shuttle bus but is worth it for
            late-night arrivals, large groups, or if you&apos;d rather not wait for a shared bus to
            fill up.
          </p>

          <h2>Taxi</h2>
          <p>
            Taxis are available at the arrivals hall but are the most expensive option by a
            wide margin for a solo or two-person trip. They make more sense if you&apos;re
            splitting the fare three or four ways and want to skip any scheduling.
          </p>

          <h2>Rental car</h2>
          <p>
            Rental desks are inside and just outside the terminal. Picking up a car at the
            airport means you skip Reykjavik transit entirely and drive straight to your
            accommodation — see our guide on{" "}
            <Link href="/guides/renting-a-car-vs-taking-tours">renting a car vs. taking tours</Link>{" "}
            for whether that&apos;s the right call for your trip.
          </p>

          <h2>Comparison at a glance</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Option</th>
                <th>Time to Reykjavik</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shuttle bus</td>
                <td>~45&ndash;80 min</td>
                <td>Most visitors, budget-conscious</td>
              </tr>
              <tr>
                <td>Private transfer</td>
                <td>~45 min</td>
                <td>Late arrivals, groups, direct door-to-door</td>
              </tr>
              <tr>
                <td>Taxi</td>
                <td>~45 min</td>
                <td>Splitting cost 3&ndash;4 ways, no advance booking</td>
              </tr>
              <tr>
                <td>Rental car</td>
                <td>~45 min</td>
                <td>Self-driving the rest of the trip anyway</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.callout}>
            Fares and schedules change seasonally — always check current times and prices
            directly with the operator before you fly, especially for late-night or early-morning
            flights when shuttle frequency drops.
          </div>

          <p>
            Ready to book the rest of your trip? See our{" "}
            <Link href="/tours/blue-lagoon">Blue Lagoon tours</Link> — several combine airport
            transfer with a stop at the lagoon so you&apos;re not backtracking.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
