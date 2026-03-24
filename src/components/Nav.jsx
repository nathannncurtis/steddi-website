export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">
        <img src="/assets/app_icon.png" alt="Steddi" />
        <span>Steddi</span>
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
      <a href="#download" className="nav-cta">Get Steddi</a>
    </nav>
  )
}
