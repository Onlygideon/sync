import { BsArrowRight } from "react-icons/bs"
import Rema from '../assets/Rema.webp'
import OmahLay from '../assets/Omah-Lay.webp'
import Vroom from '../assets/vroom.webp' 



const TrendingTracks = () => {
    return (
        <div className="trendingTracks">
            <div className="tracksInfo">
                <div>
                    <h4>Trending Tracks</h4>
                    <span>Today</span>
                </div>

                <div className="icon">
                    <BsArrowRight />
                </div>
            </div>

            <div className="trend">
                <div className="trendInfo">
                    <img src={Rema} alt="soundgasm" />
                    <div>
                        <h4>Soundgasm</h4>
                        <span>Rema</span>
                    </div>
                </div>

                <div className="trendMetas">
                    <span>18.76M plays</span>
                    <span>381k likes</span>
                </div>
            </div>

            <div className="trend">
                <div className="trendInfo">
                    <img src={OmahLay} alt="soundgasm" />
                    <div>
                        <h4>Understand</h4>
                        <span>Omah Lay</span>
                    </div>
                </div>

                <div className="trendMetas">
                    <span>16.97M plays</span>
                    <span>312k likes</span>
                </div>
            </div>

            <div className="trend">
                <div className="trendInfo">
                    <img src={Vroom} alt="soundgasm" />
                    <div>
                        <h4>Vroom</h4>
                        <span>Yxng Bane</span>
                    </div>
                </div>

                <div className="trendMetas">
                    <span>12.21M plays</span>
                    <span>275k likes</span>
                </div>
            </div>
        </div>
    )
}

export default TrendingTracks
