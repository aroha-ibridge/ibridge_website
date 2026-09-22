import { cn } from './cn';

/**
 * Vertical page section with consistent padding.
 * <Section id="features" tone="soft">...</Section>
 */
function Section({
  as: Tag = 'section',
  tone = 'default',
  spacing = 'default',
  className = '',
  children,
  ...rest
}) {
  const tones = {
    default: 'bg-surface',
    soft: 'bg-surface-soft',
    muted: 'bg-surface-muted',
    brand: 'bg-brand text-white',
    transparent: 'bg-transparent',
  };

  const spacings = {
    default: 'py-16 md:py-20',
    compact: 'py-10 md:py-14',
    flow: 'py-10 md:py-12',
    tight: 'py-6 md:py-8',
    hero: 'py-20 md:py-28',
  };

  return (
    <Tag className={cn('tw-scope w-full', tones[tone], spacings[spacing], className)} {...rest}>
      {children}
    </Tag>
  );
}

export default Section;
