import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className='flex w-full' style={{height: '100vh'}}>
            <Sidebar />
            <div className='w-10/12 bg-gray-100'>
                <Navbar />
                <Routes>
                    <Route path='/dashboard' index element={<Dashboard/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Layout;