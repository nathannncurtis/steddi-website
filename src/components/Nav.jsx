import { useEffect, useState } from 'react'

const links = [
  { href: '#craft', label: 'The Details' },
  { href: '#features', label: 'Features' },
  { href: '#philosophy', label: 'Philosophy' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <img src="/assets/app_icon.png" alt="Steddi" />
        <span>Steddi</span>
      </a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href ? 'nav-active' : ''}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#early-access" className="nav-cta">Early Access</a>
    </nav>
  )
}
