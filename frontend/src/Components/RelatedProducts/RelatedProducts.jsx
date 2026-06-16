import React from "react";
import "./RelatedProducts.css";
import all_product from "../../Context/data";
import Item from "../Item/Item";

const RelatedProducts = ({ category }) => {
  const related = all_product
    .filter((item) => item.category === category)
    .slice(0, 8);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;