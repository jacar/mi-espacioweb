"use client"

import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "WEB MASTER SENIOR",
    company: "Unidad Creativa",
    date: "2021 - 2022",
    description: [
      "Lideré proyectos de diseño web y desarrollo para diversos clientes.",
      "Implementé soluciones personalizadas utilizando WordPress y otras tecnologías web.",
      "Optimicé sitios web para mejorar el rendimiento y la experiencia del usuario.",
      "Colaboré con equipos multidisciplinarios para entregar proyectos de alta calidad.",
      "Gestioné la comunicación con clientes y stakeholders para asegurar la satisfacción del proyecto.",
    ],
  },
  {
    title: "WEB MASTER SENIOR",
    company: "Strong Mero Power",
    date: "2021 - 2022",
    description: [
      "Lideré el diseño, administración y desarrollo de nuestra tienda virtual especializada en artículos de repuestos para sonido.",
      "Optimicé la velocidad del sitio para mejorar la experiencia del usuario",
      "Aumenté las ventas online través de estrategias de SEO efectivas",
      "Desarrollé funcionalidades personalizadas para mejorar la plataforma",
      "Implementé seguridad avanzada para proteger los datos del cliente",
      "Lideré un equipo multifuncional en proyectos de alto impacto.",
    ],
  },
  {
    title: "WEB MASTER SENIOR",
    company: "Alarona Studio",
    date: "2022 - 2023",
    description: [
      "Desarrollé y personalicé sitios web en WordPress, creando temas personalizados, integrando plugins y optimizando la funcionalidad para mejorar la experiencia del usuario.",
      "Sitios web WordPress personalizados a medida.",
      "Creación de temas únicos y atractivos.",
      "Integración eficiente de plugins esenciales.",
      "Optimización para una experiencia de usuario fluida.",
      "Mejora continua de la funcionalidad web.",
      "Diseño centrado en resultados del cliente.",
      "Innovación en soluciones web personalizadas.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experiencia Profesional
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-white">
              Creo experiencias digitales accesibles y con píxeles perfectos para la web.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300">
              Soy diseñador gráfico especializado en crear soluciones visuales impactantes y funcionales, experto en
              diseño web y especializado en WordPress. Con una fuerte habilidad en UI/UX y desarrollo web, me dedico a
              fusionar creatividad e innovación para superar las expectativas de los clientes. Estoy entusiasmado por
              aportar estas competencias a su equipo y contribuir al logro de sus objetivos con excelencia.
            </p>
          </motion.div>
        </div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgba(107, 114, 128, 0.1)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgba(107, 114, 128, 0.1)" }}
              date={experience.date}
              iconStyle={{ background: "rgb(124, 58, 237)", color: "#fff" }}
              icon={<Briefcase />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-purple-400">{experience.company}</h4>
              <ul className="mt-4 list-disc list-inside">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-gray-300 mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

