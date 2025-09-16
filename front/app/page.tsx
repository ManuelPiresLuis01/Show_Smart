"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </div>
  )
}
