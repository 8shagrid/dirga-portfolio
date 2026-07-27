import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import InsightsIndexContent from "@/components/InsightsIndexContent";

export const metadata: Metadata = {
  title: "Data Analytics Insights | Dirga Halim Susilo",
  description:
    "Practical articles about data analysis, KPI design, dashboards, and turning business questions into useful insights.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <InsightsIndexContent />
      <Footer />
      <BackToTop />
    </>
  );
}
