import useForm from '../../hooks/useForm'
import { editSingleStore } from '../../lib/api'
import NewStore from './NewStore'

export default function StoreEdit({ name, address, category, imageShop, imageProduct, description }) {
  const { formData, handleChange } = useForm({
    name: name,
    address: address,
    category: category,
    imageShop: imageShop,
    imageProduct: imageProduct,
    description: description,
  })

  
}