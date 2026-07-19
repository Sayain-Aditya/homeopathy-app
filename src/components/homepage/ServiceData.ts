import { Zap, PersonStanding, TrendingUp, Eye, Ear, LucideIcon } from "lucide-react";

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
    slug: "intellectual-disability",
    title: "Intellectual Disability",
    icon: Zap,
    desc: "Improving cognition, behaviour & adaptive skills.",
    accent: "#8B5CF6",
    bg: "#F5F3FF",
    tagline: "Unlocking potential through holistic care.",
    overview:
      "Intellectual Disability involves significant limitations in intellectual functioning and adaptive behaviour. Homeopathy provides supportive constitutional treatment that improves cognitive capacity, emotional regulation, and overall functioning.",
    conditions: [
      "Cognitive & Learning Difficulties",
      "Delayed Milestones",
      "Behavioural & Emotional Issues",
      "Poor Concentration & Memory",
      "Speech & Language Delays",
      "Associated Seizure Disorders (supportive)",
      "Anxiety & Mood Disturbances",
      "Social Skill Challenges",
    ],
    howItHelps: [
      {
        title: "Stimulates Mental Faculties",
        body: "Constitutional remedies help improve memory, concentration, and learning ability over time.",
      },
      {
        title: "Emotional Regulation",
        body: "Homeopathy addresses behavioural and emotional challenges, reducing outbursts and improving social interaction.",
      },
      {
        title: "Supports Overall Health",
        body: "By improving general vitality and immunity, children are healthier and more receptive to learning and therapy.",
      },
    ],
    whatToExpect: [
      "In-depth case history including developmental milestones",
      "Remedy selected for the individual's complete profile",
      "Gradual improvement in behaviour and cognitive function",
      "Monthly monitoring and remedy adjustments",
      "Guidance for caregivers and families",
    ],
  },
  {
    slug: "cerebral-palsy",
    title: "Cerebral Palsy",
    icon: PersonStanding,
    desc: "Supportive homeopathic care for motor & neurological health.",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    tagline: "Compassionate care for every movement forward.",
    overview:
      "Cerebral Palsy is a group of disorders affecting movement, muscle tone, and posture due to brain injury. Homeopathy offers complementary support to improve muscle tone, reduce spasticity, enhance neurological function, and support overall quality of life.",
    conditions: [
      "Spasticity & Muscle Rigidity",
      "Poor Motor Coordination",
      "Speech & Swallowing Difficulties",
      "Seizures (supportive care)",
      "Drooling & Oral Motor Issues",
      "Cognitive & Behavioural Challenges",
      "Recurrent Infections",
      "Sleep Disturbances",
    ],
    howItHelps: [
      {
        title: "Reduces Spasticity",
        body: "Specific remedies help relax muscle tone and reduce rigidity, improving comfort and mobility.",
      },
      {
        title: "Neurological Support",
        body: "Homeopathy stimulates the nervous system's healing capacity, supporting better motor and cognitive function.",
      },
      {
        title: "Improves Quality of Life",
        body: "By addressing associated issues like infections, sleep, and digestion, overall wellbeing and daily functioning improve.",
      },
    ],
    whatToExpect: [
      "Detailed neurological and developmental history",
      "Constitutional remedy for the individual's full picture",
      "Complementary support alongside physiotherapy and OT",
      "Gradual improvement in tone, function, and wellbeing",
      "Regular follow-ups every 4–6 weeks",
    ],
  },
  {
    slug: "developmental-delay",
    title: "Developmental Delay",
    icon: TrendingUp,
    desc: "Stimulating growth & milestone achievement naturally.",
    accent: "#EF4444",
    bg: "#FEF2F2",
    tagline: "Every child grows at their own pace — we help them flourish.",
    overview:
      "Developmental delay refers to a child not reaching developmental milestones at the expected time across motor, speech, cognitive, or social domains. Homeopathy provides gentle constitutional treatment to stimulate natural development and address underlying causes.",
    conditions: [
      "Delayed Walking & Motor Skills",
      "Speech & Language Delays",
      "Cognitive & Learning Delays",
      "Social & Emotional Delays",
      "Stunted Physical Growth",
      "Poor Appetite & Nutrition Absorption",
      "Weak Immunity",
      "Associated Behavioural Issues",
    ],
    howItHelps: [
      {
        title: "Stimulates Natural Development",
        body: "Remedies work with the child's vital force to accelerate developmental progress in a safe, natural way.",
      },
      {
        title: "Addresses Root Causes",
        body: "Whether the delay is due to nutritional, neurological, or constitutional factors, homeopathy treats the underlying cause.",
      },
      {
        title: "Builds Strength & Vitality",
        body: "Improved overall health, appetite, and immunity create the foundation for better developmental outcomes.",
      },
    ],
    whatToExpect: [
      "Comprehensive developmental milestone assessment",
      "Individualised remedy based on the child's profile",
      "Noticeable progress in milestones within 2–3 months",
      "Monthly follow-ups to track and support growth",
      "Parental education and home care guidance",
    ],
  },
  {
    slug: "congenital-blindness",
    title: "Congenital Blindness",
    icon: Eye,
    desc: "Supportive care for visual health & associated conditions.",
    accent: "#0EA5E9",
    bg: "#F0F9FF",
    tagline: "Holistic support for vision and overall wellbeing.",
    overview:
      "Congenital blindness and visual impairments present from birth require comprehensive supportive care. While homeopathy cannot reverse structural blindness, it supports overall neurological health, reduces associated complications, and improves quality of life.",
    conditions: [
      "Autism Spectrum Disorder (ASD)",
      "Down Syndrome",
      "Congenital Cataracts (post-surgical support)",
      "Optic Nerve Hypoplasia (supportive)",
      "Retinopathy of Prematurity (supportive)",
      "Associated Neurological Conditions",
      "Recurrent Eye Infections",
      "Sensory Processing Challenges",
      "Developmental Delays associated with visual impairment",
      "Emotional & Behavioural Support",
    ],
    howItHelps: [
      {
        title: "Neurological Support",
        body: "Remedies support brain and nervous system health, which is critical for children with visual impairments.",
      },
      {
        title: "Reduces Complications",
        body: "Homeopathy helps manage associated conditions like infections, seizures, and developmental delays.",
      },
      {
        title: "Emotional Wellbeing",
        body: "Constitutional treatment supports emotional resilience and adaptive development in visually impaired children.",
      },
    ],
    whatToExpect: [
      "Detailed medical and developmental history",
      "Constitutional remedy for overall health and development",
      "Complementary support alongside ophthalmological care",
      "Improved general health, immunity, and wellbeing",
      "Regular follow-ups every 4–6 weeks",
    ],
  },
  {
    slug: "hearing-speech-impairment",
    title: "Hearing & Speech Impairment",
    icon: Ear,
    desc: "Homeopathic support for deaf, mute & speech-delayed children.",
    accent: "#EC4899",
    bg: "#FDF2F8",
    tagline: "Finding a voice through holistic healing.",
    overview:
      "Hearing and speech impairments — including deafness and mutism — significantly impact a child's development and communication. Homeopathy provides constitutional supportive care that addresses neurological function, associated infections, and overall developmental health.",
    conditions: [
      "Congenital Deafness (supportive)",
      "Hearing Loss due to Recurrent Infections",
      "Speech Delays & Mutism",
      "Auditory Processing Disorders",
      "Glue Ear & Chronic Otitis Media",
      "Tinnitus",
      "Associated Developmental Delays",
      "Behavioural Issues related to communication challenges",
    ],
    howItHelps: [
      {
        title: "Reduces Recurrent Infections",
        body: "Chronic ear infections are a leading cause of hearing loss in children. Homeopathy strengthens immunity to prevent recurrence.",
      },
      {
        title: "Supports Neurological Development",
        body: "Constitutional remedies support auditory nerve function and overall neurological health.",
      },
      {
        title: "Improves Speech Development",
        body: "By addressing underlying causes and improving overall vitality, homeopathy supports speech and language development.",
      },
    ],
    whatToExpect: [
      "Detailed hearing, speech, and developmental history",
      "Constitutional remedy tailored to the individual",
      "Complementary support alongside speech therapy and audiology",
      "Reduction in ear infections and associated complications",
      "Regular follow-ups every 4–6 weeks",
    ],
  },
];
