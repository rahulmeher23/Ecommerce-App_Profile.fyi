import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';

const Layout = () => {
    return (
        <div className='flex flex-col w-screen'>
            <div className=' top-0 w-screen'>
                <Navbar />
            </div>

            <div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout