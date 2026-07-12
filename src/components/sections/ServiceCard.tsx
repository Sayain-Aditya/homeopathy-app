import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[34px]
      bg-white
      p-8
      shadow-[0_15px_45px_rgba(0,0,0,.06)]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-[0_30px_70px_rgba(0,0,0,.1)]
      "
    >
      <span className="absolute right-8 top-8 text-6xl font-bold text-[#EEF5F1]">
        {number}
      </span>

      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF8F3]">
          🌿
        </div>

        <h3 className="text-2xl font-semibold text-[#173B34]">{title}</h3>

        <p className="mt-5 leading-8 text-gray-500">{description}</p>

        <Link href="/contact" className="mt-8 flex items-center gap-2 font-medium text-[#21493F]">
          Learn More
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
