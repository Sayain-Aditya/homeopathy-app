"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Star, ShieldCheck } from "lucide-react";
import type { Variants } from "framer-motion";

const floatA: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatB: Variants = {
  animate: {
    y: [0, -7, 0],
    rotate: [0, 3, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function DoctorComposition() {
  return (
    <motion.div
      className="relative w-full pb-8 pt-4"
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Glow behind image */}
      <div
        className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #2D6655, transparent 70%)" }}
      />

      {/* Main photo card */}
      <motion.div
        className="relative overflow-hidden rounded-[32px] shadow-[0_32px_80px_rgba(0,0,0,.5)]"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#0D2B22]/80 to-transparent" />

        <Image
          src="/images/doctor.png"
          alt="Dr. Asmita Shekhar"
          width={600}
          height={520}
          className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[480px]"
          priority
        />

        {/* Name tag inside image */}
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
            <div>
              <p className="text-[13px] font-bold text-white">Dr. Asmita Shekhar</p>
              <p className="text-[11px] text-white/60">Homoeopathic Consultant</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-semibold text-emerald-300">Available</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — top left — patients */}
      <motion.div
        className="absolute -left-4 top-10 z-20 sm:-left-8"
        variants={floatB}
        animate="animate"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0D2B22]/90 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,.4)] backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20">
            <Users size={16} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[16px] font-extrabold leading-none text-white">10K+</p>
            <p className="mt-0.5 text-[10px] text-white/50">Happy Patients</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — top right — rating */}
      <motion.div
        className="absolute -right-4 top-16 z-20 sm:-right-8"
        variants={floatA}
        animate="animate"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0D2B22]/90 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,.4)] backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20">
            <Star size={16} className="text-amber-400" fill="currentColor" />
          </div>
          <div>
            <p className="text-[16px] font-extrabold leading-none text-white">4.9</p>
            <p className="mt-0.5 text-[10px] text-white/50">Patient Rating</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — bottom right — experience */}
      <motion.div
        className="absolute -right-4 bottom-4 z-20 sm:-right-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0D2B22]/90 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,.4)] backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20">
            <ShieldCheck size={16} className="text-blue-400" />
          </div>
          <div>
            <p className="text-[16px] font-extrabold leading-none text-white">15+</p>
            <p className="mt-0.5 text-[10px] text-white/50">Years Experience</p>
          </div>
        </div>
      </motion.div>

      {/* Leaf 1 */}
      <motion.div
        className="absolute -bottom-2 -left-6 z-10 opacity-60"
        variants={floatB}
        animate="animate"
      >
        <Image src="/images/leaf-1.png" alt="" width={80} height={80}
          style={{ mixBlendMode: "screen" }} />
      </motion.div>

      {/* Leaf 2 */}
      <motion.div
        className="absolute -right-4 top-2 z-10 opacity-60"
        variants={floatA}
        animate="animate"
      >
        <Image src="/images/leaf-2.png" alt="" width={60} height={60}
          style={{ mixBlendMode: "screen" }} />
      </motion.div>
    </motion.div>
  );
}
