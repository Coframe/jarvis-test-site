import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with experimentation",
    features: [
      "Up to 10,000 monthly visitors",
      "3 active experiments",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing teams who need more power",
    features: [
      "Up to 100,000 monthly visitors",
      "Unlimited experiments",
      "AI-powered optimization",
      "Advanced analytics & segments",
      "Priority email support",
      "Visual editor",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale experimentation needs",
    features: [
      "Unlimited visitors",
      "Unlimited experiments",
      "Custom AI models",
      "Dedicated success manager",
      "SSO & advanced security",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="feature-badge">Pricing</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-accent bg-gradient-to-b from-accent/10 to-transparent shadow-lg"
                  : "border-border bg-white"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="text-muted">{tier.period}</span>}
                </div>
                <p className="mt-2 text-sm text-muted">{tier.description}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground">
                    <svg className="h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`mt-8 block w-full rounded-full py-3 text-center font-medium transition-all ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-white text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
