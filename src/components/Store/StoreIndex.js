import React from 'react'

import StoreCard from './StoreCard'
import { getAllStores } from '../../lib/api'

function StoreIndex() {

  const [stores, setStores] = React.useState(null)
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllStores()
        setStores(data)
        console.log(data)
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
      <div className="cardIndex" key={stores?.id}>
        <div className="container">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Find stores"
            onChange={handleChange}
          />
          <div className="index">
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
      </div>
    </>
  )
}

export default StoreIndex