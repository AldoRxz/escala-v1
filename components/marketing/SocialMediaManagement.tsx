import { CalendarCheck2, Users, Image, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Planeación de Contenidos",
    icon: CalendarCheck2,
    desc: "Creamos calendarios editoriales estratégicos para publicaciones consistentes y efectivas.",
  },
  {
    title: "Diseño Gráfico",
    icon: Image,
    desc: "Publicaciones visualmente atractivas que reflejan la identidad de tu marca.",
  },
  {
    title: "Gestión de Comunidades",
    icon: Users,
    desc: "Interacción constante con tu audiencia para aumentar el engagement.",
  },
  {
    title: "Crecimiento Orgánico",
    icon: ThumbsUp,
    desc: "Estrategias para aumentar seguidores, alcance e impacto sin depender solo de publicidad.",
  },
]

export default function SocialMediaManagement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gestión de Redes Sociales</h2>
          <p className="text-lg text-gray-600">
            Construimos tu presencia digital en plataformas clave con contenido estratégico, visual y auténtico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}