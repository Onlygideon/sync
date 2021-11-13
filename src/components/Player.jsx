import { FiSkipBack, FiSkipForward } from "react-icons/fi"
import { FaPause } from "react-icons/fa"
import Thumbnail from "../assets/essence.webp"


const Player = () => {
    return (
        <div className="player">
            <div className="player-image">
                <img src={Thumbnail} alt="" />
            </div>

            <h4 className="trackTitle">Essence</h4>
            <p className="trackArtiste">Wizkid</p>

            <div className="track-seek">
                <input type="range" />

                <div className="seekInfo">
                    <span>1:10</span>
                    <span>3:04</span>
                </div>

                <div className="player-options">
                    <FiSkipBack />
                    <FaPause />
                    <FiSkipForward />
                </div>
            </div>
        </div>
    )
}

export default Player
