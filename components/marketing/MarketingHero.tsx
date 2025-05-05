import { Sparkles } from "lucide-react"

export default function MarketingHero() {
  return (
    <section className="relative bg-red-600 text-white py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md mb-4">
            <Sparkles className="h-4 w-4" />
            Marketing Estratégico
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Marketing Digital que <span className="underline decoration-white">Impulsa Resultados</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-md">
            Estrategias creativas para destacar tu marca, conectar con tu audiencia y crecer sin límites.
          </p>
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition">
            Comienza Hoy
          </button>
        </div>

        {/* Imagen decorativa / mockup */}
        <div className="hidden lg:block">
          <img
            src="/placeholder.svg?height=500&width=600"
            alt="Marketing dashboard"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
