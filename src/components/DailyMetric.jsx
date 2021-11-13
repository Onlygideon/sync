import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    {
        view: 1000
    },
    {
        view: 1180
    },
    {
        view: 1479
    },
    {
        view: 1378
    },
    {
        view: 1265
    },
    {
        view: 2049
    },
    {
        view: 2550
    },
    {
        view: 2120
    },
    {
        view: 2670
    },
    {
        view: 2000
    },
    {
        view: 1970
    },
    {
        view: 2200
    },
    {
        view: 2490
    },
    {
        view: 2167
    },
    {
        view: 2378
    },
    {
        view: 2879
    },
    {
        view: 3278
    },
    {
        view: 3700
    },
    {
        view: 3779
    },
    {
        view: 3380
    },
    {
        view: 3178
    },
    {
        view: 3267
    },
    {
        view: 3043
    },
    {
        view: 2697
    },
    {
        view: 2356
    },
];



const DailyMetric = () => {
    return (
        <div className="top-box">
            <h4>Daily Views</h4>
            <span>October 2021 - November 2021</span>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorView" xl="0" yl="0" x2="0" y2="1">
                            <stop offset="30%" stopColor="#8884d8" stopOpacity={0.7}/>
                            <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0.2}/>
                        </linearGradient>
                        </defs>

                        <Tooltip />

                        <Area 
                            type="monotone"
                            dataKey="view"
                            stroke="#8884d8"
                            strokeWidth={2}
                            strokeOpacity={1}
                            fill="url(#colorView)"
                        />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DailyMetric
