"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, ThumbsUp, Activity } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  { icon: Award,    value: 15,  suffix: "+",  label: "Years Experience",     desc: "Of clinical homeopathic practice" },
  { icon: Users,    value: 10,  suffix: "K+", label: "Happy Patients",       desc: "Across all age groups and conditions" },
  { icon: ThumbsUp, value: 95,  suffix: "%",  label: "Patient Satisfaction", desc: "Based on post-treatment surveys" },
  { icon: Activity, value: 50,  suffix: "+",  label: "Conditions Treated",   desc: "From chronic to acute ailments" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, count, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Dashboard() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">

          {/* Left — stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              Our Impact
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold leading-[1.05] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[52px]">
              Healing Lives,
              <br />
              Every Single Day
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-[420px] text-[15px] leading-[1.9] text-[#6F7D77]">
              Our results speak for themselves. Thousands of patients have found
              lasting relief through personalized homeopathic care.
            </motion.p>

            <motion.div
              className="mt-6 grid grid-cols-2 gap-3"
              variants={staggerContainer}
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    whileHover={{ y: -4, borderColor: "#C8E6D4", boxShadow: "0 12px 40px rgba(29,67,56,.08)" }}
                    className="group rounded-[20px] border border-[#EEF8F2] bg-[#F9FDFB] p-5 transition-colors duration-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF8F2] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={17} className="text-[#2D6655]" />
                    </div>
                    <p className="mt-3 text-[32px] font-extrabold leading-none text-[#1D4338] sm:text-[40px]">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1.5 text-[13px] font-semibold text-[#1D4338]">{s.label}</p>
                    <p className="mt-1 text-[12px] leading-5 text-[#6F7D77]">{s.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[32px] border border-[#E8F5EE] bg-[#F9FDFB] p-6 shadow-[0_4px_32px_rgba(29,67,56,.07)]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF8F2] px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-[#2D6655]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Accepting New Patients
            </span>

            <h3 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-0.5px] text-[#1D4338]">
              Ready to Start
              <br />
              Your Healing Journey?
            </h3>

            <p className="mt-4 text-[14px] leading-7 text-[#6F7D77]">
              Book a consultation with our expert homeopaths and receive a
              personalized treatment plan within 24 hours.
            </p>

            <div className="mt-4 space-y-3 rounded-[20px] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,.04)]">
              {[
                ["Initial Consultation", "60 min"],
                ["Follow-up Session", "30 min"],
                ["Emergency Consultation", "Same Day"],
              ].map(([label, time], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                  className="flex items-center justify-between text-[13px]"
                >
                  <div className="flex items-center gap-2.5 text-[#2D6655]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#6C9B82]" />
                    {label}
                  </div>
                  <span className="rounded-full bg-[#EEF8F2] px-2.5 py-0.5 text-[11px] font-semibold text-[#2D6655]">
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-7">
              <Button className="w-full justify-center">Book Consultation</Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
