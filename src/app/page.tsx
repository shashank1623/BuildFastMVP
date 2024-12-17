
import Header from "@/components/section/Header"
import Footer from '@/components/section/Footer'
import HeroSection from '@/components/section/Hero'
import TimeTaken from '@/components/section/TimeTaken'
import FeaturesSection from '@/components/section/FeatureSection'
import PricingSection from '@/components/section/PricingSection'
import AboutSection from '@/components/section/AboutMe'
import FAQSection from '@/components/section/FAQsection'
import CtaSection from '@/components/section/CtaSection'


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection />
      <TimeTaken/>
      <FeaturesSection/>
      <PricingSection/>
      <AboutSection/>
      <FAQSection/>
      <CtaSection/>
      {/* <HeroTemp/> */}
      <Footer/>
    </div>
  );
}