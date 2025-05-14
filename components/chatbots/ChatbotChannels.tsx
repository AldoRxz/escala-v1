// components/chatbots/ChatbotChannels.tsx
"use client"

import { Card } from "@/components/ui/card"
import { MagicReveal } from "@/lib/magic-ui"

const channels = [
  {
    label: "WhatsApp",
    description: "Responde en tiempo real desde la app de mensajería más usada.",
  },
  {
    label: "Messenger",
    description: "Integra tu chatbot a Facebook para convertir seguidores en clientes.",
  },
  {
    label: "Sitio Web",
    description: "Atiende a visitantes desde tu página con una burbuja de conversación.",
  },
]

export default function ChatbotChannels() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Dónde Puedes Usarlos?</h2>
            <p className="text-lg text-gray-600">
              Los chatbots se adaptan a diferentes canales de comunicación para ayudarte a estar presente donde tus clientes están.
            </p>
          </MagicReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, idx) => (
            <MagicReveal key={idx} delay={idx * 120}>
              <Card className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all text-center h-full">
                <h3 className="text-lg font-bold text-blue-700 mb-2">{channel.label}</h3>
                <p className="text-sm text-gray-600">{channel.description}</p>
              </Card>
            </MagicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
