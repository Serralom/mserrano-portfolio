import { techStack } from "@/lib/config";

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Stack técnico</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">Herramientas con las que trabajo</h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {techStack.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-muted">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
