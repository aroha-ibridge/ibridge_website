import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { cn } from './cn';

/**
 * Modal / dialog primitive.
 * <Modal open={isOpen} onClose={close} title="Confirm">Body</Modal>
 */
function Modal({
  open,
  onClose,
  title,
  description,
  size = 'md',
  className = '',
  children,
  showClose = true,
}) {
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
  };

  return createPortal(
    <div
      className="tw-scope fixed inset-0 z-[1000000] flex items-center justify-center p-5 bg-slate-900/55 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={cn(
          'relative w-full bg-white border border-surface-border rounded-2xl shadow-popup animate-scaleIn overflow-hidden',
          sizes[size],
          className,
        )}
      >
        {showClose && (
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-10 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-surface-border bg-surface-muted text-ink-muted hover:bg-surface-border transition-colors tw-focus-ring"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
        )}

        {(title || description) && (
          <div className="px-7 pt-7 pb-5 border-b border-surface-border">
            {title && <h2 className="text-2xl font-bold text-ink leading-tight tracking-tight">{title}</h2>}
            {description && <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{description}</p>}
          </div>
        )}

        <div className="px-7 py-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
