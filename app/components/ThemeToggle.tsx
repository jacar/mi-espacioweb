"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label className="relative inline-block cursor-pointer" htmlFor="theme-toggle">
      <input
        id="theme-toggle"
        type="checkbox"
        className="sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className="group relative h-7 w-12">
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-500 ${
            theme === "dark"
              ? "bg-gray-900 shadow-[0_0_20px_rgba(91,81,216,0.5),0_0_20px_rgba(131,58,180,0.5),0_0_20px_rgba(225,48,108,0.5),0_0_20px_rgba(253,29,29,0.5),0_0_20px_rgba(247,119,55,0.5),0_0_20px_rgba(252,175,69,0.5),0_0_20px_rgba(255,220,128,0.5)]"
              : "bg-gray-200"
          }`}
        />
        <div
          className={`absolute left-1 top-1 h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-500 ${
            theme === "dark" ? "translate-x-5" : "translate-x-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs">{theme === "dark" ? "🌙" : "☀️"}</span>
          </div>
        </div>
      </div>
    </label>
  )
}

