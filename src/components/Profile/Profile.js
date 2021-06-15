import React from 'react'
import { useParams } from 'react-router-dom'
import { profilePage } from '../../lib/api'

function Profile() {

  const { profileId } = useParams()
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await profilePage(profileId)
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [profileId])

  return <h1>{profile && profile.username}</h1>
}

export default Profile