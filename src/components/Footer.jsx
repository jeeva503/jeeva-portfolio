import { profile } from '../data.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>© {year} {profile.name}</span>
        <span className="footer__meta">Built with React · {profile.location}</span>
      </div>
    </footer>
  )
}
