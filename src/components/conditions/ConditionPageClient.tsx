"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronRight, Leaf, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { ConditionPage } from "@/lib/conditionPages";

export default function ConditionPageClient({ page }: { page: ConditionPage }) {
  const [open, setOpen] = useState<number | null>(0);
  const Icon = page.icon;

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
            className="py-14"
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-[12px] text-[#6F7D77]">
              <Link href="/" className="hover:text-[#2D6655] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-[#1D4338] font-semibold">{page.title}</span>
            </motion.div>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              {/* Left */}
              <motion.div variants={staggerContainer} initial="hidden" animate="show">
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]"
                >
                  <Leaf size={11} />
                  Homeopathy in Lucknow
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#1D4338] sm:text-[44px] lg:text-[52px]"
                >
                  {page.h1}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-2 text-[18px] font-medium italic"
                  style={{ color: page.accent }}
                >
                  {page.tagline}
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-[500px] text-[15px] leading-[1.9] text-[#6F7D77]"
                >
                  {page.overview}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_4px_20px_rgba(29,67,56,.20)] transition-shadow hover:shadow-[0_12px_32px_rgba(29,67,56,.30)]"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="tel:6394886307"
                    className="flex items-center gap-2 rounded-[999px] border border-[#C8E6D4] bg-white px-7 py-3.5 text-[13px] font-semibold text-[#1D4338] transition-all hover:bg-[#EEF8F2]"
                  >
                    <Phone size={13} />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>

              {/* Right — icon card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex justify-center lg:justify-end"
              >
                <div
                  className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,.10)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
                  style={{ background: page.bg }}
                >
                  <Icon size={120} style={{ color: page.accent }} strokeWidth={1.2} />
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[999px] bg-white px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,.10)]">
                    <p className="text-[12px] font-bold text-[#1D4338]">{page.symptoms.length}+ Symptoms Treated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Symptoms */}
      <section className="bg-white py-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              Conditions
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold text-[#1D4338] lg:text-[40px]">
              What We Treat
            </motion.h2>

            <motion.div variants={staggerContainer} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.symptoms.map((s) => (
                <motion.div
                  key={s}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-[16px] border border-[#F0F7F3] bg-[#F9FDFB] px-5 py-4"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: page.bg }}
                  >
                    <CheckCircle2 size={15} style={{ color: page.accent }} />
                  </div>
                  <span className="text-[13px] font-semibold text-[#1D4338]">{s}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* How It Helps */}
      <section className="bg-[#EEF8F2] py-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <Leaf size={11} />
              The Approach
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold text-[#1D4338] lg:text-[40px]">
              How Homeopathy Helps
            </motion.h2>

            <motion.div variants={staggerContainer} className="mt-10 grid gap-6 sm:grid-cols-3">
              {page.howItHelps.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(29,67,56,.12)" }}
                  className="rounded-[24px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,.05)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-[16px] font-extrabold text-white" style={{ background: "linear-gradient(135deg, #1D4338, #2D6655)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold text-[#1D4338]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#6F7D77]">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[38%_62%]">
            <motion.div
              className="lg:sticky lg:top-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
                FAQ
              </motion.span>
              <motion.h2 variants={fadeUp} className="mt-5 text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#0D2B22] sm:text-[44px]">
                Frequently<br />Asked<br /><span className="text-[#2D6655]">Questions</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-[15px] leading-[1.9] text-[#6F7D77]">
                Have more questions about {page.title.toLowerCase()} treatment in Lucknow? We&apos;re happy to help.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-[999px] border border-[#2D6655] px-6 py-3 text-[13px] font-semibold text-[#1D4338] transition-all duration-200 hover:bg-[#1D4338] hover:text-white"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {page.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                    open === i
                      ? "border-[#C8E6D4] bg-white shadow-[0_4px_24px_rgba(29,67,56,.08)]"
                      : "border-[#E8F5EE] bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,.04)]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between px-7 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-[#0D2B22]">{faq.q}</span>
                    <motion.div
                      animate={{ backgroundColor: open === i ? "#1D4338" : "#EEF8F2" }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    >
                      <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={16} className={open === i ? "text-white" : "text-[#6C9B82]"} />
                      </motion.div>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="px-7 pb-6">
                          <p className="text-[14px] leading-7 text-[#6F7D77]">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Local Areas */}
      <section className="bg-[#EEF8F2] py-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <MapPin size={11} />
              Serving Lucknow
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[28px] font-extrabold text-[#1D4338]">
              Patients We Serve Across Lucknow
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-[14px] leading-7 text-[#6F7D77]">
              Naivedya Advanced Homoeopathy Centre is conveniently located at Avas Vikas Colony, Mall Avenue, Lucknow — serving patients from across the city.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3">
              {page.localAreas.map((area) => (
                <motion.span
                  key={area}
                  variants={fadeUp}
                  className="flex items-center gap-1.5 rounded-full border border-[#C8E6D4] bg-white px-4 py-2 text-[13px] font-semibold text-[#1D4338]"
                >
                  <MapPin size={11} className="text-[#2D6655]" />
                  {area}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-12 overflow-hidden rounded-[32px] px-8 py-12"
              style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
            >
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[22px] font-extrabold text-white">
                    Ready to Start Your {page.title} Treatment?
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-white/70">
                    Consult Dr. Asmita Shekhar at Naivedya Advanced Homoeopathy Centre, Lucknow.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-[999px] bg-white px-7 py-3.5 text-[13px] font-bold text-[#1D4338] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="tel:6394886307"
                    className="flex items-center justify-center gap-2 rounded-[999px] border border-white/30 px-7 py-3.5 text-[13px] font-semibold text-white transition-all hover:bg-white/10"
                  >
                    <Phone size={13} />
                    6394886307
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
