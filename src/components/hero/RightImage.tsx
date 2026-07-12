import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

export default function RightImage() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] pb-16 pt-8">

      {/* Leaf top-left */}
      <div className="absolute -left-12 top-4 z-20">
        <Image src="/images/leaf-1.png" alt="" width={120} height={120} className="opacity-90" />
      </div>

      {/* Leaf top-right */}
      <div className="absolute -right-8 top-0 z-20">
        <Image src="/images/leaf-2.png" alt="" width={95} height={95} className="opacity-75" />
      </div>

      {/* Doctor image card */}
      <div
        className="relative z-10 mx-auto h-[600px] w-full overflow-hidden rounded-[40px] bg-[#D5EEE0]"
        style={{ boxShadow: "0 40px 100px rgba(18,45,36,.16)" }}
      >
        <Image
          src="/images/doctor.png"
          alt="Doctor"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Bottle — bottom-left, overlaps card */}
      <div className="absolute -bottom-4 -left-14 z-20">
        <Image src="/images/bottle.png" alt="" width={140} height={140} />
      </div>

      {/* Flower — bottom-right */}
      <div className="absolute -bottom-6 -right-6 z-20">
        <Image src="/images/flower.png" alt="" width={110} height={110} className="opacity-85" />
      </div>

      {/* Rating GlassCard — overlaps right edge */}
      <GlassCard className="absolute -right-10 top-24 z-30 w-[200px] p-5">
        <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-[#6C9B82]">
          Patient Satisfaction
        </p>
        <h3
          className="heading-font mt-2 text-[42px] font-bold leading-none text-[#1D4338]"
        >
          4.9<span className="text-amber-400">★</span>
        </h3>
        <p className="mt-2 text-[11px] leading-5 text-gray-400">
          Based on 2,500+ happy patients
        </p>
        <div className="mt-3 flex -space-x-2">
          {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map((src) => (
            <div key={src} className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D5EEE0] text-[9px] font-bold text-[#1D4338]">
            +99
          </div>
        </div>
      </GlassCard>

    </div>
  );
}
