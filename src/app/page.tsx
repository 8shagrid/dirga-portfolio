import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedAnalytics from "@/components/FeaturedAnalytics";
import AnalyticsEngineering from "@/components/AnalyticsEngineering";
import LatestInsights from "@/components/LatestInsights";
import FeaturedProducts from "@/components/FeaturedProducts";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedAnalytics />
        <AnalyticsEngineering />
        <FeaturedProducts />
        <LatestInsights />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
