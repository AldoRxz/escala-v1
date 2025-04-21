import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Search, Mail, BarChart } from "lucide-react"

const marketingServices = [
  {
    id: "meta",
    name: "Anuncios Meta",
    icon: Facebook,
    description:
      "Publicidad estratégica en Facebook e Instagram para llegar a tu público objetivo y generar conversiones.",
    metrics: [
      { label: "ROAS Promedio", value: "3.2x" },
      { label: "Mejora CTR", value: "+45%" },
      { label: "Costo por Lead", value: "-30%" },
    ],
  },
  {
    id: "google",
    name: "Google Ads",
    icon: Search,
    description:
      "Campañas de búsqueda y display orientadas al rendimiento para captar tráfico de alta intención y hacer crecer tu negocio.",
    metrics: [
      { label: "Tasa Conversión", value: "+62%" },
      { label: "Costo por Clic", value: "-25%" },
      { label: "Quality Score", value: "8.4/10" },
    ],
  },
  {
    id: "email",
    name: "Email Marketing",
    icon: Mail,
    description: "Campañas de correo personalizadas que nutren leads, retienen clientes y generan compras repetidas.",
    metrics: [
      { label: "Tasa Apertura", value: "28.5%" },
      { label: "Tasa Clics", value: "4.2%" },
      { label: "ROI", value: "4.1x" },
    ],
  },
]

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Marketing Digital</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Estrategias de marketing basadas en datos que ofrecen resultados medibles y hacen crecer tu negocio.
          </p>
        </div>

        <Tabs defaultValue="meta" className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4">
            <TabsList className="flex-nowrap">
              {marketingServices.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="px-3 sm:px-6 whitespace-nowrap">
                  <service.icon className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">{service.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {marketingServices.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.name}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{service.description}</p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                    {service.metrics.map((metric, index) => (
                      <Card key={index} className="border-2 border-gray-100 magic-hover">
                        <CardContent className="p-3 sm:p-4 text-center">
                          <p className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">{metric.label}</p>
                          <p className="text-lg sm:text-2xl font-bold text-red-600">{metric.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">Saber Más</Button>
                </div>

                <div className="relative mt-8 lg:mt-0">
                  <div className="aspect-video rounded-xl bg-gray-100 shadow-lg overflow-hidden">
                    {service.id === "meta" && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Facebook ad campaign"
                          className="w-full h-full object-cover rounded"
                        />
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Instagram ad campaign"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    )}
                    {service.id === "google" && (
                      <div className="p-2 sm:p-4">
                        <img
                          src="/placeholder.svg?height=300&width=500"
                          alt="Google Ads dashboard"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    )}
                    {service.id === "email" && (
                      <div className="p-2 sm:p-4">
                        <img
                          src="/placeholder.svg?height=300&width=500"
                          alt="Email campaign results"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    )}
                  </div>

                  {/* Results chart */}
                  <Card className="absolute -bottom-8 -left-8 w-48 sm:w-64 border-0 shadow-xl hidden sm:block">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Resultados de Campaña</h4>
                        <BarChart className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div>
                          <div className="flex justify-between text-xs sm:text-sm mb-0.5 sm:mb-1">
                            <span className="text-gray-600">Antes</span>
                            <span className="text-gray-900 font-medium">1,245</span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full">
                            <div className="h-1.5 sm:h-2 bg-gray-400 rounded-full w-1/3"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs sm:text-sm mb-0.5 sm:mb-1">
                            <span className="text-gray-600">Después</span>
                            <span className="text-gray-900 font-medium">3,842</span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full">
                            <div className="h-1.5 sm:h-2 bg-blue-600 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </section>
  )
}
