import React from 'react'
import { useParams } from 'react-router-dom'
import { profilePage } from '../../lib/api'
import { getPayload } from '../../lib/auth'

export default function Profile() {

  const { sub } = getPayload()
  const [profile, setProfile] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log('here')
        const { data } = await profilePage(sub)
        console.log('data', data)
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [sub])

  console.log('profile', profile && profile)

  return <h1>{profile && profile.username}</h1>
}