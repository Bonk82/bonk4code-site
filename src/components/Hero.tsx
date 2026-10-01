import { ArrowRight, Sparkles, Bot, Workflow, ShieldCheck } from 'lucide-react';

const WHATSAPP = 'https://wa.me/51999888777?text=Hola%20bonk4code%2C%20quiero%20cotizar%20un%20proyecto';

const stats = [
  { value: '+40', label: 'Proyectos entregados' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '+8', label: 'Industrias atendidas' },
  { value: '24/7', label: 'Soporte continuo' },
];

const pills = [
  { icon: Bot, text: 'Impulsado por IA' },
  { icon: Workflow, text: 'Optimización de procesos' },
  { icon: ShieldCheck, text: 'Código seguro y escalable' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:3s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Software a medida con IA · bonk4code.com
          </div>

          <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl [animation-delay:80ms]">
            Construimos el software que <span className="text-gradient">impulsa tu negocio</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl [animation-delay:160ms]">
            Páginas web, apps web, ERP completos y sistemas de gestión a medida. Diseñamos,
            desarrollamos y optimizamos tus procesos con apoyo de IA.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:240ms]">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              Cotizar mi proyecto
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-2.5 [animation-delay:320ms]">
            {pills.map((p) => (
              <span
                key={p.text}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur"
              >
                <p.icon className="h-4 w-4 text-accent" />
                {p.text}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 [animation-delay:400ms]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
