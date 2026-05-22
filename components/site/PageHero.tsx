import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lead,
  backgroundImage,
  sideImage,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  backgroundImage?: string;
  sideImage?: string;
}) {
  return (
    <section
      className={`relative pt-40 pb-24 overflow-hidden ${backgroundImage ? "bg-foreground text-background" : "bg-background"}`}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-transparent to-transparent" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />}
      <div className="relative mx-auto max-w-350 px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className={`flex items-center gap-3 text-xs uppercase tracking-[0.28em] ${backgroundImage ? "text-background/60" : "text-muted-foreground"}`}
            >
              <span className="h-px w-10 bg-accent" />
              {eyebrow}
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tight text-balance max-w-4xl">
              {title}
            </h1>
            {lead && (
              <p
                className={`mt-6 max-w-2xl text-lg leading-relaxed ${backgroundImage ? "text-background/70" : "text-muted-foreground"}`}
              >
                {lead}
              </p>
            )}
          </div>
          {sideImage && (
            <figure className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={sideImage}
                alt=""
                fill
                className="object-cover"
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
