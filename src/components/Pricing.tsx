import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Landing',
    price: 'Desde $us.150',
    period: 'proyecto',
    description: 'Página web institucional o landing page lista para convertir.',
    features: ['Diseño responsivo', 'SEO básico', 'Formulario de contacto', 'Entrega en 5-10 días'],
    highlighted: false,
    cta: 'Empezar',
  },
  {
    name: 'A medida',
    price: 'Desde $us.1,000',
    period: 'proyecto',
    description: 'Apps web, sistemas de gestión o módulos a tu medida con dashboards y reporterías.',
    features: [
      'Diseño UX/UI a medida',
      'Desarrollo ágil por sprints',
      'Panel administrativo',
      'Integraciones (WhatsApp, pagos, IA)',
      'Soporte 3 meses',
    ],
    highlighted: true,
    cta: 'Agendar llamada',
  },
  {
    name: 'ERP / IA',
    price: 'Custom $us.',
    period: 'cotizado',
    description: 'ERP completos, automatizaciones con IA y migraciones de sistemas.',
    features: ['Multi-módulo integral', 'IA & automatización', 'Migración de datos','RAGs, Bots, Agentes', 'SLA dedicado'],
    highlighted: false,
    cta: 'Hablar con un experto',
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Planes
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Precios <span className="text-gradient">transparentes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige un punto de partida. Escalamos contigo cuando lo necesites.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-7 backdrop-blur transition-all hover:-translate-y-1',
                p.highlighted
                  ? 'border-primary/60 bg-gradient-to-b from-primary/10 to-accent/5 shadow-2xl shadow-primary/20'
                  : 'border-border bg-card/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
              )}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-bold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" /> Más popular
                </div>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full',
                        p.highlighted ? 'bg-primary text-white' : 'bg-primary/15 text-primary'
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={cn(
                  'mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all',
                  p.highlighted
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5'
                    : 'border border-border bg-card text-foreground hover:border-primary/60 hover:text-primary'
                )}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
