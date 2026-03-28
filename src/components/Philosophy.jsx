import { useEffect, useRef } from 'react'

const principles = [
  {
    num: '01',
    title: 'Built out of frustration',
    desc: "I'm Nathan. I live in Southern California and drive 70 miles round trip every day. I got tired of every nav app rerouting me through neighborhoods to save 90 seconds, so I built my own. This is a side project, built from scratch in Swift alongside my day job, to get me to my day job the way I want to.",
  },
  {
    num: '02',
    title: 'For drivers, not for data',
    desc: "No analytics. No tracking. No accounts. No ads. Your driving data stays on your phone. I don't want it, I don't need it, and I never will. The app works for you, not a business model.",
  },
  {
    num: '03',
    title: "It ships when it's right",
    desc: "There's no investor timeline. No sprint deadline. Every feature gets built until it feels correct, not until it's \"good enough.\" If that takes another six months of polish, that's what happens.",
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="how-section">
      <div className="how-inner">
        <div className="section-header">
          <FadeIn><h2>Why this exists</h2></FadeIn>
          <FadeIn delay={0.1}><p>One person building something different.</p></FadeIn>
        </div>
        <div className="steps">
          {principles.map((s, i) => (
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
