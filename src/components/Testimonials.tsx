import { Quote, Star } from 'lucide-react';

const items = [
  {
    quote:
      'Migraron nuestro ERP legacy a una app web moderna. Productividad +35% en tres meses.',
    author: 'Directora de operaciones',
    company: 'Empresa de distribución',
  },
  {
    quote:
      'El sistema de inventarios con QR eliminó los desabastecimientos. Soporte impecable.',
    author: 'Jefe de logística',
    company: 'Cadena retail',
  },
  {
    quote:
      'El chatbot con IA atiende el 70% de consultas. Nuestro equipo ahora cierra más ventas.',
    author: 'Gerente comercial',
    company: 'Microfinanzas',
  },
  {
    quote:
      'Carta digital y pedidos online listos en una semana. Las ventas por delivery se duplicaron.',
    author: 'Dueño',
    company: 'Comida rápida',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.10),transparent_45%),radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.10),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Clientes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Resultados que <span className="text-gradient">hablan por sí solos</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <figure
              key={t.author}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-border pt-3">
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
