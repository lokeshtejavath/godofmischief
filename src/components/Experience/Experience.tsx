import { motion } from 'framer-motion'
import './Experience.css'

export default function Experience() {
  const roles = [
    { title: 'Software Engineer AVP', company: 'Wells Fargo', period: 'Jul 2024 – Present', description: 'Led enterprise GenAI products end-to-end, reduced costs by 90%, managed 5 major releases in 5 months, earned 3 Manager Spotlight Awards.' },
    { title: 'Program Associate AVP', company: 'Wells Fargo', period: 'Jul 2023 – Jul 2024', description: 'Built multi-agent AI systems with LangChain/FastMCP, automated loan review from 5 days to under 5 minutes, deployed microservices on Kubernetes.' },
    { title: 'IEEE Computer Society Chairperson', company: 'NIT Warangal', period: 'Feb – May 2023', description: 'Launched AI/ML and cybersecurity verticals, grew community participation by 60%, mentored technical initiatives across campus.' },
    { title: 'Head of Operations', company: 'NITW News & Magazine', period: 'Jul 2022 – May 2023', description: 'Managed 40+ contributor team, doubled reader engagement, coordinated monthly publication cycles.' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Experience</motion.h2>
        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
          {roles.map((role, index) => (
            <motion.div key={index} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>{role.title}</h3>
                  <span className="role-company">{role.company}</span>
                </div>
                <p className="role-period">{role.period}</p>
                <p className="role-description">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
