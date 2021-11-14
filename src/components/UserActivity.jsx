import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { BsThreeDots } from 'react-icons/bs'


const data = [
    {
        name: "Mo",
        minutesSpent: 455,
        songListened: 103 
    },

    {
        name: "Tu",
        minutesSpent: 567,
        songListened: 134 
    },

    {
        name: "We",
        minutesSpent: 412,
        songListened: 87 
    },

    {
        name: "Th",
        minutesSpent: 478,
        songListened: 123 
    },

    {
        name: "Fr",
        minutesSpent: 389,
        songListened: 76
    },

    {
        name: "Sa",
        minutesSpent: 583,
        songListened: 146 
    },

    {
        name: "Su",
        minutesSpent: 432,
        songListened: 149 
    }
]




const UserActivity = () => {
    return (
        <div className="user-activity">
            <div className="activityInfo">
                <div>
                    <h4>Recent Activities</h4>
                    <span>Last Week</span>
                </div>

                <div className="icon">
                    <BsThreeDots/>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="70%">
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                    <Tooltip />
                    <Bar dataKey="minutesSpent" stackId="a" fill="slateblue" />
                    <Bar radius={[7, 7, 0, 0]} dataKey="songListened" stackId="a" fill="darkolivegreen" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserActivity
