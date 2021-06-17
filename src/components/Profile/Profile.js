import React from 'react'
import { Link } from 'react-router-dom'

import { profilePage } from '../../lib/api'
import { getPayload } from '../../lib/auth'

export default function Profile() {

  const { sub } = getPayload()
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await profilePage(sub)
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [sub])

  return (
    <>
      {profile && 
      <div className="profile">
        <div className="profileInfo">
          <h1>{profile.username}</h1>
          <img src={profile.profileImage} alt={profile.username}/>
        </div>
        <div className="profileStores">
          <h2>Owned Stores</h2>
          <div className="ownedStores">
            {profile && profile.ownedStores.map((store) => (
              <Link to={`/stores/${store.id}`} key={store.id}>
                <header key={store.id}>{store.name}</header>
              </Link>
            ))}
          </div>
          <h2>Favourite Stores</h2>
          <div className="favouriteStores">
            {profile && profile.favourites.map((store) => (
              <Link to={`/stores/${store.id}`} key={store.id}>
                <header key={store.id}>{store.name}</header>
              </Link>
            ))}
          </div>
        </div>
      </div>
      }
    </>
  )
}