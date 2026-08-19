import { process } from "@/lib/config";

export default function Process() {
  return (
    <section id="como-trabajo" className="border-t border-border/60 bg-surface-muted">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Cómo trabajo</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Un proceso claro, sin sorpresas</h2>

        <ol className="mt-10 space-y-6">
          {process.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
