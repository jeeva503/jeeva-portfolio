import { motion } from 'framer-motion'
import { experience } from '../data.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section-pad experience">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience</h2>
          <span className="count">03</span>
        </motion.div>

        <div className="experience__list">
          <motion.div
            className="experience__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />

          {experience.map((job, i) => (
            <motion.article
              key={job.company + job.period}
              className="experience__item"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="experience__node" />
              <div className="experience__period">
                <span className="font-mono">{job.period}</span>
              </div>

              <div className="experience__body">
                <h3>
                  {job.role} <span>· {job.company}</span>
                </h3>
                <p className="experience__summary">{job.summary}</p>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {job.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
