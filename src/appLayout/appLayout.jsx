import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col w-full '>
            <div className='w-full'>
                <Navbar />
            </div>

            <div>
                <main>
                    <Outlet />
                </main>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout