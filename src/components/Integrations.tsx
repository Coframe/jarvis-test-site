export default function Integrations() {
  const partners = ["Adobe", "Salesforce", "Google", "Optimizely", "Amplitude", "Segment"];

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted mb-8">Integrates with your favorite tools</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner) => (
              <span key={partner} className="text-lg font-semibold text-muted/60">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
