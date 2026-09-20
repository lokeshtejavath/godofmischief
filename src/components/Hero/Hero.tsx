import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from '../../assets/20240509_171131.jpg'
import './Hero.css'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const textRef = useRef('')

  const fullText = 'Full-stack Software Engineer / Agentic AI Explorer / Wells Fargo, Hyderabad'

  useEffect(() => {
    // Typing effect
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        textRef.current = fullText.slice(0, index + 1)
        setDisplayText(textRef.current)
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">Lokesh Tejavath</h1>
          <p className="hero-subtitle">{displayText}</p>
          <div className="hero-cta-buttons">
            <motion.a
              href="#contact"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#project"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <div className="arcane-ring-container">
            <svg className="arcane-ring" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--maroon-dust)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--maroon)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="160" fill="none" stroke="var(--maroon-dust)" strokeWidth="1" opacity="0.3" />
            </svg>

            <motion.div
              className="arcane-text"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg className="text-ring" viewBox="0 0 400 400">
                <defs>
                  <path
                    id="circlePath"
                    d="M 200, 200 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                    fill="none"
                  />
                </defs>
                <text className="arcane-text-content" fontSize="14" letterSpacing="3" fill="var(--pale-faint)">
                  <textPath href="#circlePath" startOffset="0%" textAnchor="start">
                    // ZERO TRUST ARCHITECTURE // DECENTRALIZED PROTOCOLS // FULL-STACK ENGINEERING // STEGANOGRAPHY ACTIVE //
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="profile-image-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="profile-image">
                <div className="glow-pulse"></div>
                <img src={profileImage} alt="Lokesh Tejavath" className="profile-photo" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot"></div>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  )
}
