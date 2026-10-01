const techs = [
  <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/react.png" alt="React" className="h-6 w-6" /> React</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/astro.png" alt="Astro" className="h-6 w-6" /> Astro</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/nextjs.png" alt="Next.js" className="h-6 w-6" /> Next.js</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/angular.png" alt="Angular" className="h-6 w-6" /> Angular</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/vue.png" alt="Vue" className="h-6 w-6" /> Vue</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/typescript.png" alt="TypeScript" className="h-6 w-6" /> TypeScript</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/tailwind.png" alt="Tailwind CSS" className="h-6 w-6" /> Tailwind CSS</p>,
  <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/shadcn.png" alt="shadcn/ui" className="h-6 w-6" /> shadcn/ui</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/mantine.png" alt="Mantine" className="h-6 w-6" /> Mantine</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/prime.png" alt="Prime" className="h-6 w-6" /> Prime</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/nodejs.png" alt="Node.js" className="h-6 w-6" /> Node.js</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/supabase.png" alt="Supabase" className="h-6 w-6" /> Supabase</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/postgresql.png" alt="PostgreSQL" className="h-6 w-6" /> PostgreSQL</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/python.png" alt="Python" className="h-6 w-6" /> Python</p>,
  <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/fastapi.png" alt="FastAPI" className="h-6 w-6" /> FastAPI</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/prisma.png" alt="Prisma" className="h-6 w-6" /> Prisma</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/openclaw.png" alt="OpenClaw" className="h-6 w-6" /> OpenClaw</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/vercel.png" alt="Vercel" className="h-6 w-6" /> Vercel</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/docker.png" alt="Docker" className="h-6 w-8" /> Docker</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/redis.png" alt="Redis" className="h-6 w-6" /> Redis</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/stripe.png" alt="Stripe" className="h-6 w-6" /> Stripe</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/netcore.png" alt="Net Core" className="h-6 w-9" /> Net Core</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/java.png" alt="Java" className="h-6 w-6" /> Java</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/flutter.png" alt="Flutter" className="h-6 w-6" /> Flutter</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/spring.png" alt="Spring" className="h-6 w-6" /> Spring</p>, <p className="flex items-center gap-2 whitespace-nowrap"><img src="/tech/kotlin.png" alt="Kotlin" className="h-6 w-6" /> Kotlin</p>
];

const marquee = [...techs, ...techs];

export default function Tech() {
  return (
    <section id="tecnologias" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Stack
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Tecnologías <span className="text-gradient">modernas y confiables</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Usamos las herramientas adecuadas para cada problema. Sin reinventar la rueda.
          </p>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee flex w-max gap-3">
          {marquee.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold text-muted-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
