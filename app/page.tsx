import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import AgenciesCarousel from "./components/AgenciesCarousel"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BotpressChat from "./components/BotpressChat"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <PortfolioGrid />
      <AgenciesCarousel />
      <Experience />
      <Contact />
      <Footer />
      <BotpressChat />
    </>
  )
}

