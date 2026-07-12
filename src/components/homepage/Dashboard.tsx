"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, ThumbsUp, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
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
    <section className="bg-[#F5FBF7] py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%]">

          {/* Left — stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 shadow-[0_2px_12px_rgba(29,67,56,.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#2D6655]">Our Impact</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#0D2B22] sm:text-[44px] lg:text-[52px]">
              Healing Lives,
              <br />
              <span className="text-[#2D6655]">Every Single Day</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-[420px] text-[15px] leading-[1.9] text-[#6F7D77]">
              Our results speak for themselves. Thousands of patients have found
              lasting relief through personalized homeopathic care.
            </motion.p>

            <motion.div className="mt-8 grid grid-cols-2 gap-4" variants={staggerContainer}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(29,67,56,.10)" }}
                    className="group rounded-[20px] border border-[#E8F5EE] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,.04)] transition-all duration-300"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF8F2] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={17} className="text-[#2D6655]" />
                    </div>
                    <p className="mt-3 text-[36px] font-extrabold leading-none text-[#0D2B22]">
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
            className="rounded-[32px] border border-[#E8F5EE] bg-white p-8 shadow-[0_8px_48px_rgba(29,67,56,.08)]"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF8F2] px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-[#2D6655]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Accepting New Patients
            </span>

            <h3 className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-0.5px] text-[#0D2B22]">
              Ready to Start
              <br />
              Your Healing Journey?
            </h3>

            <p className="mt-3 text-[14px] leading-7 text-[#6F7D77]">
              Book a consultation with our expert homeopaths and receive a
              personalized treatment plan within 24 hours.
            </p>

            <div className="mt-5 space-y-3 rounded-[20px] bg-[#F5FBF7] p-4">
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
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {label}
                  </div>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#2D6655] shadow-[0_1px_4px_rgba(0,0,0,.06)]">
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] py-3.5 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(29,67,56,.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(29,67,56,.35)]"
            >
              Book Consultation <ArrowRight size={15} />
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
