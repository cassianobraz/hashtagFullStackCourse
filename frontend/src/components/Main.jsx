import { ItemList } from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

export const Main = ({ type }) => {
  return (
    <div className="main">
      {type === 'artists' || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          ItemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {type === 'songs' || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          ItemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  )
}
