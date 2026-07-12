import { LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent?: string;
  bg?: string;
  slug?: string;
}

export default function ServiceCard({ title, desc, icon: Icon, accent = "#6C9B82", bg = "rgba(255,255,255,0.05)", slug }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:px-5 sm:py-6">
      {/* Top accent */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
        style={{ background: "rgba(108,155,130,0.15)" }}
      >
        <Icon size={18} className="text-emerald-400" />
      </div>

      <h3 className="mt-3 text-[11px] font-bold uppercase tracking-[0.5px] text-white sm:mt-4 sm:text-[13px]">
        {title}
      </h3>

      <p className="mt-1.5 flex-1 text-[11px] leading-5 text-white/50 sm:mt-2 sm:text-[12px]">{desc}</p>

      <Link
        href={slug ? `/services/${slug}` : "/services"}
        className="mt-3 flex items-center gap-1 text-left text-[11px] font-semibold text-emerald-400 transition-colors duration-200 hover:text-emerald-300 sm:mt-4 sm:text-[12px]"
      >
        Learn More <ChevronRight size={11} />
      </Link>
    </div>
  );
}
