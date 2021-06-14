import React from 'react'

function AboutUs() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/stores')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>About us</h1>
}

export default AboutUs