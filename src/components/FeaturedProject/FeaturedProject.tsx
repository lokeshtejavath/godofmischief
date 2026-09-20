import { motion } from 'framer-motion'
import './FeaturedProject.css'

export default function FeaturedProject() {
  const pipelineStages = ['Document Upload', 'LLM Analysis', 'Agent Review', 'Compliance Check', 'Decision']

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }
  const itemVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

  return (
    <section id="project" className="featured-project">
      <div className="project-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="project-header">
          <h2>Featured Project</h2>
          <p className="project-subtitle">Loan Estimate Review Automation</p>
        </motion.div>

        <div className="project-content">
          <motion.div className="project-description" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p>
              Built a multi-agent LangChain/LangGraph system that slashed loan document review time from 5 days to under 5 minutes. The system orchestrates specialized agents for compliance checking, regulatory mapping, and decision synthesis, interfaced via FastMCP protocol.
            </p>
            <div className="tech-stack">
              <span>LangChain</span>
              <span>LangGraph</span>
              <span>FastMCP</span>
              <span>Python</span>
              <span>Async Agents</span>
            </div>
          </motion.div>

          <motion.div className="pipeline-diagram" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            {pipelineStages.map((stage, index) => (
              <motion.div key={index} className="pipeline-stage" variants={itemVariants}>
                <div className="stage-box">{stage}</div>
                {index < pipelineStages.length - 1 && <div className="stage-arrow">→</div>}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="project-impact">
          <div className="impact-stat">
            <div className="impact-number">96%</div>
            <div className="impact-text">Accuracy Rate</div>
          </div>
          <div className="impact-stat">
            <div className="impact-number">5 min</div>
            <div className="impact-text">Review Time</div>
          </div>
          <div className="impact-stat">
            <div className="impact-number">5 days</div>
            <div className="impact-text">Reduction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
