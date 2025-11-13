import React from 'react';
import { Link } from 'react-router-dom';
import { productCatalog } from '../data/products';

export default function Home() {
  const [openProductIdx, setOpenProductIdx] = React.useState(null);

  const toggleDropdown = (idx) => {
    setOpenProductIdx((current) => (current === idx ? null : idx));
  };

  const closeDropdown = () => setOpenProductIdx(null);
  React.useEffect(() => {
    const onDocClick = (e) => {
      // Close if clicked outside any product dropdown
      if (!e.target.closest('.product-actions')) {
        closeDropdown();
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);
  const handleOpenQuote = () => {
    if (typeof window.openQuoteModal === 'function') {
      window.openQuoteModal();
    }
  };
  const handleDownloadCatalog = () => {
    if (typeof window.downloadCatalog === 'function') {
      window.downloadCatalog();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Darshil Heat Electrical: <span className="text-primary">Precision &amp; Reliability</span>
              </h1>
              <p className="hero-description">
                Empowering industries with cutting-edge heating elements and custom solutions for optimal
                performance and efficiency.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-secondary btn-lg" onClick={handleOpenQuote}>
                  Request a Quote
                </button>
                <button className="btn btn-primary btn-lg" onClick={handleDownloadCatalog}>
                  Download Catalog
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Industrial heating equipment"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="section-content text-center">
            <h2 className="section-title">About Darshil Heat Electrical Co.</h2>
            <p className="section-subtitle">
              Leading the industry with innovative and reliable heating technologies for over two decades.
            </p>
            <p className="about-text">
              At Darshil Heat Electrical Co., we specialize in designing, manufacturing, and distributing
              high-quality industrial heating elements and comprehensive thermal solutions. Our commitment to
              precision engineering, robust materials, and rigorous testing ensures that every product delivers
              unparalleled performance and longevity. We pride ourselves on our ability to provide standard
              products as well as highly customized heating systems that integrate seamlessly into diverse
              industrial applications. Partner with us for a future where efficiency, durability, and innovation
              drive your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Darshil Heat Electrical Co.?</h2>
            <p className="section-subtitle">
              Our commitment to excellence sets us apart in the demanding world of industrial heating.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Uncompromising Quality</h3>
              <p className="feature-description">
                We adhere to the highest industry standards, ensuring every product delivers exceptional
                performance and reliability.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Customized Solutions</h3>
              <p className="feature-description">
                Tailored heating elements designed to meet your precise specifications.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M8 16.5L6 18.5M16 16.5l2 2" />
                </svg>
              </div>
              <h3 className="feature-title">Expedited Delivery</h3>
              <p className="feature-description">
                Streamlined logistics and efficient production ensure on-time delivery.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="feature-title">Dedicated Support</h3>
              <p className="feature-description">
                Comprehensive pre-sales consultation and responsive after-sales assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section (teaser) */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Product Categories</h2>
            <p className="section-subtitle">
              Explore our comprehensive portfolio of industrial heaters, sensors, and control solutions.
            </p>
          </div>

          <div className="products-grid">
            {productCatalog.map((category, idx) => {
              const items = category.products.map((product) => product.name);
              const hasItems = items.length > 0;
              const highlightItems = items.slice(0, 6);
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
                              {highlightItems.map((itemName) => (
                                <li key={itemName} role="menuitem">
                                  <Link to={`/products#${category.slug}`} onClick={closeDropdown}>
                                    {itemName}
                                  </Link>
                                </li>
                              ))}
                              {items.length > highlightItems.length && (
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

      {/* About link is available in navbar; industries teaser removed as requested */}

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Transform Your Operations?</h2>
            <p className="cta-description">
              Contact our experts today to discuss your specific heating requirements and discover the perfect solution.
            </p>
            <button className="btn btn-primary btn-lg" onClick={handleOpenQuote}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


