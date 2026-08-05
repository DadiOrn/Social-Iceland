import type { Metadata } from "next";
import CategoryTours from "@/components/CategoryTours";

export const metadata: Metadata = {
  title: "Golden Circle Tours",
  description:
    "Compare Golden Circle day tours from Reykjavik: Thingvellir, Geysir, and Gullfoss, with price, duration, and rating.",
};

export default function Page() {
  return <CategoryTours slug="golden-circle" />;
}
