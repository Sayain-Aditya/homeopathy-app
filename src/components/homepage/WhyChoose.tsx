"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, ShieldCheck, RefreshCw } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  { icon: Leaf,           color: "#2D6655", bg: "#EEF8F2", title: "Natural Healing",        description: "Safe remedies made from natural substances with minimal side effects." },
  { icon: HeartHandshake, color: "#2D6655", bg: "#EEF8F2", title: "Personalized Treatment", description: "Every treatment plan is customized based on your symptoms, lifestyle, and medical history." },
  { icon: ShieldCheck,    color: "#2D6655", bg: "#EEF8F2", title: "Safe for All Ages",      description: "Suitable for infants, children, adults, pregnant women, and senior citizens." },
  { icon: RefreshCw,      color: "#2D6655", bg: "#EEF8F2", title: "Long-Term Relief",       description: "Addresses the root cause to reduce recurring health issues instead of temporary symptom relief." },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#EEF8F2] py-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <Leaf size={11} />
              Why Choose Us
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[50px]">
              Why Thousands
              <br />
              Choose Homeopathy
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-3 max-w-[420px] text-[15px] leading-[1.9] text-[#6F7D77]">
              Homeopathy is a natural system of medicine that stimulates your
              body&apos;s own healing ability. It focuses on treating the individual
              as a whole, providing long-term wellness with gentle and safe remedies.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 flex items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-7 py-3.5 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(29,67,56,.20)] transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(29,67,56,.30)]"
            >
              Book Consultation
            </motion.button>

            <motion.div variants={fadeUp} className="mt-6 flex gap-8 border-t border-[#D5EEE0] pt-5">
              {[["10K+", "Happy Patients"], ["15+", "Years Experience"], ["95%", "Satisfaction"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-[28px] font-extrabold leading-none text-[#1D4338]">{val}</p>
                  <p className="mt-1 text-[12px] text-[#6C9B82]">{lbl}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 2×2 grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(29,67,56,.12)" }}
                  className={`group rounded-[24px] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300 ${i === 1 || i === 3 ? "lg:mt-4" : ""}`}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: f.bg }}
                  >
                    <Icon size={22} style={{ color: f.color }} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-[#1D4338]">{f.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#6F7D77]">{f.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
