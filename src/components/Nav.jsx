export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <img src="/assets/app_icon.png" alt="Steddi" />
        <span>Steddi</span>
      </a>
      <ul className="nav-links">
        <li><a href="#craft">The Details</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#philosophy">Philosophy</a></li>
      </ul>
      <a href="#early-access" className="nav-cta">Early Access</a>
    </nav>
  )
}
