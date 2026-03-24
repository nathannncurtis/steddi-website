export default function CTA() {
  return (
    <section id="download" className="relative py-36 px-6 md:px-12 text-center overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(155,142,196,0.08)_0%,transparent_65%)] pointer-events-none" />

      <h2 className="relative text-4xl md:text-6xl font-bold leading-tight mb-5">
        Stop being rerouted
        <br />
        for no reason.
      </h2>
      <p className="relative text-lg text-text-secondary mb-10 max-w-md mx-auto">
        Download Steddi and take back control of your daily drive.
      </p>
      <a href="#" className="relative inline-flex items-center gap-2.5 bg-accent text-bg px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(155,142,196,0.25)] cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
          <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
        </svg>
        Download on iOS
      </a>
    </section>
  )
}
