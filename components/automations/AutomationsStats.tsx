"use client"

import { MagicReveal } from "@/lib/magic-ui"

const stats = [
  { label: "Tareas Automatizadas", value: "+1,000 al mes" },
  { label: "Reducción de Errores", value: "-80%" },
  { label: "Incremento de Productividad", value: "+60%" },
  { label: "Ahorro en Costos Operativos", value: "-40%" },
]

export default function AutomationsStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <MagicReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impacto de la Automatización
            </h2>
            <p className="text-lg text-gray-600">
              Las empresas que adoptan automatización operan con mayor eficiencia,
              reducen errores y ahorran costos.
            </p>
          </MagicReveal>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <MagicReveal key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-transform hover:-translate-y-1">
                <p className="text-4xl font-extrabold text-red-600 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-700 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </MagicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
