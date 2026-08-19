import Link from "next/link";
import { site } from "@/lib/config";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#stack", label: "Stack" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          Contactar
        </a>
      </nav>
    </header>
  );
}
