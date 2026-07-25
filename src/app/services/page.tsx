import { pageMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export const metadata = pageMetadata({
  title: "Naivedya Homeopathy Services in Lucknow | Best Homoeopathy",
  description:
    "Explore Naivedya homeopathy services in Lucknow for child development, mental wellness, women's health, skin care, respiratory concerns, and digestive health.",
  path: "/services",
  keywords: ["Naivedya services", "Naivedya treatments", "Naivedya homeopathy services"],
});

export default function ServicesPage() {
  return <ServicesClient />;
}
