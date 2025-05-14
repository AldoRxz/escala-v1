import Header from "@/components/header"
import Footer from "@/components/footer"
import CallToAction from "@/components/CallToAction"

import WebHero from "@/components/web-development/WebHero"
import WebOverview from "@/components/web-development/WebOverview"
import WebTechnologies from "@/components/web-development/WebTechnologies"
import DevelopmentProcess from "@/components/web-development/DevelopmentProcess"
import WebContactForm from "@/components/web-development/WebContactForm"

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <WebHero />
        <WebOverview />
        <WebTechnologies />
        <DevelopmentProcess />
        <WebContactForm />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  )
}
