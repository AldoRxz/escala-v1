// components/web-development/WebTechnologies.tsx
"use client"

import { MagicReveal } from "@/lib/magic-ui"
import { Code, Database, Layout, Smartphone } from "lucide-react"

const techStack = [
  {
    icon: Code,
    title: "Diseño Visual (Frontend)",
    description: "Creamos la parte que los usuarios ven y usan: rápida, atractiva y fácil de navegar.",
  },
  {
    icon: Database,
    title: "Lógica y Funcionalidad (Backend)",
    description: "Todo lo que pasa detrás de escena para que tu sitio funcione sin errores y sea seguro.",
  },
  {
    icon: Layout,
    title: "Administración de Contenidos (CMS)",
    description: "Te damos acceso para editar textos, imágenes y productos sin necesidad de saber programar.",
  },
  {
    icon: Smartphone,
    title: "Diseño Adaptable",
    description: "Tu sitio se verá increíble en celulares, tablets y computadoras. Siempre.",
  },
]

export default function WebTechnologies() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Tecnologías que usamos para construir tu sitio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Utilizamos herramientas modernas, pero te las explicamos con claridad. Queremos que entiendas cómo cada parte
            de tu sitio aporta valor real a tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <MagicReveal key={i} delay={i * 100}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-200">
                <div className="w-14 h-14 mb-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shadow-sm">
                  <tech.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </MagicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
