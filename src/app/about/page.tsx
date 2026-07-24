import AboutPage from "@/components/about/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Dr. Asmita Shekhar | Homeopathy in Lucknow",
  description:
    "Learn about Naivedya Advanced Homeopathy Centre at Avas Vikas Colony, Mall Avenue, Lucknow, a trusted clinic founded by Dr. Asmita Shekhar.",
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}
