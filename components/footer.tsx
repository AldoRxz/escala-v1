import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Escala<span className="text-primary">+</span>
            </h3>
            <p className="mb-6">
              Transformando negocios a través de soluciones digitales innovadoras. Ayudamos a las marcas a crecer y
              tener éxito en el panorama digital.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#web-development" className="text-gray-300 hover:text-primary transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#automations" className="text-gray-300 hover:text-primary transition-colors">
                  Automatizaciones
                </Link>
              </li>
              <li>
                <Link href="#chatbots" className="text-gray-300 hover:text-primary transition-colors">
                  Chatbots
                </Link>
              </li>
              <li>
                <Link href="#digital-marketing" className="text-gray-300 hover:text-primary transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Optimización SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Creación de Contenido
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span>
                  Av san mateo
                  <br />
                  Guadalajara, jal, CP 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>+52 (33) 11474712</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span>info@escala.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Escala+. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
