import React from 'react';
import { NavLink } from 'react-router-dom';
import { productCatalog } from '../data/products';

const toColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
};

export default function ProductMegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const columns = toColumns(productCatalog, 4);

  const handleNavigate = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div className="mega-backdrop" onClick={onClose}>
      <div className="mega-menu" onMouseLeave={onClose} onClick={(e) => e.stopPropagation()}>
        {columns.map((column, idx) => (
          <div className="mega-col" key={`column-${idx}`}>
            {column.map((category) => (
              <React.Fragment key={category.slug}>
                <NavLink
                  to={`/products#${category.slug}`}
                  className="mega-head"
                  onClick={handleNavigate}
                >
                  {category.name}
                </NavLink>
                <ul>
                  {category.products.slice(0, 6).map((product) => (
                    <li key={product.slug}>
                      <NavLink
                        to={`/${category.slug}/${product.slug}`}
                        onClick={handleNavigate}
                      >
                        {product.name}
                      </NavLink>
                    </li>
                  ))}
                  {category.products.length > 6 && (
                    <li>
                      <NavLink to={`/products#${category.slug}`} onClick={handleNavigate}>
                        View all
                      </NavLink>
                    </li>
                  )}
                </ul>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


