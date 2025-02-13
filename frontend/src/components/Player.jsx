import { FaBackwardStep } from 'react-icons/fa6'
import { FaPlayCircle } from 'react-icons/fa'
import { FaForwardStep } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Player = ({ duration, randomIdFromArtist, randomId2FromArtist }) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FaBackwardStep className="player__icon" />
        </Link>
        <FaPlayCircle className="player__icon player__icon--play" />
        <Link to={`/song/${randomId2FromArtist}`}>
          <FaForwardStep className="player__icon" />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  )
}
