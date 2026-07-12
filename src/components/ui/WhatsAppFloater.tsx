"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const PHONE = "916394886307";
const MESSAGE = "Hello! I'd like to book a consultation at Naivedya Homoeopathy.";

export default function WhatsAppFloater() {
  const [tooltip, setTooltip] = useState(true);

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 rounded-[14px] bg-white px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,.12)]"
          >
            <p className="text-[13px] font-medium text-[#1D4338]">Chat with us on WhatsApp</p>
            <button
              onClick={() => setTooltip(false)}
              className="text-[#6F7D77] hover:text-[#1D4338]"
              aria-label="Dismiss"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_32px_rgba(37,211,102,.4)]"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.797 1.849 6.785L2 30l7.43-1.818A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.607l-.422-.25-4.41 1.08 1.115-4.295-.276-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.33-8.67c-.347-.174-2.055-1.013-2.374-1.129-.319-.116-.551-.174-.783.174-.232.347-.899 1.129-1.102 1.362-.203.232-.406.26-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.918-1.726-2.051-1.929-2.398-.203-.347-.022-.535.153-.708.157-.156.347-.406.52-.609.174-.203.232-.347.347-.579.116-.232.058-.435-.029-.609-.087-.174-.783-1.888-1.073-2.585-.283-.678-.57-.586-.783-.597l-.667-.011c-.232 0-.609.087-.928.435-.319.347-1.217 1.189-1.217 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.742 5.942 5.248.831.358 1.48.572 1.985.732.834.265 1.594.228 2.194.138.669-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.666-.406z"/>
        </svg>

        {/* Pulse ring */}
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full opacity-20" style={{ background: "#25D366" }} />
      </motion.a>
    </div>
  );
}
