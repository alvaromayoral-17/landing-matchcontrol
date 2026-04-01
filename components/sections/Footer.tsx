import { FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-[#1F2937] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <img src="/logo.svg" alt="Match Control" className="h-7 w-auto mx-auto md:mx-0" />
            <p className="mt-1 text-sm text-[#9CA3AF]">{FOOTER.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${FOOTER.email}`}
              className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
            >
              {FOOTER.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#1F2937] pt-6 text-center">
          <p className="text-xs text-[#9CA3AF]">
            © {FOOTER.year} Match Control. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
