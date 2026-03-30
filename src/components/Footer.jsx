import { useEffect, useState } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/app_icon.png" alt="Steddi" className="footer-icon" />
          <span className="footer-name">Steddi</span>
        </div>
        <div className="footer-links">
          <a href="mailto:nathan@steddi.io">nathan@steddi.io</a>
          <span className="footer-dot">·</span>
          <a href="https://steddi.io/privacy">Privacy</a>
          <span className="footer-dot">·</span>
          <a href="#early-access">Early Access</a>
        </div>
        <p className="footer-copy">© 2026 Steddi. One person, one app, no compromises.</p>
      </div>
      {showTop && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  )
}
