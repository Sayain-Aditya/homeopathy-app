"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const doctors = [
  { name: "Dr. Anjali Mehta", specialty: "Chronic Conditions & Women's Health", experience: "18 Years", rating: "4.9", reviews: "840", avatar: "/images/doctor.png" },
  { name: "Dr. Rajesh Nair",  specialty: "Pediatric & Skin Care",               experience: "12 Years", rating: "4.8", reviews: "620", avatar: "/images/doctor.png" },
  { name: "Dr. Priya Iyer",   specialty: "Mental Wellness & Respiratory",        experience: "10 Years", rating: "4.9", reviews: "510", avatar: "/images/doctor.png" },
];

export default function MeetExperts() {
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
            Our Team
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-5 text-[42px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] lg:text-[50px]">
            Experienced Homeopathic
            <br />
            Doctors You Can Trust
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[500px] text-[15px] leading-[1.9] text-[#6F7D77]">
            Our qualified practitioners combine years of clinical expertise with
            compassionate care to provide individualized treatment plans for every patient.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 56px rgba(29,67,56,.12)" }}
              className="group overflow-hidden rounded-[28px] border border-[#EEF8F2] bg-white shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300"
            >
              <div className="relative h-[260px] w-full overflow-hidden bg-[#EEF8F2]">
                <Image
                  src={doc.avatar}
                  alt={doc.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ mixBlendMode: "multiply" }}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,.12)]">
                  <Star size={12} className="text-amber-400" fill="currentColor" />
                  <span className="text-[12px] font-bold text-[#1D4338]">{doc.rating}</span>
                  <span className="text-[11px] text-[#6F7D77]">({doc.reviews})</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-1.5 text-[16px] font-bold text-[#1D4338]">
                  {doc.name}
                  <BadgeCheck size={16} className="text-[#2D6655]" />
                </h3>
                <p className="mt-1 text-[13px] text-[#6C9B82]">{doc.specialty}</p>
                <div className="mt-4 flex items-center justify-between border-t border-[#EEF8F2] pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF8F2] px-3 py-1 text-[11px] font-semibold text-[#2D6655]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {doc.experience} Experience
                  </span>
                  <button className="text-[12px] font-semibold text-[#2D6655] transition-colors hover:text-[#1D4338]">
                    View Profile →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
