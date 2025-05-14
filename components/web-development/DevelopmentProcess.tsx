"use client"

import { MagicReveal } from "@/lib/magic-ui"

const steps = [
  {
    title: "Descubrimiento y Planificación",
    description: "Entendemos tus metas, audiencia y necesidades técnicas.",
  },
  {
    title: "Diseño y Prototipado",
    description: "Creamos wireframes e interfaces atractivas alineadas a tu marca.",
  },
  {
    title: "Desarrollo",
    description: "Construimos tu solución web con la mejor tecnología y buenas prácticas.",
  },
  {
    title: "Pruebas y Calidad",
    description: "Verificamos que todo funcione perfectamente en dispositivos y navegadores.",
  },
  {
    title: "Lanzamiento y Soporte",
    description: "Publicamos tu sitio y brindamos soporte y mantenimiento continuo.",
  },
]

export default function DevelopmentProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Nuestro Proceso de Desarrollo Web</h2>
          <p className="text-base text-gray-600">
            Seguimos un enfoque estructurado para entregar proyectos a tiempo y superar tus expectativas.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-red-200 hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <MagicReveal key={index} delay={index * 150}>
                <div className="relative flex flex-col md:flex-row md:items-start">
                  <div className="flex items-center mb-3 md:hidden">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">{index + 1}</div>
                    <div className="flex-grow h-0.5 bg-red-200 ml-2" />
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 -ml-px mt-3 hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">{index + 1}</div>
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left md:ml-auto"}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </MagicReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}