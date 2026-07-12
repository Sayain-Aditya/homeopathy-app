"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  { icon: Leaf,           title: "Natural Healing",        description: "Safe remedies made from natural substances with zero harmful side effects." },
  { icon: HeartHandshake, title: "Personalized Treatment", description: "Every plan is customized based on your symptoms, lifestyle, and medical history." },
  { icon: ShieldCheck,    title: "Safe for All Ages",      description: "Suitable for infants, children, adults, pregnant women, and senior citizens." },
  { icon: RefreshCw,      title: "Long-Term Relief",       description: "Addresses the root cause to reduce recurring health issues permanently." },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#0A2318] py-20 lg:py-28">
      {/* Background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #2D6655, transparent 70%)" }} />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1D4338, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#6C9B82 1px, transparent 1px), linear-gradient(90deg, #6C9B82 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Leaf size={11} className="text-emerald-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-emerald-300">Why Choose Us</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[44px] lg:text-[52px]">
              Why Thousands
              <br />
              <span className="bg-gradient-to-r from-[#6C9B82] to-[#A8D5B5] bg-clip-text text-transparent">
                Choose Homeopathy
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-[420px] text-[15px] leading-[1.9] text-white/60">
              Homeopathy stimulates your body&apos;s own healing ability, treating the
              individual as a whole — providing long-term wellness with gentle, safe remedies.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#2D6655] to-[#3D7A65] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_0_30px_rgba(45,102,85,.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(45,102,85,.6)]"
              >
                Book Consultation <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="mt-10 flex gap-8 border-t border-white/10 pt-8">
              {[["10K+", "Happy Patients"], ["15+", "Years Experience"], ["95%", "Satisfaction"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-[28px] font-extrabold leading-none text-white">{val}</p>
                  <p className="mt-1 text-[12px] text-emerald-400/70">{lbl}</p>
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
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,.4)" }}
                  className={`group rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/8 ${i === 1 || i === 3 ? "lg:mt-6" : ""}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/50">{f.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
