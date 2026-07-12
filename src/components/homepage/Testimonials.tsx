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
    <section className="bg-[#EEF8F2] py-12">
      <Container>
        <motion.div
          className="flex items-end justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              Patient Stories
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[50px]">
              Real Stories.
              <br />
              Real Healing.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 max-w-[400px] text-[15px] leading-[1.9] text-[#6F7D77]">
              Thousands of patients have transformed their health through our personalized care.
            </motion.p>
          </div>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-[999px] border border-[#6C9B82] px-6 py-3 text-[13px] font-semibold text-[#1D4338] transition-all duration-200 hover:bg-[#1D4338] hover:text-white lg:block"
          >
            View All Stories
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(29,67,56,.10)" }}
              className="group flex flex-col rounded-[24px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300"
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF8F2]">
                  <Quote size={15} className="text-[#2D6655]" />
                </div>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-8 text-[#4A5A55] italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#EEF8F2] pt-6">
                <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-[#D5EEE0]">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#1D4338]">{t.name}</p>
                  <p className="text-[11px] text-[#6C9B82]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
