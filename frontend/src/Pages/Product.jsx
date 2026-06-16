import React from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrumbs'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import all_product from '../Context/data'

const Product = () => {
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', fontSize: '18px', color: '#888' }}>
        Product not found.
      </div>
    )
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts category={product.category} />
    </div>
  )
}
export default Product