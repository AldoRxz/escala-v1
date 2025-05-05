"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function MarketingContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert("Gracias por tu interés. Te contactaremos pronto.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          ¿Listo para llevar tu marketing al siguiente nivel?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Tu correo electrónico" value={form.email} onChange={handleChange} required />
          <Textarea
            name="message"
            placeholder="¿Qué tipo de campañas estás buscando?"
            value={form.message}
            onChange={handleChange}
            className="min-h-[120px]"
            required
          />
          <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full">
            Solicitar Consulta Gratuita
          </Button>
        </form>
      </div>
    </section>
  )
}
