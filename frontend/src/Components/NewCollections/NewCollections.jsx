import React, { useState, useEffect } from 'react'
import './NewCollections.css'
import all_product from '../../Context/data'
import { Link } from 'react-router-dom'

const NewCollections = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + itemsPerPage;
        return next >= all_product.length ? 0 : next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleProducts = all_product.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {visibleProducts.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}
            className="collection-item"
            onClick={() => window.scrollTo(0, 0)}>
            <div className="collection-img-wrapper">
              <img src={item.image} alt={item.name} />
              <div className="collection-overlay">
                <span>View Product</span>
              </div>
            </div>
            <p className="collection-name">{item.name}</p>
            <div className="collection-prices">
              <span className="collection-new">₦{item.new_price}</span>
              <span className="collection-old">₦{item.old_price}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="collection-dots">
        {Array.from({ length: Math.ceil(all_product.length / itemsPerPage) }).map((_, i) => (
          <span key={i}
            className={`dot ${startIndex / itemsPerPage === i ? "active-dot" : ""}`}
            onClick={() => setStartIndex(i * itemsPerPage)}
          />
        ))}
      </div>
    </div>
  )
}

export default NewCollections