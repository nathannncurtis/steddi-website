import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BuildingInPublic() {
  const [commits, setCommits] = useState([])
  const [todoSections, setTodoSections] = useState([])
  const [activeTab, setActiveTab] = useState('activity')

  useEffect(() => {
    fetch('/data/commits.json')
      .then(r => r.json())
      .then(setCommits)
      .catch(() => {})

    fetch('/data/TODO.md')
      .then(r => r.text())
      .then(text => {
        // Parse TODO.md into sections — skip "Done" section
        const sections = []
        let current = null
        for (const line of text.split('\n')) {
          if (line.startsWith('## ') && !line.includes('Done')) {
            current = { title: line.replace('## ', ''), items: [] }
            sections.push(current)
          } else if (line.startsWith('- ') && current) {
            current.items.push(line.replace('- ', ''))
          }
        }
        setTodoSections(sections.filter(s => s.items.length > 0))
      })
      .catch(() => {})
  }, [])

  return (
    <section className="building-section">
      <div className="building-inner">
        <FadeIn>
          <div className="section-header">
            <h2>Being built, right now</h2>
            <p>This isn't vaporware. Steddi is in active development, and here's the proof.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="building-tabs">
            <button
              className={`building-tab ${activeTab === 'activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              Recent Activity
            </button>
            <button
              className={`building-tab ${activeTab === 'roadmap' ? 'active' : ''}`}
              onClick={() => setActiveTab('roadmap')}
            >
              Roadmap
            </button>
          </div>
        </FadeIn>

        {activeTab === 'activity' && (
          <div className="building-feed">
            {commits.slice(0, 15).map((commit, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="building-item">
                  <span className="building-date">{commit.date}</span>
                  <span className="building-dot" />
                  <span className="building-text">{commit.message}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="building-roadmap">
            {todoSections.slice(0, 8).map((section, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="roadmap-section">
                  <h3 className="roadmap-title">{section.title}</h3>
                  <ul className="roadmap-items">
                    {section.items.slice(0, 4).map((item, j) => (
                      <li key={j}>{item.length > 80 ? item.slice(0, 80) + '...' : item}</li>
                    ))}
                    {section.items.length > 4 && (
                      <li className="roadmap-more">+{section.items.length - 4} more</li>
                    )}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.25}>
          <div className="building-full-link">
            <Link to="/roadmap" className="btn-ghost">
              View full roadmap, shipped features & commit history →
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="building-appstore">
            <div className="appstore-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
                <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
              </svg>
              <div className="appstore-text">
                <span className="appstore-label">Coming soon to the</span>
                <span className="appstore-name">App Store</span>
              </div>
            </div>
          </div>
        </FadeIn>
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
