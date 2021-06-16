import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload, isAuthenticated, removeToken } from '../../lib/auth'

export default function Nav() {

  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated())
  const location = useLocation()
  const { sub } = getPayload()

  console.log('get pay', sub)
  

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  React.useEffect(() => {
    setIsLoggedIn(isAuthenticated())
  }, [location.pathname])

  return (
    <nav className="navbar">
      <div className="containerNav">
        <div className="navbarBrand">
          <Link to="" className="navbarItem">
        Home
          </Link>
          <Link to="/stores" className="navbarItem">
        Stores
          </Link>
          <Link to="/about" className="navbarItem">
        About Us
          </Link>
          {isLoggedIn && 
          <>
            <Link to={`/profile/${sub}`} className="navbarItem">
              Profile
            </Link>
            <Link to="/stores/new" className="navbarItem">
              New Store
            </Link>
          </>
          }
          {isLoggedIn ? 
            <>
              <Link to="/login" onClick={handleLogout} className="button">
              Log Out
              </Link>
            </>
            :
            <>
              <Link to="/login" className="button">
                Login
              </Link>
              <Link to="/register" className="button">
                Register
              </Link>
            </>}
        </div>
      </div>
      
    </nav>
  )
}