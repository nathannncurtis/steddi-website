import { useEffect, useRef } from 'react'

const steps = [
  { num: '1', title: 'Save Your Commute', desc: 'Pin your home and work. Set up a commute between them with your preferred routes.' },
  { num: '2', title: 'Drive Your Routes', desc: 'Navigate like normal. Steddi records the route and saves it as your preferred path.' },
  { num: '3', title: 'Stay on Track', desc: 'Steddi uses your saved route every time. Only suggests a change when the savings actually matter to you.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="how-inner">
        <div className="section-header">
          <FadeIn><h2>How Steddi works</h2></FadeIn>
          <FadeIn delay={0.1}><p>Three steps to take back your commute.</p></FadeIn>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.15}>
              <div className="step">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
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
