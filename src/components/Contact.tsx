import { site } from "@/lib/config";
import { EmailIcon, GitHubIcon, LinkedInIcon, MaltIcon } from "@/components/icons";

const socials = [
  { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.links.malt, label: "Malt", Icon: MaltIcon },
  { href: site.links.github, label: "GitHub", Icon: GitHubIcon },
];

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Contacto</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          ¿Tienes un proyecto de datos en mente?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Cuéntame qué necesitas y te respondo en menos de 48 horas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <EmailIcon className="h-4 w-4" />
            {site.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-muted">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
