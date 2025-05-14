import Header from "@/components/header"
import Footer from "@/components/footer"

import DigitalMarketing from "@/components/digital-marketing"

import MarketingHero from "@/components/marketing/MarketingHero"
import ResultadosMarketing from "@/components/marketing/ResultadosMarketing"
import MarketingContactForm from "@/components/marketing/MarketingContactForm"
import MarketingOverview from "@/components/marketing/MarketingOverview"
import SocialMediaManagement from "@/components/marketing/SocialMediaManagement"


import CallToAction from "@/components/CallToAction"

export default function MarketingDigitalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MarketingHero />
        <MarketingOverview />
        {/* <SocialMediaManagement /> */}
        <DigitalMarketing />
        <ResultadosMarketing />
        <MarketingContactForm />
        <SocialMediaManagement />

        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
