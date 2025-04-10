import Header from "@/components/header"
import Footer from "@/components/footer"
import Automations from "@/components/automations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MagicReveal, MagicText } from "@/lib/magic-ui"
import { ArrowRight, Clock, Cog, Zap } from "lucide-react"

export default function AutomationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <MagicReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-red-600">Automatizaciones</span> de Negocio
                </h1>
              </MagicReveal>
              <MagicReveal delay={200}>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Optimiza tus operaciones y ahorra tiempo con potentes soluciones de automatización. Integramos
                  herramientas como Zapier y Make para crear flujos de trabajo sin problemas que eliminan tareas
                  repetitivas.
                </p>
              </MagicReveal>
              <MagicReveal delay={400}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover">
                  Comienza a Automatizar Hoy
                </Button>
              </MagicReveal>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <Automations />

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MagicText text="Beneficios de la Automatización" />
              <p className="text-lg text-gray-600 mt-4">
                Descubre cómo la automatización puede transformar las operaciones de tu negocio e impulsar el
                crecimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Ahorra Tiempo",
                  description:
                    "Automatiza tareas repetitivas y libera a tu equipo para que se concentre en actividades de alto valor que impulsan el crecimiento.",
                  stat: "85%",
                  statLabel: "Tiempo Ahorrado",
                },
                {
                  icon: Zap,
                  title: "Aumenta la Eficiencia",
                  description:
                    "Optimiza los flujos de trabajo y elimina los cuellos de botella para mejorar la eficiencia operativa general.",
                  stat: "60%",
                  statLabel: "Aumento Productividad",
                },
                {
                  icon: Cog,
                  title: "Reduce Errores",
                  description:
                    "Minimiza el error humano y asegura resultados consistentes con procesos y flujos de trabajo automatizados.",
                  stat: "95%",
                  statLabel: "Reducción de Errores",
                },
              ].map((benefit, index) => (
                <MagicReveal key={index} delay={index * 100}>
                  <Card className="h-full border-2 border-gray-100 magic-hover">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{benefit.statLabel}</span>
                          <span className="text-2xl font-bold text-red-600">{benefit.stat}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MagicReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Herramientas que Utilizamos</h2>
              <p className="text-lg text-gray-600">
                Aprovechamos las mejores herramientas de automatización de la industria para crear flujos de trabajo
                potentes para tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Zapier", logo: "/placeholder.svg?height=80&width=160" },
                { name: "Make (Integromat)", logo: "/placeholder.svg?height=80&width=160" },
                { name: "n8n", logo: "/placeholder.svg?height=80&width=160" },
                { name: "Airtable", logo: "/placeholder.svg?height=80&width=160" },
                { name: "Google Workspace", logo: "/placeholder.svg?height=80&width=160" },
                { name: "Microsoft Power Automate", logo: "/placeholder.svg?height=80&width=160" },
                { name: "Notion", logo: "/placeholder.svg?height=80&width=160" },
                { name: "HubSpot", logo: "/placeholder.svg?height=80&width=160" },
              ].map((tool, index) => (
                <MagicReveal key={index} delay={index * 50}>
                  <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center h-32 magic-hover">
                    <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="max-h-12" />
                  </div>
                </MagicReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-red-600 hover:bg-red-700 magic-hover">
                Explorar Todas las Herramientas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
