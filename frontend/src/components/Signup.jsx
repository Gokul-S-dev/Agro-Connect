import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer',
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup:', formData)
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          {/* Header */}
          <div className="signup-header">
            <div className="signup-icon">🚀</div>
            <h1>Join Agro Connect</h1>
            <p>Create your account and start trading today</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            {/* User Type Selector */}
            <div className="user-type-selector">
              <label className={`type-option ${formData.userType === 'farmer' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="farmer"
                  checked={formData.userType === 'farmer'}
                  onChange={handleChange}
                />
                <span className="type-icon">🌾</span>
                <span className="type-label">Farmer</span>
              </label>

              <label className={`type-option ${formData.userType === 'buyer' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  checked={formData.userType === 'buyer'}
                  onChange={handleChange}
                />
                <span className="type-icon">🏪</span>
                <span className="type-label">Buyer</span>
              </label>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name">FULL NAME</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <div className="password-input">
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <label className="terms-checkbox">
              <input type="checkbox" required />
              <span>
                I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit Button */}
            <button type="submit" className="btn-submit">
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="signin-link">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
