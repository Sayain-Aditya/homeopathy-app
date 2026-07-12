"use client";

import { motion } from "framer-motion";
import { Brain, Flower2, Baby, Sparkles, Wind, Salad, ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const categories = [
  { icon: Brain,    accent: "#6366F1", bg: "#EEF0FF", title: "Mental Wellness",  items: ["Stress", "Anxiety", "Depression", "Insomnia"] },
  { icon: Flower2,  accent: "#EC4899", bg: "#FDF2F8", title: "Women's Health",   items: ["PCOS", "Menstrual Disorders", "Menopause", "Hormonal Imbalance"] },
  { icon: Baby,     accent: "#F59E0B", bg: "#FFFBEB", title: "Child Care",       items: ["Frequent Colds", "Allergies", "Weak Immunity", "Bedwetting"] },
  { icon: Sparkles, accent: "#2D6655", bg: "#EEF8F2", title: "Skin Care",        items: ["Acne", "Psoriasis", "Eczema", "Vitiligo"] },
  { icon: Wind,     accent: "#0EA5E9", bg: "#F0F9FF", title: "Respiratory",      items: ["Asthma", "Sinusitis", "Allergic Rhinitis", "Bronchitis"] },
  { icon: Salad,    accent: "#16A34A", bg: "#F0FDF4", title: "Digestive Health", items: ["Acidity", "IBS", "Constipation", "Gastritis"] },
];

export default function ConditionsWeTreat() {
  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
            Conditions We Treat
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[50px]">
            Comprehensive Care for
            <br />
            Every Stage of Life
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.9] text-[#6F7D77]">
            Our experienced homeopaths provide personalized treatment plans for a
            wide range of acute and chronic health conditions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(0,0,0,.10)" }}
                className="group relative overflow-hidden rounded-[24px] border border-[#F0F7F3] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.04)] transition-shadow duration-300"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: cat.accent }}
                />
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: cat.bg }}
                  >
                    <Icon size={22} style={{ color: cat.accent }} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#1D4338]">{cat.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#6F7D77]">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cat.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-5 flex items-center gap-1 text-[12px] font-semibold transition-colors duration-200" style={{ color: cat.accent }}>
                  Learn More <ChevronRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
