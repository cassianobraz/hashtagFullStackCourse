import { SingleItem } from './SingleItem'

export const ItemList = ({ title, items, ItemsArray, path }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a href={path} className="item-list__link">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {ItemsArray.filter((currentValue, index) => index < items).map(
          (currObj, index) => (
            <SingleItem {...currObj} key={`${title}-${index}`} />
          )
        )}
      </div>
    </div>
  )
}