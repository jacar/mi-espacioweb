import "./globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Header from "./components/Header"
import ThemeTransition from "./components/ThemeTransition"
import type React from "react"
import Script from "next/script"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Armando Ovalle J. - Portfolio",
  description: "Diseñador y desarrollador web especializado en WordPress y soluciones digitales personalizadas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${montserrat.className} min-h-screen bg-background text-foreground transition-colors duration-500`}
      >
        <ThemeProvider>
          <ThemeTransition />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
        <Script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js" />
        <Script src="https://files.bpcontent.cloud/2025/02/20/03/20250220031345-3K85KGHL.js" />
      </body>
    </html>
  )
}



import './globals.css'