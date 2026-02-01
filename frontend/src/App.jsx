import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashbord from './components/Dashbord'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
