import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

// A real route from Riverside to the 60/91 interchange area — Steddi's actual commute corridor
const ROUTE_COORDS = [
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

// Waypoint markers the "user" placed
const WAYPOINTS = [
  { coord: [-117.3573, 33.9574], label: 'Home' },
  { coord: [-117.4521, 33.9549], label: '' },
  { coord: [-117.5602, 33.9611], label: '' },
  { coord: [-117.6912, 33.9859], label: '' },
  { coord: [-117.7635, 34.0105], label: 'Work' },
]

export default function InteractiveMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const animationStarted = useRef(false)

  // Scroll visibility detection
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const m = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'carto-dark': {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://carto.com">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
          },
        },
        layers: [
          {
            id: 'carto-dark-layer',
            type: 'raster',
            source: 'carto-dark',
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: [-117.56, 33.97],
      zoom: 10.2,
      pitch: 30,
      bearing: -15,
      interactive: false,
      attributionControl: false,
      fadeDuration: 0,
      preserveDrawingBuffer: true,
    })

    // Force a resize after a short delay to ensure the canvas renders
    setTimeout(() => m.resize(), 100)

    m.on('load', () => {
      setMapLoaded(true)

      // Add the route line source (initially empty — will animate)
      m.addSource('route', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } },
      })

      // Glow layer underneath
      m.addLayer({
        id: 'route-glow',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#9B8EC4',
          'line-width': 12,
          'line-opacity': 0.2,
          'line-blur': 8,
        },
      })

      // Main route line
      m.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: { 'line-cap': 'round', 'line-join': 'round' },
        paint: {
          'line-color': '#9B8EC4',
          'line-width': 4,
          'line-opacity': 0.9,
        },
      })
    })

    map.current = m

    return () => m.remove()
  }, [])

  // Animate route drawing when visible
  useEffect(() => {
    if (!isVisible || !mapLoaded || animationStarted.current) return
    animationStarted.current = true

    const m = map.current
    if (!m) return

    let currentIndex = 0
    const coords = []

    const drawInterval = setInterval(() => {
      if (currentIndex >= ROUTE_COORDS.length) {
        clearInterval(drawInterval)

        // Add waypoint markers after route is drawn
        WAYPOINTS.forEach((wp, i) => {
          const el = document.createElement('div')
          el.className = 'steddi-waypoint'
          if (i === 0 || i === WAYPOINTS.length - 1) {
            el.className += ' steddi-waypoint-endpoint'
          }

          const marker = new maplibregl.Marker({ element: el })
            .setLngLat(wp.coord)
            .addTo(m)

          if (wp.label) {
            const label = document.createElement('div')
            label.className = 'steddi-waypoint-label'
            label.textContent = wp.label
            el.appendChild(label)
          }
        })

        return
      }

      coords.push(ROUTE_COORDS[currentIndex])
      currentIndex++

      m.getSource('route')?.setData({
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: [...coords] },
      })
    }, 60)

    return () => clearInterval(drawInterval)
  }, [isVisible, mapLoaded])

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
          <div ref={mapContainer} className="map-container" />
          <div className="map-overlay-gradient" />

          {/* Floating stats card */}
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
