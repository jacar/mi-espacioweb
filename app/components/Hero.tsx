"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-black min-h-screen">
      <Image
        src="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/image_fx_-59-1.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl font-bolde"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              Armando Ovalle J.
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            15+ Años de Experiencia
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Siempre estoy en modo de espera / activo para ayudarlo a manejar todos los requisitos de su negocio.
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-purple-400 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            (57) 3052891719
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="https://github.com/jacar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              GitHub
            </Link>
            <Link
              href="https://webcincodev.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white hover:text-purple-300"
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
          <motion.div
            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              x: mousePosition.x / 20,
              y: mousePosition.y / 20,
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            dragElastic={0.1}
          >
            <Image
              src="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/yo.png"
              alt="Armando Ovalle J."
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-4 font-bolde">
          <TypeAnimation
            sequence={["Pasión por la web", 2000, "Diseño innovador", 2000, "Desarrollo creativo", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Soy un desarrollador apasionado por la creación de interfaces de usuario accesibles y con píxeles perfectos
          que combinen un diseño bien pensado con una ingeniería sólida.
        </p>
      </div>
    </div>
  )
}

