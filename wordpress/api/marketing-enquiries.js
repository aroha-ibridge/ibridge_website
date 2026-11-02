import { handleMarketingEnquiry } from '../src/server/marketingEnquiryHandler.js';

/**
 * Vercel serverless function handling marketing enquiries:
 * 1. Sends email notification to support@ibridge360.com via DreamHost SMTP.
 * 2. Saves enquiry to LMS MongoDB backend.
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

  try {
    const result = await handleMarketingEnquiry(body || {});
    return res.status(result.status).json(result.json);
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || 'Marketing enquiry failed' });
  }
}
