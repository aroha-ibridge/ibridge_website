import { cn } from './cn';

/**
 * Heading primitive with size scale.
 * <Heading level={1} size="hero">Welcome</Heading>
 */
const SIZE_MAP = {
  hero: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight',
  h1: 'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
  h2: 'text-2xl md:text-3xl font-bold leading-tight',
  h3: 'text-xl md:text-2xl font-semibold leading-snug',
  h4: 'text-lg font-semibold leading-snug',
  eyebrow: 'text-xs font-bold uppercase tracking-[0.08em] text-brand',
};

function Heading({ level = 2, size, className = '', children, ...rest }) {
  const Tag = `h${level}`;
  const sizeKey = size || `h${level}`;

  return (
    <Tag className={cn('tw-scope text-ink', SIZE_MAP[sizeKey], className)} {...rest}>
      {children}
    </Tag>
  );
}

export default Heading;
