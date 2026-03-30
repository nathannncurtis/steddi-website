import { useEffect, useRef, useState } from 'react'
import { Map, MapRoute } from '@/components/ui/map'

const FULL_ROUTE = [
  [-117.3514, 33.9569],
  [-117.3546, 33.9568],
  [-117.3573, 33.9574],
  [-117.3598, 33.9538],
  [-117.3629, 33.9531],
  [-117.3688, 33.9531],
  [-117.3771, 33.9530],
  [-117.3828, 33.9538],
  [-117.3927, 33.9539],
  [-117.4051, 33.9540],
  [-117.4189, 33.9543],
  [-117.4356, 33.9545],
  [-117.4521, 33.9549],
  [-117.4698, 33.9556],
  [-117.4872, 33.9563],
  [-117.5043, 33.9571],
  [-117.5231, 33.9582],
  [-117.5418, 33.9594],
  [-117.5602, 33.9611],
  [-117.5789, 33.9632],
  [-117.5981, 33.9658],
  [-117.6172, 33.9689],
  [-117.6358, 33.9724],
  [-117.6541, 33.9763],
  [-117.6728, 33.9808],
  [-117.6912, 33.9859],
  [-117.7098, 33.9916],
  [-117.7281, 33.9978],
  [-117.7461, 34.0041],
  [-117.7635, 34.0105],
]

export default function InteractiveMap() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedRoute, setAnimatedRoute] = useState([])
  const animationStarted = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || animationStarted.current) return
    animationStarted.current = true

    let index = 0
    const interval = setInterval(() => {
      if (index >= FULL_ROUTE.length) {
        clearInterval(interval)
        return
      }
      index++
      setAnimatedRoute(FULL_ROUTE.slice(0, index))
    }, 70)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="interactive-map-section">
      <div className="interactive-map-inner">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Your route, drawn your way</h2>
            <p>Drop waypoints. Steddi connects them along real roads and remembers every turn. This is your commute, planned once, followed forever.</p>
          </div>
        </div>

        <div className={`map-container-wrapper ${isVisible ? 'map-visible' : ''}`}>
          <div style={{ height: '480px', width: '100%', borderRadius: '24px', overflow: 'hidden' }}>
            <Map
              center={[-117.56, 33.97]}
              zoom={10.2}
              pitch={30}
              bearing={-15}
              theme="dark"
              dragPan={false}
              scrollZoom={false}
              dragRotate={false}
              doubleClickZoom={false}
              touchZoomRotate={false}
              keyboard={false}
            >
              {animatedRoute.length >= 2 && (
                <MapRoute
                  coordinates={animatedRoute}
                  color="#9B8EC4"
                  width={4}
                  opacity={0.9}
                  interactive={false}
                />
              )}
            </Map>
          </div>
          <div className="map-overlay-gradient" />

          <div className={`map-stats ${isVisible ? 'stats-visible' : ''}`}>
            <div className="map-stat">
              <span className="map-stat-value">35</span>
              <span className="map-stat-label">mi</span>
            </div>
            <div className="map-stat-divider" />
            <div className="map-stat">
              <span className="map-stat-value">42</span>
              <span className="map-stat-label">min</span>
            </div>
            <div className="map-stat-divider" />
            <div className="map-stat">
              <span className="map-stat-value">5</span>
              <span className="map-stat-label">waypoints</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
