import { cn } from './cn';

/**
 * Card container with soft shadow and rounded corners.
 * <Card>...</Card>            → default white card
 * <Card interactive>...</Card> → adds hover shadow lift
 */
function Card({ as: Tag = 'div', interactive = false, className = '', children, ...rest }) {
  return (
    <Tag
      className={cn(
        'tw-scope bg-surface border border-surface-border rounded-card shadow-card',
        interactive && 'transition-shadow duration-150 hover:shadow-cardHover',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Card;
