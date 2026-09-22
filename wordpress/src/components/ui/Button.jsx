import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { cn } from './cn';
import { withBase } from '../../utils/siteBase';

/**
 * Button primitive.
 *
 * Renders as a <button> by default. Pass `href` for an external link, or
 * `to` for a react-router <Link>.
 *
 * Variants: primary (default) | secondary | outline | ghost
 * Sizes:    sm | md (default) | lg
 */
const VARIANTS = {
  primary:
    'bg-brand text-white hover:bg-brand-700 shadow-button hover:-translate-y-px active:translate-y-0',
  secondary:
    'bg-surface-muted text-ink hover:bg-surface-border',
  outline:
    'border border-brand text-brand hover:bg-brand hover:text-white',
  ghost:
    'text-brand hover:bg-brand/5',
};

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

const BASE =
  'tw-scope inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed tw-focus-ring';

const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:');
    return (
      <a ref={ref} href={isExternal ? href : withBase(href)} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const Tag = as || 'button';
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
});

export default Button;
