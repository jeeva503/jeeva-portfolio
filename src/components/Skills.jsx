import { motion } from 'framer-motion'
import { skillGroups } from '../data.js'
import './Skills.css'

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const chipVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad skills">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills</h2>
          <span className="count">02</span>
        </motion.div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills__group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <h3>{group.label}</h3>
              <motion.ul
                variants={groupVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.items.map((skillItem) => (
                  <motion.li key={skillItem} variants={chipVariants}>
                    {skillItem}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
