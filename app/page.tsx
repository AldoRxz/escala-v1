import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import WebDevelopment from "@/components/web-development"
import Automations from "@/components/automations"
import Chatbots from "@/components/chatbots"
import DigitalMarketing from "@/components/digital-marketing"
import CallToAction from "@/components/CallToAction"

import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Escala+ | Digital Advertising Agency",
  description:
    "Professional digital advertising services including web development, automations, chatbots, and digital marketing.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <WebDevelopment />
        <Automations />
        <Chatbots />
        <DigitalMarketing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
