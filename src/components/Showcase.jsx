import { useEffect, useRef } from 'react'

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-inner">
        <div className="showcase-split">
          <FadeIn>
            <div className="showcase-image">
              <img
                src="/assets/mockup-3d.png"
                alt="Steddi navigation app — home screen and turn-by-turn navigation"
              />
            </div>
          </FadeIn>

          <div className="showcase-content">
            <FadeIn delay={0.1}>
              <h2>See it in action</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="showcase-subtitle">From your home screen to turn-by-turn. Every pixel designed for the road.</p>
            </FadeIn>

            <div className="showcase-cards">
              <FadeIn delay={0.25}>
                <div className="showcase-detail-card">
                  <h3>Your commutes, one tap away</h3>
                  <p>The home screen shows your saved commutes with live distance. Tap and go. No searching, no typing, no waiting.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="showcase-detail-card">
                  <h3>Navigation that earns the screen</h3>
                  <p>Large maneuver icons, live speedometer, next turn preview. Every element placed for glanceability at 70 mph.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.45}>
                <div className="showcase-detail-card">
                  <h3>Your rules, built in</h3>
                  <p>Reroute thresholds, accent colors, no-go zones, toll avoidance. Steddi adapts to you, not the other way around.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
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
