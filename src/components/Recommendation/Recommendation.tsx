import { motion } from 'framer-motion'
import './Recommendation.css'

export default function Recommendation() {
  return (
    <section id="recommendation" className="recommendation">
      <div className="recommendation-container">
        <motion.div className="quote-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="quote-mark">"</div>
          <p className="quote-text">
            Lokesh is an exceptional engineer with a rare combination of technical depth and business acumen. His work on the loan automation system demonstrated not just coding excellence, but a nuanced understanding of compliance, risk, and operational strategy. He doesn't just solve technical problems—he transforms business challenges into elegant systems.
          </p>
          <div className="quote-author">
            <div className="author-name">Aditya Srivastava</div>
            <div className="author-title">Software Engineer, Servicenow</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
