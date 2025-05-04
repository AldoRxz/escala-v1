import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MarketingDigitalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Marketing Digital</h1>
        <p className="text-lg text-gray-700">
          Estrategias creativas para destacar tu marca en redes sociales, buscadores y más.
        </p>
      </main>
      <Footer />
    </div>
  )
}
