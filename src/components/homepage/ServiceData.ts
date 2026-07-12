import { HeartPulse, Flower2, Stethoscope, Brain, Baby, Smile, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  accent: string;
  bg: string;
  tagline: string;
  overview: string;
  conditions: string[];
  howItHelps: { title: string; body: string }[];
  whatToExpect: string[];
}

export const services: Service[] = [
  {
    slug: "chronic-conditions",
    title: "Chronic Conditions",
    icon: HeartPulse,
    desc: "Chronic colds, asthma, arthritis, sinusitis and more.",
    accent: "#E11D48",
    bg: "#FFF1F2",
    tagline: "Long-term relief without long-term side effects.",
    overview:
      "Chronic conditions are recurring or persistent health problems that conventional medicine often manages with lifelong medication. Homeopathy takes a different approach — it identifies the root cause of your condition and stimulates your body's own healing response, reducing dependency on suppressive drugs over time.",
    conditions: [
      "Asthma & Allergic Bronchitis",
      "Rheumatoid & Osteo Arthritis",
      "Chronic Sinusitis",
      "Hypertension",
      "Diabetes (supportive care)",
      "Thyroid Disorders",
      "Migraine & Chronic Headaches",
      "Epilepsy (supportive care)",
      "Joint & Muscle Pain",
    ],
    howItHelps: [
      {
        title: "Root Cause Treatment",
        body: "Instead of suppressing symptoms, we identify the underlying imbalance — physical, emotional, or genetic — and treat it at the source.",
      },
      {
        title: "Individualized Remedies",
        body: "Two patients with the same diagnosis may receive different remedies based on their unique symptom pattern, lifestyle, and constitution.",
      },
      {
        title: "Reduces Recurrence",
        body: "By strengthening the immune system and vital force, homeopathy significantly reduces the frequency and severity of recurring episodes.",
      },
    ],
    whatToExpect: [
      "Initial detailed case-taking session (45–60 min)",
      "Customized remedy prescribed based on your full health picture",
      "Follow-up every 3–4 weeks to track progress",
      "Gradual reduction in conventional medication (under doctor guidance)",
      "Long-term wellness with minimal side effects",
    ],
  },
  {
    slug: "skin-allergies",
    title: "Skin & Allergies",
    icon: Flower2,
    desc: "Acne, eczema, psoriasis, fungal infections and allergies.",
    accent: "#EC4899",
    bg: "#FDF2F8",
    tagline: "Heal your skin from the inside out.",
    overview:
      "Skin conditions are often a reflection of internal imbalances — hormonal, digestive, or immune. Homeopathy treats skin disorders constitutionally, addressing the internal cause rather than just applying topical solutions, leading to lasting clear skin.",
    conditions: [
      "Acne & Hormonal Breakouts",
      "Eczema & Atopic Dermatitis",
      "Psoriasis",
      "Urticaria (Hives)",
      "Vitiligo",
      "Fungal Infections",
      "Allergic Rhinitis & Hay Fever",
      "Food & Environmental Allergies",
      "Alopecia (Hair Loss)",
    ],
    howItHelps: [
      {
        title: "Internal Healing",
        body: "Skin is a mirror of internal health. We treat the gut, hormones, and immune system — the real drivers of most skin conditions.",
      },
      {
        title: "No Steroid Dependency",
        body: "Unlike topical steroids that suppress and cause rebound flares, homeopathic remedies gently resolve the condition without side effects.",
      },
      {
        title: "Allergy Desensitization",
        body: "Homeopathy helps recalibrate the immune system's overreaction to allergens, reducing sensitivity over time.",
      },
    ],
    whatToExpect: [
      "Thorough skin and allergy history assessment",
      "Constitutional remedy selected for your skin type and triggers",
      "Dietary and lifestyle guidance alongside treatment",
      "Visible improvement typically within 4–8 weeks",
      "Sustained remission with periodic follow-ups",
    ],
  },
  {
    slug: "digestive-health",
    title: "Digestive Health",
    icon: Stethoscope,
    desc: "Acidity, IBS, constipation and digestive disorders.",
    accent: "#16A34A",
    bg: "#F0FDF4",
    tagline: "A healthy gut is the foundation of overall wellness.",
    overview:
      "Digestive disorders affect millions and are often linked to stress, diet, and lifestyle. Homeopathy offers effective, gentle treatment for both acute and chronic digestive complaints without the side effects of antacids or laxatives.",
    conditions: [
      "Acidity & GERD",
      "Irritable Bowel Syndrome (IBS)",
      "Chronic Constipation",
      "Gastritis & Ulcers",
      "Bloating & Flatulence",
      "Crohn's Disease (supportive)",
      "Ulcerative Colitis (supportive)",
      "Liver & Gallbladder Issues",
      "Nausea & Vomiting",
    ],
    howItHelps: [
      {
        title: "Stress-Gut Connection",
        body: "Many digestive issues are psychosomatic. Homeopathy addresses both the mental and physical aspects, treating the whole person.",
      },
      {
        title: "Restores Natural Function",
        body: "Rather than artificially stimulating or suppressing digestion, remedies help restore the gut's natural rhythm and balance.",
      },
      {
        title: "Safe Long-Term Use",
        body: "Unlike PPIs or laxatives, homeopathic remedies can be used long-term without causing dependency or nutritional deficiencies.",
      },
    ],
    whatToExpect: [
      "Detailed dietary and symptom history",
      "Remedy matched to your specific digestive pattern",
      "Nutritional and lifestyle recommendations",
      "Noticeable relief within 2–4 weeks for most cases",
      "Gradual restoration of healthy digestive function",
    ],
  },
  {
    slug: "mental-wellness",
    title: "Mental Wellness",
    icon: Brain,
    desc: "Stress, anxiety, depression and insomnia.",
    accent: "#6366F1",
    bg: "#EEF0FF",
    tagline: "Calm the mind. Restore the balance.",
    overview:
      "Mental health conditions are deeply personal and complex. Homeopathy offers a compassionate, individualized approach — treating not just the diagnosis but the person behind it, including their fears, grief, temperament, and life experiences.",
    conditions: [
      "Anxiety & Panic Attacks",
      "Depression & Low Mood",
      "Chronic Stress & Burnout",
      "Insomnia & Sleep Disorders",
      "OCD (Obsessive Compulsive Disorder)",
      "Grief & Emotional Trauma",
      "Anger & Mood Swings",
      "ADHD (supportive care)",
      "Phobias & Fear States",
    ],
    howItHelps: [
      {
        title: "Treats the Whole Person",
        body: "Homeopathy considers your emotional history, personality, and triggers — not just your symptoms — to find the most fitting remedy.",
      },
      {
        title: "No Sedation or Dependency",
        body: "Unlike psychiatric medications, homeopathic remedies do not sedate, cause withdrawal, or blunt emotions — they gently restore balance.",
      },
      {
        title: "Complements Therapy",
        body: "Homeopathy works beautifully alongside counseling or psychotherapy, enhancing emotional resilience and recovery speed.",
      },
    ],
    whatToExpect: [
      "In-depth, confidential consultation about your mental and emotional state",
      "Remedy chosen based on your unique emotional and physical picture",
      "Gradual improvement in mood, sleep, and stress response",
      "Sessions every 4–6 weeks with ongoing support",
      "Safe for long-term use with no side effects",
    ],
  },
  {
    slug: "pediatric-care",
    title: "Pediatric Care",
    icon: Baby,
    desc: "Safe remedies for babies and growing children.",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    tagline: "Gentle healing for your little ones.",
    overview:
      "Children respond beautifully to homeopathy because their vital force is strong and reactive. Homeopathic remedies are completely safe — no chemicals, no side effects — making them ideal for infants, toddlers, and growing children.",
    conditions: [
      "Frequent Colds & Ear Infections",
      "Childhood Asthma & Allergies",
      "Weak Immunity & Recurrent Infections",
      "Bedwetting (Enuresis)",
      "Teething Troubles",
      "Colic & Digestive Issues in Infants",
      "Behavioral Issues & ADHD",
      "Skin Conditions (Eczema, Rashes)",
      "Growth & Developmental Support",
    ],
    howItHelps: [
      {
        title: "100% Safe for Infants",
        body: "Homeopathic remedies contain no chemicals or toxins, making them completely safe even for newborns and breastfeeding mothers.",
      },
      {
        title: "Builds Immunity Naturally",
        body: "Rather than suppressing childhood illnesses, homeopathy helps children build robust, lasting immunity through natural healing.",
      },
      {
        title: "Reduces Antibiotic Dependency",
        body: "Many childhood infections respond well to homeopathy, reducing the need for repeated antibiotic courses that disrupt gut health.",
      },
    ],
    whatToExpect: [
      "Child-friendly, gentle consultation process",
      "Remedies in easy-to-give liquid or sweet pill form",
      "Parent guidance on diet, sleep, and immunity",
      "Quick response — children often improve within days",
      "Regular monitoring of growth and development",
    ],
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    icon: Smile,
    desc: "PCOS, menopause, hormonal imbalance and fertility.",
    accent: "#0EA5E9",
    bg: "#F0F9FF",
    tagline: "Hormonal harmony at every stage of life.",
    overview:
      "Women's health is deeply connected to hormonal balance, emotional wellbeing, and life transitions. Homeopathy offers safe, effective support through every phase — from adolescence and reproductive years to pregnancy and menopause.",
    conditions: [
      "PCOS / PCOD",
      "Irregular & Painful Periods",
      "PMS & Mood Changes",
      "Menopause & Hot Flashes",
      "Hormonal Imbalance",
      "Fertility Support",
      "Leucorrhoea & Vaginal Infections",
      "Fibroids & Ovarian Cysts (supportive)",
      "Postpartum Depression & Recovery",
    ],
    howItHelps: [
      {
        title: "Hormone Regulation",
        body: "Homeopathy gently stimulates the endocrine system to restore natural hormonal balance without synthetic hormones or their side effects.",
      },
      {
        title: "Safe During Pregnancy",
        body: "Many remedies are safe to use during pregnancy and breastfeeding, offering relief from nausea, anxiety, and postpartum issues.",
      },
      {
        title: "Emotional Support",
        body: "Hormonal changes deeply affect mood and emotions. Homeopathy addresses both the physical and emotional dimensions of women's health.",
      },
    ],
    whatToExpect: [
      "Comprehensive hormonal and menstrual history assessment",
      "Remedy tailored to your cycle, symptoms, and constitution",
      "Nutritional and lifestyle support for hormonal health",
      "Improvement in cycle regularity within 2–3 months",
      "Long-term hormonal balance and reproductive wellness",
    ],
  },
];
