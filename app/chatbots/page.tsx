import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbots from "@/components/chatbots"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MagicReveal, MagicText } from "@/lib/magic-ui"
import { MessageCircle, Users, BarChart, ShoppingCart } from "lucide-react"

export default function ChatbotsPage() {
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
                  Chatbots <span className="text-red-600">Inteligentes</span>
                </h1>
              </MagicReveal>
              <MagicReveal delay={200}>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                  Interactúa con tus clientes 24/7 a través de soluciones de IA conversacional que mejoran el servicio
                  al cliente e impulsan las ventas.
                </p>
              </MagicReveal>
              <MagicReveal delay={400}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                  Comienza con Chatbots
                </Button>
              </MagicReveal>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <Chatbots />

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <MagicText text="Casos de Uso de Chatbots" />
              <p className="text-base sm:text-lg text-gray-600 mt-4">
                Descubre cómo los chatbots pueden transformar diferentes aspectos de tu negocio.
              </p>
            </div>

            <Tabs defaultValue="customer-service" className="w-full">
              <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4">
                <TabsList className="flex-nowrap">
                  <TabsTrigger value="customer-service" className="px-3 sm:px-6 whitespace-nowrap">
                    <Users className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">Atención al Cliente</span>
                  </TabsTrigger>
                  <TabsTrigger value="lead-generation" className="px-3 sm:px-6 whitespace-nowrap">
                    <BarChart className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">Generación de Leads</span>
                  </TabsTrigger>
                  <TabsTrigger value="e-commerce" className="px-3 sm:px-6 whitespace-nowrap">
                    <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">E-Commerce</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="customer-service">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Chatbots de Atención al Cliente
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      Proporciona soporte instantáneo a tus clientes 24/7, responde preguntas comunes y escala problemas
                      complejos a agentes humanos cuando sea necesario.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Respuestas instantáneas a preguntas frecuentes</span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Creación de tickets y actualizaciones de estado</span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Transferencia perfecta a agentes humanos cuando sea necesario
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">Saber Más</Button>
                  </div>
                  <div className="relative mt-8 lg:mt-0">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Customer service chatbot"
                      className="rounded-lg shadow-lg magic-hover w-full"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lead-generation">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lead generation chatbot"
                      className="rounded-lg shadow-lg magic-hover w-full"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Chatbots de Generación de Leads
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      Interactúa con los visitantes del sitio web, califica leads y agenda reuniones automáticamente
                      para impulsar tu pipeline de ventas.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Interacción proactiva con visitantes del sitio web</span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Calificación de leads a través de formularios conversacionales
                        </span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Programación automatizada de reuniones con el equipo de ventas
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">Saber Más</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="e-commerce">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Chatbots de E-Commerce</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                      Ayuda a los clientes a encontrar productos, proporciona recomendaciones y facilita las compras
                      para aumentar las conversiones y las ventas.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Recomendaciones de productos basadas en preferencias del cliente
                        </span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Seguimiento de pedidos y actualizaciones de estado</span>
                      </li>
                      <li className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          Recuperación de carritos abandonados mediante mensajes personalizados
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">Saber Más</Button>
                  </div>
                  <div className="relative mt-8 lg:mt-0">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="E-commerce chatbot"
                      className="rounded-lg shadow-lg magic-hover w-full"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
