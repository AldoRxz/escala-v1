import { Globe, BarChart3, MailOpen, Megaphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Publicidad Digital",
    icon: Megaphone,
    desc: "Campañas multicanal en Meta, Google y más para maximizar alcance y conversión.",
  },
  {
    title: "Email Marketing",
    icon: MailOpen,
    desc: "Automatizaciones que convierten leads en clientes con mensajes personalizados.",
  },
  {
    title: "SEO & Contenido",
    icon: Globe,
    desc: "Posicionamiento en buscadores a través de contenido optimizado y estrategias de keywords.",
  },
  {
    title: "Análisis de Datos",
    icon: BarChart3,
    desc: "Monitoreo en tiempo real y dashboards para mejorar la toma de decisiones.",
  },
]

export default function MarketingOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Qué Hacemos en Marketing Digital?</h2>
          <p className="text-lg text-gray-600">
            Nuestro enfoque integral combina creatividad, tecnología y análisis para escalar tu marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-2 border-gray-100 hover:border-red-600 transition-all shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
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
