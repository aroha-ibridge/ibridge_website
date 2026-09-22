/**
 * Small classname joiner — filters out falsy values.
 * Usage:  cn('base', condition && 'active', props.className)
 */
export function cn(...values) {
  return values.filter(Boolean).join(' ');
}
