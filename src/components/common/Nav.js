import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <Link to="">
        Home
      </Link>
      <Link to="/stores">
        Stores
      </Link>
      <Link to="/about">
        About Us
      </Link>
      <Link to="/login">
        Login
      </Link>
      <Link to="/register">
        Register
      </Link>
    </nav>
  )
}