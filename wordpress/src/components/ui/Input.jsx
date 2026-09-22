import { forwardRef } from 'react';

import { cn } from './cn';

/* border-solid required — Tailwind preflight is off, so `border` alone has no style */
const FIELD_CLASSES =
  'tw-scope w-full h-12 px-4 rounded-xl border border-solid border-gray-400 bg-surface-soft text-ink text-sm placeholder:text-ink-soft hover:border-gray-400 focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/15 focus:bg-white transition-all';

/** Text/email/tel input */
export const Input = forwardRef(function Input({ className = '', ...props }, ref) {
  return <input ref={ref} className={cn(FIELD_CLASSES, className)} {...props} />;
});

/** Multi-line textarea */
export const Textarea = forwardRef(function Textarea(
  { className = '', rows = 4, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(FIELD_CLASSES, 'h-auto py-3 resize-y', className)}
      {...props}
    />
  );
});

/** Dropdown select with custom chevron */
export const Select = forwardRef(function Select({ className = '', children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        FIELD_CLASSES,
        'appearance-none pr-10 cursor-pointer bg-[right_14px_center] bg-no-repeat bg-[length:16px]',
        "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2024%2024%27%20fill=%27none%27%20stroke=%27%2364748b%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3e%3cpolyline%20points=%276%209%2012%2015%2018%209%27/%3e%3c/svg%3e')]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});

/** Field label */
export function Label({ className = '', children, ...props }) {
  return (
    <label
      className={cn('tw-scope block mb-2 text-sm font-semibold text-ink', className)}
      {...props}
    >
      {children}
    </label>
  );
}

/** Full field group with label + input */
export function Field({ id, label, hint, error, children, className = '' }) {
  return (
    <div className={cn('tw-scope', className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
