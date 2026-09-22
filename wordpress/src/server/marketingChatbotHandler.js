/**
 * Shared Groq chat handler — used by Vercel api/, Astro dev middleware, and local preview.
 */
export async function handleMarketingChatbot(body = {}) {
  const apiKey = process.env.GROQ_API_KEY || process.env.GROQ_API_KEY_SECRET;
  if (!apiKey) {
    return { status: 500, json: { error: 'GROQ_API_KEY is missing on the server' } };
  }

  const question = typeof body.question === 'string' ? body.question.trim() : '';
  const systemPrompt = typeof body.systemPrompt === 'string' ? body.systemPrompt : '';
  const history = Array.isArray(body.history) ? body.history.slice(-10) : [];

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
        model: process.env.GROQ_MODEL || 'groq/compound-mini',
        messages,
        temperature: 0.4,
        max_tokens: 1024,
      }),
    });

    const data = await groqRes.json().catch(() => null);
    if (!groqRes.ok) {
      const detail = data?.error?.message || data?.error || `Groq HTTP ${groqRes.status}`;
      return { status: groqRes.status, json: { error: String(detail) } };
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() || '';
    if (!reply) {
      return { status: 502, json: { error: 'Empty reply from assistant' } };
    }

    return { status: 200, json: { reply } };
  } catch (err) {
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
