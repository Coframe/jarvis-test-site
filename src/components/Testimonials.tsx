const testimonials = [
  {
    quote: "JARVIS helped us achieve a 34% increase in conversion rate within the first month. The AI optimization is game-changing.",
    author: "Sarah Chen",
    role: "Head of Growth",
    company: "TechStartup Inc.",
    avatar: "SC",
  },
  {
    quote: "We've tried many A/B testing tools, but JARVIS's intelligent traffic allocation has consistently delivered better results faster.",
    author: "Marcus Rodriguez",
    role: "VP of Product",
    company: "E-Commerce Co.",
    avatar: "MR",
  },
  {
    quote: "The developer experience is excellent. Clean APIs, great documentation, and seamless integration with our stack.",
    author: "Alex Kim",
    role: "Senior Engineer",
    company: "DevTools Corp.",
    avatar: "AK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-secondary">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="feature-badge">Testimonials</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by <span className="gradient-text">product teams</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            See what our customers have to say about JARVIS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-400 text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
