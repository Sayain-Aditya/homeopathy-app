"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-gradient-to-r from-[#1D4338] via-[#2D6655] to-[#6C9B82]"
    />
  );
}
