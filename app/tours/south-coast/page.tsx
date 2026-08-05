import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "South Coast Tours",
  description:
    "Black sand beaches, waterfalls, and the glacier lagoon along Iceland's south coast. Compare price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="south-coast" />;
}
