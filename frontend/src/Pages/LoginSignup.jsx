import React, { useState, useContext } from 'react'
import './CSS/LoginSignUp.css'
import { ShopContext } from '../Context/ShopContext'

const LoginSignUp = () => {
  const { login } = useContext(ShopContext)
  const [state, setState] = useState('Sign Up')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setError('')

    if (state === 'Sign Up' && !agreed) {
      setError('Please agree to the terms to continue')
      return
    }

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    if (state === 'Sign Up' && !formData.username) {
      setError('Please enter your name')
      return
    }

    setLoading(true)

    const url = state === 'Sign Up'
      ? 'http://localhost:4000/signup'
      : 'http://localhost:4000/login'

    const body = state === 'Sign Up'
      ? {
          username: formData.username,
          email: formData.email,
          password: formData.password
        }
      : {
          email: formData.email,
          password: formData.password
        }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()

      if (data.success) {
        login(data.token)
      } else {
        setError(data.errors || 'Something went wrong')
      }
    } catch (err) {
      setError('Cannot connect to server. Make sure backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>

        <div className='loginsignup-fields'>
          {state === 'Sign Up' && (
            <input
              type='text'
              name='username'
              placeholder='Your Name'
              value={formData.username}
              onChange={handleChange}
            />
          )}
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && (
          <p style={{
            color: 'red',
            fontSize: '13px',
            marginTop: '10px',
            background: '#fff0f0',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #ffd5d5'
          }}>
            ⚠️ {error}
          </p>
        )}

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Please wait...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {state === 'Sign Up' ? (
          <p className='loginsignup-login'>
            Already have an account?{' '}
            <span onClick={() => { setState('Login'); setError('') }}>
              Login here
            </span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Don't have an account?{' '}
            <span onClick={() => { setState('Sign Up'); setError('') }}>
              Sign up here
            </span>
          </p>
        )}

        {state === 'Sign Up' && (
          <div className='loginsignup-agree'>
            <input
              type='checkbox'
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default LoginSignUp