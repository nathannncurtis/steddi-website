import { MapPin, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-36 pb-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-72 -right-48 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(155,142,196,0.1)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(34,189,115,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl w-full">
        {/* Content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-accent/12 border border-accent/18 px-4 py-1.5 rounded-full text-sm font-medium text-accent-light mb-8">
            <MapPin size={16} />
            Built for daily commuters
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
            Your route.
            <br />
            <span className="bg-gradient-to-br from-accent via-accent-light to-[#D4CAEF] bg-clip-text text-transparent">
              Your rules.
            </span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
            Steddi learns your commute and only reroutes when it actually matters. No unnecessary detours. No algorithm overriding your judgment.
          </p>

          <div className="flex flex-wrap gap-5 items-center justify-center md:justify-start">
            <a href="#download" className="inline-flex items-center gap-2.5 bg-accent text-bg px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(155,142,196,0.25)] cursor-pointer">
              <AppleIcon />
              Download on iOS
            </a>
            <a href="#how" className="inline-flex items-center gap-1.5 text-text-secondary text-base font-medium transition-colors duration-200 hover:text-text-primary cursor-pointer">
              See how it works
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(155,142,196,0.1)_0%,transparent_70%)] rounded-full" />
          <img
            src="/assets/screenshot_home.png"
            alt="Steddi navigation app showing turn-by-turn directions"
            className="relative z-10 w-72 md:w-80 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(155,142,196,0.08),0_0_120px_rgba(155,142,196,0.08)]"
          />
        </div>
      </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
      <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  )
}
