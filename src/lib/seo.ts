import type { Metadata } from "next";
import { services } from "@/components/homepage/ServiceData";

export const siteConfig = {
  name: "Naivedya Advanced Homeopathy Centre",
  shortName: "Naivedya Homoeopathy",
  alternateName: "Naivedya Advanced Homoeopathy Centre",
  googleName: "Naivedya Advance Homoeopathy center",
  doctor: "Dr. Asmita Shekhar",
  phone: "6394886307",
  email: "naivedya.homeopathy@gmail.com",
  streetAddress: "Avas Vikas Colony, Mall Avenue",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  defaultUrl: "https://naivedyahomoeopathy.com",
  googleBusinessProfile:
    "https://www.google.com/search?q=Naivedya%20Advance%20Homoeopathy%20center",
};

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.defaultUrl;
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath}`;
}

export const defaultDescription =
  "Looking for homeopathy in Lucknow or the best homoeopathy in Lucknow? Consult Dr. Asmita Shekhar at Naivedya Advanced Homeopathy Centre, Avas Vikas Colony, Mall Avenue, Lucknow.";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const targetKeywords = [
  "Homeopathy in Lucknow",
  "best homoeopathy in Lucknow",
  "best homeopathy in Lucknow",
  "homoeopathy in Lucknow",
  "homeopathy clinic in Lucknow",
  "homoeopathy clinic in Lucknow",
  "homeopathic doctor in Lucknow",
  "Dr Asmita Shekhar",
  "Naivedya Homoeopathy",
  "Naivedya Advanced Homeopathy Centre",
  "Naivedya Advanced Homoeopathy Centre",
  "Naivedya Advance Homoeopathy center",
  "Mall Avenue Lucknow",
  "Avas Vikas Colony Lucknow",
];

export function pageMetadata({ title, description, path, keywords = [] }: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [...targetKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/logo.png"),
          width: 512,
          height: 512,
          alt: siteConfig.shortName,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [absoluteUrl("/images/logo.png")],
    },
  };
}

export const serviceSeo = services.map((service) => ({
  slug: service.slug,
  title: `${service.title} Homeopathy in Lucknow | Best Homoeopathy in Lucknow`,
  description: `${service.desc} Consult ${siteConfig.doctor} for personalized ${service.title.toLowerCase()} care at ${siteConfig.shortName}, a trusted choice for homeopathy in Lucknow.`,
  path: `/services/${service.slug}`,
}));

export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${getSiteUrl()}/#clinic`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.alternateName, siteConfig.googleName],
    url: getSiteUrl(),
    hasMap: siteConfig.googleBusinessProfile,
    image: absoluteUrl("/images/logo.png"),
    logo: absoluteUrl("/images/logo.png"),
    description: defaultDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    medicalSpecialty: "Homeopathic",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.831469889494166,
      longitude: 80.94801356770901,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "19:00",
      },
    ],
    founder: {
      "@type": "Physician",
      name: siteConfig.doctor,
      medicalSpecialty: "Homeopathic",
    },
    sameAs: [siteConfig.googleBusinessProfile],
  };
}

export function serviceJsonLd(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: `${service.title} Homoeopathy`,
    description: service.overview,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@id": `${getSiteUrl()}/#clinic`,
    },
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
