"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  { quote: "After struggling with chronic migraines for years, homeopathic treatment helped me regain a normal life.", name: "Priya Sharma", role: "Chronic Migraine Patient", rating: 5, avatar: "/images/avatar-1.jpg" },
  { quote: "My daughter's recurring allergies improved significantly within a few months. Excellent and personalized care.", name: "Rahul Verma", role: "Parent", rating: 5, avatar: "/images/avatar-2.jpg" },
  { quote: "Excellent consultation and personalized care. Highly recommended to anyone looking for natural healing.", name: "Sneha Gupta", role: "Skin Care Patient", rating: 5, avatar: "/images/avatar-3.jpg" },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0A2318] py-12 lg:py-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2D6655, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#6C9B82 1px, transparent 1px), linear-gradient(90deg, #6C9B82 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Container>
        <motion.div
          className="relative flex items-end justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-emerald-300">Patient Stories</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[44px] lg:text-[52px]">
              Real Stories.
              <br />
              <span className="bg-gradient-to-r from-[#6C9B82] to-[#A8D5B5] bg-clip-text text-transparent">Real Healing.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-[400px] text-[15px] leading-[1.9] text-white/60">
              Thousands of patients have transformed their health through our personalized care.
            </motion.p>
          </div>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-[999px] border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white lg:block"
          >
            View All Stories
          </motion.button>
        </motion.div>

        <motion.div
          className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,.4)" }}
              className="group flex flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/8"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.06, type: "spring", stiffness: 300 }}
                    >
                      <Star size={14} className="text-amber-400" fill="currentColor" />
                    </motion.span>
                  ))}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10">
                  <Quote size={15} className="text-emerald-400" />
                </div>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-8 text-white/60 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-emerald-500/30">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-white">{t.name}</p>
                  <p className="text-[11px] text-emerald-400/70">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
