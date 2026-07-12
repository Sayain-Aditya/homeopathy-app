import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";

export default function DoctorCard() {
  return (
    <div className="relative">

      {/* Floating Leaf */}
      <Image
        src="/images/leaf-1.png"
        alt=""
        width={120}
        height={120}
        className="absolute -left-8 top-10 z-20"
      />

      {/* Bottle */}
      <Image
        src="/images/bottle.png"
        alt=""
        width={140}
        height={140}
        className="absolute -bottom-10 -left-12 z-20"
      />

      {/* Main Card */}
      <GlassCard className="relative overflow-hidden p-5">
        <div className="relative h-[650px] w-full rounded-[28px] bg-[#dff2e7]">
          <Image
            src="/images/doctor.png"
            alt="Doctor"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </GlassCard>

      {/* Floating Rating Card */}
      <GlassCard className="absolute -right-6 top-16 w-56 p-5">
        <p className="text-sm text-gray-500">Patient Satisfaction</p>
        <h3 className="mt-2 text-4xl font-bold text-[#21493F]">4.9★</h3>
        <p className="mt-2 text-sm text-gray-500">Based on 2,500+ happy patients.</p>
      </GlassCard>

    </div>
  );
}
