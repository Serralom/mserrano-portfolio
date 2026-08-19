import { site } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 pb-20 pt-20 sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Disponible para nuevos proyectos
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {site.role}{" "}
          <span className="text-gradient block sm:inline">para tus datos.</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {site.tagline} Soy {site.name} ({site.location}).
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            Hablemos de tu proyecto
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
