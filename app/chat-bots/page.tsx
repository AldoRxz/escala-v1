import Header from "@/components/header"
import Footer from "@/components/footer"

import ChatbotsHero from "@/components/chatbots/ChatbotsHero"
import ChatbotBenefits from "@/components/chatbots/ChatbotBenefits"
import ChatbotChannels from "@/components/chatbots/ChatbotChannels"
import ChatbotStats from "@/components/chatbots/ChatbotStats"
import ChatbotContactForm from "@/components/chatbots/ChatbotContactForm"
import ChatbotOverview from "@/components/chatbots/ChatbotOverview"

export default function ChatBotsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ChatbotsHero />
        <ChatbotOverview />
        <ChatbotBenefits />
        {/* <ChatbotChannels /> */}
        <ChatbotStats />
        <ChatbotContactForm />
      </main>
      <Footer />
    </div>
  )
}
