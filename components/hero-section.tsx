// components/chatbots/ChatbotsHero.tsx
"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Bot } from "lucide-react"
import { MagicReveal } from "@/lib/magic-ui"

export default function ChatbotsHero() {
  return (
    <section
      id="chatbots"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-red-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
              Eleva tu Atención con <span className="text-red-600">Chatbots Inteligentes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 magic-reveal show">
              Automatiza la comunicación con tus clientes usando asistentes virtuales. Ofrece atención instantánea, personalizada y disponible 24/7 sin esfuerzo humano.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                Ver Demo <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 magic-hover w-full sm:w-auto mt-3 sm:mt-0"
              >
                <Bot className="mr-2 h-5 w-5" /> Habla con un Asesor
              </Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-video rounded-xl bg-gradient-to-r from-red-600 to-red-400 shadow-xl magic-glow flex items-center justify-center">
              <span className="text-white text-sm">Vista previa no disponible</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-red-200 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 bg-red-300 rounded-full opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}