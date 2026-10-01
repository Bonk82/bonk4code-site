import { Code2, Mail, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';

const WHATSAPP = 'https://wa.me/51999888777?text=Hola%20bonk4code';

const cols = [
  {
    title: 'Servicios',
    links: ['Páginas web', 'Apps web', 'ERP completos', 'IA & automatización', 'Optimización de procesos'],
  },
  {
    title: 'Industrias',
    links: ['Institucional', 'Hotelería', 'Entretenimiento', 'Financieras', 'Comida rápida'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Proceso', 'Precios', 'Contacto', 'Política de privacidad'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}>
                bonk<span className="text-gradient">4</span>code
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Agencia de desarrollo de software a medida. Diseñamos, construimos y optimizamos
              procesos con apoyo de IA para empresas en todo LATAM.
            </p>
            {/* <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Mail, href: 'mailto:hola@bonk4code.com' },
                { icon: MessageCircle, href: WHATSAPP },
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} bonk4code.com — Todos los derechos reservados.</p>
          <p>Hecho con código limpio, pasión y mucho café.</p>
        </div>
      </div>
    </footer>
  );
}
