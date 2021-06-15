import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import StoreCard from './StoreCard'
import { getAllStores } from '../../lib/api'

export default function StoreIndex() {

  const [stores, setStores] = React.useState(null)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [viewport, setViewport] = React.useState({
    latitude: 53.434015,
    longitude: -2.585747,
    zoom: 9.5,
  })

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

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className="storeIndex" key={stores?.id}>
        <div className="storeContainer">
          <input
            className="input"
            type="text"
            placeholder="Find stores"
            onChange={handleChange}
          />
          <div className="storeCard">
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
            <p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p><p>this will scroll</p>
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
            mapStyle="mapbox://styles/dee912/ckpxxwjt61e4017ny2hs28gcc"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}>
              
          </ReactMapGL>
        </div>
      </div>
    </>
  )
}