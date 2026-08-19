import { site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.role}</p>
      </div>
    </footer>
  );
}
