import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function parseWidgetSettings(element) {
  const widget = element.closest('[data-settings]');
  if (!widget) return {};

  try {
    const raw = widget.getAttribute('data-settings') || '{}';
    return JSON.parse(raw.replace(/&quot;/g, '"'));
  } catch {
    return {};
  }
}

function prepareArticleNode(html, navigate) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const article = template.content.querySelector('article');
  if (!article) return null;

  article.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') || '';
    const match = href.match(/\.\.\/([^/]+)\/index\.html$/) || href.match(/^\/([^/]+)\/?$/);
    if (!match) return;

    const route = `/${match[1]}`;
    anchor.setAttribute('href', route);
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(route);
    });
  });

  article.querySelectorAll('img[src]').forEach((img) => {
    const src = img.getAttribute('src') || '';
    if (src.startsWith('../')) {
      img.setAttribute('src', src.replace(/^\.\.\//, '/'));
    }
  });

  return article;
}

function useBlogsInfiniteScroll() {
  const navigate = useNavigate();

  useEffect(() => {
    const anchor = document.querySelector('.elementor-widget-posts .e-load-more-anchor');
    const container = document.querySelector('.elementor-widget-posts .elementor-posts-container');
    const spinner = document.querySelector('.elementor-widget-posts .e-load-more-spinner');

    if (!anchor || !container) return undefined;

    if (spinner) spinner.style.display = 'none';

    const maxPage = Number(anchor.getAttribute('data-max-page')) || 1;
    let currentPage = Number(anchor.getAttribute('data-page')) || 1;
    let loading = false;
    let extraArticles = null;

    async function loadExtraArticles() {
      if (extraArticles !== null) return extraArticles;
      try {
        const response = await fetch('/data/blogs-extra.json');
        if (!response.ok) return '';
        const data = await response.json();
        extraArticles = data.articles || '';
      } catch {
        extraArticles = '';
      }
      return extraArticles;
    }

    async function appendPosts() {
      if (loading || currentPage >= maxPage) return;
      loading = true;
      if (spinner) spinner.style.display = 'inline-block';

      const html = await loadExtraArticles();
      if (html) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        wrapper.querySelectorAll('article').forEach((node) => {
          const prepared = prepareArticleNode(node.outerHTML, navigate);
          if (prepared) container.appendChild(prepared);
        });
      }

      currentPage += 1;
      anchor.setAttribute('data-page', String(currentPage));

      if (currentPage >= maxPage) {
        if (spinner) spinner.style.display = 'none';
        anchor.remove();
        observer.disconnect();
      }

      loading = false;
      if (spinner) spinner.style.display = 'none';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            appendPosts();
          }
        });
      },
      { rootMargin: '0px 0px 200px 0px' },
    );

    observer.observe(anchor);

    return () => {
      observer.disconnect();
    };
  }, [navigate]);
}

export default useBlogsInfiniteScroll;
