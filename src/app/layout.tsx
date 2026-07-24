import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import PageLayout from "@/components/layout/PageLayout";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppFloater from "@/components/ui/WhatsAppFloater";
import { clinicJsonLd, defaultDescription, getSiteUrl, safeJsonLd, siteConfig } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Homeopathy in Lucknow | Best Homoeopathy in Lucknow",
    template: `%s | ${siteConfig.shortName}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.doctor }],
  creator: siteConfig.doctor,
  publisher: siteConfig.name,
  keywords: [
    "homeopathy clinic in Lucknow",
    "Homeopathy in Lucknow",
    "best homoeopathy in Lucknow",
    "best homeopathy in Lucknow",
    "homoeopathy clinic in Lucknow",
    "Dr Asmita Shekhar",
    "Naivedya Homoeopathy",
    "homeopathic doctor Lucknow",
    "online homeopathy consultation",
  ],
  verification: {
    google: "8k14gPNJbUDjiE7hq0INFl4lsM5IumqNl4ZQNjkDmG4",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Homeopathy in Lucknow | Best Homoeopathy in Lucknow",
    description: defaultDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Homeopathy in Lucknow | Best Homoeopathy in Lucknow",
    description: defaultDescription,
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZXY5TPJT2S" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZXY5TPJT2S');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(clinicJsonLd()) }}
        />
        <ScrollProgress />
        <PageLayout>{children}</PageLayout>
        <WhatsAppFloater />
      </body>
    </html>
  );
}
