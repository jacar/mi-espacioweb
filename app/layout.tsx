import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import ThemeTransition from "./components/ThemeTransition"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://db.onlinewebfonts.com/c/0b126f23fbd87eea683f53b749b11348?family=BOLDE" rel="stylesheet" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeTransition />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'