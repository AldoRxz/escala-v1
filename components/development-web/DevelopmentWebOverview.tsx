import { Monitor, Code, Settings, Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Desarrollo Web Personalizado",
    icon: Code,
    desc: "Creamos soluciones a medida para tu negocio, desde sitios web hasta aplicaciones complejas.",
  },
  {
    title: "Diseño Web Responsivo",
    icon: Monitor,
    desc: "Aseguramos que tu sitio web se vea y funcione perfectamente en todos los dispositivos.",
  },
  {
    title: "Optimización SEO",
    icon: Settings,
    desc: "Mejoramos el posicionamiento en buscadores para asegurar que tu web sea fácilmente encontrada.",
  },
  {
    title: "Hospedaje Web y Soporte",
    icon: Server,
    desc: "Ofrecemos soluciones de hosting con alta disponibilidad y soporte técnico continuo.",
  },
]

export default function DevelopmentWebOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Qué Hacemos en Desarrollo Web?</h2>
          <p className="text-lg text-gray-600">
            Desde sitios web hasta aplicaciones personalizadas, diseñamos soluciones que se adaptan a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-600 transition-all shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
