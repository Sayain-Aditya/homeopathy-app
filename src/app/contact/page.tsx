import ContactPage from "@/components/contact/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Naivedya | Homeopathy in Lucknow",
  description:
    "Contact Naivedya Advanced Homeopathy Centre at Avas Vikas Colony, Mall Avenue, Lucknow. Call 6394886307 for online or in-clinic homoeopathy consultation.",
  path: "/contact",
  keywords: ["Contact Naivedya", "Naivedya address", "Naivedya phone number"],
});

export default function Contact() {
  return <ContactPage />;
}
