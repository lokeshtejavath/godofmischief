import { motion } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Frameworks',
      skills: ['Java', 'Spring Boot', 'Spring Framework', 'TypeScript', 'JavaScript', 'Angular', 'React.js', 'Python', 'SQL']
    },
    {
      title: 'AI & Agentic Systems',
      skills: ['Generative AI', 'LangChain', 'LangGraph', 'Agentic AI Development', 'Model Context Protocol', 'FastMCP', 'LLMs', 'Prompt Engineering']
    },
    {
      title: 'Infra & Practice',
      skills: ['Kubernetes', 'AWS', 'Microservices', 'System Design', 'Application Security', 'Regulatory Compliance', 'Agile/Scrum', 'Code Review']
    }
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }
  const groupVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const skillVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Skills</motion.h2>
        
        <motion.div className="skills-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
          {skillGroups.map((group, idx) => (
            <motion.div key={idx} className="skill-group" variants={groupVariants}>
              <h3>{group.title}</h3>
              <motion.div className="skills-list" variants={containerVariants}>
                {group.skills.map((skill, i) => (
                  <motion.span key={i} className="skill-chip" variants={skillVariants}>{skill}</motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
