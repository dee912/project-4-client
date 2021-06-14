import React from 'react'
import { useParams } from 'react-router'

import { getSingleStore } from '../../lib/api'

export default function StoreShow() {
  const { storeId } = useParams

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleStore(storeId)
        console.log(data)
      } catch (error) {
        console.log(error)
        
      }
    }
    getData()
  }, [storeId])

  return <h1>StoreShow</h1>
}