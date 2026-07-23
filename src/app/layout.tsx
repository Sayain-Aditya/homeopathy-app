import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import PageLayout from "@/components/layout/PageLayout";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppFloater from "@/components/ui/WhatsAppFloater";
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
  title: "Natura Homeopathy",
  description: "Personalized, gentle, and effective holistic wellness with expert homeopathic care.",
  verification: {
    google: "8k14gPNJbUDjiE7hq0INFl4lsM5IumqNl4ZQNjkDmG4",
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
        <ScrollProgress />
        <PageLayout>{children}</PageLayout>
        <WhatsAppFloater />
      </body>
    </html>
  );
}
