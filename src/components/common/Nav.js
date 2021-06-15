import { Link } from 'react-router-dom'
import { getPayload } from '../../lib/auth'

export default function Nav() {

  const { profileId } = getPayload()

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
      <Link to={`/profile/${profileId}`}>
        Profile
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