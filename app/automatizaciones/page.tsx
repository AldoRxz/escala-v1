import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AutomatizacionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Automatizaciones</h1>
        <p className="text-lg text-gray-700">
          Optimiza tus flujos de trabajo con automatizaciones que eliminan tareas repetitivas,
          mejoran la eficiencia y te ahorran tiempo.
        </p>
      </main>
      <Footer />
    </div>
  )
}
