import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FloatingActions } from "@/components/landing/floating-actions";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HirePurchaseSection } from "@/components/landing/hire-purchase-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { Navbar } from "@/components/landing/navbar";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustBar } from "@/components/landing/trust-bar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <HowItWorksSection />
      <HirePurchaseSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
      <FloatingActions />
    </main>
  );
}

