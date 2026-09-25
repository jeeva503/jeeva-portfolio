import { motion } from 'framer-motion'
import { certifications, education } from '../data.js'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section-pad education">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Education &amp; certifications</h2>
          <span className="count">05</span>
        </motion.div>

        <div className="education__grid">
          <motion.div
            className="education__degree"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono">{education.period}</span>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="education__cgpa">{education.detail}</p>
          </motion.div>

          <motion.ul
            className="education__certs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {certifications.map((cert) => (
              <li key={cert.name}>
                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
                <span>{cert.date}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
