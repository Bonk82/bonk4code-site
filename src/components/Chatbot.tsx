import { useEffect, useRef, useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Msg {
  role: 'bot' | 'user';
  text: string;
  cta?: { label: string; href: string };
}

const WHATSAPP = 'https://wa.me/51999888777?text=Hola%20bonk4code%2C%20quiero%20cotizar';

const quickReplies = [
  'Quiero una página web',
  'Necesito un ERP',
  '¿Cuánto cuesta una app?',
  'Hablar con un humano',
];

const knowledge: { match: RegExp; answer: string; cta?: { label: string; href: string } }[] = [
  {
    match: /precio|costo|cuánto|cuesta|cotiz/i,
    answer:
      'Las páginas web inician desde $499, apps a medida desde $1,999 y los ERP/IA se cotizan a medida. ¿Quieres que un asesor te dé una cotización personalizada?',
    cta: { label: 'Cotizar ahora', href: '#contacto' },
  },
  {
    match: /página web|landing|sitio/i,
    answer:
      'Hacemos páginas web y landing pages rápidas, SEO-ready y responsivas con Astro/React. Entrega típica: 1-2 semanas. ¿Sobre qué industria es tu proyecto?',
  },
  {
    match: /erp|inventario|rr\.?hh|ventas|préstamo|discotec|comida|pos/i,
    answer:
      'Desarrollamos sistemas de gestión a medida: RR.HH., inventarios, ventas/POS, discotecas, préstamos, comida rápida y ERP completos integrados. ¿Quieres ver una demo?',
    cta: { label: 'Agendar demo', href: '#contacto' },
  },
  {
    match: /ia|inteligencia|chatbot|automat/i,
    answer:
      'Implementamos IA: chatbots, copilotos internos y automatización de procesos con modelos generativos. ¿Te interesa automatizar algún proceso en específico?',
  },
  {
    match: /tiempo|plazo|demora|entreg/i,
    answer:
      'Una landing: 1-2 semanas. Apps a medida: 4-8 semanas. ERP: depende del alcance, pero trabajamos por sprints semanales con entregables claros.',
  },
  {
    match: /humano|persona|whatsapp|asesor|hablar/i,
    answer: '¡Claro! Puedes escribirnos por WhatsApp y un asesor te atenderá en minutos.',
    cta: { label: 'Abrir WhatsApp', href: WHATSAPP },
  },
];

const greet: Msg = {
  role: 'bot',
  text: '¡Hola! Soy el asistente de bonk4code. Cuéntame qué necesitas y te ayudo a encontrar la mejor solución. 👋',
};

function answerFor(input: string): Msg {
  const found = knowledge.find((k) => k.match.test(input));
  if (found) return { role: 'bot', text: found.answer, cta: found.cta };
  return {
    role: 'bot',
    text: 'Genial, ¿me das un poco más de contexto? Mientras tanto, puedes contactar directamente con un asesor por WhatsApp.',
    cta: { label: 'Abrir WhatsApp', href: WHATSAPP },
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greet]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { role: 'user', text: value }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, answerFor(value)]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        className={cn(
          'fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/40 transition-all hover:scale-105 hover:-translate-y-0.5',
          open && 'rotate-90'
        )}
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent ring-2 ring-background" />
          </span>
        )}
      </button>

      <div
        className={cn(
          'fixed bottom-24 right-5 z-50 w-[min(92vw,380px)] origin-bottom-right transition-all duration-300',
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
        )}
      >
        <div className="glass flex h-[520px] max-h-[80vh] flex-col overflow-hidden rounded-3xl shadow-2xl shadow-primary/20">
          <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10 p-4">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
              <Bot className="h-5 w-5" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-card" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-bold">
                bonk4bot
                <Sparkles className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="text-xs text-muted-foreground">En línea · responde al instante</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={cn(
                    'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                    m.role === 'user'
                      ? 'rounded-br-md bg-gradient-to-r from-primary to-accent text-white shadow-md'
                      : 'rounded-bl-md bg-secondary text-secondary-foreground'
                  )}
                >
                  <p>{m.text}</p>
                  {m.cta && (
                    <a
                      href={m.cta.href}
                      target={m.cta.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/30"
                    >
                      {m.cta.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-secondary px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 transition-all hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
