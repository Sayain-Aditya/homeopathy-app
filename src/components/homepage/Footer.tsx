"use client";

import { Globe, Mail, Share2, MessageCircle, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const nav = [
  {
    heading: "Quick Links",
    items: [
      { label: "Home",       href: "/" },
      { label: "About Us",   href: "/about" },
      { label: "Services",   href: "/services" },
      { label: "Conditions", href: "/services" },
      { label: "Contact",    href: "/contact" },
    ],
  },
  {
    heading: "Treatments",
    items: [
      { label: "Child Development", href: "/services/neuro-child-development" },
      { label: "Mental Wellness",   href: "/services/mental-wellness" },
      { label: "Women's Health",    href: "/services/womens-health" },
      { label: "Skin Diseases",     href: "/services/skin-care" },
      { label: "Respiratory Care",  href: "/services/respiratory" },
      { label: "Digestive Health",  href: "/services/digestive-health" },
    ],
  },
  {
    heading: "Contact",
    items: [],
    contact: [
      { icon: Phone,  text: "6394886307",              href: "tel:6394886307" },
      { icon: Mail,   text: "naivedya.homeopathy@gmail.com",  href: "mailto:naivedya.homeopathy@gmail.com" },
      { icon: MapPin, text: "Avas Vikas Colony, Mall Avenue, Lucknow", href: "/contact" },
    ],
  },
];

const socials = [
  { icon: Globe,         label: "Website", href: "/" },
  { icon: MessageCircle, label: "Message", href: "https://wa.me/916394886307" },
  { icon: Mail,          label: "Email", href: "mailto:naivedya.homeopathy@gmail.com" },
  { icon: Share2,        label: "Contact", href: "/contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#1A2424", borderRadius: "32px 32px 0 0" }}
    >
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }}
        />
        {/* Top border glow */}
        <div
          className="absolute inset-x-0 top-0 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #6C9B82, transparent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 pt-8 lg:px-12">

        {/* Main row */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="min-w-[200px] max-w-[220px]">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.png" alt="Naivedya Homoeopathy" width={36} height={36} className="h-9 w-9 object-contain" />
              <div>
                <p className="text-[14px] font-bold leading-none text-white">NAIVEDYA</p>
                <p className="text-[8px] tracking-[2px] text-[#6C9B82]">ADVANCED HOMOEOPATHY CENTRE</p>
              </div>
            </Link>
            <p className="mt-4 text-[13px] leading-7 text-[#5A7070]">
              Naivedya Advanced Homeopathy Centre by Dr. Asmita Shekhar.
              Avas Vikas Colony, Mall Avenue, Lucknow.
              Evening 5–7 PM · Sunday Closed · Regn. No. H032158
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A3838] text-[#5A7070] transition-colors hover:border-[#2D6655] hover:bg-[#2D6655] hover:text-white"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {nav.map((col) => (
              <motion.div key={col.heading} variants={fadeUp}>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[3px] text-white/80">
                  {col.heading}
                </p>
                {col.contact ? (
                  <ul className="space-y-3">
                    {col.contact.map(({ icon: Icon, text, href }) => (
                      <li key={text} className="flex items-center gap-2.5">
                        <Link href={href} className="flex items-center gap-2.5 group">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#243030] transition-colors group-hover:bg-[#2D6655]">
                            <Icon size={12} className="text-[#6C9B82]" />
                          </div>
                          <span className="text-[12px] text-[#5A7070] transition-colors group-hover:text-[#6C9B82]">{text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[13px] text-[#5A7070] transition-colors hover:text-[#6C9B82]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <div className="mt-6 rounded-[20px] border border-[#243030] bg-[#1F2C2C] px-6 py-4 text-center">
          <p className="text-[14px] italic leading-8 text-[#5A7070]">
            &ldquo;Healing is not just about curing illness—it&apos;s about restoring balance, naturally.&rdquo;
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 border-t border-[#243030] pb-4 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-[12px] text-[#3A5050]">
              © 2025 Naivedya Advanced Homoeopathy Centre. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
