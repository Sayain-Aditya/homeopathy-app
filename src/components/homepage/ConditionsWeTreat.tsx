"use client";

import { motion } from "framer-motion";
import { Brain, Flower2, Sparkles, Wind, Salad, ChevronRight, Baby } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { services } from "./ServiceData";

const categories = [
  {
    icon: Brain,
    accent: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    title: "Mental Wellness",
    items: ["Stress", "Anxiety", "Depression", "Insomnia"],
    href: "/services",
  },
  {
    icon: Flower2,
    accent: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    title: "Women's Health",
    items: ["PCOS", "Menstrual Disorders", "Menopause", "Hormonal Imbalance"],
    href: "/services",
  },
  {
    icon: Sparkles,
    accent: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    title: "Skin Care",
    items: ["Acne", "Psoriasis", "Eczema", "Vitiligo"],
    href: "/services",
  },
  {
    icon: Wind,
    accent: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    title: "Respiratory",
    items: ["Asthma", "Sinusitis", "Allergic Rhinitis", "Bronchitis"],
    href: "/services",
  },
  {
    icon: Salad,
    accent: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    title: "Digestive Health",
    items: ["Acidity", "IBS", "Constipation", "Gastritis"],
    href: "/services",
  },
];

export default function ConditionsWeTreat() {
  return (
    <section className="bg-[#F5FBF7] py-12 lg:py-20">
      <Container>
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 shadow-[0_2px_12px_rgba(29,67,56,.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#2D6655]">Conditions We Treat</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#0D2B22] sm:text-[44px] lg:text-[52px]">
            Comprehensive Care for
            <br />
            <span className="text-[#2D6655]">Every Stage of Life</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.9] text-[#6F7D77]">
            Personalized treatment plans for a wide range of acute and chronic health conditions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Neuro & Child Development — spans full width on lg, lists all 7 services */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(29,67,56,.10)" }}
            className="group relative overflow-hidden rounded-[24px] border border-[#E8F5EE] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.04)] transition-all duration-300 lg:col-span-3"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(90deg, #F59E0B, transparent)" }} />

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(245,158,11,0.08)" }}>
                <Baby size={22} style={{ color: "#F59E0B" }} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-[#0D2B22]">Neuro & Child Development</h3>
                <p className="text-[12px] text-[#6F7D77]">Specialised homeopathic care for children with developmental & neurological conditions</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex flex-col items-center gap-2 rounded-[16px] border border-[#E8F5EE] p-3 text-center transition-all duration-200 hover:border-[#C8E6D4] hover:bg-[#F5FBF7]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: s.bg }}>
                      <Icon size={16} style={{ color: s.accent }} />
                    </div>
                    <span className="text-[11px] font-semibold leading-tight text-[#0D2B22]">{s.title}</span>
                  </Link>
                );
              })}
            </div>

            <Link href="/services" className="mt-5 flex items-center gap-1 text-[12px] font-semibold text-[#F59E0B] transition-colors duration-200 hover:text-amber-600">
              View All Conditions <ChevronRight size={13} />
            </Link>
          </motion.div>

          {/* Regular category cards */}
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(29,67,56,.10)" }}
                className="group relative overflow-hidden rounded-[24px] border border-[#E8F5EE] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.04)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }} />

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: cat.bg }}>
                    <Icon size={22} style={{ color: cat.accent }} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0D2B22]">{cat.title}</h3>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#6F7D77]">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cat.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={cat.href} className="mt-5 flex items-center gap-1 text-[12px] font-semibold transition-colors duration-200" style={{ color: cat.accent }}>
                  Book Consultation <ChevronRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
