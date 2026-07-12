import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`rounded-[999px] border border-[#6C9B82] bg-white/80 px-7 py-3.5 text-[13.5px] font-semibold text-[#1D4338] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,.10)] ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 rounded-[999px] bg-gradient-to-r from-[#1D4338] to-[#2D6655] px-7 py-3.5 text-[13.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(29,67,56,.35)] ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
