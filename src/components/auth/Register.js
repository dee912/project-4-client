import React from 'react'

function Register() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/stores')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Register</h1>
}

export default Register