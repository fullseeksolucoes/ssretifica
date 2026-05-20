export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative pt-40 pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="absolute top-32 right-10 h-64 w-64 rounded-full border border-accent/30 spin-slow pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent" />
      </div>
      <div className="relative mx-auto max-w-350 px-6 lg:px-10">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" />
          {eyebrow}
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance max-w-4xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
