import AboutPage from "@/components/about/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Naivedya | Dr. Asmita Shekhar Homeopathy in Lucknow",
  description:
    "Learn about Naivedya Advanced Homeopathy Centre at Avas Vikas Colony, Mall Avenue, Lucknow, a trusted homeopathy clinic founded by Dr. Asmita Shekhar.",
  path: "/about",
  keywords: ["About Naivedya", "Naivedya doctor", "Dr Asmita Shekhar Naivedya"],
});

export default function About() {
  return <AboutPage />;
}
