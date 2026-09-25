import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ChevronDown, MapPin, User } from 'lucide-react'
import { profile } from '../data.js'
import ParticleField from './ParticleField.jsx'
import profilePic from './asset/jeeva-image.jpeg'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="top" className="hero">
      <div className="hero__field">
        <ParticleField />
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="hero__status">
            <span className="hero__dot" />
            Available for new opportunities — {profile.location}
          </motion.p>

          <motion.h1 variants={item} className="hero__name">
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="hero__role">
            {profile.role}
          </motion.p>

          <motion.div variants={item} className="hero__trace" aria-hidden="true">
            <span />
          </motion.div>

          <motion.p variants={item} className="hero__lede">
            I design and ship cross-platform apps in Flutter and scalable backend
            services in Node.js, .NET and Django — most recently leading a
            web-to-app platform and an AI-assisted diagnostics tool from
            architecture through production.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <a href="#work" className="hero__btn hero__btn--primary">
              View my work
              <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__meta">
            <MapPin size={15} />
            <span>{profile.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__portrait-ring" />
          <div className="hero__portrait-frame">
            {photoOk ? (
              <img
                src={profilePic}
                alt={profile.name}
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="hero__portrait-fallback">
                <User size={64} strokeWidth={1.2} />
              </div>
            )}
          </div>
          <span className="hero__portrait-corner hero__portrait-corner--tl" />
          <span className="hero__portrait-corner hero__portrait-corner--br" />

          <motion.div
            className="hero__portrait-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <strong>1+ yr</strong>
            <span>Building production software</span>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <ChevronDown size={20} />
      </a>
    </section>
  )
}
