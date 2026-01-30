import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <nav className="home-nav">
        <div className="brand">Agro Connect</div>
        <div className="nav-actions">
          <Link to="/login" className="btn ghost">Sign In</Link>
          <Link to="/signup" className="btn primary">Get Started</Link>
        </div>
      </nav>

      <header className="home-hero">
        <div className="hero-content">
          <span className="pill">Green & Yellow | Fresh Marketplace</span>
          <h1>Welcome to Agro Connect</h1>
          <p>
            A smart hub for farmers and buyers to discover pricing, connect directly, and trade with
            trust.
          </p>
          <div className="hero-cta">
            <Link to="/login" className="btn primary">Explore Market</Link>
            <Link to="/signup" className="btn ghost">Post Produce</Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>2.6K+</strong>
              <span>Farmers</span>
            </div>
            <div>
              <strong>1.1K+</strong>
              <span>Buyers</span>
            </div>
            <div>
              <strong>₹48M</strong>
              <span>Trade Volume</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="media-card">
            <img
              className="hero-gif"
              src="https://media.giphy.com/media/3o7aD4Mt7uJ2kGf3vG/giphy.gif"
              alt="Animated growing plant"
            />
            <div className="media-caption">
              Live harvest insights • Smart logistics • Secure payments
            </div>
          </div>
          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
            alt="Farmer in a green field"
          />
        </div>
      </header>

      <section className="home-features">
        <div className="feature">
          <h3>Fair Pricing</h3>
          <p>Real-time price intelligence for better deals.</p>
        </div>
        <div className="feature">
          <h3>Trusted Network</h3>
          <p>Verified buyers and secure contracts.</p>
        </div>
        <div className="feature">
          <h3>Fast Logistics</h3>
          <p>Cold-chain shipping and delivery tracking.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
