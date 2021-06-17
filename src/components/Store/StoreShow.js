import React from 'react'
import { useParams } from 'react-router'

import { addComment, deleteComment, getSingleStore } from '../../lib/api'

export default function StoreShow() {
  const { storeId } = useParams()
  const [store, setStore] = React.useState(null)
  const [comment, setComment] = React.useState('')
  const [updating, setUpdating] = React.useState(false)


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

  const handleInput = (e) => {
    setComment(e.target.value)
  }

  const handleCommentAdd = async () => {
    try {
      if (comment !== '') {
        await addComment(store.id, { content: comment })
        setComment('')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
              <>
                <p key={comment.id}>{comment.content}</p>
              </>
            ))}
          </div>
          <div className='textField'>
            <textarea 
              maxLength='150' 
              onChange={handleInput} 
              value={comment}
            />
            <p>Remaining Characters: {150 - comment.length}</p>
          </div>
          <button onClick={handleCommentAdd}>Add</button>
        </div>
      }
    </>
  )
}