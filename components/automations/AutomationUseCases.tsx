// components/automations/AutomationUseCases.tsx
"use client"

import { BrainCircuit, ClipboardCheck, DollarSign, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MagicReveal } from "@/lib/magic-ui"

const useCases = [
  {
    title: "Onboarding de Clientes",
    icon: ClipboardCheck,
    desc: "Automatiza todo el flujo de bienvenida, incluyendo emails, activaciones y documentos."
  },
  {
    title: "Alertas y Notificaciones",
    icon: ShieldCheck,
    desc: "Envía mensajes automáticos por email, WhatsApp o Slack al ocurrir eventos clave en tu sistema."
  },
  {
    title: "Seguimiento de Leads",
    icon: DollarSign,
    desc: "Detecta comportamientos de tus visitantes y activa mensajes personalizados para cerrar más ventas."
  },
  {
    title: "Automatización de Reportes",
    icon: BrainCircuit,
    desc: "Envía reportes automáticos a tu equipo con métricas clave cada semana o mes."
  }
]

export default function AutomationUseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Casos de Uso Populares</h2>
            <p className="text-lg text-gray-600">
              Aquí tienes ejemplos reales que puedes implementar en tu negocio para ganar tiempo y eficiencia.
            </p>
          </MagicReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, index) => {
            const Icon = uc.icon
            return (
              <MagicReveal key={index} delay={index * 100}>
                <Card className="border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-red-100 text-red-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{uc.title}</h3>
                    <p className="text-sm text-gray-600">{uc.desc}</p>
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