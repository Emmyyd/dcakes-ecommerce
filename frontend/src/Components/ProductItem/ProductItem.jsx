import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import './ProductItem.css'

const ProductItem = ({ item }) => {
  const { addToCart } = useContext(ShopContext)
  return (
    <div className='product-item'>
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <div className='product-info'>
        <p className='product-name'>{item.name}</p>
        <p className='product-price'>₦{item.new_price?.toLocaleString()}</p>
        <button onClick={() => addToCart(item.id)}>Add to Cart</button>
      </div>
    </div>
  )
}
export default ProductItem