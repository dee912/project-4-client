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

  return (
    <>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  )
}

export default AboutUs