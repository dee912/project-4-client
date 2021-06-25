import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useHistory, useLocation } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import { addComment, deleteComment, deleteStore, favourite, getSingleStore } from '../../lib/api'
import { getPayload, isAuthenticated, isOwner } from '../../lib/auth'

export default function StoreShow() {
  const history = useHistory()
  const { storeId } = useParams()
  const { sub } = getPayload()
  const location = useLocation()
  const [store, setStore] = useState(null)
  const [comment, setComment] = useState('')
  const [isAddingComment, setIsAddingComment] = useState(false)
  const [favourited, setFavourited] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated())
  // const [edit, setEdit] = useState(false)
  const { formData } = useForm({
    name: '',
    address: '',
    imageShop: '',
    description: '',
    imageProduct: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleStore(storeId)
        setStore(data)
        if (isAddingComment) {
          setIsAddingComment(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [storeId, isAddingComment])

  React.useEffect(() => {
    setIsLoggedIn(isAuthenticated())
  }, [location.pathname])

  const handleFav = async () => {
    try {
      if (!favourited) {
        await favourite(storeId, { sub })
        setFavourited(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleInput = (e) => {
    setComment(e.target.value)
  }

  const handleCommentAdd = async () => {
    try {
      if (comment !== '') {
        await addComment(storeId, { content: comment })
        setIsAddingComment(true)
        setComment('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCommentDelete = async () => {
    try {
      await deleteComment(storeId, store.comments.id)
    } catch (error) {
      console.log(error)
    }
  }

  // const handleEdit = async () => {
  //   setEdit(false)
  //   try {
  //     await editSingleStore(storeId, formData)
  //     setEdit(true)
  //   } catch (error) {
  //     console.log(error)
  //     setFormData({ ...store })
  //   }
  // }

  const handleStoreDelete = async () => {
    try {
      await deleteStore(storeId)
      history.push('/stores')
    } catch (error) {
      console.log(error)
      
    }
  }

  console.log('formdata', formData && formData)
  console.log('store', store && store.owner)
  console.log('fav', favourited)

  return (
    <>
      {store &&
        <div className="storeShow">
          <div className="storeHeader">
            {store.category.map((category) => (
              <header key={category.name}>{category.name}</header>
            ))}
          </div>
          <div className="storeTop">
            <h1 className="title">{store.name}</h1>
            <p className="title">{store.address}</p>
          </div>

          <div className="profileButtons">
            {isLoggedIn ?
              <button
                className="fav"
                onClick={handleFav}
                type="submit"
                name="favourite"
              >
                {!favourited ? <p>favourite</p> : <p>un-favourite</p>}
              </button>
              : null
            }
            {
              isOwner(store.owner) &&
              <>
                {/* <button onClick={handleEdit}>edit</button> */}
                <button onClick={handleStoreDelete}>delete</button>
              </>
            }
          </div>
          <div className="storeBody">
            <div className="storeMiddle">
              <img className="shop middleImg" src={store.imageShop} alt="Image of store" />
              <p>{store.description}</p>
              <img className="product middleImg" src={store.imageProduct} alt="Image of shop" />
            </div>
          </div>

          <div className="storeBottom">
            <h2>Comment Section</h2>
            {store.comments.map((comment) => (
              <>
                <p key={comment.id}>{comment.content}</p>
                {
                  isOwner(store.owner) && 
                  <button onClick={handleCommentDelete}>Delete</button>
                }
              </>
            ))}
            {isLoggedIn ?
              <div className='textField'>
                <textarea 
                  maxLength='150' 
                  onChange={handleInput} 
                  value={comment}
                />
                <p>Remaining Characters: {150 - comment.length}</p>
                <button onClick={handleCommentAdd}>Add</button>
              </div>
              : null
            }
          </div>
          
          
        </div>
      }
    </>
  )
}