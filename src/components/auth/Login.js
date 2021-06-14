import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../lib/api'


function Login() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/stores')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Login</h1>
}

export default Login