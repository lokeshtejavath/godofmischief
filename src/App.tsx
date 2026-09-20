import './App.css'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { ThemeProvider } from './context/ThemeContext'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import FeaturedProject from './components/FeaturedProject/FeaturedProject'
import Skills from './components/Skills/Skills'
import Recommendation from './components/Recommendation/Recommendation'
import Contact from './components/Contact/Contact'

function AppContent() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      lenisRef.current = new Lenis({
        lerp: 0.1,
        duration: 1.2,
      })

      const raf = (time: number) => {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenisRef.current?.destroy()
      }
    }
  }, [])

  return (
    <div className="app-container">
      <NavBar lenis={lenisRef.current} />
      <Hero />
      <About />
      <Experience />
      <FeaturedProject />
      <Skills />
      <Recommendation />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
