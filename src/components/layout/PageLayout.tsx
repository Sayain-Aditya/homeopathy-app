import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#EEF8F2]">
      {children}
    </div>
  );
}
