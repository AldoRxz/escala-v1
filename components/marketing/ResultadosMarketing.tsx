import { Card, CardContent } from "@/components/ui/card"
import { BarChart } from "lucide-react"

const resultados = [
  { label: "Incremento en tráfico", valor: "+125%", color: "bg-blue-600" },
  { label: "Leads calificados", valor: "+87%", color: "bg-green-600" },
  { label: "Conversión de campañas", valor: "+63%", color: "bg-red-600" },
]

export default function ResultadosMarketing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Resultados que Hablan</h2>
          <p className="text-gray-600 text-lg">Mira lo que hemos logrado con nuestros clientes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultados.map((item, index) => (
            <Card key={index} className="shadow-lg border-2 border-gray-100">
              <CardContent className="p-6 text-center">
                <BarChart className={`h-6 w-6 mx-auto mb-4 ${item.color} text-white p-1 rounded-full`} />
                <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-gray-900">{item.valor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
