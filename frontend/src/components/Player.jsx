import { FaBackwardStep } from 'react-icons/fa6'
import { FaPlayCircle } from 'react-icons/fa'
import { FaForwardStep } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Player = () => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to="/song/2">
          <FaBackwardStep className="player__icon" />
        </Link>
        <FaPlayCircle className="player__icon player__icon--play" />
        <Link to="/song/3">
          <FaForwardStep className="player__icon" />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p>02:30</p>
      </div>
    </div>
  )
}
