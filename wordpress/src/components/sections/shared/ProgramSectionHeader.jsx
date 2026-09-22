import { cn } from '../../ui';

function ProgramSectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  subtitle2,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'program-section-header mb-7 md:mb-9',
        isCenter ? 'max-w-3xl mx-auto text-center' : 'max-w-xl text-left',
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-3 text-ink-muted text-[11px] font-semibold uppercase tracking-[0.18em] mb-5',
            !isCenter && 'justify-start',
          )}
        >
          <span className="h-px w-8 bg-brand/40" aria-hidden="true" />
          {eyebrow}
          {isCenter && <span className="h-px w-8 bg-brand/40" aria-hidden="true" />}
        </div>
      )}

      {title && (
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink">
          {title}
          {titleAccent && (
            <span className="text-brand">
              {' '}
              {titleAccent}
            </span>
          )}
        </h2>
      )}

      {subtitle && (
        <p className="mt-5 text-ink-muted text-[15px] md:text-base leading-[1.7]">{subtitle}</p>
      )}
      {subtitle2 && (
        <p className="mt-3 text-ink text-[15px] md:text-base font-medium leading-relaxed">{subtitle2}</p>
      )}
    </div>
  );
}

export default ProgramSectionHeader;
