import { motion } from 'framer-motion'
import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section-pad contact">
      <div className="container">
        <motion.div
          className="contact__box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="eyebrow-inline">Get in touch</span>
            <h2>
              Have a project in mind, or a<br className="contact__break" /> role to fill? Let's talk.
            </h2>
          </div>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="contact__link">
              <Mail size={18} />
              <span>{profile.email}</span>
              <ArrowUpRight size={16} className="contact__arrow" />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__link">
              <Phone size={18} />
              <span>{profile.phone}</span>
              <ArrowUpRight size={16} className="contact__arrow" />
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="contact__link">
              <Linkedin size={18} />
              <span>{profile.linkedin}</span>
              <ArrowUpRight size={16} className="contact__arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
