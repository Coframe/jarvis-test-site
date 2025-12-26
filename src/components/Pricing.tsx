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
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
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
                  ? "border-primary bg-gradient-to-b from-primary/20 to-transparent glow"
                  : "border-white/10 bg-secondary/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted">{tier.period}</span>}
                </div>
                <p className="mt-2 text-sm text-muted">{tier.description}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    : "border border-white/20 bg-white/5 hover:bg-white/10"
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
