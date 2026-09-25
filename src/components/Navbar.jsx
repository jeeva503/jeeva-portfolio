import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data.js'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__row">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__mark-box">{profile.initials.slice(0, 2)}</span>
          <span className="nav__mark-text">Jeeva Anandhan</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta">
          Let's talk
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav__mobile-cta" onClick={() => setOpen(false)}>
            Let's talk
          </a>
        </nav>
      </div>
    </header>
  )
}
