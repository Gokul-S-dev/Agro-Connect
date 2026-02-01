import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashbord = () => {
  const navigate = useNavigate()

  return (
    <div className="simple-dashboard">
      {/* Header */}
      <header className="simple-header">
        <h1>🌾 Agro Connect</h1>
        <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
      </header>

      {/* Main Content */}
      <div className="simple-content">
        <h2>Welcome to Dashboard</h2>
        <p>Hello, User! 👋</p>

        <div className="simple-menu">
          <button className="menu-btn">View Products</button>
          <button className="menu-btn">List Product</button>
          <button className="menu-btn">My Orders</button>
          <button className="menu-btn">Profile</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="simple-footer">
        <p>&copy; 2026 Agro Connect</p>
      </footer>
    </div>
  )
}

export default Dashbord