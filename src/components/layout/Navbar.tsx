"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PhoneCall, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

interface NavbarProps {
  variant?: "dark" | "light";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isLight = variant === "light";

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const mobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ position: "fixed", top: 16, left: 16, right: 16, zIndex: 9999 }}
            className="rounded-[28px] bg-[#0D2B22] p-5 shadow-[0_24px_64px_rgba(0,0,0,.6)]"
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                <Image src="/images/logo.png" alt="Naivedya Homoeopathy" width={32} height={32} className="h-8 w-8 object-contain" />
                <div>
                  <p className="text-[14px] font-bold leading-none text-white">NAIVEDYA</p>
                  <p className="text-[8px] tracking-[3px] text-emerald-400">ADVANCED HOMOEOPATHY CENTRE</p>
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mb-3 h-px bg-white/10" />

            {/* Links */}
            <div className="flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`rounded-[14px] px-4 py-3 text-[14px] font-medium transition-all duration-200 ${
                    pathname === href
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] py-3 text-[13px] font-semibold text-white shadow-[0_0_24px_rgba(45,102,85,.4)]"
              >
                <PhoneCall size={13} />
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav
        className={`flex items-center justify-between rounded-[999px] px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          isLight
            ? `bg-white ${scrolled ? "shadow-[0_8px_40px_rgba(29,67,56,.12)]" : "shadow-[0_2px_16px_rgba(0,0,0,.06)]"}`
            : `border border-white/10 bg-white/5 backdrop-blur-md ${scrolled ? "bg-[#0D2B22]/80 shadow-[0_8px_40px_rgba(0,0,0,.3)]" : ""}`
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="Naivedya Homoeopathy" width={36} height={36} className="h-9 w-9 object-contain" />
          <div>
            <p className={`text-[15px] font-bold leading-none ${isLight ? "text-[#1D4338]" : "text-white"}`}>NAIVEDYA</p>
            <p className={`text-[9px] tracking-[3px] ${isLight ? "text-[#6C9B82]" : "text-emerald-400"}`}>ADVANCED HOMOEOPATHY CENTRE</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                isLight
                  ? pathname === href
                    ? "bg-[#EEF8F2] text-[#1D4338]"
                    : "text-[#6F7D77] hover:bg-[#F5FBF7] hover:text-[#1D4338]"
                  : pathname === href
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,67,56,.30)] sm:flex"
          >
            <PhoneCall size={13} />
            Book Consultation
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-full lg:hidden ${
              isLight ? "bg-[#EEF8F2] text-[#1D4338]" : "border border-white/10 bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Portal — mounts directly on document.body, escapes ALL parent stacking contexts */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
