import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import { getAllCategories, newStore } from '../../lib/api'
import ImageUpload from '../../ImageUpload'

export default function NewStore() {

  const history = useHistory()
  const [categories, setCategories] = React.useState(null)
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

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllCategories()
        setCategories(data)
      } catch (error) {
        setFormErrors({ ...formErrors, ...error.response.data })
      }
    }
    getData()
  }, [formErrors, setFormErrors])

  const handleImageShop = shop => {
    handleChange(
      { target: { name: 'imageShop', value: shop } }
    )
  }

  // const handleImageProduct = product => {
  //   handleChange(
  //     { target: { name: 'imageShop', value: product } }
  //   )
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit', formData)
    try {
      const { data } = await newStore(formData)
      console.log('create data', data)
      history.push(`/stores/${data.id}`)
    } catch (error) {
      setFormErrors({ ...formErrors, ...error.response.data })
    }
  }

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
        <label>Category</label>
        <div>
          <select 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Category"
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
            {categories && categories.map(category => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label>Description</label>
        <div>
          <input 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={formData.description}
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
        <label>Longitude</label>
        <div>
          <input 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Longitude"
            name="longitude"
            onChange={handleChange}
            value={formData.longitude}
          />
        </div>
      </div>

      <div>
        <label>Latitude</label>
        <div>
          <input 
            className={`input ${formErrors.name ? 'invalid' : ''}`}
            placeholder="Latitude"
            name="latitude"
            onChange={handleChange}
            value={formData.latitude}
          />
        </div>
      </div>

      <div>
        <label>Shop Image</label>
        <div>
          <ImageUpload onUpload={handleImageShop}/>
        </div>
      </div>

      <div>
        <label>Product Image</label>
        <div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}