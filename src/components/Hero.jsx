import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Map, MapRoute } from '@/components/ui/map'

const MAIN_ROUTE = [
  [-117.869992, 34.072085], [-117.874243, 34.071466], [-117.911408, 34.072087],
  [-117.948817, 34.071435], [-117.988326, 34.066585], [-118.009002, 34.063895],
  [-118.031968, 34.067822], [-118.053019, 34.072205], [-118.084765, 34.071945],
  [-118.125032, 34.07145], [-118.150128, 34.068463], [-118.161573, 34.062428],
  [-118.175658, 34.059452], [-118.196355, 34.055414], [-118.205833, 34.053562],
  [-118.219147, 34.055091], [-118.236319, 34.053684], [-118.240979, 34.053327],
  [-118.244652, 34.048615], [-118.248956, 34.044666], [-118.254773, 34.041864],
]

const CHAOS = [
  { color: '#FF3B30', width: 5, coords: [[-117.869992, 34.072085], [-117.873888, 34.072827], [-117.872619, 34.086347], [-117.872668, 34.113016], [-117.891393, 34.120777], [-117.945232, 34.130288], [-117.993251, 34.135359], [-118.027302, 34.145884], [-118.07561, 34.147846], [-118.098228, 34.152376], [-118.149698, 34.147907], [-118.150432, 34.140766], [-118.147165, 34.127144], [-118.146194, 34.121075], [-118.160957, 34.119192], [-118.181273, 34.111111], [-118.193029, 34.102869], [-118.206453, 34.091774], [-118.230295, 34.076637], [-118.248283, 34.063018], [-118.255961, 34.051506], [-118.257256, 34.044754], [-118.254773, 34.041864]] },
  { color: '#FF6B00', width: 5, coords: [[-117.869992, 34.072085], [-117.873953, 34.07135], [-117.905214, 34.072041], [-117.94305, 34.072088], [-117.977169, 34.068022], [-118.004643, 34.053451], [-118.020692, 34.038619], [-118.030018, 34.034763], [-118.076711, 34.040482], [-118.098173, 34.035684], [-118.151508, 34.035756], [-118.169759, 34.035577], [-118.190532, 34.031529], [-118.224927, 34.029162], [-118.243117, 34.023594], [-118.260123, 34.034781], [-118.257641, 34.039716], [-118.254773, 34.041864]] },
  { color: '#FFD60A', width: 4, coords: [[-117.869992, 34.072085], [-117.876429, 34.071708], [-117.936375, 34.072268], [-117.983056, 34.067261], [-118.010496, 34.063707], [-118.022062, 34.054646], [-118.030928, 34.066242], [-118.075322, 34.072045], [-118.126691, 34.07144], [-118.149648, 34.068048], [-118.15405, 34.065328], [-118.148747, 34.059563], [-118.15684, 34.065006], [-118.163672, 34.060818], [-118.18281, 34.056195], [-118.213821, 34.055148], [-118.237084, 34.053805], [-118.242411, 34.051518], [-118.247528, 34.046126], [-118.254773, 34.041864]] },
  { color: '#FF9500', width: 4, coords: [[-117.869992, 34.072085], [-117.89868, 34.071947], [-117.946691, 34.071675], [-117.997443, 34.065283], [-118.011642, 34.063243], [-118.014085, 34.050773], [-118.03082, 34.044884], [-118.078625, 34.040084], [-118.112258, 34.033328], [-118.151508, 34.035756], [-118.168777, 34.035362], [-118.173374, 34.044181], [-118.178911, 34.055637], [-118.205631, 34.05358], [-118.222432, 34.05354], [-118.239119, 34.054588], [-118.247626, 34.046027], [-118.254773, 34.041864]] },
  { color: '#E74C3C', width: 3, coords: [[-117.869992, 34.072085], [-117.874243, 34.071466], [-117.926655, 34.070503], [-117.930395, 34.062763], [-117.942418, 34.051901], [-117.950118, 34.034699], [-117.960609, 34.016003], [-117.96633, 34.00571], [-118.026288, 34.03346], [-118.072763, 34.041051], [-118.12501, 34.030524], [-118.145401, 34.009585], [-118.162943, 34.012044], [-118.193934, 34.020422], [-118.220703, 34.029198], [-118.246936, 34.024559], [-118.259876, 34.036008], [-118.254773, 34.041864]] },
  { color: '#F39C12', width: 3, coords: [[-117.869992, 34.072085], [-117.906768, 34.072051], [-118.019114, 34.066647], [-118.051643, 34.071723], [-118.052708, 34.079493], [-118.048982, 34.090924], [-118.054507, 34.118692], [-118.054361, 34.131587], [-118.091102, 34.126806], [-118.131382, 34.10871], [-118.159026, 34.119027], [-118.182944, 34.111463], [-118.183257, 34.098132], [-118.206294, 34.092175], [-118.234737, 34.072043], [-118.257154, 34.054635], [-118.255548, 34.046603], [-118.254773, 34.041864]] },
  { color: '#FF6961', width: 3, coords: [[-117.869992, 34.072085], [-117.907357, 34.072055], [-117.965056, 34.069628], [-118.003618, 34.0645], [-118.017571, 34.065957], [-118.030089, 34.070443], [-118.032072, 34.067623], [-118.052723, 34.072161], [-118.096649, 34.071786], [-118.144598, 34.071147], [-118.151816, 34.071884], [-118.149834, 34.067787], [-118.165749, 34.06112], [-118.18281, 34.056195], [-118.213821, 34.055148], [-118.237084, 34.053805], [-118.247528, 34.046126], [-118.254773, 34.041864]] },
]

let globalAnimStarted = false
if (import.meta.hot) { import.meta.hot.dispose(() => { globalAnimStarted = false }) }

export default function Hero() {
  const [chaosRoutes, setChaosRoutes] = useState(() => CHAOS.map(() => []))
  const [chaosOpacity, setChaosOpacity] = useState(0)
  const [mainRoute, setMainRoute] = useState([])
  const [contentVisible, setContentVisible] = useState(false)
  const [mapDimmed, setMapDimmed] = useState(false)
  const [routePulse, setRoutePulse] = useState(0.95)
  const mapRef = useRef(null)

  useEffect(() => {
    if (globalAnimStarted) return
    globalAnimStarted = true

    // Phase 1 (0.5s): Chaos draws in staggered
    setTimeout(() => {
      setChaosOpacity(0.8)
      CHAOS.forEach((route, idx) => {
        setTimeout(() => {
          let i = 0
          const interval = setInterval(() => {
            if (i >= route.coords.length) { clearInterval(interval); return }
            i++
            setChaosRoutes(prev => {
              const next = [...prev]
              next[idx] = route.coords.slice(0, i)
              return next
            })
          }, 15)
        }, idx * 80)
      })
    }, 500)

    // Phase 2 (2.5s): Fade chaos + draw main route simultaneously
    setTimeout(() => {
      setChaosOpacity(0)
      let i = 0
      const interval = setInterval(() => {
        if (i >= MAIN_ROUTE.length) { clearInterval(interval); return }
        i++
        setMainRoute(MAIN_ROUTE.slice(0, i))
      }, 40)
    }, 2500)

    // Phase 3 (4s): Content reveals
    setTimeout(() => {
      setMapDimmed(true)
      setContentVisible(true)

      // Start ambient motion after reveal
      setTimeout(() => {
        // Camera drift — more noticeable rotation + slow zoom
        const driftInterval = setInterval(() => {
          const map = mapRef.current
          const ml = map?.getMap ? map.getMap() : map
          if (!ml) return
          try {
            const bearing = ml.getBearing() + 0.5
            const zoom = ml.getZoom() + 0.003
            ml.easeTo({ bearing, zoom: Math.min(zoom, 13.5), duration: 2000, easing: t => t })
          } catch {}
        }, 2000)

        // Route pulse
        let pulseUp = false
        const pulseInterval = setInterval(() => {
          setRoutePulse(prev => {
            if (prev <= 0.55) pulseUp = true
            if (prev >= 0.95) pulseUp = false
            return pulseUp ? prev + 0.03 : prev - 0.03
          })
        }, 100)
      }, 1500)
    }, 4000)
  }, [])

  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: mapDimmed ? 0.35 : 1,
          transition: 'opacity 1.5s ease'
        }}>
          <Map
            ref={mapRef}
            center={[-118.06, 34.06]}
            zoom={11.5}
            pitch={40}
            bearing={-5}
            theme="dark"
            dragPan={false}
            scrollZoom={false}
            dragRotate={false}
            doubleClickZoom={false}
            touchZoomRotate={false}
            keyboard={false}
          >
            {CHAOS.map((route, i) => (
              chaosRoutes[i].length >= 2 && (
                <MapRoute
                  key={`chaos-${i}`}
                  coordinates={chaosRoutes[i]}
                  color={route.color}
                  width={route.width}
                  opacity={chaosOpacity}
                  interactive={false}
                />
              )
            ))}

            {mainRoute.length >= 2 && (
              <MapRoute
                coordinates={mainRoute}
                color="#9B8EC4"
                width={6}
                opacity={routePulse}
                interactive={false}
              />
            )}
          </Map>
        </div>
        <div className="hero-overlay" style={{
          opacity: mapDimmed ? 1 : 0,
          transition: 'opacity 1.5s ease'
        }} />
      </div>

      <div className={`hero-content-wrap ${contentVisible ? 'hero-content-visible' : ''}`}>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              Built for drivers, not for data
            </div>
            <h1>Your route.<br /><span className="gradient">Your rules.</span></h1>
            <p>I'm building the navigation app I wanted to exist. One that respects how you drive, adapts to your world, and obsesses over every detail you'll never consciously notice.</p>
            <div className="hero-buttons">
              <a href="#early-access" className="btn-primary">
                Get Early Access
              </a>
              <a href="#craft" className="btn-ghost">
                See the details
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-phone">
            <img src="/assets/hero-phone.png" alt="Steddi navigation app" />
          </div>
        </div>
      </div>
    </section>
  )
}
