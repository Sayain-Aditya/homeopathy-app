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

export default function ServiceCard({ title, desc, icon: Icon, accent = "#2D6655", bg = "#EEF8F2", slug }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white px-4 py-5 shadow-[0_2px_16px_rgba(0,0,0,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,.10)] sm:px-5 sm:py-6">
      {/* Top accent */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: accent }}
      />

      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
        style={{ background: bg }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>

      <h3 className="mt-3 text-[11px] font-bold uppercase tracking-[0.5px] text-[#1D4338] sm:mt-4 sm:text-[13px]">
        {title}
      </h3>

      <p className="mt-1.5 flex-1 text-[11px] leading-5 text-[#6F7D77] sm:mt-2 sm:text-[12px]">{desc}</p>

      <Link
        href={slug ? `/services/${slug}` : "/services"}
        className="mt-3 flex items-center gap-1 text-left text-[11px] font-semibold transition-colors duration-200 sm:mt-4 sm:text-[12px]"
        style={{ color: accent }}
      >
        Learn More <ChevronRight size={11} />
      </Link>
    </div>
  );
}
