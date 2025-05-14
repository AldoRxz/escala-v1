// components/chatbots/ChatbotBenefits.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { MagicReveal } from "@/lib/magic-ui"

const benefits = [
  "Atención 24/7 sin intervención humana",
  "Respuestas instantáneas a preguntas frecuentes",
  "Calificación de leads antes de transferir a un humano",
  "Interacción personalizada con tus usuarios",
  "Reducción de carga operativa y costos",
  "Recopilación de datos valiosos de clientes",
]

export default function ChatbotBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Beneficios de Usar Chatbots</h2>
            <p className="text-lg text-gray-600">
              Automatiza, escala y mejora la experiencia de tus clientes con soluciones conversacionales personalizadas.
            </p>
          </MagicReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <MagicReveal key={i} delay={i * 100}>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 transition-transform hover:-translate-y-1 h-full">
                <CardContent className="p-6 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{benefit}</p>
                </CardContent>
              </Card>
            </MagicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
