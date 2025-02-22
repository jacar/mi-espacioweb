"use client"

import { motion } from "framer-motion"
import { Palette, Globe, Cog, Share2, BarChartIcon as ChartBar, Code } from "lucide-react"

const services = [
  {
    icon: <Palette className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Diseño Gráfico Integral",
    description: "Creación de identidades visuales impactantes y coherentes para tu marca.",
  },
  {
    icon: <Globe className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Diseño Web",
    description: "Desarrollo de sitios web modernos, responsivos y optimizados para conversiones.",
  },
  {
    icon: <Cog className="w-12 h-12 mb-4 text-green-500" />,
    title: "Mantenimiento WordPress",
    description: "Soporte técnico y actualizaciones para mantener tu sitio WordPress seguro y funcional.",
  },
  {
    icon: <Share2 className="w-12 h-12 mb-4 text-pink-500" />,
    title: "Contenido Redes Sociales",
    description: "Creación y gestión de contenido atractivo para tus plataformas de redes sociales.",
  },
  {
    icon: <ChartBar className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Consultoría",
    description: "Asesoramiento experto para optimizar tu presencia digital y estrategias de negocio.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-red-500" />,
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web personalizadas y soluciones técnicas avanzadas.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-gray-900 to-black"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Servicios Personalizados
        </motion.h2>
        <p className="text-center text-xl text-gray-300 mb-12">
          Diseño Digital Excepcional: Potenciando tu Presencia en Línea
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

