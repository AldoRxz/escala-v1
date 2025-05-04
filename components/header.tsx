"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Desarrollo Web", href: "/desarrollo-web" },
  { name: "Automatizaciones", href: "/automatizaciones" },
  { name: "Chatbots", href: "/chat-bots" },
  { name: "Marketing Digital", href: "/marketing-digital" },
]


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">
                Escala<span className="text-red-800">+</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-red-600 hover:bg-red-700">Contáctanos</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <X className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-1 px-4 pb-5 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 px-3">
                <Button className="w-full bg-red-600 hover:bg-red-700">Contáctanos</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
