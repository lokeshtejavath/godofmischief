import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const contactLinks = [
    { label: 'Email', href: 'mailto:i@lokeshtejavath.com', icon: '@' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/lokeshtejavath', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com/lokeshtejavath', icon: 'gh' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Let's Work Together</h2>
          <p className="contact-subtitle">Always interested in exploring new challenges, shipping products, and deepening my craft.</p>
        </motion.div>

        <motion.div className="contact-links" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          {contactLinks.map((link, index) => (
            <motion.a key={index} href={link.href} className="contact-link" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer">
              <span className="link-icon">{link.icon}</span>
              <span className="link-label">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="footer-bottom" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <p>© 2024–2026 GodOfMischief. All rights reserved.</p>
          <p>Built with React, Vite, Framer Motion, and the pursuit of clean architecture.</p>
        </motion.div>
      </div>
    </section>
  )
}
