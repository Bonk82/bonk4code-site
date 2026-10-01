import {
  Globe,
  AppWindow,
  Users,
  Boxes,
  ShoppingCart,
  Disc3,
  Landmark,
  UtensilsCrossed,
  LayoutDashboard,
  Bot,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Páginas web',
    description: 'Sitios institucionales y landing pages rápidas, SEO-ready y con diseños que convierten.',
    tags: ['Astro', 'React', 'SEO'],
  },
  {
    icon: AppWindow,
    title: 'Apps web',
    description: 'Aplicaciones web a medida, multiusuario y responsivas con dashboards en tiempo real.',
    tags: ['Next.js', 'Angular', 'Tailwind'],
  },
  {
    icon: Users,
    title: 'Gestión de RR.HH.',
    description: 'Control de personal, asistencia, vacaciones, planillas y evaluaciones de desempeño.',
    tags: ['Asistencia', 'Planillas', 'Reportes'],
  },
  {
    icon: Boxes,
    title: 'Inventarios',
    description: 'Stock en tiempo real, multi-almacén, códigos QR/barras, ventas y alertas inteligentes.',
    tags: ['Kardex', 'Ventas', 'QR'],
  },
  {
    icon: ShoppingCart,
    title: 'Ventas y POS',
    description: 'Puntos de venta, facturación electrónica y reportes de ventas en vivo.',
    tags: ['POS', 'Inventario', 'Facturación', 'Reportes'],
  },
  {
    icon: Disc3,
    title: 'Gestión de bares',
    description: 'Reservas de mesas, barra libre, control de accesos y caja por evento.',
    tags: ['Reservas', 'Accesos', 'Caja'],
  },
  {
    icon: Landmark,
    title: 'Empresas financieras',
    description: 'Créditos, amortizaciones, cobranzas, scoring y gestión de cartera.',
    tags: ['Créditos', 'Scoring', 'Cartera'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Comida rápida',
    description: 'Carta digital, pedidos online, cocina en vivo y delivery integrado.',
    tags: ['Carta', 'Pedidos', 'Delivery'],
  },
  {
    icon: LayoutDashboard,
    title: 'ERP completos',
    description: 'Integra ventas, compras, inventario, contabilidad y RR.HH. en una sola plataforma.',
    tags: ['Integral', 'Contabilidad', 'BI'],
  },
  {
    icon: Bot,
    title: 'IA & automatización',
    description: 'Agentes y flujos que eliminan hasta el 90% del trabajo operativo, liberando a tu equipo para enfocarse en estrategia.',
    tags: ['Agentes IA', 'n8n', 'Automatización RPA'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Qué hacemos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Soluciones a medida para <span className="text-gradient">cada industria</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Diseñamos y desarrollamos software que se adapta a tus procesos, no al revés.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
