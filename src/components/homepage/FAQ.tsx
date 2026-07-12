"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  { q: "Is homeopathy safe?",                         a: "Yes. Homeopathic medicines are gentle, non-invasive, and generally considered safe when prescribed by a qualified practitioner." },
  { q: "How long does treatment take?",               a: "The duration depends on the condition, its severity, and individual response. Acute conditions may improve quickly, while chronic illnesses often require longer-term care." },
  { q: "Can children take homeopathic medicines?",    a: "Absolutely. Homeopathy is widely used for infants and children because of its gentle nature." },
  { q: "Do homeopathic medicines have side effects?", a: "When taken under professional guidance, homeopathic medicines are generally well tolerated with minimal to no side effects." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[40%_60%]">

          {/* Left */}
          <motion.div
            className="lg:sticky lg:top-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C8E6D4] bg-[#F5FBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#2D6655]">
              <HelpCircle size={11} />
              FAQ
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#1D4338] sm:text-[42px] lg:text-[50px]">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-[15px] leading-[1.9] text-[#6F7D77]">
              Have more questions? Feel free to reach out to our team — we&apos;re
              happy to help you on your healing journey.
            </motion.p>
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 flex items-center gap-2 rounded-[999px] border border-[#6C9B82] px-6 py-3 text-[13px] font-semibold text-[#1D4338] transition-all duration-200 hover:bg-[#1D4338] hover:text-white"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden rounded-[20px] border transition-colors duration-300 ${
                  open === i
                    ? "border-[#C8E6D4] bg-[#F9FDFB] shadow-[0_4px_24px_rgba(29,67,56,.08)]"
                    : "border-[#F0F7F3] bg-white shadow-[0_2px_8px_rgba(0,0,0,.04)]"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-7 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-[#1D4338]">{faq.q}</span>
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
  );
}
