import Header from "@/components/header"
import Footer from "@/components/footer"
import DigitalMarketing from "@/components/digital-marketing"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MagicReveal, MagicText } from "@/lib/magic-ui"
import { BarChart, Target, TrendingUp, Users } from "lucide-react"

export default function DigitalMarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <MagicReveal>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Servicios de <span className="text-red-600">Marketing</span> Digital
                </h1>
              </MagicReveal>
              <MagicReveal delay={200}>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  Estrategias de marketing basadas en datos que ofrecen resultados medibles y hacen crecer tu negocio.
                </p>
              </MagicReveal>
              <MagicReveal delay={400}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                  Impulsa tu Presencia Online
                </Button>
              </MagicReveal>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <DigitalMarketing />

        {/* Case Studies Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <MagicText text="Casos de Éxito" />
              <p className="text-base sm:text-lg text-gray-600 mt-4">
                Mira cómo hemos ayudado a empresas como la tuya a lograr resultados extraordinarios con nuestras
                estrategias de marketing digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  client: "TechStart",
                  industry: "SaaS",
                  title: "300% de Aumento en Leads Calificados",
                  description:
                    "Ayudamos a TechStart a optimizar sus campañas de Meta y Google Ads, resultando en un aumento del 300% en leads calificados y una reducción del 40% en el costo por adquisición.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  client: "FashionHub",
                  industry: "E-commerce",
                  title: "5.2x Retorno de Inversión Publicitaria",
                  description:
                    "Nuestras campañas dirigidas en redes sociales ayudaron a FashionHub a lograr un retorno de 5.2x en la inversión publicitaria y un aumento del 78% en ventas online en tres meses.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  client: "GreenLife",
                  industry: "Salud y Bienestar",
                  title: "85% de Crecimiento en Suscriptores",
                  description:
                    "Diseñamos e implementamos una estrategia de marketing de contenidos que resultó en un crecimiento del 85% en suscriptores de email y un aumento del 62% en el tráfico del sitio web.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((caseStudy, index) => (
                <MagicReveal key={index} delay={index * 100}>
                  <Card className="h-full border-2 border-gray-100 overflow-hidden magic-hover">
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.client}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-medium text-red-600">{caseStudy.client}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{caseStudy.industry}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">{caseStudy.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-red-600 text-red-600 hover:bg-red-50 text-xs sm:text-sm"
                      >
                        Leer Caso de Estudio
                      </Button>
                    </CardContent>
                  </Card>
                </MagicReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Por Qué Elegirnos
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                No somos solo otra agencia de marketing. Esto es lo que nos diferencia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: Target,
                  title: "Enfoque Basado en Datos",
                  description:
                    "Tomamos decisiones basadas en datos, no en suposiciones, para garantizar que tu presupuesto de marketing se gaste de manera efectiva.",
                },
                {
                  icon: TrendingUp,
                  title: "Resultados Medibles",
                  description:
                    "Establecemos KPIs claros y proporcionamos informes transparentes para que puedas ver el impacto de tu inversión en marketing.",
                },
                {
                  icon: Users,
                  title: "Equipo Experto",
                  description:
                    "Nuestro equipo de especialistas certificados en marketing tiene experiencia en diversas industrias y plataformas.",
                },
                {
                  icon: BarChart,
                  title: "Optimización Continua",
                  description:
                    "Monitoreamos y optimizamos constantemente tus campañas para mejorar el rendimiento y maximizar el ROI.",
                },
              ].map((feature, index) => (
                <MagicReveal key={index} delay={index * 100}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm magic-hover">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                  </div>
                </MagicReveal>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                Programa una Llamada Estratégica
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
