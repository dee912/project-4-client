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
        <div className="storeShow">
          <div className="storeHeader">
            {store.category.map((category) => (
              <header key={category.name}>{category.name}</header>
            ))}
          </div>
          <div className="storeBody">
            <div className="storeTop">
              <h1>{store.name}</h1>
              <p>{store.address}</p>
              
            </div>
            <div className="storeMiddle">
              <img className="shop" src={store.imageShop} alt="Image of store" />
              <p>{store.description}</p>
              <img className="product" src={store.imageProduct} alt="Image of shop" />
            </div>
          </div>
          <h2>Comment Section</h2>
          <div className="storeBottom">
            {store.comments.map((comment) => (
              <p key={comment.id}>{comment.content}</p>
            ))}
          </div>
        </div>
      }
    </>
  )
}