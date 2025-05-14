"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WebContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-xl mx-auto shadow-lg border-2 border-gray-100">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cuéntanos sobre tu proyecto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Tu nombre" name="name" value={form.name} onChange={handleChange} required />
              <Input type="email" placeholder="Tu correo electrónico" name="email" value={form.email} onChange={handleChange} required />
              <Textarea placeholder="Describí tu idea o necesidades" name="message" value={form.message} onChange={handleChange} required />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
