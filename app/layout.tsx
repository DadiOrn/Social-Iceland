import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BRAND_NAME, BRAND_TAGLINE, SITE_URL } from "@/lib/config";
import Footer from "@/components/Footer";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Iceland tours organized by what you want to do: Golden Circle, glacier hikes, Reykjavik food tours, the Blue Lagoon, and northern lights trips, with prices, duration, and ratings up front.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <LeadMagnetPopup />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
