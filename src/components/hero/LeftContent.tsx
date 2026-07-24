"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const trust = [
  { icon: Users, label: "10,000+ Patients" },
  { icon: Clock, label: "Evening 5-7 PM" },
  { icon: ShieldCheck, label: "Homeopathy in Lucknow" },
];

export default function LeftContent() {
  return (
    <motion.div
      className="max-w-[580px]"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[3px] text-emerald-300">
          Now Accepting Patients
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-6 text-[38px] font-extrabold leading-[1.05] tracking-[-2px] text-white sm:text-[50px] lg:text-[64px]"
      >
        <strong>Best Homoeopathy</strong>
        <br />
        <span className="bg-gradient-to-r from-[#6C9B82] to-[#A8D5B5] bg-clip-text text-transparent">
          in Lucknow
        </span>
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2D6655] to-[#1D4338] text-[18px] font-bold text-white shadow-[0_0_20px_rgba(45,102,85,.5)]">
          A
        </div>
        <div>
          <p className="text-[15px] font-bold text-white">Dr. Asmita Shekhar</p>
          <p className="text-[12px] text-white/50">Homeopathic Consultant</p>
          <p className="mt-0.5 text-[12px] font-semibold text-emerald-400">
            Specialist in Chronic Diseases
          </p>
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-[460px] text-[15px] leading-[1.9] text-white/60"
      >
        Searching for <strong className="font-bold text-white/85">homeopathy in Lucknow</strong>? Get personalized homoeopathic care
        that treats the root cause - not just the symptoms. Safe, gentle,
        and available through offline &amp; online consultation.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="flex items-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#2D6655] to-[#3D7A65] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_0_30px_rgba(45,102,85,.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(45,102,85,.6)]"
        >
          Book Consultation
          <ArrowRight size={15} />
        </Link>
        <a
          href="tel:6394886307"
          className="flex items-center gap-2.5 rounded-[999px] border border-white/15 bg-white/5 px-7 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
        >
          <Phone size={14} />
          6394886307
        </a>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
        {trust.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
              <Icon size={13} className="text-emerald-400" />
            </div>
            <span className="text-[12px] font-medium text-white/50">
              {label === "Homeopathy in Lucknow" ? <strong>{label}</strong> : label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
