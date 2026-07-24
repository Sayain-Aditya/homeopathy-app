import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { pageMetadata, safeJsonLd, serviceJsonLd, serviceSeo } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSeo.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = serviceSeo.find((service) => service.slug === slug);

  if (!seo) {
    return {};
  }

  return pageMetadata(seo);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const jsonLd = serviceJsonLd(slug);

  if (!jsonLd) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <ServiceDetailClient slug={slug} />
    </>
  );
}
