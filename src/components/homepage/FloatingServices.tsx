"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./ServiceData";
import { fadeUp, staggerFast } from "@/lib/animations";

export default function FloatingServices() {
  return (
    <div className="pb-10 pt-2">
      <motion.div
        className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6"
        variants={staggerFast}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeUp}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
