import React from 'react'

function Home() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/stores')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Independent NW</h1>
}

export default Home