import { motion } from 'framer-motion'
import { profile } from '../data.js'
import { useCountUp } from '../hooks/useCountUp.js'
import './About.css'

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.numeric ?? 0)
  return (
    <div className="about__stat" ref={ref}>
      <dt>{stat.text ? stat.text : `${value}${stat.suffix || ''}`}</dt>
      <dd>{stat.label}</dd>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad about">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About</h2>
          <span className="count">01</span>
        </motion.div>

        <div className="about__grid">
          <motion.p
            className="about__text"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.dl
            className="about__stats"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.stats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
