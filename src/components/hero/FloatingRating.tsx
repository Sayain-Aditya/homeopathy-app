import { Star } from "lucide-react";
import Image from "next/image";

export default function FloatingRating() {
  return (
    <div
      className="glass absolute -right-4 top-1/4 z-40 w-48 rounded-[24px] p-4"
      style={{ boxShadow: "0 20px 50px rgba(0,0,0,.10)" }}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50">
          <Star size={15} fill="#FFC83D" color="#FFC83D" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#1D4338]">4.9 Rating</p>
          <p className="text-[10px] text-[#6C9B82]">Patient Score</p>
        </div>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-gray-500">
        Trusted by 2,500+ happy patients worldwide.
      </p>
      <div className="mt-3 flex -space-x-2">
        {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map((src) => (
          <div key={src} className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white">
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#D5EEE0] text-[8px] font-bold text-[#1D4338]">
          +99
        </div>
      </div>
    </div>
  );
}
