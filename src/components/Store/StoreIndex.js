import React from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

import StoreCard from './StoreCard'
import { getAllCategories, getAllStores } from '../../lib/api'

export default function StoreIndex() {

  const [stores, setStores] = React.useState(null)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedStore, setSelectedStore] = React.useState(null)
  const [categories, setCategories] = React.useState(null)
  const [viewport, setViewport] = React.useState({
    latitude: 53.434015,
    longitude: -2.585747,
    zoom: 9.5,
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllStores()
        const category = await getAllCategories()
        setCategories(category.data)
        setStores(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const handleFilter = (e) => {
    setCategories(e.target.value)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className="indexHeader">
        <img src="https://i.pinimg.com/originals/3d/f9/1f/3df91f254d7776aab078df6abf796f40.jpg" />
        <header >INDEPENDENTS</header>
        
      </div>
      <div className="filters">
        <input
          className="input"
          type="text"
          placeholder="Find stores"
          onChange={handleChange}
        />
        <select onChange={handleFilter}>
          <option>All</option>
          {categories && categories.map(category => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="storeIndex" key={stores?.id}>
        <div className="storeContainer">
          <div className="storeCard">
            {stores && stores.filter((store) => {
              if (searchTerm === '') {
                return store
              } else if (store.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return store
              }
            }).map(store => (
              <StoreCard
                key={store.id}
                {...store}
              />
            ))}
          </div>
        </div>
        <div className="mapbox">
          <ReactMapGL
            {...viewport}
            width="60vw"
            height="95vh"
            mapStyle="mapbox://styles/dee912/ckq5b34zr0ky917oim5lyox6f"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          >
            {stores && stores.map(store => (
              <Marker
                key={store.id}
                latitude={store.latitude}
                longitude={store.longitude}
              >
                <button className="pin"
                  onClick={
                    (e) => {
                      e.preventDefault()
                      setSelectedStore(store)
                    }
                  }
                >
                  <img className="pinImage" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" alt={store.name} />
                </button>
              </Marker>
            ))}

            {selectedStore ? (
              <Popup
                latitude={selectedStore.latitude}
                longitude={selectedStore.longitude}
                onClose={() => {
                  setSelectedStore(null)
                }}
              >
                <div className="mapInfo">
                  <h2>{selectedStore.name}</h2>
                  <img src={selectedStore.imageShop} />
                  <p className="address">{selectedStore.address}</p>
                </div>
              </Popup>
            )
              : null}
          </ReactMapGL>
        </div>
      </div>
    </>
  )
}