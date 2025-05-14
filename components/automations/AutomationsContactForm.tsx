// components/automations/AutomationsContactForm.tsx
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MagicReveal } from "@/lib/magic-ui"

export default function AutomationsContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <MagicReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Cuéntanos qué procesos deseas automatizar y uno de nuestros expertos se pondrá en contacto contigo.
          </p>
        </MagicReveal>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
          />
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe brevemente el proceso que deseas automatizar"
            className="min-h-[120px]"
            required
          />
          <Button type="submit" className="bg-red-600 text-white hover:bg-red-700 w-full">
            Enviar Consulta
          </Button>
        </form>
      </div>
    </section>
  )
}
