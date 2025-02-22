"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import localFont from "next/font/local"
import { WhatsappIcon } from "react-share"

const agressive = localFont({ src: "../../public/fonts/AGRESSIVE.ttf" })

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
          <motion.h2
            className={`mt-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight ${agressive.className} flex flex-col`}
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
          <motion.p
            className="mt-6 text-lg leading-7 text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-semibold text-purple-400">15+ Años de Experiencia en WordPress</span>
            <br />
            <br />
            Con más de 15 años de experiencia en el desarrollo y gestión de sitios web en WordPress, me dedico a ofrecer
            soluciones personalizadas y eficaces para satisfacer todas las necesidades de su negocio. Ya sea que
            necesite un diseño atractivo, funcionalidad avanzada, optimización de rendimiento o soporte continuo,
            siempre estoy disponible y listo para ayudarle a llevar su presencia en línea al siguiente nivel. Mi
            compromiso es garantizar que su sitio web esté a la vanguardia, se mantenga seguro y ofrezca la mejor
            experiencia de usuario posible.
          </motion.p>
          <motion.div
            className="mt-6 flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="https://wa.me/573052891719?text=Hola%20necesito%20información..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg leading-8 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              <WhatsappIcon size={32} round className="mr-2" />
              (57) 3052891719
            </Link>
          </motion.div>
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
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden cursor-grab active:cursor-grabbing">
            <Image
              src="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/yo.png"
              alt="Armando Ovalle J."
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <h2
          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-4 ${agressive.className}`}
        >
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

