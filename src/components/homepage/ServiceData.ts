import { Brain, Heart, User, Sparkles, Wind, Salad, LucideIcon } from "lucide-react";

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
    slug: "neuro-child-development",
    title: "Neuro & Child Development",
    icon: Brain,
    desc: "Specialised homeopathic care for children with developmental & neurological conditions.",
    accent: "#8B5CF6",
    bg: "#F5F3FF",
    tagline: "Specialised care for every child's unique journey.",
    overview:
      "We provide specialised homeopathic care for children with developmental and neurological conditions. Our constitutional approach supports cognitive growth, behavioural regulation, and overall neurological health in a safe, gentle way.",
    conditions: [
      "Intellectual Disability",
      "Cerebral Palsy",
      "Developmental Delay",
      "Congenital Blindness",
      "Hearing & Speech Impairment",
      "Autism Spectrum Disorder",
      "ADHD",
      "Down Syndrome",
    ],
    howItHelps: [
      {
        title: "Stimulates Neurological Development",
        body: "Constitutional remedies support brain and nervous system health, improving cognitive capacity and motor function over time.",
      },
      {
        title: "Behavioural & Emotional Regulation",
        body: "Homeopathy addresses behavioural challenges, reducing outbursts and improving social interaction and emotional resilience.",
      },
      {
        title: "Supports Overall Vitality",
        body: "By improving general health and immunity, children become healthier and more receptive to learning and therapy.",
      },
    ],
    whatToExpect: [
      "In-depth case history including developmental milestones",
      "Remedy selected for the individual child's complete profile",
      "Gradual improvement in behaviour and cognitive function",
      "Monthly monitoring and remedy adjustments",
      "Guidance and education for caregivers and families",
    ],
  },
  {
    slug: "mental-wellness",
    title: "Mental Wellness",
    icon: Heart,
    desc: "Holistic homeopathic support for stress, anxiety, depression & sleep.",
    accent: "#EC4899",
    bg: "#FDF2F8",
    tagline: "Restoring calm, clarity, and emotional balance.",
    overview:
      "Mental health challenges like stress, anxiety, and depression affect millions. Homeopathy offers a gentle, side-effect-free approach that addresses the root emotional and constitutional causes, restoring mental clarity and emotional wellbeing.",
    conditions: [
      "Stress",
      "Anxiety",
      "Depression",
      "Insomnia",
      "Panic Attacks",
      "OCD",
      "Grief & Emotional Trauma",
      "Burnout",
    ],
    howItHelps: [
      {
        title: "Addresses Root Emotional Causes",
        body: "Homeopathy treats the underlying emotional and constitutional triggers of mental health conditions, not just the symptoms.",
      },
      {
        title: "Restores Sleep & Calm",
        body: "Specific remedies help regulate sleep patterns, reduce anxiety, and promote a sense of calm and wellbeing.",
      },
      {
        title: "Safe & Side-Effect Free",
        body: "Unlike conventional medications, homeopathic remedies are non-addictive and have no side effects, making them ideal for long-term mental wellness.",
      },
    ],
    whatToExpect: [
      "Detailed mental and emotional history",
      "Constitutional remedy tailored to your emotional profile",
      "Gradual improvement in mood, sleep, and stress levels",
      "Regular follow-ups every 4–6 weeks",
      "Lifestyle and wellness guidance alongside treatment",
    ],
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    icon: User,
    desc: "Personalised care for PCOS, menstrual disorders, menopause & hormonal balance.",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    tagline: "Empowering women through every stage of life.",
    overview:
      "Women's health requires a nuanced, personalised approach. Homeopathy addresses hormonal imbalances, menstrual irregularities, and menopausal symptoms at their root, offering lasting relief without hormonal side effects.",
    conditions: [
      "PCOS",
      "Menstrual Disorders",
      "Menopause",
      "Hormonal Imbalance",
      "Endometriosis",
      "Fibroids",
      "Premenstrual Syndrome (PMS)",
      "Infertility (supportive)",
    ],
    howItHelps: [
      {
        title: "Regulates Hormonal Balance",
        body: "Constitutional remedies work to restore natural hormonal equilibrium, addressing the root cause of PCOS, irregular cycles, and menopausal symptoms.",
      },
      {
        title: "Relieves Menstrual Discomfort",
        body: "Homeopathy effectively reduces pain, heavy bleeding, and emotional symptoms associated with menstrual disorders.",
      },
      {
        title: "Supports Menopausal Transition",
        body: "Gentle remedies ease hot flushes, mood swings, and sleep disturbances during menopause without hormonal therapy.",
      },
    ],
    whatToExpect: [
      "Detailed gynaecological and hormonal history",
      "Individualised remedy based on your complete health profile",
      "Gradual regulation of cycles and hormonal symptoms",
      "Follow-ups every 4–6 weeks",
      "Nutritional and lifestyle guidance alongside treatment",
    ],
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    icon: Sparkles,
    desc: "Deep constitutional treatment for acne, psoriasis, eczema & vitiligo.",
    accent: "#EF4444",
    bg: "#FEF2F2",
    tagline: "Healing skin from the inside out.",
    overview:
      "Skin conditions are often a reflection of internal imbalances. Homeopathy treats skin disorders constitutionally, addressing the root cause rather than suppressing symptoms, leading to lasting, deep healing.",
    conditions: [
      "Acne",
      "Psoriasis",
      "Eczema",
      "Vitiligo",
      "Urticaria (Hives)",
      "Rosacea",
      "Fungal Infections",
      "Hair Loss & Alopecia",
    ],
    howItHelps: [
      {
        title: "Treats the Root Cause",
        body: "Rather than suppressing skin symptoms, homeopathy identifies and treats the internal constitutional imbalance causing the condition.",
      },
      {
        title: "Reduces Inflammation & Flare-ups",
        body: "Specific remedies reduce skin inflammation, itching, and the frequency of flare-ups in chronic conditions like psoriasis and eczema.",
      },
      {
        title: "Long-lasting Results",
        body: "Constitutional treatment leads to deep, lasting improvement rather than temporary relief, with no steroid side effects.",
      },
    ],
    whatToExpect: [
      "Detailed skin and constitutional history",
      "Remedy selected based on your skin type and overall health",
      "Gradual clearing and reduction of skin symptoms",
      "Monthly follow-ups to track progress",
      "Dietary and lifestyle guidance to support skin health",
    ],
  },
  {
    slug: "respiratory",
    title: "Respiratory",
    icon: Wind,
    desc: "Effective homeopathic care for asthma, sinusitis, allergies & bronchitis.",
    accent: "#0EA5E9",
    bg: "#F0F9FF",
    tagline: "Breathe easier with natural, lasting relief.",
    overview:
      "Respiratory conditions like asthma, sinusitis, and allergic rhinitis can significantly impact quality of life. Homeopathy strengthens the respiratory system, reduces allergic sensitivity, and prevents recurrent infections naturally.",
    conditions: [
      "Asthma",
      "Sinusitis",
      "Allergic Rhinitis",
      "Bronchitis",
      "Recurrent Cough & Cold",
      "Nasal Polyps",
      "Tonsillitis",
      "Breathlessness",
    ],
    howItHelps: [
      {
        title: "Reduces Allergic Sensitivity",
        body: "Constitutional remedies desensitise the immune system to allergens, reducing the frequency and severity of allergic reactions.",
      },
      {
        title: "Strengthens Respiratory Immunity",
        body: "Homeopathy builds long-term respiratory immunity, reducing recurrent infections and dependence on antibiotics.",
      },
      {
        title: "Relieves Acute Symptoms",
        body: "Specific remedies provide effective relief from acute asthma, sinusitis, and bronchitis episodes without side effects.",
      },
    ],
    whatToExpect: [
      "Detailed respiratory and allergy history",
      "Constitutional remedy for your individual profile",
      "Reduction in frequency and severity of attacks",
      "Follow-ups every 4–6 weeks",
      "Guidance on triggers, diet, and lifestyle modifications",
    ],
  },
  {
    slug: "digestive-health",
    title: "Digestive Health",
    icon: Salad,
    desc: "Gentle homeopathic treatment for acidity, IBS, constipation & gastritis.",
    accent: "#10B981",
    bg: "#ECFDF5",
    tagline: "Restoring digestive harmony, naturally.",
    overview:
      "Digestive disorders are among the most common health complaints. Homeopathy addresses the root cause of digestive imbalances — whether stress-related, dietary, or constitutional — providing lasting relief from chronic gut issues.",
    conditions: [
      "Acidity & GERD",
      "IBS (Irritable Bowel Syndrome)",
      "Constipation",
      "Gastritis",
      "Bloating & Flatulence",
      "Ulcerative Colitis (supportive)",
      "Diarrhoea",
      "Liver & Gallbladder Issues",
    ],
    howItHelps: [
      {
        title: "Addresses Gut-Mind Connection",
        body: "Many digestive issues are stress-related. Homeopathy treats both the emotional and physical aspects of digestive disorders.",
      },
      {
        title: "Restores Digestive Function",
        body: "Constitutional remedies regulate gut motility, acid production, and digestive enzyme activity for lasting relief.",
      },
      {
        title: "Reduces Inflammation",
        body: "Specific remedies reduce gut inflammation in conditions like gastritis and IBS, improving comfort and quality of life.",
      },
    ],
    whatToExpect: [
      "Detailed digestive and lifestyle history",
      "Individualised remedy based on your gut profile",
      "Gradual improvement in digestion and comfort",
      "Follow-ups every 4–6 weeks",
      "Dietary and lifestyle guidance to support gut health",
    ],
  },
];
