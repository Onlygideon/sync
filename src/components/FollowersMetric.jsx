import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { BsThreeDots } from 'react-icons/bs'

const data = [
    {
        name: "18-24",
        uv: 21.47,
        pv: 2400,
        fill: "#fdc5f5"
    },
    {
        name: "25-29",
        uv: 23.69,
        pv: 4567,
        fill: "#f7aef8"
    },
    {
        name: "30.34",
        uv: 25.83,
        pv: 4898,
        fill: "#b388eb"
    },
    {
        name: "35-39",
        uv: 15.69,
        pv: 1398,
        fill: "#82ca9d"
    },
    {
        name: "40-49",
        uv: 18.63,
        pv: 3908,
        fill: "#8093f1"
    },
    {
        name: "50-65+",
        uv: 24.89,
        pv: 3590,
        fill: "#fdc5f5"
    },
]



const FollowersMetric = () => {
    return (
        <div className="followers-metric">
            <div className="followersMetric-info">
                <div>
                    <h4>Monthly Followers</h4>
                    <span>October 2021 - November 2021</span>
                </div>

                <div className="icon">
                    <BsThreeDots />
                </div>
            </div>

            <ResponsiveContainer width="100%" height="80%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="70%" data={data}>
                    <RadialBar minAngle={15} clockWise dataKey="uv"/>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FollowersMetric
