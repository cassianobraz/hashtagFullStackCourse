import { SingleItem } from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

export const ItemList = ({ title, items, ItemsArray, path, idPath }) => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const finalItem = isHome ? items : Infinity

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {ItemsArray.filter((currentValue, index) => index < finalItem).map(
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
