import Link from "next/link";

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="feature-badge">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Expert-managed conversion
            <br />
            rate optimization, end-to-end.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Generate code, copy, and images—personalized, deployed
            instantly, and zero lift for your team.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-16 max-w-6xl">
          {/* CODE Card - Large */}
          <div className="card-blue rounded-3xl p-8 sm:p-10 min-h-[400px] relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                CODE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                UI, layout, and interactive elements.
              </h3>
              <p className="text-white/80 max-w-md">
                Generate deployable components,
                layouts, and experiments.
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-sm text-gray-700 font-medium">Create a modern testimonials section based on your knowledge of Coframe</span>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* COPY Card */}
            <div className="card-dark rounded-3xl p-8 min-h-[320px] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  COPY
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-3">
                  Performance-driven copy.
                </h3>
                <p className="text-white/60">
                  Auto-generate headlines,
                  CTAs, and full-page content.
                </p>
              </div>
              {/* Mock UI element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="h-2 bg-white/20 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-white/20 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* VISUALS Card */}
            <div className="card-purple rounded-3xl p-8 min-h-[320px] relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  VISUALS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-3">
                  On-brand image generation.
                </h3>
                <p className="text-white/60">
                  Generate visuals that match your
                  content, variant, and segment.
                </p>
              </div>
              {/* Mock image grid */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 h-20 bg-white/20 rounded-lg"></div>
                <div className="flex-1 h-20 bg-white/20 rounded-lg"></div>
                <div className="flex-1 h-20 bg-white/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Start for free
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-medium text-foreground transition-all hover:bg-secondary"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
