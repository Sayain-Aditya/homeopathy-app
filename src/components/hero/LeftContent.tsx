"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Clock, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const trust = [
  { icon: Users,       label: "10,000+ Patients" },
  { icon: Clock,       label: "Evening 5–7 PM" },
  { icon: ShieldCheck, label: "BHMS. CGO. CCH" },
];

export default function LeftContent() {
  return (
    <motion.div
      className="max-w-[560px] space-y-3"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Badge */}
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
          Advanced Homoeopathy Centre
        </span>
      </motion.div>

      {/* Clinic name */}
      <motion.h1
        variants={fadeUp}
      className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#1D4338] sm:text-[44px] lg:text-[60px]"
      >
        NAIVEDYA
        <br />
        <span className="text-[#2D6655]">HOMOEOPATHY</span>
        <br />
        <span className="text-[20px] font-medium tracking-normal italic text-[#4a8a6e] sm:text-[24px] lg:text-[32px]">
          Embrace Healing From Within
        </span>
      </motion.h1>

      {/* Doctor info */}
      <motion.div
        variants={fadeUp}
        className="mt-3 rounded-2xl border border-[#C8E6D4] bg-white/70 px-5 py-3"
      >
        <p className="text-[15px] font-bold text-[#1D4338]">Dr. Asmita Shekhar</p>
        <p className="text-[12px] text-[#6C9B82]">BHMS. CGO. CCH &nbsp;·&nbsp; Homoeopathic Consultant</p>
        <p className="mt-1 text-[12px] font-semibold text-[#2D6655]">
          Specialist in Chronic Diseases &nbsp;·&nbsp; Regn. No. H032158
        </p>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="mt-3 max-w-[460px] text-[15px] leading-[1.9] text-[#6F7D77]"
      >
        Personalized homoeopathic care that treats the root cause — not just the symptoms.
        Safe, gentle, and tailored to your unique health journey.
        Offline &amp; online consultation available on prior appointment.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-4">
        <Link href="/contact">
          <Button variant="secondary">Book Consultation</Button>
        </Link>
      </motion.div>

      {/* Trust row */}
      <motion.div variants={fadeUp} className="mt-3 flex flex-wrap items-center gap-4">
        {trust.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF8F2]">
              <Icon size={12} className="text-[#2D6655]" />
            </div>
            <span className="text-[12px] font-medium text-[#6F7D77]">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Stars */}
      <motion.div variants={fadeUp} className="mt-2 flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.07, type: "spring", stiffness: 300 }}
            >
              <Star size={13} className="text-amber-400" fill="currentColor" />
            </motion.span>
          ))}
        </div>
        <span className="text-[12px] text-[#6F7D77]">4.9/5 · <a href="tel:6394886307" className="hover:text-[#2D6655] transition-colors">Contact: 6394886307</a></span>
      </motion.div>
    </motion.div>
  );
}
