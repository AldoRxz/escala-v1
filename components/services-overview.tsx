import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Workflow, MessageSquare, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web personalizados, soluciones de e-commerce y landing pages diseñadas para convertir.",
    icon: Globe,
    href: "#web-development",
  },
  {
    title: "Automatizaciones",
    description: "Optimiza tus procesos de negocio con potentes herramientas de automatización e integraciones.",
    icon: Workflow,
    href: "#automations",
  },
  {
    title: "Chatbots",
    description: "Interactúa con clientes 24/7 con chatbots inteligentes para WhatsApp, Messenger y sitios web.",
    icon: MessageSquare,
    href: "#chatbots",
  },
  {
    title: "Marketing Digital",
    description: "Impulsa el crecimiento con campañas estratégicas en Meta, Google, email y más.",
    icon: BarChart3,
    href: "#digital-marketing",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">
            Soluciones digitales integrales para ayudar a tu negocio a crecer y prosperar en el entorno digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <a key={index} href={service.href} className="group transition-transform magic-hover">
                <Card className="h-full border-2 border-gray-100 hover:border-red-100 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
