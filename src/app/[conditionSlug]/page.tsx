import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { conditionPages } from "@/lib/conditionPages";
import { absoluteUrl, safeJsonLd, siteConfig } from "@/lib/seo";
import ConditionPageClient from "@/components/conditions/ConditionPageClient";

type Props = { params: Promise<{ conditionSlug: string }> };

export function generateStaticParams() {
  return conditionPages.map((p) => ({ conditionSlug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { conditionSlug } = await params;
  const page = conditionPages.find((p) => p.slug === conditionSlug);
  if (!page) return {};

  const url = absoluteUrl(page.urlPath);
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: absoluteUrl("/images/logo.png"), width: 512, height: 512, alt: siteConfig.shortName }],
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [absoluteUrl("/images/logo.png")],
    },
  };
}

function faqJsonLd(page: (typeof conditionPages)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function medicalWebPageJsonLd(page: (typeof conditionPages)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.h1,
    description: page.metaDescription,
    url: absoluteUrl(page.urlPath),
    about: { "@type": "MedicalCondition", name: page.title },
    author: {
      "@type": "Physician",
      name: siteConfig.doctor,
      worksFor: { "@type": "MedicalClinic", name: siteConfig.name },
    },
  };
}

export default async function ConditionSlugPage({ params }: Props) {
  const { conditionSlug } = await params;
  const page = conditionPages.find((p) => p.slug === conditionSlug);
  if (!page) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd(page)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(medicalWebPageJsonLd(page)) }} />
      <ConditionPageClient page={page} />
    </>
  );
}
