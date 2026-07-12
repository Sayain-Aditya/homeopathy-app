"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Leaf, ChevronRight, CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import { services } from "@/components/homepage/ServiceData";
import { fadeUp, staggerContainer, slideInRight } from "@/lib/animations";
import { use } from "react";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEF8F2]">

      {/* Navbar */}
      <section className="bg-[#EEF8F2]">
        <Container>
          <div className="pt-5">
            <Navbar />
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
              <Link href="/services" className="hover:text-[#2D6655] transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-[#1D4338] font-semibold">{service.title}</span>
            </motion.div>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              {/* Left */}
              <motion.div variants={staggerContainer} initial="hidden" animate="show">
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]"
                >
                  <Leaf size={11} />
                  Our Services
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#1D4338] sm:text-[44px] lg:text-[56px]"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-2 text-[18px] font-medium italic"
                  style={{ color: service.accent }}
                >
                  {service.tagline}
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-[500px] text-[15px] leading-[1.9] text-[#6F7D77]"
                >
                  {service.overview}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_4px_20px_rgba(29,67,56,.20)] transition-shadow hover:shadow-[0_12px_32px_rgba(29,67,56,.30)]"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 rounded-[999px] border border-[#C8E6D4] bg-white px-7 py-3.5 text-[13px] font-semibold text-[#1D4338] transition-all hover:bg-[#EEF8F2]"
                  >
                    <ArrowLeft size={14} />
                    All Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right — icon card */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="show"
                className="flex justify-center lg:justify-end"
              >
                <div
                  className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,.10)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
                  style={{ background: service.bg }}
                >
                  <Icon size={120} style={{ color: service.accent }} strokeWidth={1.2} />
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[999px] bg-white px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,.10)]">
                    <p className="text-[12px] font-bold text-[#1D4338]">{service.conditions.length}+ Conditions Treated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Conditions We Treat */}
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
            <motion.p variants={fadeUp} className="mt-2 max-w-[480px] text-[14px] leading-7 text-[#6F7D77]">
              We provide homeopathic care for a wide range of conditions under {service.title.toLowerCase()}.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {service.conditions.map((condition) => (
                <motion.div
                  key={condition}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-[16px] border border-[#F0F7F3] bg-[#F9FDFB] px-5 py-4"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: service.bg }}
                  >
                    <CheckCircle2 size={15} style={{ color: service.accent }} />
                  </div>
                  <span className="text-[13px] font-semibold text-[#1D4338]">{condition}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* How Homeopathy Helps */}
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

            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-6 sm:grid-cols-3"
            >
              {service.howItHelps.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(29,67,56,.12)" }}
                  className="rounded-[24px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,.05)]"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl text-[16px] font-extrabold text-white"
                    style={{ background: `linear-gradient(135deg, #1D4338, #2D6655)` }}
                  >
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

      {/* What to Expect */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
                The Process
              </motion.span>
              <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold text-[#1D4338] lg:text-[40px]">
                What to Expect
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-2 text-[14px] leading-7 text-[#6F7D77]">
                Here&apos;s a step-by-step look at your treatment journey with us.
              </motion.p>

              <motion.ol variants={staggerContainer} className="mt-8 space-y-5">
                {service.whatToExpect.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold text-white"
                      style={{ background: service.accent }}
                    >
                      {i + 1}
                    </div>
                    <p className="pt-1 text-[14px] leading-6 text-[#1D4338]">{step}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] px-8 py-12"
              style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
            >
              <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
              <div className="relative">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: service.bg }}
                >
                  <Icon size={28} style={{ color: service.accent }} />
                </div>
                <h3 className="mt-5 text-[24px] font-extrabold text-white">
                  Ready to Start Your<br />{service.title} Treatment?
                </h3>
                <p className="mt-3 text-[13px] leading-7 text-white/70">
                  Book a consultation with Dr. Asmita Shekhar and get a personalized treatment plan tailored to your needs.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-[999px] bg-white px-8 py-4 text-[14px] font-bold text-[#1D4338] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="tel:6394886307"
                    className="flex items-center justify-center gap-2 rounded-[999px] border border-white/30 px-8 py-4 text-[14px] font-semibold text-white transition-all hover:bg-white/10"
                  >
                    <Phone size={14} />
                    Call: 6394886307
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Other Services */}
      <section className="bg-[#EEF8F2] py-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h2 variants={fadeUp} className="text-[28px] font-extrabold text-[#1D4338]">
              Explore Other Services
            </motion.h2>
            <motion.div variants={staggerContainer} className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <motion.div
                    key={s.slug}
                    variants={fadeUp}
                    whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,.08)" }}
                    className="group rounded-[20px] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,.05)] transition-shadow duration-300"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: s.bg }}
                    >
                      <OtherIcon size={20} style={{ color: s.accent }} />
                    </div>
                    <h3 className="mt-4 text-[14px] font-bold text-[#1D4338]">{s.title}</h3>
                    <p className="mt-1 text-[12px] leading-5 text-[#6F7D77]">{s.desc}</p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-4 flex items-center gap-1 text-[12px] font-semibold transition-colors"
                      style={{ color: s.accent }}
                    >
                      Learn More <ChevronRight size={12} />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-[999px] border border-[#C8E6D4] bg-white px-7 py-3 text-[13px] font-semibold text-[#1D4338] transition-all hover:bg-[#EEF8F2]"
              >
                View All Services <ChevronRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
