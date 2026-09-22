import { Link } from 'react-router-dom';

/**
 * Right-side panel for Products mega-menu.
 * Supports standard feature columns OR Training & Upskilling audience taxonomy.
 */
function ProductsMegaPanel({ product, onNavigate }) {
  if (!product) return null;

  if (product.panelLayout === 'training-taxonomy' && product.taxonomy?.length) {
    return (
      <div className="products-megamenu__col products-megamenu__col--solutions products-megamenu__col--taxonomy">
        <span className="products-megamenu__heading">
          {product.featuresHeading || 'Training programs'}
        </span>
        <div className="products-megamenu__taxonomy">
          {product.taxonomy.map((audience) => (
            <div key={audience.id} className="products-megamenu__audience">
              <p className="products-megamenu__audience-title">{audience.title}</p>

              {audience.items?.length > 0 && (
                <ul className="products-megamenu__audience-list">
                  {audience.items.map((item) => (
                    <li key={item.title}>
                      <Link to={item.to} onClick={onNavigate}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {audience.groups?.map((group) => (
                <div key={group.title} className="products-megamenu__subgroup">
                  <p className="products-megamenu__subgroup-title">{group.title}</p>
                  <ul className="products-megamenu__audience-list">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <Link to={item.to} onClick={onNavigate}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="products-megamenu__col products-megamenu__col--solutions">
      <span className="products-megamenu__heading">
        {product.featuresHeading || 'Platform features'}
      </span>
      <div className="products-megamenu__solutions">
        {(product.solutionColumns || []).map((column, colIndex) => (
          <div key={colIndex} className="products-megamenu__solution-col">
            {column.map((group) => (
              <div key={group.category} className="products-megamenu__group">
                <p className="products-megamenu__group-title">{group.category}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <Link to={item.to} onClick={onNavigate}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsMegaPanel;
