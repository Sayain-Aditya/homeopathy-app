import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import LeftContent from "./LeftContent";
import DoctorComposition from "./DoctorComposition";
import FloatingServices from "@/components/homepage/FloatingServices";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0D2B22]">

      {/* Background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #2D6655, transparent 70%)" }} />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #1D4338, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6C9B82, transparent 70%)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#6C9B82 1px, transparent 1px), linear-gradient(90deg, #6C9B82 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      {/* Navbar */}
      <Container>
        <div className="relative z-10 pt-5">
          <Navbar />
        </div>
      </Container>

      {/* Hero body */}
      <Container>
        <div className="relative z-10 grid items-center gap-10 py-12 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-8 lg:py-0">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <LeftContent />
          </div>
          {/* Right */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[420px] lg:max-w-[540px]">
              <DoctorComposition />
            </div>
          </div>
        </div>
      </Container>

      {/* Service cards row — sits on top of the dark section */}
      <div className="relative z-10">
        <Container>
          <FloatingServices />
        </Container>
      </div>

    </section>
  );
}
