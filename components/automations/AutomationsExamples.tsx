// components/automations/AutomationsExamples.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MagicReveal } from "@/lib/magic-ui"
import { MailOpen, ShoppingCart, Users, DatabaseZap } from "lucide-react"

const examples = [
  {
    title: "Envío de Correos Automatizados",
    icon: MailOpen,
    desc: "Envía correos personalizados automáticamente después de una compra o al recibir un formulario."
  },
  {
    title: "Sincronización de Datos",
    icon: DatabaseZap,
    desc: "Conecta tus sistemas para que actualicen clientes, productos y ventas sin intervención manual."
  },
  {
    title: "Seguimiento de Carritos Abandonados",
    icon: ShoppingCart,
    desc: "Detecta carritos incompletos y envía recordatorios automáticos para recuperar ventas."
  },
  {
    title: "Asignación de Leads",
    icon: Users,
    desc: "Envía automáticamente cada lead al asesor correcto según zona, producto o prioridad."
  }
]

export default function AutomationsExamples() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ejemplos de Automatización</h2>
            <p className="text-lg text-gray-600">
              Soluciones prácticas que puedes empezar a usar hoy para ahorrar tiempo y maximizar tu equipo.
            </p>
          </MagicReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((ex, index) => {
            const Icon = ex.icon
            return (
              <MagicReveal key={index} delay={index * 100}>
                <Card className="border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{ex.title}</h3>
                    <p className="text-sm text-gray-600">{ex.desc}</p>
                  </CardContent>
                </Card>
              </MagicReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}