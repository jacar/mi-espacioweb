"use client"

<<<<<<< HEAD
=======
import type React from "react"

>>>>>>> origin/master
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
<<<<<<< HEAD
import { Menu, X } from "lucide-react"

const menuItems = [
  { href: "#home", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Portafolio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
=======
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

const menuItems = [
  { href: "home", label: "Inicio" },
  { href: "services", label: "Servicios" },
  { href: "portfolio", label: "Portafolio" },
  { href: "experience", label: "Experiencia" },
  { href: "contact", label: "Contacto" },
>>>>>>> origin/master
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
<<<<<<< HEAD
=======
  const { isDarkMode, toggleMode } = useTheme()
>>>>>>> origin/master

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

<<<<<<< HEAD
  return (
    <nav className="bg-transparent">
=======
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetSection = document.getElementById(href)
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust this value based on your header height
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
>>>>>>> origin/master
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://www.webcincodev.com/blog/wp-content/uploads/2025/02/logoweb5.png"
                alt="Armando Ovalle J."
                width={150}
                height={150}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
<<<<<<< HEAD
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.href.slice(1) ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
=======
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.href ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="https://www.webcincodev.com/portafolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                Ver más
              </Link>
              <button
                onClick={toggleMode}
                className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMode}
              className="p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
>>>>>>> origin/master
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900"
<<<<<<< HEAD
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
=======
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
>>>>>>> origin/master
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
<<<<<<< HEAD
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.href.slice(1) ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
=======
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.href ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="https://www.webcincodev.com/portafolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Ver más
              </Link>
>>>>>>> origin/master
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

