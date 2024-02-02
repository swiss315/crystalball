import React from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell, CartesianGrid, XAxis, YAxis, Bar, BarChart} from "recharts";
function Dashboard() {
    const AllCustomer = [
        { name: 'Male', value: 1400 },
        { name: 'Female', value: 1900 },
    ];

    const AllPolicy = [
        { name: 'Vehicle', value: 400 },
        { name: 'Health', value: 300 },
        { name: 'Gadget', value: 300 },
        { name: 'Travel', value: 200 },
        { name: 'Pet', value: 278 },
        { name: 'HomeContent', value: 189 },
    ];

    const total= {
        totalCustomer: 1000,
        totalPolicy: 1000,
    }

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#800080", "#FF0000"];

    const NumberOfPeoplePolicy = [
        {
            name: "Vehicle",
            CurrentUserPerPolicy: 4000,
        },
        {
            name: "Health",
            CurrentUserPerPolicy: 3000,
        },
        {
            name: "Gadget",
            CurrentUserPerPolicy: 2000,
        },
        {
            name: "Travel",
            CurrentUserPerPolicy: 2780,
        },
        {
            name: "Pet",
            CurrentUserPerPolicy: 1890,
        },
        {
            name: "Home",
            CurrentUserPerPolicy: 2390,
        }
    ];

    const policyPerProjectedUser = [
        {
            name: "Vehicle",
            CurrentUserPerPolicy: 4000,
            projectedUserPerProject: 2400,
            total: 2400
        },
        {
            name: "Health",
            CurrentUserPerPolicy: 3000,
            projectedUserPerProject: 1398,
            total: 2210
        },
        {
            name: "Gadget",
            CurrentUserPerPolicy: 2000,
            projectedUserPerProject: 9800,
            total: 2290
        },
        {
            name: "Travel",
            CurrentUserPerPolicy: 2780,
            projectedUserPerProject: 3908,
            total: 2000
        },
        {
            name: "Pet",
            CurrentUserPerPolicy: 1890,
            projectedUserPerProject: 4800,
            total: 2181
        },
        {
            name: "Home",
            CurrentUserPerPolicy: 2390,
            projectedUserPerProject: 3800,
            total: 2500
        }
    ];

    return (
        <div>
            <div className='px-10 py-4 flex flex-col justify-center gap-y-6'>
                <div className='flex justify-between gap-4'>
                    <div className='w-1/3' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2'>All Customer</h1>
                        <PieChart width={400} height={250}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={AllCustomer}
                                cx='50%'
                                cy='50% '
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {AllCustomer.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                            <Legend/>
                        </PieChart>
                    </div>
                    <div className='w-1/3' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2'>All Policy</h1>
                        <PieChart width={400} height={250}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={AllPolicy}
                                cx='50%'
                                cy='50% '
                                innerRadius={40}
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {AllPolicy.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                            <Legend/>
                        </PieChart>
                    </div>
                    <div className='w-1/3 gap-y-6 flex flex-col items-center justify-around'>
                        <div className=' h-1/2 w-full flex justify-between items-center py-4 px-3 rounded-lg'
                             style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                            <h1 className='font-bold py-2'>Total Insurance</h1>
                            <p className='font-bold text-xl'>{total.totalPolicy}</p>
                        </div>
                        <div className='h-1/2 w-full flex justify-between items-center py-4 px-3 rounded-lg'
                             style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                            <h1 className='font-bold py-2'>Total Number People</h1>
                            <p className='font-bold text-xl'>{total.totalCustomer}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='py-5 px-2 w-1/2' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2'>Number of people on each policy </h1>
                        <BarChart
                            width={500}
                            height={300}
                            data={NumberOfPeoplePolicy}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" interval={0}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="CurrentUserPerPolicy" fill="#82ca9d" barSize={25}/>
                        </BarChart>
                        <span className='text-sm'>*Note: Total revenue 1 million</span>
                    </div>
                    <div className='py-5 px-2 w-1/2' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2'>Policies stacked against their projected users </h1>
                        <BarChart
                            width={500}
                            height={300}
                            data={policyPerProjectedUser}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" interval={0}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="CurrentUserPerPolicy" stackId="a" fill="#82ca9d" barSize={25}/>
                            <Bar dataKey="projectedUserPerProject" stackId="a" fill="#8884d8" barSize={25}/>
                        </BarChart>
                        <span className='text-sm'>*Note: Total Projected revenue 2 million</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard