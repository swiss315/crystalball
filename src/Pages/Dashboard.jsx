import React, { useState} from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell, CartesianGrid, XAxis, YAxis, Bar, BarChart} from "recharts";
import {useData} from "../Hooks/reference";
import Upload from "../Components/Upload";
import {useAuthContext} from "../Hooks/context";
import {useUpload} from "../Hooks/upload";
function Dashboard() {
    const AllCustomer = [
        { name: 'Male', value: 1400 },
        { name: 'Female', value: 1900 },
    ];

    // const AllPolicy = [
    //     { name: 'Vehicle', value: 400 },
    //     { name: 'Health', value: 300 },
    //     { name: 'Gadget', value: 300 },
    //     { name: 'Travel', value: 200 },
    //     { name: 'Pet', value: 278 },
    //     { name: 'HomeContent', value: 189 },
    // ];

    // const total= {
    //     totalCustomer: 1000,
    //     totalPolicy: 1000,
    // }

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#800080", "#FF0000"];

    // const NumberOfPeoplePolicy = [
    //     {
    //         name: "Vehicle",
    //         CurrentUserPerPolicy: 4000,
    //     },
    //     {
    //         name: "Health",
    //         CurrentUserPerPolicy: 3000,
    //     },
    //     {
    //         name: "Gadget",
    //         CurrentUserPerPolicy: 2000,
    //     },
    //     {
    //         name: "Travel",
    //         CurrentUserPerPolicy: 2780,
    //     },
    //     {
    //         name: "Pet",
    //         CurrentUserPerPolicy: 1890,
    //     },
    //     {
    //         name: "Home",
    //         CurrentUserPerPolicy: 2390,
    //     }
    // ];
    //
    // const policyPerProjectedUser = [
    //     {
    //         name: "Vehicle",
    //         CurrentUserPerPolicy: 4000,
    //         projectedUserPerProject: 2400,
    //         total: 2400
    //     },
    //     {
    //         name: "Health",
    //         CurrentUserPerPolicy: 3000,
    //         projectedUserPerProject: 1398,
    //         total: 2210
    //     },
    //     {
    //         name: "Gadget",
    //         CurrentUserPerPolicy: 2000,
    //         projectedUserPerProject: 9800,
    //         total: 2290
    //     },
    //     {
    //         name: "Travel",
    //         CurrentUserPerPolicy: 2780,
    //         projectedUserPerProject: 3908,
    //         total: 2000
    //     },
    //     {
    //         name: "Pet",
    //         CurrentUserPerPolicy: 1890,
    //         projectedUserPerProject: 4800,
    //         total: 2181
    //     },
    //     {
    //         name: "Home",
    //         CurrentUserPerPolicy: 2390,
    //         projectedUserPerProject: 3800,
    //         total: 2500
    //     }
    // ];
    const { active, dispatch } = useAuthContext()
    const [projection, setProjection] = useState(false)

    const onHide = () => {
        dispatch({type: 'ACTIVE', active: false})
    }

    console.log(active)
    const { upload } = useUpload()
    const {reference, data} = useData()
    const handleUpload = async (data, e) => {
        e.preventDefault()
        await upload(data)
        await reference()
    }

    console.log(data)
    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);
    //
    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    return (
        <div>
            <div className='px-10 py-4 flex flex-col justify-center gap-y-6'>
                <div className='flex justify-between gap-4'>
                    <div className='w-1/3' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2 text-center'>All Customer</h1>
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
                        <h1 className='font-bold py-2 text-center'>All Policy</h1>
                        <PieChart width={400} height={250}>
                            <Pie
                                dataKey="current_user_per_policy"
                                isAnimationActive={false}
                                data={data?.user_policies}
                                cx='50%'
                                cy='50% '
                                innerRadius={40}
                                outerRadius={80}
                                fill="#8884d8"
                                label={({ policy }) => policy}
                                labelLine={true} // Disable label lines
                                // label={({ policy }) => {
                                //     console.log('Policy:', policy); // Log the policy object
                                //     return { value: policy, fontSize: 10 };
                                // }}
                                style={{ fontSize: 10 }}
                            >
                                {data?.user_policies.map((entry, index) => (
                                    <Cell key={`${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                                formatter={(value, name, props) => {
                                    // Customize the tooltip content here
                                    return [`${name}: ${value}`]; // Display both name and value
                                }}
                                payload={data?.user_policies.map((entry, index) => ({
                                    value: entry.current_user_per_policy, // Value of the data point
                                    name: entry.policy,  // Name of the policy
                                }))}
                            />

                            <Legend
                                payload={data?.user_policies.map((entry, index) => ({
                                    value: entry.policy, // Name of the policy
                                    type: 'square', // Shape of the legend icon
                                    color: COLORS[index % COLORS.length], // Corresponding color for the policy
                                }))}
                                wrapperStyle={{ fontSize: 10 }}
                            />
                        </PieChart>
                    </div>
                    <div className='w-1/3 gap-y-6 flex flex-col items-center justify-around'>
                        <div className=' h-1/2 w-full flex justify-between items-center py-4 px-3 rounded-lg'
                             style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                            <h1 className='font-bold py-2'>Total Insurance</h1>
                            <p className='font-bold text-xl'>{data?.policy_count}</p>
                        </div>
                        <div className='h-1/2 w-full flex justify-between items-center py-4 px-3 rounded-lg'
                             style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                            <h1 className='font-bold py-2'>Total Number People</h1>
                            <p className='font-bold text-xl'>{data?.customer_count}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='py-5 px-2 w-1/2' style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <div className='flex justify-between py-2'>
                            <h1 className='font-bold py-2'>Number of people on each policy </h1>
                            <button type='button' onClick={() => setProjection(!projection)} className='border rounded border-gray-300 px-2 text-xs'>{projection ? 'Hide projection' : 'Show projection'}</button>
                        </div>
                        <BarChart
                            width={500}
                            height={300}
                            data={data?.user_policies}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="policy" interval={0}  tick={{ fontSize: 12 }} tickFormatter={(value) => value.substring(0, 10)} />
                            <YAxis type="number" // Ensure the y-axis type is set to "number"
                                   domain={[0, data?.customer_count]}/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="current_user_per_policy" fill="#82ca9d" barSize={25}/>
                        </BarChart>
                        <span className='text-sm'>*Note: Total revenue 1 million</span>
                    </div>
                    <div className={`py-5 px-2 ${projection ? 'w-1/2' : 'hidden'}`} style={{boxShadow: '0px 4px 20px 0px #0B22391F'}}>
                        <h1 className='font-bold py-2 text-center'>Policies stacked against their projected users </h1>
                        <BarChart
                            width={500}
                            height={300}
                            data={data?.projected_user_policy_list}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="policy" interval={0} tick={{ fontSize: 12 }} tickFormatter={(value) => value.substring(0, 10)}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="current_user_per_policy" stackId="a" fill="#82ca9d" barSize={25}/>
                            <Bar dataKey="projected_user_per_project" stackId="a" fill="#8884d8" barSize={25}/>
                        </BarChart>
                        <span className='text-sm'>*Note: Total Projected revenue 2 million</span>
                    </div>
                </div>
            </div>
            <Upload isOpen={active} onSubmit={handleUpload} onHide={onHide} />
        </div>
    )
}

export default Dashboard