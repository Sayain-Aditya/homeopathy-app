import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";

const cards = [
  {
    number: "01",
    title: "Asthma",
    description: "Effective homoeopathic management of chronic asthma, breathlessness, and respiratory distress.",
  },
  {
    number: "02",
    title: "Allergies",
    description: "Natural relief from seasonal, food, and skin allergies without side effects.",
  },
  {
    number: "03",
    title: "Thyroid",
    description: "Holistic treatment for hypothyroidism, hyperthyroidism, and thyroid nodules.",
  },
  {
    number: "04",
    title: "Skin Diseases",
    description: "Personalized care for eczema, psoriasis, acne, urticaria, and chronic skin conditions.",
  },
  {
    number: "05",
    title: "Hypertension",
    description: "Gentle, side-effect-free remedies to manage high blood pressure and cardiovascular health.",
  },
  {
    number: "06",
    title: "Joint Pains",
    description: "Deep-acting remedies for arthritis, rheumatism, and chronic joint inflammation.",
  },
  {
    number: "07",
    title: "Epilepsy",
    description: "Constitutional homoeopathic treatment to reduce seizure frequency and improve quality of life.",
  },
  {
    number: "08",
    title: "Kidney Stone",
    description: "Natural dissolution and prevention of kidney stones with targeted homoeopathic remedies.",
  },
  {
    number: "09",
    title: "PCOD / Fibroid",
    description: "Hormonal balance and natural management of PCOD, fibroids, and ovarian cysts.",
  },
  {
    number: "10",
    title: "Piles",
    description: "Non-surgical, painless homoeopathic treatment for haemorrhoids and anal fissures.",
  },
  {
    number: "11",
    title: "Bed Wetting",
    description: "Safe and effective treatment for nocturnal enuresis in children and adults.",
  },
  {
    number: "12",
    title: "Diabetes",
    description: "Supportive homoeopathic care to manage blood sugar levels and diabetic complications.",
  },
  {
    number: "13",
    title: "Depression",
    description: "Gentle mind-body remedies for depression, anxiety, stress, and emotional imbalances.",
  },
  {
    number: "14",
    title: "Hair Loss",
    description: "Constitutional treatment for alopecia, thinning hair, and scalp conditions.",
  },
];

export default function FloatingCards() {
  return (
    <section className="py-8">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            badge="OUR TREATMENTS"
            title="Conditions We Treat"
            description="Dr. Asmita Shekhar specializes in chronic diseases with personalized homoeopathic care for every patient."
          />
          <button className="hidden rounded-full border border-[#A9C4B5] px-8 py-4 text-sm font-medium text-[#21493F] transition hover:bg-[#21493F] hover:text-white lg:block">
            View All
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((item, index) => (
            <div key={item.number} className={index % 2 ? "xl:translate-y-12" : ""}>
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
