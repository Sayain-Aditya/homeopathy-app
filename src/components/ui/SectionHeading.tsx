interface Props {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ badge, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[5px] text-[#7CA18E]">
        {badge}
      </span>

      <h2 className="mt-2 text-5xl font-semibold leading-tight text-[#193B34] lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-lg leading-8 text-gray-500">{description}</p>
      )}
    </div>
  );
}
