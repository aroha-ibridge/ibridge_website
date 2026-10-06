import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductMegaById, PRODUCTS_MEGA } from '../../constants/productsMegaMenu';
import ProductsMegaPanel from './ProductsMegaPanel';

const PRODUCT_ICONS = {
  assessment: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'code-arena': (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.2 6.5l-2.4 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  training: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M12 14l9-5-9-5-9 5 9 5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lms: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M4 6a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM8 20h8M12 16v4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/**
 * Products mega-menu: identical sidebar + main panel layout as ProgramsMegaMenu.
 */
function ProductsMegaMenu({ onNavigate }) {
  const [activeId, setActiveId] = useState(PRODUCTS_MEGA.products[0]?.id);
  const activeProduct = getProductMegaById(activeId);

  return (
    <div className="programs-megamenu programs-megamenu--grid">
      <aside className="programs-megamenu__sidebar" aria-label="Products">
        <ul className="programs-megamenu__cats">
          {PRODUCTS_MEGA.products.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`programs-megamenu__cat${activeId === item.id ? ' is-active' : ''}`}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
              >
                <span className="programs-megamenu__cat-icon">
                  {PRODUCT_ICONS[item.id] || (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  )}
                </span>
                <span className="programs-megamenu__cat-label">{item.title}</span>
                <span className="programs-megamenu__cat-chevron" aria-hidden="true">
                  ›
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="programs-megamenu__main">
        <div className="programs-megamenu__main-head">
          <p className="programs-megamenu__main-title">{activeProduct?.title}</p>
          <Link to={activeProduct?.to || '/products'} className="programs-megamenu__view-all" onClick={onNavigate}>
            Explore product →
          </Link>
        </div>

        <ProductsMegaPanel product={activeProduct} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default ProductsMegaMenu;
