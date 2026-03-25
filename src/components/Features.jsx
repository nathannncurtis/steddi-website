import { useEffect, useRef } from 'react'
import { Route, Activity, Ban, Repeat, Brain, Monitor, Palette, Download, CheckCircle } from 'lucide-react'

const features = [
  { icon: Route, title: 'Drive Your Route (BYOR)', desc: "Save your preferred routes by driving them once. Steddi follows your path every time, not the algorithm's." },
  { icon: Activity, title: 'Smart Thresholds', desc: 'Rerouting adapts to your remaining drive time. Almost there? Higher bar. Long drive? Smaller savings count.' },
  { icon: Ban, title: 'No-Go Zones', desc: 'Draw exclusion areas on the map. That sketchy intersection, the school zone, the eternal construction.' },
  { icon: Repeat, title: 'Bidirectional Commutes', desc: "Auto-detects which direction you're heading. Work at 7am, home at 5pm — it just knows." },
  { icon: Brain, title: 'Pattern Learning', desc: "Learns your schedule after a few trips. Tuesday 7am? Already knows you're heading to work." },
  { icon: Monitor, title: 'CarPlay Ready', desc: "Full turn-by-turn on your car's display with a custom UI built for glanceability." },
  { icon: Palette, title: '6 Accent Colors', desc: 'Lavender, Ocean, Sage, Coral, Gold, or Slate. Pick a theme that makes Steddi yours.' },
  { icon: Download, title: 'Offline Caching', desc: "Routes cached locally. Never stranded without signal. Your commute works in tunnels." },
  { icon: CheckCircle, title: 'Custom Turn-by-Turn', desc: 'Purpose-built nav UI for commuters. Clean, readable maneuvers — not a generic SDK overlay.' },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="section-header">
        <FadeIn>
          <h2>Navigation that respects you</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>Other apps reroute you every 30 seconds. Steddi only speaks up when there's a real reason to change course.</p>
        </FadeIn>
      </div>
      <div className="features-grid">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.08}>
            <div className="feature-card">
              <div className="feature-icon"><f.icon size={24} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay * 1000)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return <div ref={ref} className="fade-in">{children}</div>
}
