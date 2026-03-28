import { useEffect, useRef } from 'react'

const sections = [
  {
    image: '/assets/04_nav_portrait.png',
    title: 'Navigation that earns the screen',
    text: "Custom-built turn-by-turn designed for the road, not a demo. Large maneuver icons, live speedometer, haptic feedback on approach. Every element placed for glanceability at 70 mph.",
    reverse: false,
  },
  {
    image: '/assets/03_settings.png',
    title: 'Make it yours',
    text: "Accent colors that flow through every screen. A theme engine that blends solar position, weather, and temperature in real-time. Reroute thresholds you actually control. This is your app.",
    reverse: true,
  },
  {
    image: '/assets/06_commute_detail.png',
    title: 'Routes with memory',
    text: "Save preferred routes with fallback hierarchies. Set per-commute reroute thresholds, avoid tolls or highways, define no-go zones. Steddi remembers how you drive and respects it.",
    reverse: false,
  },
]

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-inner">
        <div className="section-header">
          <FadeIn><h2>See it in action</h2></FadeIn>
        </div>
        {sections.map((s, i) => (
          <ShowcaseRow key={i} {...s} />
        ))}
      </div>
    </section>
  )
}

function ShowcaseRow({ image, title, text, reverse }) {
  const textRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const els = [textRef.current, phoneRef.current].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const textAnim = reverse ? 'slide-right' : 'slide-left'
  const phoneAnim = reverse ? 'slide-left' : 'slide-right'

  return (
    <div className={`showcase-row ${reverse ? 'reverse' : ''}`}>
      <div ref={textRef} className={`showcase-text ${textAnim}`}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div ref={phoneRef} className={`showcase-phone ${phoneAnim}`}>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}

function FadeIn({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="fade-in">{children}</div>
}
