import { pageMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export const metadata = pageMetadata({
  title: "Homeopathy Services in Lucknow | Best Homoeopathy in Lucknow",
  description:
    "Explore homeopathy in Lucknow for child development, mental wellness, women's health, skin care, respiratory concerns, and digestive health at Naivedya Homoeopathy.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
