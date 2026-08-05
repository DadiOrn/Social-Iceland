import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "Glacier Hikes & Ice Caves",
  description:
    "Guided glacier walks and ice cave tours in Iceland with certified guides and gear included. Compare price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="glacier-hikes" />;
}
