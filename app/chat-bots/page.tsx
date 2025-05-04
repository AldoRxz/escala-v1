import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ChatBotsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Chat Bots</h1>
        <p className="text-lg text-gray-700">
          Automatiza la atención al cliente con bots inteligentes que trabajan 24/7,
          ofreciendo respuestas rápidas, precisas y personalizadas.
        </p>
      </main>
      <Footer />
    </div>
  )
}
