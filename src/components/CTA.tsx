import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to supercharge your experiments?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Join thousands of product teams using JARVIS to make smarter decisions and drive more conversions.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Start Free Trial
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
              >
                Talk to Sales
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">
              No credit card required. Free 14-day trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
