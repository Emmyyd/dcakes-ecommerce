import React, { useState } from 'react'
import './CSS/Shop.css'
import ProductItem from '../Components/ProductItem/ProductItem'
import all_product from '../Context/data'

const ShopCategory = (props) => {
  const { category } = props
  const [showAll, setShowAll] = useState(false)

  const filteredProducts = all_product.filter((item) => item.category === category)
  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8)

  const heroContent = {
    cake: {
      tag: 'NEW ARRIVALS ONLY',
      title: 'Delicious Cakes',
      sub: 'Fresh & Beautiful Creations',
      btn: 'Explore Now',
      img: filteredProducts[0]?.image
    },
    design: {
      tag: 'EXCLUSIVE DESIGNS',
      title: 'Beautiful Designs',
      sub: 'Elegant & Unique Creations',
      btn: 'Explore Now',
      img: filteredProducts[0]?.image
    }
  }

  const hero = heroContent[category]

  return (
    <div>
      {/* HERO BANNER */}
      <div className='category-hero'>
        <div className='category-hero-left'>
          <p className='category-tag'>🍰 {hero.tag}</p>
          <h1>{hero.title}</h1>
          <p className='category-sub'>{hero.sub}</p>
          <button className='category-btn'>{hero.btn}</button>
        </div>
        <div className='category-hero-right'>
          {hero.img && <img src={hero.img} alt={category} />}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className='shop'>
        <div className='shop-container'>
          <div className='products-grid'>
            {visibleProducts.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>

          {/* SHOW MORE / LESS BUTTON */}
          {filteredProducts.length > 8 && (
            <div className='show-more-container'>
              <button
                className='show-more-btn'
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less ▲' : 'Show More ▼'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default ShopCategory