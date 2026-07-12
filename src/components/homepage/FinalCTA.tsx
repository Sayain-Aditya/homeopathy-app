"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Phone, Leaf, CheckCircle2 } from "lucide-react";
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
    <section className="bg-[#EEF8F2] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] px-6 py-12 sm:rounded-[40px] sm:px-8 sm:py-16 lg:px-20 lg:py-20"
          style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A8D5B5, transparent 70%)" }} />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 opacity-20" style={{ background: "linear-gradient(90deg, transparent, #6C9B82, transparent)" }} />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <Leaf size={11} className="text-[#A8D5B5]" />
                <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#A8D5B5]">Get Started Today</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-white sm:text-[42px] lg:text-[52px]">
                Ready to Begin
                <br />
                Your Healing
                <br />
                Journey?
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-5 max-w-[400px] text-[15px] leading-[1.9] text-white/70">
                Take the first step toward natural, personalized healthcare with
                expert homeopathic consultation.
              </motion.p>

              <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <motion.li key={perk} variants={fadeUp} className="flex items-center gap-3 text-[13px] text-white/80">
                    <CheckCircle2 size={16} className="shrink-0 text-[#6C9B82]" />
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
              className="rounded-[28px] border border-white/15 bg-white/10 p-8 backdrop-blur-sm"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[2px] text-white/60">Book Your Session</p>
              <p className="mt-2 text-[22px] font-bold text-white">Start with a Free Consultation</p>
              <p className="mt-2 text-[13px] text-white/60">Talk to our experts and understand your treatment plan before committing.</p>

              <div className="mt-8 flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 rounded-[999px] bg-white px-8 py-4 text-[14px] font-bold text-[#1D4338] transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                >
                  <CalendarCheck size={16} />
                  Book Consultation
                </motion.button>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center justify-center gap-2.5 rounded-[999px] border border-white/30 px-8 py-4 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/10"
                  >
                    <Phone size={15} />
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
