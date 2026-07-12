"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { services } from "./ServiceData";
import { fadeUp, staggerFast } from "@/lib/animations";

export default function FloatingServices() {
  return (
    <div className="pb-10 pt-6">
      {/* Stars row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-5 flex items-center gap-2 border-t border-white/10 pt-6"
      >
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
          ))}
        </div>
        <span className="text-[12px] text-white/40">4.9 / 5 · Based on 1,200+ reviews</span>
      </motion.div>

      {/* Cards grid with perspective tilt */}
      <div style={{ perspective: "1200px" }}>
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7"
          style={{ transformStyle: "preserve-3d", rotateX: 4 }}
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service, i) => {
            const total = services.length;
            const mid = (total - 1) / 2;
            const rotateY = ((i - mid) / mid) * -10;
            const translateZ = -Math.abs(i - mid) * 6;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="flex"
                style={{ rotateY, translateZ }}
              >
                <ServiceCard {...service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
