import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const stats = [
    { value: '90%', label: 'Cost Reduction', description: 'Manual processing automation with GenAI' },
    { value: '5 days→5min', label: 'Loan Automation', description: 'AI-powered review turnaround' },
    { value: '3x', label: 'Manager Spotlight', description: 'Awards for delivery excellence' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div className="about-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
          <div className="about-text">
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            <motion.p variants={itemVariants}>I bridge theoretical computer science and enterprise-scale software. By day, I architect microservices and payment systems at Wells Fargo. By night, I explore the edges of the JavaScript ecosystem, agentic AI development, and the protocols that power decentralized trust.</motion.p>
            <motion.p variants={itemVariants}>My specialty is turning complex problems into clean, maintainable systems. I've shipped loan-automation agents, built zero-trust infrastructure, and mentored teams. I believe in systems thinking, rigorous code review, and shipping with confidence.</motion.p>
            <motion.div className="about-meta" variants={itemVariants}>
              <div className="meta-item"><span className="meta-label">Location</span><span className="meta-value">Hyderabad, India</span></div>
              <div className="meta-item"><span className="meta-label">Education</span><span className="meta-value">NIT Warangal, B.Tech CS (2019–2023)</span></div>
              <div className="meta-item"><span className="meta-label">Current Role</span><span className="meta-value">Software Engineer AVP, Wells Fargo</span></div>
            </motion.div>
          </div>
          <motion.div className="about-stats" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat-card" variants={itemVariants}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
