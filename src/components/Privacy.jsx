import { useEffect, useRef } from 'react'
import { Shield, Smartphone, Wifi, Trash2 } from 'lucide-react'

const points = [
  {
    icon: Smartphone,
    title: 'On your device. Period.',
    text: 'All routes, locations, commutes, and driving data live on your iPhone. Nothing is uploaded to any server.',
  },
  {
    icon: Shield,
    title: 'No tracking. No ads. No accounts.',
    text: "Steddi doesn't track you, profile you, or sell your data. There are no analytics, no advertising SDKs, and no sign-up required.",
  },
  {
    icon: Wifi,
    title: 'Minimal network use',
    text: 'Apple Maps handles directions and search. Route matching uses an open-source service with no user identity attached. That\'s it.',
  },
  {
    icon: Trash2,
    title: 'Delete everything, anytime',
    text: 'One tap in Settings erases all your data permanently. No lingering backups, no hidden copies.',
  },
]

export default function Privacy() {
  return (
    <section className="privacy">
      <div className="privacy-inner">
        <div className="section-header">
          <FadeIn><h2>Private by design</h2></FadeIn>
          <FadeIn delay={0.1}><p>Your driving data is yours. We don't want it.</p></FadeIn>
        </div>
        <div className="privacy-grid">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="privacy-card">
                <div className="privacy-icon"><p.icon size={24} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </FadeIn>
          ))}
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
