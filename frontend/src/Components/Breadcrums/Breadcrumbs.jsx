import React from 'react'
import './Breadcrumbs.css'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ product }) => {
  return (
    <div className='breadcrumbs'>
      <Link to='/'>HOME</Link>
      <span> / </span>
      <Link to={`/${product.category}s`}>{product.category}</Link>
      <span> / </span>
      <span>{product.name}</span>
    </div>
  )
}

export default Breadcrumbs