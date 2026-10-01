import { useState, type FormEvent } from 'react';
import { Mail, Send, CheckCircle2, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '59169765666';
const CONTACT_EMAIL = 'proyectos@bonk4code.com';

const services = [
  'Página web',
  'App web',
  'Gestión de RR.HH.',
  'Inventarios',
  'Almacenes y logística',
  'Ventas / POS',
  'Discotecas',
  'Financiero',
  'Comida rápida',
  'ERP personalizado',
  'IA & automatización',
  'RAGs, Bots, Agentes',
  'Otro',
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const empty: FormState = { name: '', email: '', company: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const validate = (data: FormState) => {
    const e: typeof errors = {};
    if (!data.name.trim()) e.name = 'Ingresa tu nombre';
    if (data.name.trim().length < 5) e.name = 'Ingresa tu nombre (mín. 5 caracteres)';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Email inválido';
    if (!data.service) e.service = 'Selecciona un servicio';
    if (data.message.trim().length < 10) e.message = 'Cuéntanos un poco más (mín. 10 caracteres)';
    return e;
  };

  const onSubmit = async(ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error al enviar');

      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const whatsappLink = () => {
    const text = encodeURIComponent(
      `Hola bonk4code, soy ${form.name || '[tu nombre]'}.\nQuiero información sobre: ${
        form.service || 'un proyecto'
      }.\n${form.message || ''}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Cuéntanos tu <span className="text-gradient">proyecto</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Respondemos en menos de 24 horas. Sin compromiso, sin tecnicismos: te ayudamos a
              encontrar la mejor solución para tu negocio.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: CONTACT_EMAIL },
                { icon: Phone, label: 'WhatsApp', value: '+591 697 65666' },
                { icon: MapPin, label: 'Remoto', value: 'Trabajamos con clientes en todo LATAM' },
                { icon: Clock, label: 'Horario', value: 'Lun a Sáb · 9:00 — 20:00 (BOT)' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos directo por WhatsApp
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-6 shadow-2xl shadow-primary/10 sm:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" error={errors.name}>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="h-11"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tucorreo@empresa.com"
                    className="h-11"
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Empresa (opcional)">
                  <Input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Tu empresa"
                    className="h-11"
                  />
                </Field>
                <Field label="Servicio" error={errors.service}>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm({ ...form, service: v })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="¿Qué necesitas?" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Mensaje" error={errors.message}>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos tu idea, objetivos y alcance del proyecto..."
                    className="min-h-[140px]"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className={cn(
                  'mt-6 h-12 w-full rounded-full bg-gradient-to-r from-primary to-accent text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl',
                  status === 'sent' && 'from-emerald-500 to-emerald-600'
                )}
              >
                {status === 'sending' ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Enviando...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" /> ¡Mensaje enviado!
                  </>
                ) : status === 'error' ? (
                  <>No se pudo enviar, intenta de nuevo</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                  </>
                )}
              </Button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Te responderemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
