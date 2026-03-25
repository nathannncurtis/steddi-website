import { useEffect, useRef } from 'react'

const sections = [
  {
    image: '/assets/04_nav_portrait.png',
    title: 'Navigation that stays out of your way',
    text: 'A custom-built turn-by-turn UI designed for glanceability. Large maneuver icons, clear instructions, and a speedometer — no clutter, no distractions. Just the road ahead.',
    reverse: false,
  },
  {
    image: '/assets/03_settings.png',
    title: 'Your rules, literally',
    text: "Set your reroute threshold, pick your accent color, choose dark or light mode. Steddi adapts to you — not the other way around. The theme even follows the sun.",
    reverse: true,
  },
  {
    image: '/assets/06_commute_detail.png',
    title: 'Commutes that learn',
    text: "Save your preferred routes, set time-based direction rules, and fine-tune when reroutes are worth your attention. Steddi knows your schedule better than you do.",
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

  // Text slides from opposite side of where it sits
  // Phone slides from its own side
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
