import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, MessageCircle, Globe, CheckCircle2 } from "lucide-react"

const platforms = [
  {
    name: "WhatsApp",
    icon: MessageSquare,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Messenger",
    icon: MessageCircle,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Website",
    icon: Globe,
    color: "bg-purple-100 text-purple-600",
  },
]

const benefits = [
  "Atención al cliente 24/7 sin intervención humana",
  "Respuestas instantáneas a preguntas comunes",
  "Calificación de leads antes de la interacción humana",
  "Experiencias de cliente personalizadas",
  "Reducción de costos operativos",
  "Valiosos insights y recopilación de datos de clientes",
]

export default function Chatbots() {
  return (
    <section id="chatbots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Chatbots Inteligentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Interactúa con tus clientes 24/7 a través de soluciones de IA conversacional que mejoran el servicio al
            cliente e impulsan las ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-colors">
                <CardContent className="p-5 sm:p-8 text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${platform.color} flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">{platform.name} Chatbots</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Chatbots personalizados para {platform.name} diseñados para interactuar con los clientes, responder
                    preguntas y guiarlos a través de tu embudo de ventas.
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-xl bg-white shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Chatbot demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-10 sm:border-l-12 border-l-blue-600 border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat interface mockup */}
            <Card className="absolute -bottom-8 -right-8 w-48 sm:w-64 border-0 shadow-xl hidden sm:block">
              <CardContent className="p-3 sm:p-4">
                <div className="bg-red-600 text-white p-1.5 sm:p-2 rounded-t-lg">
                  <p className="font-medium text-xs sm:text-sm">Asistente de Escala+</p>
                </div>
                <div className="bg-gray-100 p-2 sm:p-3 rounded-b-lg">
                  <p className="text-xs sm:text-sm text-gray-800 mb-1.5 sm:mb-2">¿En qué puedo ayudarte hoy?</p>
                  <div className="bg-white p-1.5 sm:p-2 rounded text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">
                    Me gustaría saber más sobre sus servicios.
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800">
                    ¡Estaré encantado de contarte sobre nuestros servicios de desarrollo web, automatización y marketing
                    digital!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Beneficios de los Chatbots</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">Solicitar una Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
