import React, { useContext } from 'react'
import './CSS/Cart.css'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { getCartItemDetails, removeFromCart, addToCart, getTotalCartAmount } = useContext(ShopContext)
  const cartItems = getCartItemDetails()

  return (
    <div className='cart-page'>
      <div className='cart-container'>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className='cart-empty'>
            <div className='empty-icon'>🛒</div>
            <p>Your cart is empty</p>
            <Link to='/' className='continue-shopping'>Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className='cart-content'>
              {/* CART ITEMS LIST */}
              <div className='cart-items-section'>
                <div className='cart-header'>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span>Remove</span>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className='cart-item'>
                    <div className='item-details'>
                      <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://via.placeholder.com/60'} />
                      <div className='item-info'>
                        <h3>{item.name}</h3>
                        <p className='category'>{item.category}</p>
                      </div>
                    </div>
                    <span className='price'>₦{item.new_price.toLocaleString()}</span>
                    <div className='quantity-control'>
                      <button onClick={() => removeFromCart(item.id)}>−</button>
                      <input type='text' value={item.quantity} readOnly />
                      <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                    <span className='item-total'>₦{(item.new_price * item.quantity).toLocaleString()}</span>
                    <button className='remove-btn' onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                ))}
              </div>

              {/* CART SUMMARY */}
              <div className='cart-summary'>
                <h2>Order Summary</h2>
                <div className='summary-row'>
                  <span>Subtotal</span>
                  <span>₦{getTotalCartAmount().toLocaleString()}</span>
                </div>
                <div className='summary-row'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='summary-row'>
                  <span>Tax</span>
                  <span>₦0</span>
                </div>
                <div className='summary-divider'></div>
                <div className='summary-total'>
                  <span>Total</span>
                  <span>₦{getTotalCartAmount().toLocaleString()}</span>
                </div>
                <button className='checkout-btn'>Proceed to Checkout</button>
                <Link to='/' className='continue-link'>Continue Shopping</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart