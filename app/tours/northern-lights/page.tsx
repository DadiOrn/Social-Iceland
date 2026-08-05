import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "Northern Lights Tours",
  description:
    "Evening minibus and photography tours chasing the aurora away from Reykjavik's light pollution. Compare price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="northern-lights" />;
}
