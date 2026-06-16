import React from 'react'
import './Offers.css'
import pji from '../Assets/pji.jpeg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offer'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <Link to='/designs'>
          <button>Check Now</button>
        </Link>
      </div>
      <div className='offers-right'>
        <img src={pji} alt="Offers" />
      </div>
    </div>
  )
}

export default Offers