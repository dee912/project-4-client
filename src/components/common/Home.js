import React from 'react'
import { Link } from 'react-router-dom'
import { getAllStores } from '../../lib/api'

function Home() {

  const [stores, setStores] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllStores()
        setStores(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  // const arr = []
  // while (stores && arr.length < 3){
  //   const r = Math.floor(Math.random() * stores.length) + 1
  //   if (arr.indexOf(r) === -1 || arr.indexOf(r) === 1) arr.push(r)
  // }

  function randomThree() {
    const nums = new Set()
    while (stores && nums.size < 3) {
      nums.add(Math.ceil(Math.random() * stores.length - 1))
    }
    return [...nums]
  }
  const [first, second, third] = randomThree()

  return (
    <>
      {stores &&
        <>
          <h1>Independent NW</h1>
          <Link to={`/stores/${first}/`}>
            <div className="cardScroll">
              <h2 className="title">{stores[first].name}</h2>
              <img className="friends" src={stores[first].imageShop} alt="name"/>
            </div>  
          </Link> 
          <Link to={`/stores/${second}/`}>
            <div className="cardScroll">
              <h2 className="title">{stores[second].name}</h2>
              <img className="friends" src={stores[second].imageShop} alt="name"/>
            </div>  
          </Link> 
          <Link to={`/stores/${third}/`}>
            <div className="cardScroll">
              <h2 className="title">{stores[third].name}</h2>
              <img className="friends" src={stores[third].imageShop} alt="name"/>
            </div>  
          </Link>
        </>
      }
    </>
  )
}

export default Home