import Header from "@/components/header"
import Footer from "@/components/footer"
import WebDevelopment from "@/components/web-development"
import { Button } from "@/components/ui/button"
import { MagicReveal, MagicText } from "@/lib/magic-ui"
import { Code, Database, Layout, Smartphone } from "lucide-react"

export default function WebDevelopmentPage() {
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
                  Servicios de <span className="text-red-600">Desarrollo</span> Web
                </h1>
              </MagicReveal>
              <MagicReveal delay={200}>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  Creamos sitios web impresionantes y funcionales que generan resultados. Desde sitios corporativos
                  hasta plataformas de comercio electrónico, nuestro equipo de desarrollo construye experiencias
                  digitales que atraen a los visitantes y los convierten en clientes.
                </p>
              </MagicReveal>
              <MagicReveal delay={400}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                  Obtén una Consulta Gratuita
                </Button>
              </MagicReveal>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <WebDevelopment />

        {/* Technologies Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <MagicText text="Tecnologías que Utilizamos" />
              <p className="text-base sm:text-lg text-gray-600 mt-4">
                Aprovechamos las últimas tecnologías para construir aplicaciones web rápidas, seguras y escalables.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: Code,
                  title: "Frontend",
                  description: "React, Next.js, Vue.js y otros frameworks modernos de JavaScript.",
                },
                {
                  icon: Database,
                  title: "Backend",
                  description: "Node.js, Python, PHP y soluciones de bases de datos como MongoDB y PostgreSQL.",
                },
                {
                  icon: Layout,
                  title: "CMS",
                  description: "WordPress, Shopify y soluciones de CMS headless para gestión de contenido.",
                },
                {
                  icon: Smartphone,
                  title: "Responsive",
                  description:
                    "Enfoque mobile-first que garantiza que tu sitio funcione en todos los dispositivos y tamaños de pantalla.",
                },
              ].map((tech, index) => (
                <MagicReveal key={index} delay={index * 100}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm magic-hover">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                      <tech.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-center mb-2">{tech.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center">{tech.description}</p>
                  </div>
                </MagicReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nuestro Proceso de Desarrollo
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Seguimos un enfoque estructurado para garantizar que tu proyecto se entregue a tiempo y supere las
                expectativas.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on desktop */}
              <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-red-200 hidden md:block" />

              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    title: "Descubrimiento y Planificación",
                    description:
                      "Comenzamos por entender tus objetivos de negocio, público objetivo y requisitos del proyecto.",
                  },
                  {
                    title: "Diseño y Prototipado",
                    description:
                      "Nuestros diseñadores crean wireframes y diseños visuales que se alinean con tu marca y las necesidades de los usuarios.",
                  },
                  {
                    title: "Desarrollo",
                    description:
                      "Nuestros desarrolladores construyen tu sitio web utilizando las últimas tecnologías y mejores prácticas.",
                  },
                  {
                    title: "Pruebas y Control de Calidad",
                    description:
                      "Probamos minuciosamente tu sitio web para asegurar que funcione perfectamente en todos los dispositivos y navegadores.",
                  },
                  {
                    title: "Lanzamiento y Soporte",
                    description:
                      "Implementamos tu sitio web y proporcionamos soporte y mantenimiento continuos para mantenerlo funcionando sin problemas.",
                  },
                ].map((step, index) => (
                  <MagicReveal key={index} delay={index * 150}>
                    <div className="relative flex flex-col md:flex-row md:items-start">
                      {/* Mobile version - vertical timeline */}
                      <div className="flex items-center mb-3 md:hidden">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </div>
                        <div className="h-0.5 flex-grow bg-red-200 ml-2"></div>
                      </div>

                      {/* Desktop version - horizontal timeline */}
                      <div className="absolute left-1/2 -translate-x-1/2 -ml-px mt-3 hidden md:block">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </div>
                      </div>

                      <div
                        className={`md:w-1/2 md:pr-8 ${index % 2 === 0 ? "md:text-right" : "md:ml-auto md:pl-8 md:text-left"} text-left`}
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </MagicReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
