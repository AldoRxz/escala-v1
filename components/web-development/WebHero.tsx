// components/web-development/WebHero.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function WebHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Haz Crecer tu Negocio con
              <br />
              <span className="text-red-600">tu propia página web</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Diseñamos sitios web modernos, rápidos y atractivos que impactan a tus visitantes y generan resultados reales.
              Tu página será más que una vitrina: será una herramienta de ventas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 magic-hover w-full sm:w-auto">
                Comenzar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 magic-hover w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4" /> Agendar una Reunión
              </Button>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="aspect-video rounded-xl bg-gradient-to-r from-red-600 to-red-400 shadow-xl magic-glow">
              <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium">
                Vista previa no disponible
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-red-200 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-16 sm:w-24 h-16 sm:h-24 bg-red-300 rounded-full opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}