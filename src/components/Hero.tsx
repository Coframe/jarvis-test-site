import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Now powered by advanced AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Run Smarter
            <br />
            <span className="gradient-text">A/B Experiments</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            JARVIS uses AI to automatically optimize your experiments, find winning variations faster,
            and maximize your conversion rates with intelligent traffic allocation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 pulse-glow"
            >
              Start Free Trial
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold transition-all hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16">
            <p className="mb-6 text-sm text-muted">Trusted by leading product teams</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
              {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company) => (
                <div key={company} className="text-xl font-bold text-muted">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="glow rounded-2xl border border-white/10 bg-secondary/50 p-2 backdrop-blur-sm">
            <div className="rounded-xl bg-secondary">
              {/* Mock Dashboard Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-muted">JARVIS Dashboard</span>
              </div>
              {/* Mock Dashboard Content */}
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-background/50 p-4">
                    <p className="text-sm text-muted">Active Experiments</p>
                    <p className="mt-1 text-3xl font-bold">12</p>
                    <p className="mt-1 text-sm text-green-400">+3 this week</p>
                  </div>
                  <div className="rounded-lg bg-background/50 p-4">
                    <p className="text-sm text-muted">Conversion Lift</p>
                    <p className="mt-1 text-3xl font-bold gradient-text">+23.4%</p>
                    <p className="mt-1 text-sm text-green-400">Above baseline</p>
                  </div>
                  <div className="rounded-lg bg-background/50 p-4">
                    <p className="text-sm text-muted">Statistical Confidence</p>
                    <p className="mt-1 text-3xl font-bold">97.2%</p>
                    <p className="mt-1 text-sm text-primary">High confidence</p>
                  </div>
                </div>
                <div className="mt-6 h-48 rounded-lg bg-background/30">
                  {/* Mock Chart */}
                  <div className="flex h-full items-end justify-around gap-2 p-4">
                    {[40, 65, 45, 80, 55, 90, 75, 95, 85, 70, 88, 92].map((height, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t bg-gradient-to-t from-primary to-accent"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
