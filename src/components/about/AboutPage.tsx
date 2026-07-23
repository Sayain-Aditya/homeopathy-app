"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf, BadgeCheck, Phone, Mail, MapPin, Clock,
  GraduationCap, Heart, ShieldCheck,
  HeartHandshake, RefreshCw, Star, ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import { fadeUp, staggerContainer, slideInRight } from "@/lib/animations";

const credentials = [
  { icon: GraduationCap, label: "Homeopathic Consultant", sub: "Qualified Homoeopathic Practitioner" },
  { icon: ShieldCheck,   label: "Regn. No. H032158", sub: "Registered Homoeopathic Practitioner" },
];

const stats = [
  { value: "10,000+", label: "Patients Treated" },
  { value: "15+",     label: "Years Experience" },
  { value: "6+",      label: "Specializations" },
  { value: "95%",     label: "Patient Satisfaction" },
];

const values = [
  { icon: Leaf,           title: "Natural Healing",        desc: "We believe the body has an innate ability to heal. Our remedies work with nature, not against it." },
  { icon: HeartHandshake, title: "Compassionate Care",     desc: "Every patient is treated as a whole person — their emotions, lifestyle, and history all matter." },
  { icon: ShieldCheck,    title: "Safe for All Ages",      desc: "From newborns to senior citizens, our remedies are gentle, non-toxic, and free of side effects." },
  { icon: RefreshCw,      title: "Root Cause Treatment",   desc: "We don't just suppress symptoms. We find and treat the underlying cause for lasting wellness." },
  { icon: Heart,          title: "Patient-First Approach", desc: "Your comfort, trust, and recovery are our top priority in every consultation." },
  { icon: Award,          title: "Proven Results",         desc: "Over 10,000 patients have experienced real, lasting improvement through our personalized care." },
];

const timeline = [
  { year: "2009", title: "Clinic Founded",          desc: "Naivedya Advanced Homoeopathy Centre was established with a vision to bring natural healing to every home." },
  { year: "2012", title: "Expanded Specializations", desc: "Added dedicated care for women's health, pediatrics, and mental wellness." },
  { year: "2016", title: "Online Consultations",     desc: "Launched online consultation services to reach patients across India." },
  { year: "2020", title: "10,000 Patients Milestone",desc: "Crossed 10,000 successfully treated patients — a testament to trust and results." },
  { year: "2024", title: "Digital Presence",         desc: "Launched our digital platform to make booking, follow-ups, and health guidance more accessible." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEF8F2]">

      {/* ── Navbar ── */}
      <section className="bg-[#EEF8F2]">
        <Container>
          <div className="pt-5">
            <Navbar variant="light" />
          </div>
        </Container>

        {/* ── Hero ── */}
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
              About Us
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#1D4338] sm:text-[48px] lg:text-[64px]"
            >
              Healing with Heart,
              <br />
              <span className="text-[#2D6655]">Rooted in Nature</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.9] text-[#6F7D77]"
            >
              Naivedya Advanced Homoeopathy Centre is a trusted name in natural
              healing — combining classical homeopathy with modern clinical
              understanding to deliver lasting results.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white py-10">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-[32px] font-extrabold leading-none text-[#1D4338] sm:text-[40px]">{value}</p>
                <p className="mt-2 text-[13px] text-[#6C9B82]">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-[#EEF8F2] py-20">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left — story text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
                <Leaf size={11} />
                Our Story
              </motion.span>
              <motion.h2 variants={fadeUp} className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-1px] text-[#1D4338] sm:text-[36px] lg:text-[44px]">
                A Clinic Built on
                <br />Trust & Natural Care
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-[14px] leading-8 text-[#6F7D77]">
                Naivedya Advanced Homoeopathy Centre was founded with a single
                purpose — to offer genuine, effective, and compassionate homeopathic
                care to every patient who walks through our doors.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 text-[14px] leading-8 text-[#6F7D77]">
                Over the years, we have grown from a small clinic into a trusted
                healthcare destination for thousands of families. Our approach has
                always remained the same: listen deeply, treat holistically, and
                heal naturally.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 text-[14px] leading-8 text-[#6F7D77]">
                We offer both offline and online consultations, making quality
                homeopathic care accessible to patients across India — all on prior
                appointment, Monday to Saturday, Evening 5–7 PM.
              </motion.p>

              {/* Clinic info pills */}
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Clock,  text: "Evening 5–7 PM · Sun Closed" },
                  { icon: Phone,  text: "6394886307" },
                  { icon: Mail,   text: "naivedya.homeopathy@gmail.com" },
                  { icon: MapPin, text: "Offline & Online" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 rounded-[999px] border border-[#C8E6D4] bg-white px-4 py-2 text-[12px] font-medium text-[#1D4338]">
                    <Icon size={12} className="text-[#2D6655]" />
                    {text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — timeline */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              {/* Vertical line */}
              <div className="absolute left-5 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#C8E6D4] to-transparent" />

              <div className="space-y-8 pl-14">
                {timeline.map(({ year, title, desc }) => (
                  <div key={year} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-9 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1D4338] to-[#2D6655]">
                      <span className="text-[9px] font-bold text-white">{year.slice(2)}</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#7CA18E]">{year}</p>
                    <h3 className="mt-0.5 text-[15px] font-bold text-[#1D4338]">{title}</h3>
                    <p className="mt-1 text-[13px] leading-6 text-[#6F7D77]">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── Meet the Doctor ── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left — doctor image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(18,45,36,.15)]">
                <Image
                  src="/images/Profile image.png"
                  alt="Dr. Asmita Shekhar"
                  width={600}
                  height={520}
                  className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              {/* Floating credential badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 left-6 rounded-[20px] bg-white px-6 py-4 shadow-[0_8px_40px_rgba(29,67,56,.15)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1D4338] to-[#2D6655]">
                    <Leaf size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1D4338]">Dr. Asmita Shekhar</p>
                    <p className="text-[11px] text-[#6C9B82]">Homeopathic Consultant</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
                  ))}
                  <span className="ml-1 text-[11px] text-[#6F7D77]">4.9 · 10,000+ patients</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — doctor info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
                Meet the Doctor
              </motion.span>

              <motion.h2 variants={fadeUp} className="mt-4 text-[28px] font-extrabold leading-tight tracking-[-1px] text-[#1D4338] sm:text-[36px] lg:text-[44px]">
                Dr. Asmita Shekhar
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-1 text-[15px] font-medium text-[#2D6655]">
                Homeopathic Consultant · Specialist in Chronic Diseases
              </motion.p>

              <motion.p variants={fadeUp} className="mt-4 text-[14px] leading-8 text-[#6F7D77]">
                Dr. Asmita Shekhar is the founder and lead consultant at Naivedya
                Advanced Homoeopathy Centre. With over 15 years of clinical
                experience, she has helped thousands of patients find lasting relief
                from chronic, acute, and lifestyle-related conditions.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-3 text-[14px] leading-8 text-[#6F7D77]">
                Her approach is deeply patient-centric — she takes time to understand
                not just the disease, but the person behind it. Every prescription is
                carefully individualized, considering the patient's physical symptoms,
                emotional state, and personal history.
              </motion.p>

              {/* Credentials grid */}
              <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-3">
                {credentials.map(({ icon: Icon, label, sub }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-[16px] border border-[#EEF8F2] bg-[#F9FDFB] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF8F2]">
                      <Icon size={16} className="text-[#2D6655]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#1D4338]">{label}</p>
                      <p className="mt-0.5 text-[11px] leading-4 text-[#6F7D77]">{sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_4px_20px_rgba(29,67,56,.20)] transition-shadow hover:shadow-[0_12px_32px_rgba(29,67,56,.30)]"
                >
                  Book a Consultation
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

          </div>
        </Container>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-[#EEF8F2] py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <Leaf size={11} />
              What We Stand For
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-[28px] font-extrabold tracking-[-1px] text-[#1D4338] sm:text-[36px] lg:text-[44px]">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-[460px] text-[14px] leading-7 text-[#6F7D77]">
              Everything we do is guided by these principles — from the first
              consultation to the last follow-up.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(29,67,56,.12)" }}
                className={`rounded-[24px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300 ${i === 1 || i === 3 ? "lg:mt-5" : ""}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF8F2]">
                  <Icon size={22} className="text-[#2D6655]" />
                </div>
                <h3 className="mt-5 text-[15px] font-bold text-[#1D4338]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#6F7D77]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEF8F2] pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] px-6 py-12 text-center sm:rounded-[40px] sm:px-8 sm:py-16 lg:px-20"
            style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
          >
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A8D5B5, transparent 70%)" }} />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#A8D5B5]">Start Your Journey</p>
              <h2 className="mt-3 text-[32px] font-extrabold text-white lg:text-[42px]">
                Experience the Naivedya Difference
              </h2>
              <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-7 text-white/70">
                Book a consultation with Dr. Asmita Shekhar and take the first step
                toward natural, lasting health.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-[999px] bg-white px-8 py-3.5 text-[14px] font-bold text-[#1D4338] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-[999px] border border-white/30 px-8 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  Our Services <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Map Section ── */}
      <section className="bg-white py-16">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <MapPin size={11} />
              Find Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 text-[32px] font-extrabold text-[#1D4338] lg:text-[40px]">
              Visit the Clinic
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-[14px] leading-7 text-[#6F7D77]">
              We are available for in-clinic consultations Monday to Saturday, Evening 5–7 PM.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 overflow-hidden rounded-[28px] shadow-[0_8px_40px_rgba(29,67,56,.12)]"
            >
              <iframe
                src="https://maps.google.com/maps?q=26.831469889494166,80.94801356770901&z=17&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Naivedya Homoeopathy Clinic Location"
              />
            </motion.div>

            {/* Info row below map */}
            <motion.div variants={fadeUp} className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Location",  value: "Lucknow, Uttar Pradesh" },
                { icon: Clock,  label: "Timing",    value: "Mon–Sat · Evening 5–7 PM" },
                { icon: Phone,  label: "Phone",     value: "6394886307" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-[20px] border border-[#EEF8F2] bg-[#F9FDFB] px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF8F2]">
                    <Icon size={18} className="text-[#2D6655]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#7CA18E]">{label}</p>
                    <p className="mt-0.5 text-[13px] font-semibold text-[#1D4338]">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
