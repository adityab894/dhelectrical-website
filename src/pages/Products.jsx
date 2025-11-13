import React from 'react';
import { Link } from 'react-router-dom';
import { productCatalog } from '../data/products';

export default function Products() {
  const [openProductIdx, setOpenProductIdx] = React.useState(null);

  const toggleDropdown = (idx) => {
    setOpenProductIdx((current) => (current === idx ? null : idx));
  };

  const closeDropdown = () => setOpenProductIdx(null);

  React.useEffect(() => {
    const onDocClick = (e) => {
      if (!e.target.closest('.product-actions')) {
        closeDropdown();
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <main className="page">
      <section id="products" className="products">
        <div className="container">
          <div className="section-header text-center">
            <h1 className="section-title">Our Product Categories</h1>
            <p className="section-subtitle">
              Explore our comprehensive portfolio of industrial heaters, sensors, and control solutions.
            </p>
          </div>

          <div className="products-grid">
            {productCatalog.map((category, idx) => {
              const hasItems = category.products.length > 0;
              const highlightProducts = category.products.slice(0, 6);
              return (
                <article
                  key={category.slug}
                  className={`product-card ${openProductIdx === idx ? 'is-open' : ''}`}
                >
                  <div className="product-image">
                    <img src={category.heroImage} alt={category.name} loading="lazy" />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{category.name}</h3>
                    <p className="product-description">{category.description}</p>
                    <div className="product-actions">
                      {hasItems ? (
                        <div className="product-select">
                          <button
                            type="button"
                            className="product-link product-link--select"
                            onClick={() => toggleDropdown(idx)}
                            aria-expanded={openProductIdx === idx}
                            aria-haspopup="menu"
                          >
                            Explore Products
                          </button>
                          {openProductIdx === idx && (
                            <ul className="product-dropdown" role="menu">
                              {highlightProducts.map((product) => (
                                <li key={product.slug} role="menuitem">
                                  <Link
                                    to={`/${category.slug}/${product.slug}`}
                                    onClick={closeDropdown}
                                  >
                                    {product.name}
                                  </Link>
                                </li>
                              ))}
                              {category.products.length > highlightProducts.length && (
                                <li role="menuitem">
                                  <Link to={`/products#${category.slug}`} onClick={closeDropdown}>
                                    View all {category.products.length} products
                                  </Link>
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <button type="button" className="product-link product-link--solid">
                          Read More
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}