import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Diseños responsivos que funcionan en todos los dispositivos",
  "Estructura de código optimizada para SEO",
  "Velocidades de carga rápidas y alto rendimiento",
  "Interfaces y navegación amigables para el usuario",
  "Arquitectura segura y escalable",
  "Soporte y mantenimiento continuo",
]

export default function WebDevelopment() {
  return (
    <section id="web-development" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Desarrollo Web</h2>
            <p className="text-lg text-gray-600 mb-8">
              Creamos sitios web impresionantes y funcionales que generan resultados. Desde sitios corporativos hasta
              plataformas de comercio electrónico, nuestro equipo de desarrollo construye experiencias digitales que
              atraen a los visitantes y los convierten en clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-red-600 hover:bg-red-700 magic-hover">Ver Nuestro Portafolio</Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg bg-white shadow-lg p-4">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="E-commerce website"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="aspect-video rounded-lg bg-white shadow-lg p-4">
                  <img
                    src="/placeholder.svg?height=150&width=200"
                    alt="Corporate website"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-video rounded-lg bg-white shadow-lg p-4">
                  <img
                    src="/placeholder.svg?height=150&width=200"
                    alt="Landing page"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-white shadow-lg p-4">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Web application"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial card */}
            <Card className="absolute -bottom-8 -left-8 max-w-sm bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Unda Armas</p>
                    <p className="text-sm text-gray-500">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Escala+ transformó nuestra presencia en línea con un sitio web hermoso y funcional que ha aumentado
                  significativamente nuestras tasas de conversión y la interacción con los clientes."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
