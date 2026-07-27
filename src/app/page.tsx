import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedAnalytics from "@/components/FeaturedAnalytics";
import LatestInsights from "@/components/LatestInsights";
import FeaturedProducts from "@/components/FeaturedProducts";
import TechProjects from "@/components/TechProjects";
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
        <LatestInsights />
        <TechProjects />
        <FeaturedProducts />
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
