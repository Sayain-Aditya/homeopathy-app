import { LucideIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent?: string;
  slug?: string;
}

export default function ServiceCard({ title, desc, icon: Icon, accent = "#6C9B82", slug }: Props) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: "rgba(108,155,130,0.15)" }}
      >
        <Icon size={16} className="text-emerald-400" />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[11px] font-bold uppercase leading-tight tracking-[0.4px] text-white">
        {title}
      </h3>

      {/* Desc */}
      <p className="mt-1.5 flex-1 text-[11px] leading-[1.5] text-white/50">{desc}</p>

      {/* CTA */}
      <Link
        href={slug ? `/services/${slug}` : "/services"}
        className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
      >
        Learn More <ChevronRight size={10} />
      </Link>
    </div>
  );
}
