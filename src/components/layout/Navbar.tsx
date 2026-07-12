"use client";

import { useState, useEffect } from "react";
import { Leaf, PhoneCall, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="relative">
      <nav
        className={`flex items-center justify-between rounded-[999px] bg-white px-4 py-3 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_40px_rgba(29,67,56,.12)]"
            : "shadow-[0_2px_16px_rgba(0,0,0,.06)]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1D4338] to-[#2D6655]">
            <Leaf size={16} className="text-white" />
          </div>
          <div>
            <p className="text-[15px] font-bold leading-none text-[#1D4338]">NAIVEDYA</p>
            <p className="text-[9px] tracking-[3px] text-[#6C9B82]">HOMOEOPATHY</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                pathname === href
                  ? "bg-[#EEF8F2] text-[#1D4338]"
                  : "text-[#6F7D77] hover:bg-[#F5FBF7] hover:text-[#1D4338]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,67,56,.30)] sm:flex"
          >
            <PhoneCall size={13} />
            Book Consultation
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF8F2] text-[#1D4338] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_16px_48px_rgba(29,67,56,.15)]"
          >
            <div className="flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`rounded-[14px] px-4 py-3 text-[14px] font-medium transition-all duration-200 ${
                    pathname === href
                      ? "bg-[#EEF8F2] text-[#1D4338] font-semibold"
                      : "text-[#6F7D77] hover:bg-[#F5FBF7] hover:text-[#1D4338]"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] py-3 text-[13px] font-semibold text-white"
              >
                <PhoneCall size={13} />
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
