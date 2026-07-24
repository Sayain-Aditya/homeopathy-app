"use client";

import { motion } from "framer-motion";
import { Leaf, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import { services } from "@/components/homepage/ServiceData";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ServicesClient() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEF8F2]">

      {/* Navbar */}
      <section className="bg-[#EEF8F2]">
        <Container>
          <div className="pt-5">
            <Navbar variant="light" />
          </div>
        </Container>

        {/* Hero */}
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="py-16 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]"
            >
              <Leaf size={11} />
              What We Offer
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#1D4338] sm:text-[48px] lg:text-[64px]"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[500px] text-[15px] leading-[1.9] text-[#6F7D77]"
            >
              Personalized homeopathic care for every stage of life — from chronic
              conditions to mental wellness, skin health, and beyond.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16">
        <Container>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 20px 56px rgba(0,0,0,.10)" }}
                  className="group relative overflow-hidden rounded-[28px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300 border border-[#F0F7F3]"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: service.accent }}
                  />

                  {/* Icon */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: service.bg }}
                  >
                    <Icon size={26} style={{ color: service.accent }} />
                  </div>

                  <h2 className="mt-5 text-[18px] font-extrabold text-[#1D4338]">{service.title}</h2>
                  <p className="mt-1 text-[13px] font-medium italic" style={{ color: service.accent }}>{service.tagline}</p>
                  <p className="mt-3 text-[13px] leading-6 text-[#6F7D77]">{service.overview.slice(0, 120)}…</p>

                  {/* Conditions preview */}
                  <ul className="mt-5 space-y-2">
                    {service.conditions.slice(0, 4).map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[12px] text-[#6F7D77]">
                        <CheckCircle2 size={13} style={{ color: service.accent }} className="shrink-0" />
                        {c}
                      </li>
                    ))}
                    {service.conditions.length > 4 && (
                      <li className="text-[12px] font-semibold" style={{ color: service.accent }}>
                        +{service.conditions.length - 4} more conditions
                      </li>
                    )}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 flex items-center gap-1.5 text-[13px] font-bold transition-colors duration-200"
                    style={{ color: service.accent }}
                  >
                    View Full Details <ChevronRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#EEF8F2] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[40px] px-8 py-16 text-center lg:px-20"
            style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
          >
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A8D5B5, transparent 70%)" }} />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#A8D5B5]">Not Sure Where to Start?</p>
              <h2 className="mt-3 text-[32px] font-extrabold text-white lg:text-[42px]">
                Book a Free Consultation
              </h2>
              <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-7 text-white/70">
                Dr. Asmita Shekhar will assess your condition and recommend the right treatment path for you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-[999px] bg-white px-8 py-3.5 text-[14px] font-bold text-[#1D4338] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-[999px] border border-white/30 px-8 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
