"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      className="relative w-full mt-0 lg:-mt-24"
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Main photo card */}
      <motion.div
        className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(18,45,36,.15)]"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/images/doctor.png"
          alt="Doctor consultation"
          width={600}
          height={520}
      className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
          priority
        />
      </motion.div>

      {/* Leaf 1 — bottom left */}
      <motion.div
        className="absolute -bottom-6 -left-8 z-10"
        variants={floatB}
        animate="animate"
      >
        <Image
          src="/images/leaf-1.png"
          alt=""
          width={90}
          height={90}
          style={{ mixBlendMode: "multiply" }}
        />
      </motion.div>

      {/* Leaf 2 — top right */}
      <motion.div
        className="absolute -right-6 top-4 z-10"
        variants={floatA}
        animate="animate"
      >
        <Image
          src="/images/leaf-2.png"
          alt=""
          width={70}
          height={70}
          style={{ mixBlendMode: "multiply" }}
        />
      </motion.div>

      {/* Bottle — bottom right */}
      <motion.div
        className="absolute -bottom-4 right-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/images/bottle.png"
          alt=""
          width={80}
          height={80}
          style={{ mixBlendMode: "multiply" }}
        />
      </motion.div>
    </motion.div>
  );
}
