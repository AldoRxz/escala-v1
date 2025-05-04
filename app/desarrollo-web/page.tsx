import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DesarrolloWebPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Desarrollo Web</h1>
        <p className="text-lg text-gray-700">
          Creamos sitios web rápidos, modernos y adaptados a tu marca, pensados para
          atraer, convertir y fidelizar a tus clientes.
        </p>
      </main>
      <Footer />
    </div>
  )
}
