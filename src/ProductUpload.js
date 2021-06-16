import React from 'react'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_TWO

function ProductUpload({ onUpload }) {
  const [image, setImage] = React.useState('')

  function handleUpload() {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: uploadUrl,
          uploadPreset,
          sources: ['local'],
          multiple: true,
        },
        (err, result) => {
          if (err) console.log(err)
          if (result.event === 'success') {
            setImage(result.info.url)
            onUpload(result.info.url)
          }
        }
      )
      .open()
  }

  return (
    <>
      {image && <img src={image} alt="uploaded profile"/>}
      {!image && <button onClick={handleUpload} type="button" className="button">Upload Image</button>}
    </>
  )
}

export default ProductUpload