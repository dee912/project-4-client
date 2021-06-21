import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getPayload, isAuthenticated, removeToken } from '../../lib/auth'

export default function Nav() {

  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated())
  const location = useLocation()
  const { sub } = getPayload()

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
            <img className="navHome" src="https://image.flaticon.com/icons/png/512/2/2144.png" />
          </Link>
          <Link to="/stores" className="navbarItem">
            <p>Independents</p>
          </Link>
          <Link to="/about" className="navbarItem">
            <p>About Us</p>
          </Link>
          {isLoggedIn && 
          <>
            <Link to={`/profile/${sub}`} className="navbarItem">
              <p>Profile</p>
            </Link>
            <Link to="/stores/new" className="navbarItem">
              <p>New Store</p>
            </Link>
          </>
          }
          {isLoggedIn ? 
            <>
              <Link to="/login" onClick={handleLogout} className="button">
                <p>Log Out</p>
              </Link>
            </>
            :
            <>
              <Link to="/login" className="button">
                <p>Login</p>
              </Link>
              <Link to="/register" className="button">
                <p>Register</p>
              </Link>
            </>}
        </div>
      </div>
    </nav>
  )
}