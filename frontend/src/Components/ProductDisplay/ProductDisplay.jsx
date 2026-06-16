import React, { useState, useEffect, useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
 const { addToCart } = useContext(ShopContext);
 const images = product.images && product.images.length > 0
   ? product.images : [product.image];
 const [mainImage, setMainImage] = useState(images[0]);
 const [selectedSize, setSelectedSize] = useState(null);

 useEffect(() => {
   setMainImage(images[0]);
   setSelectedSize(null);
 }, [product.id, images]);

 return (
   <div className="productdisplay">
     <div className="productdisplay-left">
       <div className="productdisplay-img-list">
         {images.map((img, index) => (
           <img key={index} src={img} alt=""
             className={mainImage === img ? "active-thumb" : ""}
             onClick={() => setMainImage(img)} />
         ))}
       </div>
       <div className="productdisplay-main-img">
         <img src={mainImage} alt={product.name} />
       </div>
     </div>
     <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="stars">{"⭐".repeat(product.rating || 5)}</div>
       <div className="prices">
         <span className="old">₦{product.old_price}</span>
         <span className="new">₦{product.new_price}</span>
       </div>
       <p className="desc">{product.description}</p>
       {product.sizes && (
         <>
           <h4>Select Size</h4>
           <div className="sizes">
             {product.sizes.map((size, index) => (
               <div key={index}
                 className={`size ${selectedSize === size ? "active" : ""}`}
                 onClick={() => setSelectedSize(size)}>
                 {size}
               </div>
             ))}
           </div>
         </>
       )}
       <button className="btn" onClick={() => addToCart(product.id)}>
         ADD TO CART
       </button>
     </div>
   </div>
 );
};

export default ProductDisplay;