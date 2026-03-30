import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Map } from '@/components/ui/map'

export default function RoadmapPage() {
  const [commits, setCommits] = useState([])
  const [todoSections, setTodoSections] = useState([])
  const [doneSections, setDoneSections] = useState([])
  const [activeTab, setActiveTab] = useState('roadmap')
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    fetch('/data/commits.json')
      .then(r => r.json())
      .then(setCommits)
      .catch(() => {})

    fetch('/data/TODO.md')
      .then(r => r.text())
      .then(text => {
        const sections = []
        const done = []
        let current = null
        let isDone = false

        for (const line of text.split('\n')) {
          if (line.startsWith('## ')) {
            isDone = line.includes('Done')
            current = { title: line.replace('## ', '').replace(' ✅', ''), items: [] }
            if (isDone) done.push(current)
            else sections.push(current)
          } else if (line.startsWith('- ') && current) {
            current.items.push(line.replace('- ', ''))
          }
        }
        setTodoSections(sections.filter(s => s.items.length > 0))
        setDoneSections(done.filter(s => s.items.length > 0))
      })
      .catch(() => {})
  }, [])

  return (
    <div className="roadmap-page">
      {/* Map background — same vibe as main page */}
      <div className="roadmap-map-bg">
        <Map
          center={[-118.06, 34.06]}
          zoom={11}
          pitch={30}
          bearing={-10}
          theme="dark"
          dragPan={false}
          scrollZoom={false}
          dragRotate={false}
          doubleClickZoom={false}
          touchZoomRotate={false}
          keyboard={false}
        />
        <div className="roadmap-map-overlay" />
      </div>

      {/* Nav */}
      <nav className="roadmap-nav">
        <button className="roadmap-back" onClick={() => navigate('/')}>
          ← steddi.io
        </button>
      </nav>

      {/* Hero */}
      <div className="roadmap-hero">
        <FadeIn>
          <h1>The <span className="gradient">Roadmap</span></h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>A live look inside Steddi's development. What's planned, what's shipped, and every commit along the way.</p>
        </FadeIn>
      </div>

      {/* Tabs */}
      <div className="roadmap-page-inner">
        <FadeIn delay={0.2}>
          <div className="roadmap-page-tabs">
            {['roadmap', 'completed', 'commits'].map(tab => (
              <button
                key={tab}
                className={`building-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'roadmap' ? 'Roadmap' : tab === 'completed' ? 'Shipped' : 'Commit Log'}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="roadmap-page-sections">
            {todoSections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="roadmap-page-section">
                  <div className="roadmap-page-section-header">
                    <h2>{section.title}</h2>
                    <span className="roadmap-count">{section.items.length} items</span>
                  </div>
                  <ul>
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <span className="roadmap-bullet" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Completed */}
        {activeTab === 'completed' && (
          <div className="roadmap-page-sections">
            {doneSections.map((section, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="roadmap-page-section roadmap-page-section--done">
                  <div className="roadmap-page-section-header">
                    <h2>{section.title}</h2>
                    <span className="roadmap-count shipped">{section.items.length} shipped</span>
                  </div>
                  <ul>
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <span className="roadmap-check">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Commits */}
        {activeTab === 'commits' && (
          <div className="roadmap-page-commits">
            {commits.map((commit, i) => (
              <FadeIn key={i} delay={i * 0.02}>
                <div className="roadmap-commit">
                  <span className="roadmap-commit-date">{commit.date}</span>
                  <div className="roadmap-commit-line" />
                  <span className="roadmap-commit-msg">
                    <code>{commit.message}</code>
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
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
