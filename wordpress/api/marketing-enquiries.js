/**
 * Vercel serverless function proxying marketing enquiries to learner / LMS backend.
 */
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  const targetOrigin = (
    process.env.PUBLIC_LEARNER_API_ORIGIN ||
    process.env.PUBLIC_API_ORIGIN ||
    'https://lms.ibridge360.com'
  ).replace(/\/+$/, '');

  try {
    const upstream = await fetch(`${targetOrigin}/api/marketing-enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body || {}),
    });
    const data = await upstream.json().catch(() => ({}));
    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || 'Marketing enquiry proxy failed' });
  }
}
