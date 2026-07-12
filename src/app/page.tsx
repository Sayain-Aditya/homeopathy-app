import Hero from "@/components/hero/Hero";
import WhyChoose from "@/components/homepage/WhyChoose";
import ConditionsWeTreat from "@/components/homepage/ConditionsWeTreat";
import HowItWorks from "@/components/homepage/HowItWorks";
import Dashboard from "@/components/homepage/Dashboard";
import Testimonials from "@/components/homepage/Testimonials";
import FAQ from "@/components/homepage/FAQ";
import FinalCTA from "@/components/homepage/FinalCTA";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhyChoose />
      <ConditionsWeTreat />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
