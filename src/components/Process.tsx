import { Search, PenTool, Code2, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Descubrimiento',
    description: 'Entendemos tu negocio, procesos y objetivos. Definimos alcance y métricas de éxito.',
  },
  {
    icon: PenTool,
    title: 'Diseño UX/UI',
    description: 'Prototipos y flujos centrados en el usuario con tu identidad de marca.',
  },
  {
    icon: Code2,
    title: 'Desarrollo ágil',
    description: 'Sprints semanales con entregables claros y demos continuas.',
  },
  {
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Despliegue, capacitación y monitoreo. Aseguramos un go-live sin fricción.',
  },
  {
    icon: RefreshCw,
    title: 'Iteración & IA',
    description: 'Medimos, optimizamos y añadimos capacidades de IA para mejorar continuamente.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Un proceso <span className="text-gradient">claro y medible</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            De la idea al lanzamiento, con iteración continua apoyada en IA.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="group relative text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-lg shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-primary/30">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white shadow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
