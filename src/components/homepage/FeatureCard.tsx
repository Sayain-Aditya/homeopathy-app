interface FeatureCardProps {
  number: string;
  icon?: string;
  title: string;
  description: string;
}

export default function FeatureCard({ number, icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-[20px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,.10)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF8F2]">
        {icon ? (
          <span className="text-[18px]">{icon}</span>
        ) : (
          <span className="text-[13px] font-bold text-[#1D4338]">{number}</span>
        )}
      </div>

      <h3 className="mt-4 text-[15px] font-bold text-[#1D4338]">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-[#6F7D77]">{description}</p>
    </div>
  );
}
