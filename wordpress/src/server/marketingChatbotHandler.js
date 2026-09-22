/**
 * Shared Groq chat handler — used by Vercel api/, Astro dev middleware, and local preview.
 */

/** Fallback when GROQ_MODEL is unset or unavailable for this API key. */
const DEFAULT_GROQ_MODEL = 'qwen/qwen3.8-27b';

export async function handleMarketingChatbot(body = {}) {
  const apiKey = process.env.GROQ_API_KEY || process.env.GROQ_API_KEY_SECRET;
  if (!apiKey) {
    console.error('[marketing-chatbot] GROQ_API_KEY is missing on the server');
    return { status: 500, json: { error: 'GROQ_API_KEY is missing on the server' } };
  }

  const question = typeof body.question === 'string' ? body.question.trim() : '';
  const systemPrompt = typeof body.systemPrompt === 'string' ? body.systemPrompt : '';
  const history = Array.isArray(body.history) ? body.history.slice(-10) : [];
  const model = process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL;

  if (!question) {
    return { status: 400, json: { error: 'question is required' } };
  }

  const messages = [
    ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
    ...history.map((m) => ({
      role: m.role === 'assistant' || m.role === 'user' ? m.role : 'user',
      content: String(m.content || ''),
    })),
    { role: 'user', content: question },
  ];

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.4,
        max_tokens: 2048,
      }),
    });

    const data = await groqRes.json().catch(() => null);
    if (!groqRes.ok) {
      const detail = data?.error?.message || data?.error || `Groq HTTP ${groqRes.status}`;
      console.error('[marketing-chatbot] Groq error', {
        model,
        groqStatus: groqRes.status,
        detail: String(detail),
      });
      // Do not forward Groq's 404 (model_not_found) as our route 404 — confuses Vercel logs.
      const status = groqRes.status === 404 || groqRes.status === 400 ? 502 : groqRes.status;
      return {
        status,
        json: {
          error: String(detail),
          model,
          code: data?.error?.code || undefined,
        },
      };
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() || '';
    if (!reply) {
      console.error('[marketing-chatbot] Empty reply from Groq', { model });
      return { status: 502, json: { error: 'Empty reply from assistant', model } };
    }

    return { status: 200, json: { reply } };
  } catch (err) {
    console.error('[marketing-chatbot] Request failed', err?.message || err);
    return { status: 500, json: { error: err?.message || 'Chatbot request failed' } };
  }
}

export async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8') || '{}';
  try {
    return JSON.parse(raw);
  } catch {
    const err = new Error('Invalid JSON body');
    err.status = 400;
    throw err;
  }
}
