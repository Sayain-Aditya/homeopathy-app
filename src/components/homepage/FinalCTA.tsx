"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Phone, Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const perks = [
  "No waiting — instant appointment confirmation",
  "Online & in-clinic consultations available",
  "Personalized treatment plan within 24 hours",
];

export default function FinalCTA() {
  return (
    <section className="bg-[#F5FBF7] py-12 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] lg:rounded-[40px]"
          style={{ background: "linear-gradient(135deg, #0A2318 0%, #0D2B22 40%, #1D4338 100%)" }}
        >
          {/* Decorative */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #2D6655, transparent 70%)" }} />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 opacity-20"
              style={{ background: "linear-gradient(90deg, transparent, #6C9B82, transparent)" }} />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "linear-gradient(#6C9B82 1px, transparent 1px), linear-gradient(90deg, #6C9B82 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="relative grid items-center gap-10 px-8 py-14 lg:grid-cols-2 lg:px-16 lg:py-20">
            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <Leaf size={11} className="text-emerald-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[3px] text-emerald-300">Get Started Today</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[44px] lg:text-[52px]">
                Ready to Begin
                <br />
                <span className="bg-gradient-to-r from-[#6C9B82] to-[#A8D5B5] bg-clip-text text-transparent">
                  Your Healing Journey?
                </span>
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 max-w-[400px] text-[15px] leading-[1.9] text-white/60">
                Take the first step toward natural, personalized healthcare with
                expert homeopathic consultation.
              </motion.p>

              <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <motion.li key={perk} variants={fadeUp} className="flex items-center gap-3 text-[13px] text-white/70">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
                    {perk}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[2px] text-white/40">Book Your Session</p>
              <p className="mt-2 text-[22px] font-bold text-white">Start with a Free Consultation</p>
              <p className="mt-2 text-[13px] text-white/50">Talk to our experts and understand your treatment plan before committing.</p>

              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex cursor-pointer items-center justify-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#2D6655] to-[#3D7A65] px-8 py-4 text-[14px] font-bold text-white shadow-[0_0_30px_rgba(45,102,85,.4)] transition-shadow hover:shadow-[0_0_40px_rgba(45,102,85,.6)]"
                  >
                    <CalendarCheck size={16} />
                    Book Consultation
                    <ArrowRight size={15} />
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex cursor-pointer items-center justify-center gap-2.5 rounded-[999px] border border-white/15 bg-white/5 px-8 py-4 text-[14px] font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                  >
                    <Phone size={15} />
                    Contact Us
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
