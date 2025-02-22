"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Generador QR",
    description: "Herramienta para crear códigos QR personalizados",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR.png",
    category: "Proyectos Personales",
    link: "https://www.aovalle.space/",
  },
  {
    id: 2,
    title: "Conversor de Divisas",
    description: "Aplicación para convertir entre diferentes monedas",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR-4.png",
    category: "Proyectos Personales",
    link: "https://webcindivisas.netlify.app/",
  },
  {
    id: 3,
    title: "API de Películas",
    description: "Interfaz para buscar información sobre películas",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR-3.png",
    category: "Proyectos Personales",
    link: "https://webcinpeli.netlify.app/",
  },
  {
    id: 4,
    title: "Generador de Prompts",
    description: "Herramienta para crear prompts de IA",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR-2.png",
    category: "Proyectos Personales",
    link: "https://webcincodev.com/prompt/",
  },
  {
    id: 5,
    title: "Traductor en Tiempo Real",
    description: "Aplicación de traducción instantánea",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Traductor-Tiempo-Real.png",
    category: "Proyectos Personales",
    link: "https://traductorw5.netlify.app",
  },
  {
    id: 6,
    title: "Safe Web",
    description: "Herramienta de seguridad web",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Traductor-Tiempo-Real-1.png",
    category: "Proyectos Personales",
    link: "https://safeweb5.vercel.app/",
  },
  {
    id: 7,
    title: "Electricidad Puigcerda",
    description: "Web para empresa de servicios eléctricos",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/acacias-1-600x650-1.png",
    category: "Web WordPress",
    link: "https://www.electricidadpuigcerdaceretanes.com/",
  },
  {
    id: 8,
    title: "Consultorio Odontológico",
    description: "Sitio web para clínica dental",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/78-1152x1248-1.png",
    category: "Web WordPress",
    link: "https://www.consultorioodontologicola78.com/",
  },
  {
    id: 9,
    title: "JL Stately Bulldogs",
    description: "Web para criadores de mascotas",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/jl-1152x1248-1.png",
    category: "Web WordPress",
    link: "https://jlstatelybulldogs.com/",
  },
  {
    id: 10,
    title: "Constructivamente",
    description: "Portal web para constructora",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/er-1152x1248-1.png",
    category: "Web WordPress",
    link: "https://constructivamente.com/",
  },
  {
    id: 11,
    title: "GCJ Obras y Ambiente",
    description: "Sitio web para arquitecto",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/cabas-jacome1-1256x1256-1.jpeg",
    category: "Web WordPress",
    link: "https://gcjobrasyambiente.com",
  },
  {
    id: 12,
    title: "Legal Aid DC",
    description: "Portal para servicios legales",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/legal-400x433-1.png",
    category: "Web WordPress",
    link: "https://www.legalaiddc.org/",
  },
  {
    id: 13,
    title: "Balder IP",
    description: "Web para asesores de propiedad intelectual",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/859-1152x1248-1.png",
    category: "Web WordPress",
    link: "https://balderip.com/es/",
  },
  {
    id: 14,
    title: "Consultores Experienciales",
    description: "Portal de consultoría empresarial",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/cosnulto-1152x1248-1.png",
    category: "Web WordPress",
    link: "https://www.consultoresexperienciales.com/",
  },
  {
    id: 15,
    title: "Arepas La Mejor",
    description: "Sitio web para restaurante",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR-9.png",
    category: "Web WordPress",
    link: "https://arepaslamejor.com/",
  },
  {
    id: 16,
    title: "Academia WebCinco",
    description: "Plataforma educativa online",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/Generador-QR-10.png",
    category: "Web WordPress",
    link: "https://www.webcincodev.com/tienda/",
  },
  {
    id: 17,
    title: "Descubre Travel",
    description: "Sitio web para agencia de viajes",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/descubre2-600x600-1.png",
    category: "Web WordPress",
    link: "https://descubre.com.co/",
  },
  {
    id: 18,
    title: "La Lupa",
    description: "Portal web para agencia de noticias",
    imageUrl: "https://www.webcincodev.com/blog/wp-content/uploads/2025/02/lupa-600x650-1.png",
    category: "Web WordPress",
    link: "https://lalupa.co/2024/",
  },
]

const categories = ["Todos", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Todos")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 9

  const filteredProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mis Últimos Proyectos
        </motion.h2>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-purple-500/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center px-4">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.category}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                  >
                    Ver Proyecto
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === pageNumber
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

