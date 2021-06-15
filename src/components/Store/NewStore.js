import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

export default function NewStore() {

  const history = useHistory()
  const { formData, formErrors, handleChange, setFormErrors } = useForm({
    name: '',
    category: '',
    imageShop: '',
    imageProduct: '',
    address: '',
    description: '',
    latitude: 0,
    longitude: 0,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}