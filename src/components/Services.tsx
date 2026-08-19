import { services } from "@/lib/config";

export default function Services() {
  return (
    <section id="servicios" className="border-t border-border/60 bg-surface-muted">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Servicios</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">En qué puedo ayudarte</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
