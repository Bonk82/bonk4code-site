import type { APIRoute } from 'astro';
import { createHmac } from 'node:crypto';
import { isIP } from 'node:net';
import { isValidPhoneNumber } from 'libphonenumber-js/min';

export const prerender = false; // necesario para que corra en el servidor

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    if (!name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message?.trim().length < 10 ||
      (phone != null && (typeof phone !== 'string' || (phone !== '' && (!phone.startsWith('+') || !isValidPhoneNumber(phone)))))) {
      return new Response(JSON.stringify({ message: 'Datos inválidos' }), { status: 400 });
    }

    // El mensaje va como HTML, así que escapamos lo que escribe el usuario
    const mensaje = `
      <h2>Nuevo proyecto — ${esc(service)}</h2>
      <p><strong>Nombre:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Teléfono:</strong> ${esc(phone || '-')}</p>
      <p><strong>Empresa:</strong> ${esc(company || '-')}</p>
      <p><strong>Servicio:</strong> ${esc(service)}</p>
      <hr/>
      <p>${esc(message).replace(/\n/g, '<br/>')}</p>
    `;

    const url = new URL(`${import.meta.env.MAIL_API_URL}/correo/enviarCorreo`);
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `${import.meta.env.MAIL_API_TOKEN}`,
    };
    const clientIp = request.headers.get('cf-connecting-ip')?.trim();
    if (clientIp) {
      const secret = import.meta.env.CLIENT_IP_SIGNING_SECRET;
      if (!isIP(clientIp) || !secret) {
        throw new Error('IP de Cloudflare inválida o CLIENT_IP_SIGNING_SECRET no configurado');
      }
      const timestamp = Date.now().toString();
      const payload = `${clientIp}\n${timestamp}\nPOST\n${url.pathname}`;
      headers['X-Original-Client-IP'] = clientIp;
      headers['X-Client-IP-Timestamp'] = timestamp;
      headers['X-Client-IP-Signature'] = createHmac('sha256', secret).update(payload).digest('hex');
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
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