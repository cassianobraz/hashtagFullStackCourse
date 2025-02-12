import { ItemList } from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

export const Main = () => {
  return (
    <div className="main">
      {/* Item list the artists */}
      <ItemList title="Artistas" items={5} ItemsArray={artistArray} path="/artists" />

      {/* Item list the musics */}
      <ItemList title="Músicas" items={10} ItemsArray={songsArray} path="/songs" />
    </div>
  )
}
