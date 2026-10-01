import type { APIRoute } from 'astro';

export const prerender = false; // necesario para que corra en el servidor

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, company, service, message } = await request.json();

    if (!name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message?.trim().length < 10) {
      return new Response(JSON.stringify({ message: 'Datos inválidos' }), { status: 400 });
    }

    // El mensaje va como HTML, así que escapamos lo que escribe el usuario
    const mensaje = `
      <h2>Nuevo proyecto — ${esc(service)}</h2>
      <p><strong>Nombre:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Empresa:</strong> ${esc(company || '-')}</p>
      <p><strong>Servicio:</strong> ${esc(service)}</p>
      <hr/>
      <p>${esc(message).replace(/\n/g, '<br/>')}</p>
    `;

    const res = await fetch(`${import.meta.env.MAIL_API_URL}/correo/enviarCorreo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Ajusta esto a como tu backend espera el token (mira la pestaña Headers/Auth de tu cliente HTTP)
        Authorization: `${import.meta.env.MAIL_API_TOKEN}`,
      },
      body: JSON.stringify({
        para: import.meta.env.CONTACT_EMAIL,
        mensaje,
        asunto: `Nuevo proyecto — ${esc(service)}`,
        tipo: 'PROYECTOS',
        opcion: 1,
      }),
    });

    if (!res.ok) throw new Error(`Backend respondió ${res.status}`);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'No se pudo enviar' }), { status: 500 });
  }
};