import React, { useState, useEffect } from 'react'
import '../Admin.css'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('addproduct')
  const [products, setProducts] = useState([])
  const [image, setImage] = useState(null)
  const [productDetails, setProductDetails] = useState({
    name: '',
    category: 'cake',
    new_price: '',
    old_price: ''
  })

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/allproducts')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => { fetchProducts() }, [])

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const handleAdd = async () => {
    if (!image) { alert('Please select an image'); return; }
    const formData = new FormData()
    formData.append('product', image)
    const uploadRes = await fetch('http://localhost:4000/upload', { method: 'POST', body: formData })
    const uploadData = await uploadRes.json()
    if (uploadData.success) {
      const product = { ...productDetails, image: uploadData.image_url }
      const res = await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
      const data = await res.json()
      if (data.success) {
        alert('Product added successfully!')
        setProductDetails({ name: '', category: 'cake', new_price: '', old_price: '' })
        setImage(null)
        fetchProducts()
      }
    }
  }

  const handleRemove = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    fetchProducts()
  }

  return (
    <div className='admin'>

      {/* SIDEBAR */}
      <div className='sidebar'>
        <div className='sidebar-logo'>
          <div className='sidebar-logo-icon'>🎂</div>
          <span className='sidebar-logo-text'>DCakes</span>
        </div>

        <span className='sidebar-label'>Menu</span>

        <div
          className={`sidebar-item ${activeTab === 'addproduct' ? 'active' : ''}`}
          onClick={() => setActiveTab('addproduct')}
        >
          <span className='sidebar-icon'>＋</span>
          <span className='sidebar-item-text'>Add Product</span>
        </div>

        <div
          className={`sidebar-item ${activeTab === 'listproduct' ? 'active' : ''}`}
          onClick={() => setActiveTab('listproduct')}
        >
          <span className='sidebar-icon'>☰</span>
          <span className='sidebar-item-text'>Product List</span>
        </div>

        <div className='sidebar-footer'>
          <p>DCakes Admin v1.0</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className='admin-content'>

        {/* ADD PRODUCT */}
        {activeTab === 'addproduct' && (
          <>
            <div className='page-header'>
              <h2>Add New Product</h2>
              <p>Fill in the details to list a new item</p>
            </div>

            <div className='card'>
              <div className='form-group'>
                <label>Product Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='e.g. Chocolate Velvet Cake'
                  value={productDetails.name}
                  onChange={handleChange}
                />
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label>New Price (₦)</label>
                  <input
                    type='number'
                    name='new_price'
                    placeholder='15000'
                    value={productDetails.new_price}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label>Old Price (₦)</label>
                  <input
                    type='number'
                    name='old_price'
                    placeholder='20000'
                    value={productDetails.old_price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='form-group'>
                <label>Category</label>
                <select name='category' value={productDetails.category} onChange={handleChange}>
                  <option value='cake'>Cake</option>
                  <option value='design'>Design</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Product Image</label>
                <div className={`upload-area ${image ? 'has-image' : ''}`}>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  {!image ? (
                    <>
                      <span className='upload-icon'>☁️</span>
                      <p><span>Click to upload</span> or drag & drop</p>
                      <p style={{fontSize:'12px', marginTop:'4px'}}>PNG, JPG, WEBP up to 10MB</p>
                    </>
                  ) : (
                    <>
                      <img
                        src={URL.createObjectURL(image)}
                        alt='preview'
                        className='image-preview'
                      />
                      <p style={{fontSize:'12px', marginTop:'8px'}}>{image.name}</p>
                    </>
                  )}
                </div>
              </div>

              <button className='add-btn' onClick={handleAdd}>
                ADD PRODUCT
              </button>
            </div>
          </>
        )}

        {/* PRODUCT LIST */}
        {activeTab === 'listproduct' && (
          <>
            <div className='page-header'>
              <h2>Product List</h2>
              <p>Manage your store inventory</p>
            </div>

            <div className='product-list-card'>
              <div className='list-top'>
                <h2>All Products</h2>
                <span className='product-count'>{products.length} items</span>
              </div>

              <div className='list-table'>
                <div className='list-header'>
                  <p>Image</p>
                  <p>Name</p>
                  <p>Category</p>
                  <p>New Price</p>
                  <p>Old Price</p>
                  <p>Remove</p>
                </div>

                {products.length === 0 ? (
                  <div className='empty-state'>
                    <div className='empty-icon'>🎂</div>
                    <p>No products yet. Add your first one!</p>
                  </div>
                ) : (
                  products.map((product) => (
                    <div key={product.id} className='list-item'>
                      <img src={product.image} alt={product.name} />
                      <p>{product.name}</p>
                      <span className='category-tag'>{product.category}</span>
                      <p className='price-new'>₦{product.new_price}</p>
                      <p className='price-old'>₦{product.old_price}</p>
                      <button className='remove-btn' onClick={() => handleRemove(product.id)}>✕</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Admin