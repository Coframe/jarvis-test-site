const steps = [
  {
    number: "01",
    title: "Install the SDK",
    description: "Add our lightweight snippet to your site in minutes. Works with any framework or vanilla JavaScript.",
    code: `npm install @coframe/jarvis

// Initialize JARVIS
import { Jarvis } from '@coframe/jarvis';

Jarvis.init({
  apiKey: 'your-api-key',
  environment: 'production'
});`,
  },
  {
    number: "02",
    title: "Create Experiments",
    description: "Use our visual editor or code-based approach to define variations. Target specific audiences with powerful segmentation.",
    code: `// Define an experiment
const experiment = await Jarvis.createExperiment({
  name: 'Homepage Hero Test',
  variations: [
    { id: 'control', weight: 50 },
    { id: 'variant_a', weight: 50 }
  ],
  goals: ['signup', 'purchase']
});`,
  },
  {
    number: "03",
    title: "Let AI Optimize",
    description: "JARVIS automatically analyzes results and shifts traffic to winning variations while maintaining statistical rigor.",
    code: `// AI optimization runs automatically
// Monitor results in real-time
const results = await experiment.getResults();

console.log(results);
// {
//   winner: 'variant_a',
//   confidence: 0.97,
//   lift: '+23.4%',
//   status: 'significant'
// }`,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in <span className="gradient-text">minutes</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Get started with JARVIS in three simple steps. No complex setup required.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-5xl font-bold text-primary/30">{step.number}</span>
                <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-lg text-muted">{step.description}</p>
              </div>

              {/* Code Block */}
              <div className="flex-1">
                <div className="glow-sm overflow-hidden rounded-xl border border-white/10 bg-secondary">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-muted">example.ts</span>
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm">
                    <code className="text-foreground/90">{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
