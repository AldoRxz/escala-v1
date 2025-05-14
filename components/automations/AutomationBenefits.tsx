// components/automations/AutomationBenefits.tsx
"use client"

import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MagicReveal } from "@/lib/magic-ui"

const benefits = [
  "Reducción de tareas manuales repetitivas",
  "Procesos más rápidos y sin errores",
  "Ahorro de tiempo para equipos clave",
  "Mayor control y visibilidad del negocio",
  "Mejora en la experiencia del cliente",
  "Escalabilidad sin aumentar costos fijos"
]

export default function AutomationBenefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Beneficios de Automatizar tu Negocio</h2>
            <p className="text-lg text-gray-600">
              Implementar flujos inteligentes te permite concentrarte en lo importante, dejando que la tecnología se encargue del resto.
            </p>
          </MagicReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <MagicReveal key={i} delay={i * 100}>
              <Card className="border border-gray-200 shadow-sm hover:border-red-200 hover:shadow-md transition-transform hover:-translate-y-1">
                <CardContent className="p-6 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{item}</p>
                </CardContent>
              </Card>
            </MagicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
