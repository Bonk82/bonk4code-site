import type { APIRoute } from 'astro';
import geoip from 'geoip-lite';
import { isSupportedCountry } from 'libphonenumber-js/min';

export const prerender = false;

export const GET: APIRoute = ({ request, clientAddress }) => {
  const headerCountry = (request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country'))?.toUpperCase();
  const address = clientAddress.split(',')[0].trim().replace(/^::ffff:/i, '');
  const country = headerCountry && isSupportedCountry(headerCountry)
    ? headerCountry
    : geoip.lookup(address)?.country;

  return new Response(JSON.stringify({ country: country?.toUpperCase() || null }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};
