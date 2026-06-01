import { HeroSection, PlatformDescription, ServicesCTA } from "@/components/home";
import { Navbar, Footer } from "@/components/layouts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PlatformDescription />
      <ServicesCTA />
      <Footer />
    </>
  );
}
