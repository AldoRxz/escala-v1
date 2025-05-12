import { Code } from "lucide-react"

export default function DevelopmentWebHero() {
  return (
    <section className="relative bg-blue-600 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md mb-4">
            <Code className="h-4 w-4" />
            Desarrollo Web Personalizado
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Soluciones Web que <span className="underline decoration-white">Impulsan tu Negocio</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-md">
            Creamos páginas web y aplicaciones a medida para fortalecer tu presencia online y ofrecer una experiencia de usuario excepcional.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition">
            Comienza Hoy
          </button>
        </div>

        <div className="hidden lg:block">
          <img
            src="/placeholder.svg?height=500&width=600"
            alt="Web development"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
