"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowRightLeft, Zap } from "lucide-react"

const useCases = [
  {
    title: "Incorporación de Clientes",
    description:
      "Automatiza correos de bienvenida, recolección de documentos y configuración de cuentas para nuevos clientes.",
    icon: Zap,
  },
  {
    title: "Integración con CRM",
    description: "Sincroniza datos de clientes entre plataformas y activa acciones de seguimiento automáticamente.",
    icon: ArrowRightLeft,
  },
  {
    title: "Nutrición de Leads",
    description: "Crea secuencias de correos automatizados basados en el comportamiento y la interacción del usuario.",
    icon: ArrowRight,
  },
]

export default function Automations() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thanks for your message! We'll be in touch soon.")
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="automations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Automatizaciones de Negocio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Optimiza tus operaciones y ahorra tiempo con potentes soluciones de automatización. Integramos
              herramientas como Zapier y Make para crear flujos de trabajo sin problemas que eliminan tareas repetitivas
              y aumentan la productividad.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <Card key={index} className="border-2 border-gray-100 magic-hover">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <Card className="border-2 border-gray-100 shadow-lg">
              <CardContent className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  ¿Interesado en Automatizaciones?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Cuéntanos sobre tus procesos de negocio y te sugeriremos soluciones de automatización que pueden
                  ahorrarte tiempo y recursos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      placeholder="Tu Nombre"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu Email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Cuéntanos sobre los procesos que te gustaría automatizar"
                      className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 magic-hover">
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
