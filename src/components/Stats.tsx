const stats = [
  { value: "40%", label: "Faster time to significance", description: "vs traditional A/B testing" },
  { value: "2.3x", label: "Average conversion lift", description: "for optimized experiments" },
  { value: "99.9%", label: "Uptime SLA", description: "enterprise reliability" },
  { value: "50M+", label: "Events processed daily", description: "at scale" },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-secondary p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold gradient-text sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{stat.label}</p>
                <p className="mt-1 text-sm text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
