"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import Script from "next/script"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div
      id="home"
      className={`relative isolate overflow-hidden min-h-screen ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black" : "bg-gradient-to-br from-purple-100 via-white to-purple-100"}`}
    >
      <Script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module" />
      <Image
        src="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/image_fx_-59-1.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h2
            className={`mt-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight flex flex-col ${isDarkMode ? "text-white" : "text-gray-900"}`}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {["A", "r", "m", "a", "n", "d", "o"].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, 
                      rgba(168, 85, 247, ${Math.abs(Math.sin(Date.now() / 1000 + index))}),
                      rgba(236, 72, 153, ${Math.abs(Math.cos(Date.now() / 1000 + index))})
                    )`,
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradient 8s ease infinite",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="relative">
              {["O", "v", "a", "l", "l", "e", " ", "J", "."].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, 
                      rgba(168, 85, 247, ${Math.abs(Math.sin(Date.now() / 1000 + index + 7))}),
                      rgba(236, 72, 153, ${Math.abs(Math.cos(Date.now() / 1000 + index + 7))})
                    )`,
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradient 8s ease infinite",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.h2>
          <motion.div
            className="mt-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={`text-lg leading-7 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <span className="font-semibold text-purple-400">15+ Años de Experiencia en WordPress</span>
            </p>
            <p className={`text-lg leading-7 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Soy un profesional con más de 15 años de experiencia en desarrollo y gestión de sitios web en WordPress.
              Me especializo en ofrecer soluciones personalizadas para cubrir las necesidades específicas de cada
              negocio, ya sea en diseño, funcionalidad, optimización de rendimiento o soporte continuo.
            </p>
            <p className={`text-lg leading-7 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Mi objetivo es asegurarme de que su sitio web esté actualizado, seguro y brinde una experiencia de usuario
              excepcional.
            </p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="https://wa.me/573052891719?text=Hola%20necesito%20información..."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full ${isDarkMode ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-purple-100 text-purple-700 hover:bg-purple-200"} transition-colors`}
            >
              <Phone className="mr-2" size={24} />
              (57) 3052891719
            </Link>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="https://github.com/jacar/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-6 py-3 text-sm font-semibold shadow-sm ${isDarkMode ? "bg-purple-600 text-white hover:bg-purple-500" : "bg-purple-100 text-purple-700 hover:bg-purple-200"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600`}
            >
              GitHub
            </Link>
            <Link
              href="https://webcincodev.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold leading-6 ${isDarkMode ? "text-white hover:text-purple-300" : "text-purple-700 hover:text-purple-500"}`}
            >
              Blog <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <dotlottie-player
              src="https://lottie.host/38d1722f-bd8a-467c-8d97-1541d2c0d8d5/eUOGsy4jfm.lottie"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <h2
          className={`text-4xl font-bold mb-4 ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200"
              : "text-purple-700"
          }`}
        >
          <TypeAnimation
            sequence={["Pasión por la web", 2000, "Diseño innovador", 2000, "Desarrollo creativo", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h2>
        <p className={`max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          Soy un desarrollador apasionado por la creación de interfaces de usuario accesibles y con píxeles perfectos
          que combinen un diseño bien pensado con una ingeniería sólida.
        </p>
      </div>
    </div>
  )
}

