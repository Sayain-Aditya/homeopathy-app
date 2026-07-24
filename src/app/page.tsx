import Hero from "@/components/hero/Hero";
import WhyChoose from "@/components/homepage/WhyChoose";
import ConditionsWeTreat from "@/components/homepage/ConditionsWeTreat";
import HowItWorks from "@/components/homepage/HowItWorks";
import Dashboard from "@/components/homepage/Dashboard";
import FAQ from "@/components/homepage/FAQ";
import FinalCTA from "@/components/homepage/FinalCTA";
import Footer from "@/components/homepage/Footer";
import { pageMetadata, clinicJsonLd, safeJsonLd } from "@/lib/seo";

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you provide homeopathy in Lucknow?", acceptedAnswer: { "@type": "Answer", text: "Yes. Naivedya Advanced Homoeopathy Centre offers in-clinic and online homeopathy in Lucknow with Dr. Asmita Shekhar." } },
    { "@type": "Question", name: "Why choose Naivedya for best homoeopathy in Lucknow?", acceptedAnswer: { "@type": "Answer", text: "Patients choose Naivedya for best homoeopathy in Lucknow through personalized case-taking, chronic disease experience, safe remedies, and regular follow-up care." } },
    { "@type": "Question", name: "Is homeopathy safe?", acceptedAnswer: { "@type": "Answer", text: "Yes. Homeopathic medicines are gentle, non-invasive, and generally considered safe when prescribed by a qualified practitioner." } },
    { "@type": "Question", name: "How long does treatment take?", acceptedAnswer: { "@type": "Answer", text: "The duration depends on the condition, its severity, and individual response. Acute conditions may improve quickly, while chronic illnesses often require longer-term care." } },
    { "@type": "Question", name: "Can children take homeopathic medicines?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Homeopathy is widely used for infants and children because of its gentle nature." } },
    { "@type": "Question", name: "Do homeopathic medicines have side effects?", acceptedAnswer: { "@type": "Answer", text: "When taken under professional guidance, homeopathic medicines are generally well tolerated with minimal to no side effects." } },
  ],
};

export const metadata = pageMetadata({
  title: "Homeopathy in Lucknow | Best Homoeopathy in Lucknow",
  description:
    "Searching for homeopathy in Lucknow or the best homoeopathy in Lucknow? Visit Naivedya Advanced Homeopathy Centre, Avas Vikas Colony, Mall Avenue, Lucknow.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(clinicJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(homepageFaqJsonLd) }} />
      <main className="overflow-x-hidden">
      <Hero />
      <WhyChoose />
      <ConditionsWeTreat />
      <HowItWorks />
      <Dashboard />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
    </>
  );
}
