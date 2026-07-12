import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[36px] border border-white/60 bg-[#FFFFFF]/75 backdrop-blur-xl ${className}`}
      style={{ boxShadow: "0 25px 60px rgba(0,0,0,.08)" }}
    >
      {children}
    </div>
  );
}
