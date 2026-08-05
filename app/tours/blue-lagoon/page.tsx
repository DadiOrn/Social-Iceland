import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "Blue Lagoon Tours",
  description:
    "Blue Lagoon entry and transfer packages, including airport combos. Compare price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="blue-lagoon" />;
}
