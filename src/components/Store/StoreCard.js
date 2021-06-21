import { Link } from 'react-router-dom'

export default function StoreCard({ name, imageShop, id, description }) {
  return (
    <Link to={`/stores/${id}`}>
      <div className="cardScroll">
        <h2 className="title">{name}</h2>
        <img className="friends" src={imageShop} alt="name"/>
        <div className="popUp">
          <div className="description"> 
            <p>{description}</p>
          </div>
        </div>
      </div>  
    </Link>
  )
}