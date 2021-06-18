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

  function randomThree() {
    const nums = new Set()
    while (stores && nums.size < 6) {
      nums.add(Math.ceil(Math.random() * stores.length - 1))
    }
    return [...nums]
  }
  const [first, second, third, fourth, fifth, sixth] = randomThree()

  return (
    <div className="home">
      <header>
        <h1>INDEPENDENT NW</h1>
      </header>
      <div className="body">
        <div className="infoSection">
          <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="wrapper">
          <h2 className="sub">INDEPENDENTS</h2>
          {stores &&
            <div className="featuredStores">
              <Link to={`/stores/${first}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[first].name}</h3>
                  <img className="storeImage" src={stores[first].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[first].address}</p>
                  </div>
                </div>  
              </Link> 
              <Link to={`/stores/${second}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[second].name}</h3>
                  <img className="storeImage" src={stores[second].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[second].address}</p>
                  </div>
                </div>  
              </Link> 
              <Link to={`/stores/${third}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[third].name}</h3>
                  <img className="storeImage" src={stores[third].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[third].address}</p>
                  </div>
                </div>  
              </Link>
              <Link to={`/stores/${fourth}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[fourth].name}</h3>
                  <img className="storeImage" src={stores[fourth].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[fourth].address}</p>
                  </div>
                </div>  
              </Link> 
              <Link to={`/stores/${fifth}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[fifth].name}</h3>
                  <img className="storeImage" src={stores[fifth].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[fifth].address}</p>
                  </div>
                </div>  
              </Link> 
              <Link to={`/stores/${sixth}/`}>
                <div className="cardScroll">
                  <h3 className="title">{stores[sixth].name}</h3>
                  <img className="storeImage" src={stores[sixth].imageShop} alt="name"/>
                  <div className="popUp">
                    <p>{stores[sixth].address}</p>
                  </div>
                </div>  
              </Link>
              <button>
                <a href="/stores">
                  View all
                </a>
              </button>
            </div>
          }
        </div>
        
      </div>
    </div>
  )
}

export default Home