import React from 'react'
import { useParams } from 'react-router'

import { getSingleStore } from '../../lib/api'

export default function StoreShow() {
  const { storeId } = useParams()
  const [store, setStore] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleStore(storeId)
        setStore(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [storeId])

  console.log('show page', store && store)

  return (
    <>
      {store &&
        <div>
          {store.category.map((category) => (
            <header key={category.name}>{category.name}</header>
          ))}
          <h1>{store.name}</h1>
          <p>{store.address}</p>
          <p>{store.description}</p>
          <img src={store.imageShop} alt="Image of store" />
          <img src={store.imageProduct} alt="Image of shop" />
        </div>
      }
    </>
  )
}