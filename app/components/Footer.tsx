"use client"

import Link from "next/link"
import { Github } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Armando Ovalle J.</h3>
            <p className="text-muted-foreground">
              Diseñador y desarrollador web especializado en WordPress y soluciones digitales personalizadas.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <p className="text-muted-foreground mb-2">Email: ovalle_938@hotmail.com</p>
            <p className="text-muted-foreground mb-4">Teléfono: (57) 3052891719</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/jacar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
    
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Armando Ovalle J. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

