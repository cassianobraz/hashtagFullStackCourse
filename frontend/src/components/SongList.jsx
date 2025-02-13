import { SongItem } from './SongItem'

export const SongList = ({ songsArrayFromArtist }) => {
  return (
    <div className="song-list">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <p className="song-list__see-more">Ver mais</p>
    </div>
  )
}
