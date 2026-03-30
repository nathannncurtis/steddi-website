import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_bj451am'
const TEMPLATE_ID = 'template_pkr22s2'
const PUBLIC_KEY = 'a9uoWADSns_pQIt9M'

export default function CTA() {
  const ref = useRef(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el) } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { email })
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Try again.')
    }

    setSubmitting(false)
  }

  return (
    <section id="early-access" className="cta-section">
      <div ref={ref} className="fade-in">
        <h2>Want to be there<br />when it's ready?</h2>
        <p>Leave your email. I'll reach out personally when Steddi is ready for you to try.</p>

        {submitted ? (
          <div className="waitlist-success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>You're in. I'll reach out when it's time.</span>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Joining...' : 'Get Early Access'}
            </button>
            {error && <div className="waitlist-error">{error}</div>}
          </form>
        )}

        <div className="cta-appstore">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
            <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
          </svg>
          <span>Coming soon to the App Store</span>
        </div>
      </div>
    </section>
  )
}
