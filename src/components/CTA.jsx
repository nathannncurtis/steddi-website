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
    <section id="download" className="cta-section">
      <div ref={ref} className="fade-in">
        <h2>Stop being rerouted<br />for no reason.</h2>
        <p>Join the waitlist to be first when Steddi launches.</p>

        {submitted ? (
          <div className="waitlist-success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>You're on the list. Check your inbox.</span>
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
              {submitting ? 'Joining...' : 'Join the Waitlist'}
            </button>
            {error && <div className="waitlist-error">{error}</div>}
          </form>
        )}
      </div>
    </section>
  )
}
