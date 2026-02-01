import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
    try{
      const res = await axios.post('http://localhost:3000/api/auth/login',{ email, password });
      res.data && alert(res.data.message);
      navigate('/dashboard');
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="login-icon">🌾</div>
            <h1>Welcome Back</h1>
            <p>Sign in to your Agro Connect account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                type="email"
                placeholder="farmer@agroconnect.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember & Forgot */}
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="forgot-link">Forgot password?</Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Social Login */}
          <button className="btn-google">
            <span>🔐</span> Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
