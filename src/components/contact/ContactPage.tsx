"use client";

import { motion } from "framer-motion";
import { Leaf, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/homepage/Footer";
import { fadeUp, staggerContainer, slideInRight } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "6394886307",
    sub: "Mon – Sat, Evening 5–7 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@naivedyahomeo.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Consultation",
    value: "Offline & Online",
    sub: "In-clinic or video call",
  },
  {
    icon: Clock,
    label: "Timing",
    value: "Evening 5 – 7 PM",
    sub: "Sunday Closed",
  },
];

const faqs = [
  { q: "Is the first consultation free?", a: "Yes, we offer a free initial consultation to understand your health concerns." },
  { q: "Do you offer online consultations?", a: "Absolutely. We provide both in-clinic and video consultations." },
  { q: "How long does a session take?", a: "A typical session lasts 30–45 minutes depending on the case." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEF8F2]">

      {/* ── Hero / Header ── */}
      <section className="bg-[#EEF8F2]">
        <Container>
          <div className="pt-5">
            <Navbar variant="light" />
          </div>
        </Container>

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="py-10 text-center sm:py-16"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]"
            >
              <Leaf size={11} />
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#1D4338] sm:text-[48px] lg:text-[64px]"
            >
              We&apos;d Love to
              <br />
              <span className="text-[#2D6655]">Hear From You</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.9] text-[#6F7D77]"
            >
              Reach out to book a consultation, ask a question, or simply learn
              more about how homeopathy can help you.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="bg-[#EEF8F2] pb-6 pt-2 sm:pt-0">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(29,67,56,.12)" }}
                className="group rounded-[24px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.05)] transition-shadow duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF8F2] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} className="text-[#2D6655]" />
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[2px] text-[#7CA18E]">{label}</p>
                <p className="mt-1 text-[15px] font-bold text-[#1D4338]">{value}</p>
                <p className="mt-0.5 text-[12px] text-[#6F7D77]">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Form + FAQ ── */}
      <section className="bg-[#EEF8F2] py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-[32px] bg-white p-8 shadow-[0_4px_32px_rgba(29,67,56,.08)] lg:p-10"
            >
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#7CA18E]">Send a Message</p>
              <h2 className="mt-2 text-[30px] font-extrabold leading-tight text-[#1D4338]">
                Book or Enquire
              </h2>
              <p className="mt-2 text-[13px] leading-7 text-[#6F7D77]">
                Fill in the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center gap-4 rounded-[20px] bg-[#EEF8F2] py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-[#2D6655]" />
                  <p className="text-[18px] font-bold text-[#1D4338]">Message Sent!</p>
                  <p className="text-[13px] text-[#6F7D77]">We&apos;ll reach out to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#1D4338]">Full Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-[14px] border border-[#D5EEE0] bg-[#F7FCF9] px-4 py-3 text-[13px] text-[#1D4338] outline-none placeholder:text-[#A8C4B4] focus:border-[#2D6655] focus:ring-2 focus:ring-[#2D6655]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#1D4338]">Phone Number</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Your phone"
                        className="w-full rounded-[14px] border border-[#D5EEE0] bg-[#F7FCF9] px-4 py-3 text-[13px] text-[#1D4338] outline-none placeholder:text-[#A8C4B4] focus:border-[#2D6655] focus:ring-2 focus:ring-[#2D6655]/10 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#1D4338]">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-[14px] border border-[#D5EEE0] bg-[#F7FCF9] px-4 py-3 text-[13px] text-[#1D4338] outline-none placeholder:text-[#A8C4B4] focus:border-[#2D6655] focus:ring-2 focus:ring-[#2D6655]/10 transition"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#1D4338]">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your health concern or question…"
                      className="w-full resize-none rounded-[14px] border border-[#D5EEE0] bg-[#F7FCF9] px-4 py-3 text-[13px] text-[#1D4338] outline-none placeholder:text-[#A8C4B4] focus:border-[#2D6655] focus:ring-2 focus:ring-[#2D6655]/10 transition"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] py-4 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(29,67,56,.20)] transition-shadow hover:shadow-[0_12px_32px_rgba(29,67,56,.30)]"
                  >
                    <Send size={15} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right — CTA banner + FAQ */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6"
            >
              {/* CTA Banner */}
              <div
                className="relative overflow-hidden rounded-[32px] px-8 py-10"
                style={{ background: "linear-gradient(135deg, #1D4338 0%, #2D6655 60%, #3D7A65 100%)" }}
              >
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
                <div aria-hidden className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #A8D5B5, transparent 70%)" }} />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#A8D5B5]">
                    <Leaf size={10} />
                    Free Consultation
                  </span>
                  <h3 className="mt-4 text-[26px] font-extrabold leading-tight text-white">
                    Start Your Healing
                    <br />Journey Today
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-white/70">
                    Talk to Dr. Asmita Shekhar and get a personalized treatment plan tailored to your needs.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 rounded-[999px] bg-white px-6 py-3 text-[13px] font-bold text-[#1D4338] transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.20)]"
                    >
                      <Phone size={13} />
                      Call Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 rounded-[999px] border border-white/30 px-6 py-3 text-[13px] font-semibold text-white transition-all hover:bg-white/10"
                    >
                      <Mail size={13} />
                      Email Us
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-[32px] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,.05)]">
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#7CA18E]">Quick Answers</p>
                <h3 className="mt-1 text-[20px] font-extrabold text-[#1D4338]">Common Questions</h3>
                <div className="mt-6 space-y-5">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="border-b border-[#EEF8F2] pb-5 last:border-0 last:pb-0">
                      <p className="text-[14px] font-bold text-[#1D4338]">{q}</p>
                      <p className="mt-1.5 text-[13px] leading-6 text-[#6F7D77]">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
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
              We are available for in-clinic consultations Monday to Saturday, Evening 5–7 PM. Sunday Closed.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 overflow-hidden rounded-[28px] shadow-[0_8px_40px_rgba(29,67,56,.12)]"
            >
              <iframe
                src="https://maps.google.com/maps?q=26.831469889494166,80.94801356770901&z=17&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Naivedya Homoeopathy Clinic Location"
              />
            </motion.div>

            {/* Info row below map */}
            <motion.div variants={fadeUp} className="mt-6 grid gap-4 sm:grid-cols-4">
              {[
                { icon: MapPin, label: "Location",     value: "Lucknow, Uttar Pradesh" },
                { icon: Clock,  label: "Timing",       value: "Mon–Sat · Evening 5–7 PM" },
                { icon: Phone,  label: "Phone",        value: "6394886307" },
                { icon: Mail,   label: "Email",        value: "care@naivedyahomeo.com" },
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
