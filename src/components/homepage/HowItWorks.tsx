"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Pill, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  { number: "01", icon: CalendarCheck, title: "Book Consultation",         description: "Schedule an online or in-clinic appointment at your convenience." },
  { number: "02", icon: ClipboardList, title: "Detailed Health Assessment", description: "Our doctor understands your medical history, symptoms, and lifestyle." },
  { number: "03", icon: Pill,          title: "Personalized Medicine",      description: "Receive customized homeopathic remedies prepared specifically for you." },
  { number: "04", icon: TrendingUp,    title: "Follow-Up Care",             description: "Regular progress tracking and treatment adjustments for the best results." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#EEF8F2] py-24">
      <Container>
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
            How It Works
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[50px]">
            Your Healing Journey in
            <br />
            Four Simple Steps
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={fadeUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-full top-10 z-10 hidden h-px w-6 bg-gradient-to-r from-[#C8E6D4] to-transparent lg:block" />
                )}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(29,67,56,.12)" }}
                  className="group h-full rounded-[24px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1D4338] to-[#2D6655] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-[36px] font-extrabold leading-none text-[#EEF8F2]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold text-[#1D4338]">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#6F7D77]">{step.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
