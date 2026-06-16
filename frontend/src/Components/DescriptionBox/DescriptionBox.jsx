import React, { useState } from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </div>
      </div>

      <div className='descriptionbox-description'>
        {activeTab === 'description' && (
          <p>
            Our cakes are freshly baked with the finest ingredients.
            Each cake is crafted with love and care, ensuring every bite
            is a delightful experience. We offer custom sizes and flavors
            to suit every occasion — birthdays, weddings, anniversaries and more.
            Order yours today and let us make your celebration sweeter!
          </p>
        )}
        {activeTab === 'reviews' && (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>
    </div>
  )
}

export default DescriptionBox