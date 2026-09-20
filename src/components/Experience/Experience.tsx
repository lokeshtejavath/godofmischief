import { motion } from 'framer-motion'
import './Experience.css'

export default function Experience() {
  const roles = [
    { title: 'Software Engineer AVP', company: 'Wells Fargo', period: 'Aug 2024 – Present', description: 'Leading enterprise-scale systems, mentoring engineers, driving architectural decisions.' },
    { title: 'Program Associate AVP', company: 'Wells Fargo', period: 'Jul 2023 – Aug 2024', description: 'Built multi-agent automation systems, reduced manual review from 5 days to 5 minutes.' },
    { title: 'IEEE Computer Society Chairperson', company: 'NIT Warangal', period: 'Feb – May 2023', description: 'Organized technical events, grew community engagement, fostered collaborative learning.' },
    { title: 'Head of Operations', company: 'NITW News & Magazine Committee', period: 'Jul 2022 – May 2023', description: 'Managed editorial workflow, coordinated with 50+ contributors, shipped monthly publications.' },
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
