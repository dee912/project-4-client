import { Link } from 'react-router-dom'

export default function StoreCard({ name, imageShop, id }) {
  return (
    <Link to={`/stores/${id}`}>
      <div className="cardScroll index-card">
        <h2 className="title">{name}</h2>
        <img className="friends" src={imageShop} alt="name"/>
      </div>  
    </Link>
  )
}