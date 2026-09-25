import { motion } from 'framer-motion'
import { featuredProjects, otherProjects } from '../data.js'
import { useTilt } from '../hooks/useTilt.js'
import './Projects.css'

function FeatureCard({ project, index }) {
  const tilt = useTilt(6)
  return (
    <motion.article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="feature-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="feature-card__glow" />
      <p className="feature-card__tag">{project.tag}</p>
      <h3>{project.title}</h3>
      <p className="feature-card__subtitle">{project.subtitle}</p>
      <p className="feature-card__desc">{project.description}</p>
      <ul>
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="feature-card__tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

function MiniCard({ project, index }) {
  const tilt = useTilt(5)
  return (
    <motion.article
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="mini-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mini-card__glow" />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div className="mini-card__tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="section-pad projects">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Selected work</h2>
          <span className="count">04</span>
        </motion.div>

        <div className="projects__featured">
          {featuredProjects.map((project, i) => (
            <FeatureCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <h3 className="projects__subhead">More projects &amp; freelance work</h3>

        <div className="projects__grid">
          {otherProjects.map((project, i) => (
            <MiniCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
