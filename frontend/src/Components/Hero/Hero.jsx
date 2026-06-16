import React from 'react'
import './Hero.css'
import hero_image from '../Assets/p18.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        <p>Affordable cakes</p>
        <p>For everyone</p>
        <Link to='/cakes' className='hero-latest-btn'>
          Latest Collection →
        </Link>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='Hero Cake' />
      </div>
    </div>
  )
}

export default Hero