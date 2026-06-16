import React from "react";
import "./Popular.css";
import all_product, { data_product } from "../../Context/data";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="popular">
      <h1>BEAUTIFUL DESIGNS</h1>
      <hr />
      <div className="popular-items">
        {data_product.slice(0, 4).map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}
            className="popular-item"
            onClick={() => window.scrollTo(0, 0)}>
            <div className="popular-img-wrapper">
              <img src={item.image} alt={item.name} />
              <div className="popular-overlay">
                <span>View Product</span>
              </div>
            </div>
            <p className="popular-name">{item.name}</p>
            <div className="popular-prices">
              <span className="popular-new">₦{item.new_price}</span>
              <span className="popular-old">₦{item.old_price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;