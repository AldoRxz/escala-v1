// components/automations/AutomationsHero.tsx
"use client"

import { Bolt, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagicReveal } from "@/lib/magic-ui"

export default function AutomationsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <MagicReveal>
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Ahorra Tiempo, Escala Rápido con <span className="border-b-4 border-red-500">Automatizaciones Inteligentes</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Conecta tus herramientas favoritas, elimina tareas repetitivas y mejora la eficiencia de tus procesos sin esfuerzo humano constante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto">
                Agenda una Consulta <Workflow className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 w-full sm:w-auto"
              >
                Ver Casos de Uso <Bolt className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </MagicReveal>

        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-r from-red-600 to-red-400 shadow-xl flex items-center justify-center">
            <span className="text-white text-sm">Vista previa no disponible</span>
          </div>
        </div>
      </div>
    </section>
  )
}
