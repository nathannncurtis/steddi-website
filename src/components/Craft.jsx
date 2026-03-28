import { useEffect, useRef } from 'react'
import { Sun, Thermometer, Cloud, Navigation } from 'lucide-react'

const details = [
  {
    icon: Sun,
    title: 'The theme follows the sun',
    desc: "Steddi calculates golden hour from your GPS coordinates and gradually shifts the entire color palette across 45 minutes. So slowly you'll never notice it happening.",
  },
  {
    icon: Thermometer,
    title: 'Temperature shifts the mood',
    desc: "Warmer tones when it's hot, cooler tones when it's cold. All relative to your local norms. 65° in Southern California feels different than 65° in Alaska. Steddi knows that.",
  },
  {
    icon: Cloud,
    title: 'Weather changes everything',
    desc: 'Overcast skies trigger a muted grey palette. Rain darkens the interface. The app mirrors the world outside your windshield.',
  },
  {
    icon: Navigation,
    title: 'The route draws itself',
    desc: "When you start navigating, the route traces onto the map like a pen following the road. During your drive, the line extends ahead and fades behind you. It feels alive.",
  },
]

export default function Craft() {
  return (
    <section id="craft" className="features">
      <div className="section-header">
        <FadeIn>
          <h2>The things you'll never notice</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>Until you compare it to everything else. These are the details that make Steddi feel different.</p>
        </FadeIn>
      </div>
      <div className="features-grid craft-grid">
        {details.map((d, i) => (
          <FadeIn key={d.title} delay={i * 0.1}>
            <div className="feature-card">
              <div className="feature-icon"><d.icon size={24} /></div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
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
