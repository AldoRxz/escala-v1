import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary bg-hero-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Negocio Digital?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos hoy para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Contactar Ahora <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
