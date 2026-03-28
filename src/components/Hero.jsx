import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          src="/assets/steddi.mp4"
          muted
          playsInline
          autoPlay
          loop
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content-wrap">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              Built for drivers, not for data
            </div>
            <h1>Your route.<br /><span className="gradient">Your rules.</span></h1>
            <p>I'm building the navigation app I wanted to exist. One that respects how you drive, adapts to your world, and obsesses over every detail you'll never consciously notice.</p>
            <div className="hero-buttons">
              <a href="#early-access" className="btn-primary">
                Get Early Access
              </a>
              <a href="#craft" className="btn-ghost">
                See the details
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-phone">
            <img src="/assets/01_home.png" alt="Steddi navigation app" />
          </div>
        </div>
      </div>
    </section>
  )
}
