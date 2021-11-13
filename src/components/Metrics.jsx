import DailyMetric from "./DailyMetric"
import FollowersMetric from "./FollowersMetric"
import Navbar from "./Navbar"
import TrendingTracks from "./TrendingTracks"
import TrendingUsers from "./TrendingUsers"
import UserActivity from "./UserActivity"




const Metrics = () => {
    return (
        <div className="metrics">
            <Navbar />
            <div className="grid-one">
                <DailyMetric />
                <FollowersMetric />
            </div>
            <div className="grid-two">
                <TrendingTracks />
                <TrendingUsers />
                <UserActivity />
            </div>
        </div>
    )
}

export default Metrics
