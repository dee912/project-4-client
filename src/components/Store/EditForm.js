import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import { editSingleStore } from '../../lib/api'
import ImageUpload from '../../ImageUpload'
import ProductUpload from '../../ProductUpload'

export default function EditForm() {

  const history = useHistory()
  const { storeId } = useParams()
  const { formData, setFormData, formErrors, handleChange, setFormErrors } = useForm({
    name: '',
    imageShop: '',
    imageProduct: '',
    address: '',
    description: '',
  })

  const handleImageUpload = name => file => {
    setFormData({ ...formData, [name]: file })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit', formData)
    try {
      const { data } = await editSingleStore(storeId, formData)
      console.log('create data', data)
      history.push(`/stores/${data.id}`)
    } catch (error) {
      setFormErrors({ ...formErrors, ...error.response.data })
    }
  }

  console.log('formdata', formData)

  return (
    <form>
      <div>
        <label>Name</label>
        <div>
          <input 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
      </div>

      <div>
        <label>Address</label>
        <div>
          <input 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
      </div>

      <div>
        <label>Shop Image</label>
        <div>
          <ImageUpload name="imageShop" onUpload={handleImageUpload('imageShop')}/>
        </div>
      </div>
      <div>
        <label>Product Image</label>
        <div>
          <ProductUpload name="imageProduct" onUpload={handleImageUpload('imageProduct')}/>
        </div>
      </div>

      <div>
        <label>Description</label>
        <div>
          <textarea 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}