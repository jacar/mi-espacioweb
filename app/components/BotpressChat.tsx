"use client"

import { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    // This effect will run only on the client side
    const injectScript = document.createElement("script")
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js"
    injectScript.async = true
    document.body.appendChild(injectScript)

    const configScript = document.createElement("script")
    configScript.src = "https://files.bpcontent.cloud/2025/02/20/03/20250220031345-3K85KGHL.js"
    configScript.async = true
    document.body.appendChild(configScript)

    return () => {
      // Cleanup scripts when component unmounts
      document.body.removeChild(injectScript)
      document.body.removeChild(configScript)
    }
  }, [])

  return (
    <div className="ai-assistant fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      {/* The Botpress webchat will be injected here */}
    </div>
  )
}

