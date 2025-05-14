import Header from "@/components/header"
import Footer from "@/components/footer"

import AutomationsHero from "@/components/automations/AutomationsHero"
import AutomationsOverview from "@/components/automations/AutomationsOverview"
import AutomationsExamples from "@/components/automations/AutomationsExamples"
import AutomationBenefits from "@/components/automations/AutomationBenefits"
import AutomationUseCases from "@/components/automations/AutomationUseCases"
import AutomationsStats from "@/components/automations/AutomationsStats"
import AutomationsContactForm from "@/components/automations/AutomationsContactForm"

export default function AutomatizacionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AutomationsHero />
        <AutomationsOverview />
        <AutomationsStats />
        <AutomationsExamples />
        
        <AutomationBenefits />
        <AutomationUseCases />
        
        <AutomationsContactForm />
      </main>
      <Footer />
    </div>
  )
}
