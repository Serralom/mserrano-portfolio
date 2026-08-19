import { about, site } from "@/lib/config";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-[200px_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Sobre mí</p>
          <p className="mt-2 text-2xl font-semibold">{site.name}</p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
