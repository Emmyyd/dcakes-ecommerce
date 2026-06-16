import React, { createContext, useState, useEffect } from 'react'
import all_product from './data'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  // Initialize cart for products
  for (let i = 0; i < 300; i++) {
    cart[i] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [allProducts, setAllProducts] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // ✅ Fetch all products from backend on app start
  useEffect(() => {
    fetch('https://dcakes-ecommerce.onrender.com/allproducts')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.log('Error fetching products:', err)
        setLoading(false)
      })
  }, [])

  // ✅ Load user from token on app start
  useEffect(() => {
    const token = localStorage.getItem('auth-token')
    if (token) {
      fetch('https://dcakes-ecommerce.onrender.com/getuser', {
        method: 'GET',
        headers: {
          'auth-token': token
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) setUser(data.user)
        })
        .catch(err => console.log(err))
    }
  }, [])

  const login = (token) => {
    localStorage.setItem('auth-token', token)
    window.location.replace('/')
  }

  const logout = () => {
    localStorage.removeItem('auth-token')
    setUser(null)
    window.location.replace('/')
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
  let totalAmount = 0
  const productList = allProducts.length > 0 ? allProducts : all_product
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = productList.find((product) => product.id === Number(item))
      if (itemInfo) {
        totalAmount += cartItems[item] * itemInfo.new_price
      }
    }
  }
  return totalAmount
}

  const getTotalCartItems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }

  const getCartItemDetails = () => {
  let items = []
  const productList = allProducts.length > 0 ? allProducts : all_product
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = productList.find((product) => product.id === Number(item))
      if (itemInfo) {
        items.push({
          ...itemInfo,
          quantity: cartItems[item]
        })
      }
    }
  }
  return items
}

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    getCartItemDetails,
    user,
    login,
    logout,
    loading
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider