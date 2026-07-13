"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Pill, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  { number: "01", icon: CalendarCheck, title: "Book Consultation",          description: "Schedule an online or in-clinic appointment at your convenience." },
  { number: "02", icon: ClipboardList, title: "Detailed Health Assessment",  description: "Our doctor understands your medical history, symptoms, and lifestyle." },
  { number: "03", icon: Pill,          title: "Personalized Medicine",       description: "Receive customized homeopathic remedies prepared specifically for you." },
  { number: "04", icon: TrendingUp,    title: "Follow-Up Care",              description: "Regular progress tracking and treatment adjustments for the best results." },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#0A2318] py-12 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #6C9B82, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#6C9B82 1px, transparent 1px), linear-gradient(90deg, #6C9B82 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Container>
        <motion.div
          className="relative text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[3px] text-emerald-300">How It Works</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[44px] lg:text-[52px]">
            Your Healing Journey in
            <br />
            <span className="bg-gradient-to-r from-[#6C9B82] to-[#A8D5B5] bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={fadeUp} className="relative">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-full top-10 z-10 hidden h-px w-5 bg-gradient-to-r from-emerald-500/30 to-transparent lg:block" />
                )}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,.4)" }}
                  className="group h-full rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D6655] to-[#1D4338] shadow-[0_0_20px_rgba(45,102,85,.4)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-[40px] font-extrabold leading-none text-white/5">{step.number}</span>
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/50">{step.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
