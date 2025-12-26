export default function Integrations() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Card - Integrations */}
          <div className="relative rounded-3xl bg-secondary p-8 sm:p-10 min-h-[400px] overflow-hidden">
            {/* Decorative 3D shapes */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl transform rotate-12 opacity-80"></div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-200 rounded-2xl transform -rotate-6 opacity-60"></div>
              </div>
            </div>

            {/* Partner Logos Grid */}
            <div className="absolute bottom-20 left-0 right-0 px-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-bold text-gray-800 text-lg">Adobe</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-semibold text-blue-600 text-lg">salesforce</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-medium text-gray-700 text-lg">Google</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-semibold text-gray-700 text-lg">Optimizely</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-semibold text-blue-500 text-lg">Amplitude</span>
                </div>
                <div className="flex items-center justify-center bg-white rounded-xl p-4 h-14">
                  <span className="font-semibold text-green-600 text-lg">segment</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl font-bold text-foreground">
                Coframe slots
                <br />
                into your stack
              </h3>
              <p className="mt-2 text-muted text-sm">
                Works with your existing tools, enhancing
                your workflows with minimal setup.
              </p>
            </div>
          </div>

          {/* Right Card - Works on its own */}
          <div className="relative rounded-3xl border border-border bg-white p-8 sm:p-10 min-h-[400px] overflow-hidden">
            {/* Decorative diagram */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2">
              <div className="relative w-48 h-48">
                {/* Circle with connections */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Labels */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  Generation
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  Analytics
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Split testing
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8">
              <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Integrate within a week
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-foreground">
                ...or works
                <br />
                on its own
              </h3>
              <p className="mt-2 text-muted text-sm">
                Coframe is powerful out of the box—generate,
                analyze, and test variants all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
