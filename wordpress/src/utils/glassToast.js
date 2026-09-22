/**
 * Lightweight toast shim for marketing enquire popups.
 * Avoids pulling react-toastify into the static marketing build.
 */
function showToast(message, type) {
  if (typeof document === 'undefined') return;
  const existing = document.getElementById('ibridge-glass-toast');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = 'ibridge-glass-toast';
  el.setAttribute('role', 'status');
  el.textContent = String(message || '');
  el.style.cssText = [
    'position:fixed',
    'left:50%',
    'bottom:1.5rem',
    'transform:translateX(-50%)',
    'z-index:99999',
    'max-width:min(92vw,420px)',
    'padding:0.85rem 1.15rem',
    'border-radius:12px',
    'font:600 14px/1.4 Inter,system-ui,sans-serif',
    'color:#0f172a',
    'background:rgba(255,255,255,0.92)',
    'border:1px solid rgba(24,71,159,0.25)',
    'box-shadow:0 12px 40px rgba(15,23,42,0.18)',
    type === 'error' ? 'border-color:rgba(220,38,38,0.35)' : '',
  ]
    .filter(Boolean)
    .join(';');

  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 2800);
}

export const GlassToast = {
  success: (msg) => showToast(msg, 'success'),
  error: (msg) => showToast(msg, 'error'),
  warning: (msg) => showToast(msg, 'warning'),
  info: (msg) => showToast(msg, 'info'),
};

export default GlassToast;
