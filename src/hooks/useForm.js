import React from 'react'

export default function useForm(initialState) {
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }


  return {
    formData,
    formErrors,
    handleChange,
    setFormErrors,
    setFormData,
  }
}