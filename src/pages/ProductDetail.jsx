import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { productMap } from '../data/products';

const TABS = [
  { id: 'specs', label: 'Technical Specifications', key: 'specs' },
  { id: 'features', label: 'Features', key: 'features' },
  { id: 'applications', label: 'Applications', key: 'applications' },
];

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams();
  const catalogEntry = productMap[`${categorySlug}/${productSlug}`];

  if (!catalogEntry) {
    return (
      <main className="page">
        <section className="product-detail-hero">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link to="/products">Products</Link>
              <span className="breadcrumb-separator">/</span>
              <span>Not Found</span>
            </div>
            <h1 className="hero-title-product">Product not found</h1>
            <p className="hero-description-product">
              We could not locate the product you are looking for. It may have been moved or renamed.
            </p>
          </div>
        </section>

        <section className="product-detail-footer">
          <div className="container">
            <div className="cta-card">
              <h3>Continue exploring</h3>
              <p>Browse our full catalogue to discover heaters, sensors, and control solutions.</p>
              <Link className="btn btn-primary btn-lg" to="/products">
                Back to Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const { category, product } = catalogEntry;
  const detail = product.detail || {};

  const heroImage = detail.heroImage || product.image || category.heroImage;
  const heroDescription =
    detail.heroSummary || product.cardDescription || category.description || '';

  const gallery = detail.gallery && detail.gallery.length > 0 ? detail.gallery : [heroImage];
  const [activeImage, setActiveImage] = React.useState(gallery[0]);

  React.useEffect(() => {
    setActiveImage(gallery[0]);
  }, [gallery]);

  const availableTabs = TABS.filter((tab) => {
    const content = detail[tab.key];
    return Array.isArray(content) && content.length > 0;
  });
  const defaultTab = availableTabs[0]?.id || null;
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const downloadHref = detail.downloadUrl || '#contact';

  return (
    <main className="page">
      <section className="product-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={`/products#${category.slug}`}>{category.name}</Link>
            <span className="breadcrumb-separator">/</span>
            <span>{product.name}</span>
          </div>
          <h1 className="hero-title-product">{product.name}</h1>
          <p className="hero-description-product">{heroDescription}</p>
        </div>
      </section>

      <section className="product-detail">
        <div className="container">
          <div className="product-detail-layout">
            <div className="product-detail-media">
              <div className="product-detail-gallery">
                <figure className="product-detail-gallery-main">
                  <img src={activeImage} alt={product.name} loading="lazy" />
                </figure>
                {gallery.length > 1 && (
                  <div className="product-detail-thumbs">
                    {gallery.map((imageSrc) => (
                      <button
                        key={imageSrc}
                        type="button"
                        className={`product-detail-thumb ${
                          imageSrc === activeImage ? 'is-active' : ''
                        }`}
                        onClick={() => setActiveImage(imageSrc)}
                        aria-label="Preview product image"
                      >
                        <img src={imageSrc} alt={`${product.name} preview`} loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="product-detail-body">
              {detail.description && (
                <p className="product-detail-overview">{detail.description}</p>
              )}

              <div className="product-detail-actions">
                <a className="btn btn-primary btn-lg" href="#contact">
                  Enquiry
                </a>
                <a className="btn btn-outline btn-lg" href={downloadHref} target="_blank" rel="noopener noreferrer">
                  Download Catalogue
                </a>
              </div>

              {availableTabs.length > 0 && (
                <div className="product-detail-tabs">
                  <div className="product-detail-tablist" role="tablist" aria-label="Product details">
                    {availableTabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        className={`product-detail-tab ${activeTab === tab.id ? 'is-active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {activeTab && (
                    <div className="product-detail-tabpanel" role="tabpanel">
                      {activeTab === 'specs' && detail.specs && (
                        <table className="product-detail-table">
                          <tbody>
                            {detail.specs.map((spec) => (
                              <tr key={spec.label}>
                                <th>{spec.label}</th>
                                <td>{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}

                      {activeTab === 'features' && detail.features && (
                        <ul className="product-detail-list">
                          {detail.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      )}

                      {activeTab === 'applications' && detail.applications && (
                        <ul className="product-detail-list">
                          {detail.applications.map((application) => (
                            <li key={application}>{application}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-footer">
        <div className="container">
          <div className="cta-card">
            <h3>Need assistance selecting a heater?</h3>
            <p>
              Our application engineers can help you tailor the right heating solution and control
              strategy for your production line.
            </p>
            <div className="product-detail-actions" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary btn-lg" href="#contact">
                Request a Quote
              </a>
              <Link className="btn btn-outline btn-lg" to="/products">
                Back to Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

