import { Link } from 'react-router-dom'
import { SingleItem } from './SingleItem'

export const ItemList = ({ title, items, ItemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {ItemsArray.filter((currentValue, index) => index < items).map(
          (currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          )
        )}
      </div>
    </div>
  )
}
