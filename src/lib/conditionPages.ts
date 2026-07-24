export interface ConditionFaq {
  q: string;
  a: string;
}

export interface ConditionPage {
  slug: string;
  urlPath: string; // e.g. /homeopathy-for-asthma-in-lucknow
  title: string;
  h1: string;
  tagline: string;
  accent: string;
  bg: string;
  icon: "Wind" | "Sparkles" | "Heart" | "Baby";
  metaTitle: string;
  metaDescription: string;
  overview: string;
  symptoms: string[];
  howItHelps: { title: string; body: string }[];
  localAreas: string[];
  faqs: ConditionFaq[];
}

export const conditionPages: ConditionPage[] = [
  {
    slug: "homeopathy-for-asthma-in-lucknow",
    urlPath: "/homeopathy-for-asthma-in-lucknow",
    title: "Asthma",
    h1: "Homeopathy for Asthma in Lucknow",
    tagline: "Breathe freely with gentle, constitutional homeopathic care.",
    accent: "#0EA5E9",
    bg: "#F0F9FF",
    icon: "Wind",
    metaTitle: "Homeopathy for Asthma in Lucknow | Best Homoeopathy – Naivedya",
    metaDescription:
      "Looking for homeopathy for asthma in Lucknow? Dr. Asmita Shekhar at Naivedya Advanced Homoeopathy Centre offers personalised constitutional treatment for asthma, allergic bronchitis & breathing disorders. Serving Gomti Nagar, Hazratganj, Aliganj & all of Lucknow.",
    overview:
      "Asthma is a chronic respiratory condition causing recurrent episodes of wheezing, breathlessness, chest tightness, and coughing. Homeopathy offers deep constitutional treatment that addresses the root cause — reducing frequency, severity, and dependence on inhalers over time.",
    symptoms: [
      "Recurrent wheezing & breathlessness",
      "Chest tightness & heaviness",
      "Chronic dry or productive cough",
      "Nocturnal asthma attacks",
      "Allergic asthma triggered by dust, pollen, cold",
      "Exercise-induced breathlessness",
      "Asthma in children",
      "Bronchitis with asthmatic tendency",
    ],
    howItHelps: [
      {
        title: "Reduces Frequency of Attacks",
        body: "Constitutional remedies strengthen the immune response and reduce hypersensitivity, leading to fewer and milder asthma episodes.",
      },
      {
        title: "Addresses Root Allergic Cause",
        body: "Homeopathy treats the underlying allergic tendency — not just the symptoms — providing long-term relief without suppression.",
      },
      {
        title: "Safe for All Ages",
        body: "Gentle homeopathic medicines are safe for infants, children, and adults, making them ideal for long-term asthma management.",
      },
    ],
    localAreas: [
      "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Rajajipuram",
      "Alambagh", "Chinhat", "Mahanagar", "Vikas Nagar", "Jankipuram",
    ],
    faqs: [
      {
        q: "Can homeopathy cure asthma permanently?",
        a: "Homeopathy aims to reduce the frequency and severity of asthma attacks significantly. Many patients experience long-term remission with constitutional treatment, though results vary by individual.",
      },
      {
        q: "Is homeopathy safe alongside inhalers?",
        a: "Yes. Homeopathic treatment can be taken alongside conventional inhalers. As improvement occurs, inhaler dependence often reduces under medical supervision.",
      },
      {
        q: "How long does homeopathic treatment for asthma take?",
        a: "Most patients notice improvement within 2–3 months. Chronic or severe cases may require 6–12 months of consistent treatment.",
      },
      {
        q: "Do you treat children with asthma in Lucknow?",
        a: "Yes. Dr. Asmita Shekhar has extensive experience treating childhood asthma with safe, gentle homeopathic medicines at our Lucknow clinic.",
      },
      {
        q: "Where is Naivedya Homoeopathy located in Lucknow?",
        a: "We are located at Avas Vikas Colony, Mall Avenue, Lucknow. We serve patients from Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, and across Lucknow.",
      },
    ],
  },
  {
    slug: "homeopathy-for-skin-disease-in-lucknow",
    urlPath: "/homeopathy-for-skin-disease-in-lucknow",
    title: "Skin Diseases",
    h1: "Homeopathy for Skin Disease in Lucknow",
    tagline: "Clear, healthy skin through deep constitutional healing.",
    accent: "#EC4899",
    bg: "#FDF2F8",
    icon: "Sparkles",
    metaTitle: "Homeopathy for Skin Disease in Lucknow | Best Homoeopathy – Naivedya",
    metaDescription:
      "Searching for homeopathy for skin disease in Lucknow? Naivedya Advanced Homoeopathy Centre offers expert treatment for eczema, psoriasis, urticaria, acne & more. Dr. Asmita Shekhar, serving Gomti Nagar, Hazratganj, Aliganj & all of Lucknow.",
    overview:
      "Skin diseases like eczema, psoriasis, urticaria, and acne are often rooted in internal imbalances. Homeopathy treats the whole person — addressing the underlying constitutional cause — rather than suppressing symptoms with topical creams, leading to lasting skin health.",
    symptoms: [
      "Eczema & atopic dermatitis",
      "Psoriasis (plaque, scalp, nail)",
      "Urticaria & chronic hives",
      "Acne & acne rosacea",
      "Vitiligo (supportive care)",
      "Fungal skin infections (recurrent)",
      "Seborrhoeic dermatitis & dandruff",
      "Allergic skin rashes & contact dermatitis",
    ],
    howItHelps: [
      {
        title: "Treats the Root Cause",
        body: "Homeopathy identifies and treats the internal constitutional imbalance driving skin disease, preventing recurrence rather than just clearing the surface.",
      },
      {
        title: "No Steroid Dependency",
        body: "Unlike topical steroids, homeopathic medicines do not cause thinning of skin or rebound flares, making them safe for long-term use.",
      },
      {
        title: "Holistic Improvement",
        body: "Patients often notice improvements in energy, digestion, and immunity alongside skin healing — reflecting the whole-person approach of homeopathy.",
      },
    ],
    localAreas: [
      "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Rajajipuram",
      "Alambagh", "Chinhat", "Mahanagar", "Vikas Nagar", "Jankipuram",
    ],
    faqs: [
      {
        q: "Can homeopathy treat psoriasis in Lucknow?",
        a: "Yes. Homeopathy is highly effective for psoriasis. Constitutional treatment reduces plaque formation, itching, and scaling, with many patients achieving long-term remission.",
      },
      {
        q: "Is homeopathy better than steroids for eczema?",
        a: "Homeopathy treats eczema from within without the side effects of steroids. It is especially preferred for children and for cases where steroid creams have stopped working.",
      },
      {
        q: "How long does skin treatment take with homeopathy?",
        a: "Mild conditions may improve in 4–8 weeks. Chronic conditions like psoriasis or eczema typically require 3–6 months of consistent treatment.",
      },
      {
        q: "Do you treat acne with homeopathy in Lucknow?",
        a: "Yes. Homeopathy addresses hormonal imbalances and constitutional factors causing acne, providing lasting improvement without antibiotics or harsh topicals.",
      },
      {
        q: "Where is your skin disease homeopathy clinic in Lucknow?",
        a: "Naivedya Advanced Homoeopathy Centre is at Avas Vikas Colony, Mall Avenue, Lucknow — easily accessible from Gomti Nagar, Hazratganj, and Aliganj.",
      },
    ],
  },
  {
    slug: "homeopathy-for-pcod-in-lucknow",
    urlPath: "/homeopathy-for-pcod-in-lucknow",
    title: "PCOD / PCOS",
    h1: "Homeopathy for PCOD in Lucknow",
    tagline: "Restore hormonal balance naturally with homeopathic care.",
    accent: "#8B5CF6",
    bg: "#F5F3FF",
    icon: "Heart",
    metaTitle: "Homeopathy for PCOD in Lucknow | Best Homoeopathy for PCOS – Naivedya",
    metaDescription:
      "Looking for homeopathy for PCOD in Lucknow? Dr. Asmita Shekhar at Naivedya Advanced Homoeopathy Centre offers natural, constitutional treatment for PCOS, irregular periods, hormonal imbalance & infertility. Serving Gomti Nagar, Hazratganj, Aliganj & all of Lucknow.",
    overview:
      "Polycystic Ovarian Disease (PCOD/PCOS) is a hormonal disorder affecting women of reproductive age, causing irregular periods, cysts on ovaries, weight gain, acne, and fertility challenges. Homeopathy offers a safe, natural approach to restore hormonal balance without hormonal pills or surgery.",
    symptoms: [
      "Irregular or absent periods",
      "Polycystic ovaries on ultrasound",
      "Unexplained weight gain",
      "Acne & oily skin",
      "Excessive facial or body hair (hirsutism)",
      "Hair thinning & hair fall",
      "Difficulty conceiving",
      "Mood swings, anxiety & depression",
    ],
    howItHelps: [
      {
        title: "Regulates Hormonal Balance",
        body: "Constitutional homeopathic remedies work on the endocrine system to restore natural hormonal rhythms, regularising menstrual cycles.",
      },
      {
        title: "Reduces Cyst Formation",
        body: "With consistent treatment, many patients see a reduction in ovarian cyst size and number on follow-up ultrasounds.",
      },
      {
        title: "Supports Fertility Naturally",
        body: "By restoring ovulation and hormonal health, homeopathy improves fertility prospects without the side effects of hormonal stimulation.",
      },
    ],
    localAreas: [
      "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Rajajipuram",
      "Alambagh", "Chinhat", "Mahanagar", "Vikas Nagar", "Jankipuram",
    ],
    faqs: [
      {
        q: "Can homeopathy cure PCOD permanently?",
        a: "Homeopathy can significantly improve PCOD symptoms and restore hormonal balance. Many patients achieve regular cycles and reduced cysts with constitutional treatment.",
      },
      {
        q: "Is homeopathy safe for PCOS without side effects?",
        a: "Yes. Homeopathic medicines are natural and free from the hormonal side effects associated with birth control pills or metformin used in conventional PCOS treatment.",
      },
      {
        q: "Can homeopathy help with PCOD-related infertility?",
        a: "Yes. By restoring ovulation and hormonal balance, homeopathy can improve fertility in women with PCOD. Many patients have conceived naturally after homeopathic treatment.",
      },
      {
        q: "How long does PCOD treatment take with homeopathy?",
        a: "Most patients notice improvement in menstrual regularity within 2–3 months. Complete hormonal restoration typically takes 6–12 months depending on severity.",
      },
      {
        q: "Where can I consult for PCOD homeopathy in Lucknow?",
        a: "Visit Naivedya Advanced Homoeopathy Centre at Avas Vikas Colony, Mall Avenue, Lucknow. Dr. Asmita Shekhar specialises in women's health and PCOD treatment.",
      },
    ],
  },
  {
    slug: "child-homeopathy-in-lucknow",
    urlPath: "/child-homeopathy-in-lucknow",
    title: "Child Homeopathy",
    h1: "Child Homeopathy in Lucknow",
    tagline: "Gentle, safe homeopathic care for your child's health and development.",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    icon: "Baby",
    metaTitle: "Child Homeopathy in Lucknow | Best Homoeopathy for Children – Naivedya",
    metaDescription:
      "Looking for child homeopathy in Lucknow? Dr. Asmita Shekhar at Naivedya Advanced Homoeopathy Centre specialises in homeopathic treatment for children — developmental delays, recurrent infections, autism, behavioural issues & more. Serving Gomti Nagar, Hazratganj, Aliganj & all of Lucknow.",
    overview:
      "Children respond beautifully to homeopathic treatment because of their strong vital force. Homeopathy is safe, gentle, and free from side effects — making it ideal for infants, toddlers, and growing children. Dr. Asmita Shekhar has extensive experience treating a wide range of childhood conditions.",
    symptoms: [
      "Recurrent colds, coughs & ear infections",
      "Developmental delays (speech, motor, cognitive)",
      "Autism Spectrum Disorder (ASD) — supportive",
      "Attention Deficit & Hyperactivity (ADHD)",
      "Bedwetting (nocturnal enuresis)",
      "Childhood asthma & allergies",
      "Digestive issues (colic, constipation, worms)",
      "Behavioural & emotional challenges",
    ],
    howItHelps: [
      {
        title: "Strengthens Immunity",
        body: "Constitutional homeopathic treatment builds a child's natural immunity, reducing the frequency of recurrent infections and illness.",
      },
      {
        title: "Supports Development",
        body: "Remedies stimulate the child's vital force to support natural developmental milestones in speech, motor skills, and cognition.",
      },
      {
        title: "Safe & Gentle",
        body: "Homeopathic medicines are free from chemicals and side effects, making them the safest choice for infants and young children.",
      },
    ],
    localAreas: [
      "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Rajajipuram",
      "Alambagh", "Chinhat", "Mahanagar", "Vikas Nagar", "Jankipuram",
    ],
    faqs: [
      {
        q: "Is homeopathy safe for newborns and infants?",
        a: "Yes. Homeopathic medicines are among the safest treatments for newborns and infants. They are free from chemicals and have no known side effects when prescribed by a qualified practitioner.",
      },
      {
        q: "Can homeopathy help with my child's developmental delay?",
        a: "Yes. Homeopathy provides constitutional treatment that stimulates natural developmental progress in speech, motor skills, and cognition. Many children show significant improvement with consistent treatment.",
      },
      {
        q: "Do you treat autism (ASD) with homeopathy in Lucknow?",
        a: "Yes. We offer supportive homeopathic treatment for children with ASD, focusing on improving communication, behaviour, sensory processing, and overall development.",
      },
      {
        q: "Can homeopathy replace vaccines or conventional medicines?",
        a: "No. Homeopathy is a complementary therapy and does not replace vaccinations or emergency medical care. It works best alongside conventional paediatric care.",
      },
      {
        q: "Where is the best child homeopathy clinic in Lucknow?",
        a: "Naivedya Advanced Homoeopathy Centre at Avas Vikas Colony, Mall Avenue, Lucknow is a trusted choice for child homeopathy, serving families from Gomti Nagar, Hazratganj, Aliganj, and across Lucknow.",
      },
    ],
  },
];
