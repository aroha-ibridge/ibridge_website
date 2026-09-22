import { cn } from './cn';

/**
 * Centered max-width wrapper with horizontal padding.
 * <Container>...</Container>          → default 1200px
 * <Container size="content">...</Container> → narrower 960px
 */
function Container({ as: Tag = 'div', size = 'default', className = '', children, ...rest }) {
  const sizes = {
    default: 'max-w-container',
    content: 'max-w-content',
    full: 'max-w-full',
  };

  return (
    <Tag className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
