import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Section } from '../../ui';
import blogsData from '../../../content/blogs/blogsData';
import '../../../styles/blogs-page.css';

const PAGE_SIZE = 6;

function BlogCard({ post, featured = false, index = 0 }) {
  return (
    <article
      className={`blogs-card${featured ? ' blogs-card--featured' : ''}`}
      style={{ '--blogs-delay': `${Math.min(index, 8) * 55}ms` }}
    >
      <Link to={post.to} className="blogs-card__media" aria-label={post.title}>
        <img src={post.image} alt={post.imageAlt || ''} loading={featured ? 'eager' : 'lazy'} />
      </Link>
      <div className="blogs-card__body">
        <div className="blogs-card__meta">
          <span className="blogs-card__category">{post.category}</span>
          <span className="blogs-card__dot" aria-hidden="true" />
          <time className="blogs-card__date">{post.date}</time>
        </div>
        <h2 className="blogs-card__title">
          <Link to={post.to}>{post.title}</Link>
        </h2>
        <p className="blogs-card__excerpt">{post.excerpt}</p>
        <Link to={post.to} className="blogs-card__cta">
          Read article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function BlogsSection() {
  const { hero, posts } = blogsData;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMoreRef = useRef(null);

  const featured = posts[0];
  const rest = useMemo(() => posts.slice(1), [posts]);
  const visibleRest = rest.slice(0, Math.max(visibleCount - 1, 0));
  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    if (!hasMore || !loadMoreRef.current) return undefined;

    const node = loadMoreRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length));
        }
      },
      { rootMargin: '0px 0px 240px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, posts.length]);

  return (
    <div className="blogs-page tw-scope">
      <Section spacing="tight" className="blogs-hero relative overflow-hidden">
        <div className="blogs-hero__glow" aria-hidden="true" />
        <Container className="relative blogs-hero__content">
          <div className="blogs-eyebrow">{hero.eyebrow}</div>
          <h1 className="blogs-hero__title">
            {hero.title} <span className="text-brand">{hero.titleAccent}</span>
          </h1>
          <p className="blogs-hero__subtitle">{hero.subtitle}</p>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="blogs-listing">
        <Container>
          {featured && (
            <div className="blogs-featured">
              <BlogCard post={featured} featured />
            </div>
          )}

          <div className="blogs-grid">
            {visibleRest.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {hasMore && (
            <div className="blogs-load-more" ref={loadMoreRef}>
              <Button
                type="button"
                variant="outline"
                size="md"
                className="!rounded-xl"
                onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length))}
              >
                Load more articles
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

export default BlogsSection;
