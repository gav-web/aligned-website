import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import AlignedFramework from '@/components/AlignedFramework'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import ContactForm from '@/components/ContactForm'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <AlignedFramework />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </main>
  )
}