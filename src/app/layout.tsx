import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import PageLayout from "@/components/layout/PageLayout";
import ScrollProgress from "@/components/ui/ScrollProgress";
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <ScrollProgress />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
