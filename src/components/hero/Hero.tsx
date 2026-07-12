import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import LeftContent from "./LeftContent";
import FloatingAppointment from "./FloatingAppointment";
import DoctorComposition from "./DoctorComposition";
import FloatingServices from "@/components/homepage/FloatingServices";

export default function Hero() {
  return (
    <section className="bg-[#EEF8F2]">

      {/* Navbar */}
      <Container>
        <div className="pt-5">
          <Navbar />
        </div>
      </Container>

      {/* Hero body */}
      <Container>
        <div className="grid items-center gap-8 pb-4 pt-6 lg:min-h-[calc(100vh-100px)] lg:grid-cols-2">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <LeftContent />
            <FloatingAppointment />
          </div>

          {/* Right */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[420px] lg:max-w-[520px]">
              <DoctorComposition />
            </div>
          </div>
        </div>
      </Container>

      {/* Service cards row */}
      <Container>
        <FloatingServices />
      </Container>

    </section>
  );
}
