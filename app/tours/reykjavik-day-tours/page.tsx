import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "Reykjavik Day Tours & Food Tours",
  description:
    "Walking tours, food crawls, and half-day trips in Reykjavik. No car needed. Compare price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="reykjavik-day-tours" />;
}
