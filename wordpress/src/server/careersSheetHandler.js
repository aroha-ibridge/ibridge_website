/**
 * Appends a careers application to the private Google Sheet via Apps Script.
 * The web app URL and secret stay on the server.
 */

function clean(value, max) {
  return String(value || '').trim().slice(0, max);
}

export async function handleCareersSheet(body = {}) {
  const sheetUrl = process.env.CAREERS_SHEET_URL;
  const secret = process.env.CAREERS_SHEET_SECRET;
  if (!sheetUrl || !secret) {
    console.error('[careers-sheet] CAREERS_SHEET_URL or CAREERS_SHEET_SECRET is missing');
    return { status: 500, json: { ok: false, error: 'Careers sheet is not configured' } };
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 30);
  if (!name || !email || !phone) {
    return { status: 400, json: { ok: false, error: 'Name, email, and phone are required' } };
  }

  const payload = {
    secret,
    spreadsheetId: process.env.CAREERS_SPREADSHEET_ID || '',
    name,
    email,
    phone,
    role: clean(body.role, 200),
    department: clean(body.department, 200),
    workMode: clean(body.workMode, 100),
    experience: clean(body.experience, 100),
    profileUrl: clean(body.profileUrl, 500),
    note: clean(body.note, 4000),
    pageUrl: clean(body.pageUrl, 500),
  };

  try {
    const first = await fetch(sheetUrl, {
      method: 'POST',
      redirect: 'manual',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    const location = first.headers.get('location');
    if (first.status >= 300 && first.status < 400 && location) {
      const second = await fetch(location, { method: 'GET', signal: AbortSignal.timeout(8000) });
      const data = await second.json().catch(() => null);
      if (second.ok && data?.ok) return { status: 200, json: { ok: true } };
      return {
        status: 502,
        json: { ok: false, error: data?.error || 'Sheet did not accept the application' },
      };
    }

    const data = await first.json().catch(() => null);
    if (first.ok && data?.ok) return { status: 200, json: { ok: true } };
    return {
      status: 502,
      json: { ok: false, error: data?.error || 'Sheet did not accept the application' },
    };
  } catch (error) {
    console.error('[careers-sheet]', error?.message || error);
    return { status: 502, json: { ok: false, error: 'Could not reach the careers sheet' } };
  }
}
