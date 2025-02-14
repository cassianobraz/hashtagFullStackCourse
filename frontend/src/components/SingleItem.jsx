import { FaPlayCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__imagem"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>
        <FaPlayCircle className="single-item__icon" />
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__tittle">{name}</p>
          <p className="single-item__type">{artist ?? 'Artista'}</p>
        </div>
      </div>
    </Link>
  )
}
