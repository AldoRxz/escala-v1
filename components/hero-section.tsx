import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
              Eleva tu Presencia <span className="text-red-600">Digital</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 magic-reveal show">
              Escala+ ayuda a las empresas a crecer a través de soluciones digitales estratégicas. Desde sitios web
              impresionantes hasta flujos de trabajo automatizados, construimos las herramientas que necesitas para
              tener éxito en el panorama digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                Comenzar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 magic-hover w-full sm:w-auto mt-3 sm:mt-0"
              >
                <Calendar className="mr-2 h-4 w-4" /> Agendar una Reunión
              </Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-video rounded-xl bg-gradient-to-r from-red-600 to-red-400 shadow-xl magic-glow">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Digital marketing illustration"
                className="w-full h-full object-cover rounded-xl mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-red-200 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 bg-red-300 rounded-full opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
