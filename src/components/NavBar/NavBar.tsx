
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './NavBar.css'
import { useTheme } from '../../context/ThemeContext'
import type Lenis from 'lenis'

interface NavBarProps {
  lenis: Lenis | null
}

export default function NavBar({ lenis }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    if (lenis) {
      const element = document.getElementById(id)
      if (element) {
        lenis.scrollTo(element, { duration: 1.2, offset: -80 })
      }
    } else {
      // Fallback without Lenis
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <button
          className="navbar-brand"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          {'< LT />'}
        </button>

        <div className="navbar-links">
          <button onClick={() => scrollTo('hero')}>Hero</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('project')}>Project</button>
          <button onClick={() => scrollTo('skills')}>Skills</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </motion.button>
      </div>
    </motion.nav>
  )
}