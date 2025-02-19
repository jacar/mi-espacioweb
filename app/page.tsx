import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import AgenciesCarousel from "./components/AgenciesCarousel"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <PortfolioGrid />
      <AgenciesCarousel />
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <Link
            href="https://webcincodev.com/portafolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Ver Proyectos de Diseño Gráfico
          </Link>
          <Link
            href="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Curriculum-Armando-Ovalle-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Descargar CV
          </Link>
        </div>
      </div>
      <Experience />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

