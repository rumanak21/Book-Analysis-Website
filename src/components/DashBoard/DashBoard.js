import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Sector, Legend, Area, AreaChart } from 'recharts';
const DashBoard = (props) => {
    const data = [
        {
            "month": "Oct",
            "investment": 200000,
            "sell": 204251,
            "revenue": 204001
        },
        {
            "month": "Nov",
            "investment": 300000,
            "sell": 405203,
            "revenue": 322000
        },
        {
            "month": "Dec",
            "investment": 500000,
            "sell": 545526,
            "revenue": 610105
        },
        {
            "month": "Jan",
            "investment": 500000,
            "sell": 525649,
            "revenue": 684050
        },
        {
            "month": "Feb",
            "investment": 600000,
            "sell": 656101,
            "revenue": 709001
        },
        {
            "month": "Mar",
            "investment": 700000,
            "sell": 755670,
            "revenue": 761000
        }
    ]

    return (
        <div>
            <div className='flex justify-around justify-items-center'>
                <div >
                    <LineChart width={600} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" interval={0} angle={30} dx={20} />
                        <YAxis />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#E424D0" />
                        <Line type="monotone" dataKey="sell" stroke="#4BDE1C" />
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div >
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#4BDE1C" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#E424D0" label />

                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>



            <div className='mx-20 ' style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#E424D0" fill="#E424D0" />
                        <Area type="monotone" dataKey="sell" stroke="#4BDE1C" fill="#4BDE1C" />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default DashBoard;