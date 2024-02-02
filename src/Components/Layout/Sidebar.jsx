import React from 'react';
import {ReactComponent as Logo} from "../../Assets/Icons/Logo.svg";

function Sidebar() {
    return (
        <div className='w-2/12 bg-green-500 flex flex-col justify-between'>
            <div className='flex justify-center py-4'>
                <Logo />
            </div>
            <div>
                <h1 className='text-xl font-bold text-white'>
                    Dashboard
                </h1>
            </div>
            <div className=''>
                <h1 className='text-lg text-red-500 font-bold'>
                    Log Out
                </h1>
            </div>
        </div>
    )
}

export default Sidebar;