import { SongItem } from './SongItem'
import { useState } from 'react'

export const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5)

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5)
        }}
      >
        Ver mais
      </p>
    </div>
  )
}
