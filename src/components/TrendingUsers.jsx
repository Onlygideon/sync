import { BsArrowRight } from "react-icons/bs"
import Holo from '../assets/san-holo.webp'
import Eminem from '../assets/eminem.png'
import Tiesto from '../assets/tiesto.png' 


const TrendingUsers = () => {
    return (
        <div className="trending-Users">
            <div className="trendingInfo">
                <div>
                    <h4>Trending Users</h4>
                    <span>Today</span>
                </div>

                <div className="icon">
                    <BsArrowRight />
                </div>
            </div>

            <div className="trend">
                <img src={Eminem} alt="eminem" />

                <div className="trendInfo">
                    <h4>Eminem</h4>
                    <span>1.72m Followers</span>
                </div>
            </div>

            <div className="trend">
                <img src={Tiesto} alt="tiesto" />

                <div className="trendInfo">
                    <h4>Tiesto</h4>
                    <span>834k Followers</span>
                </div>
            </div>

            <div className="trend">
                <img src={Holo} alt="san-holo" />

                <div className="trendInfo">
                    <h4>San Holo</h4>
                    <span>227k Followers</span>
                </div>
            </div>

        </div>
    )
}

export default TrendingUsers
