import React, { useState, useEffect } from 'react'
import { Logo } from '../../assets/AppIcons'
import { ShopIcon } from '../../assets/AppIcons'
import { WishlistIcon } from '../../assets/AppIcons'
import { SearchIcon } from '../../assets/AppIcons'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {

        const height = window.innerHeight

        const handleScroll = () => {
            setScrolling(window.scrollY > height / 3); // Adjust the threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {/* <div className='flex justify-between items-center px-5 py-5 bg-black '>
                <div className=' h-12  cursor-pointer' >
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>


                <div className='flex gap-10'>
                    <div className='w-8 h-6 cursor-pointer'><ShopIcon /></div>
                    <div className='w-8 h-6 cursor-pointer'><WishlistIcon /></div>
                    <div className='w-8 h-6 cursor-pointer'><ShopIcon /></div>
                    <div className='w-8 h-6 cursor-pointer'><ShopIcon /></div>
                </div>

            </div> */}
            <nav
                className={`fixed w-full transition-all duration-300 z-50 ${scrolling ? 'bg-black text-white' : 'bg-transparent text-black'
                    } p-4`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-bold h-12"><Logo /></div>
                    <div className="flex gap-10">
                        <a href="#" className="transition-colors duration-300 hover:text-gray-300 h-6 "><ShopIcon /></a>
                        <a href="#" className="transition-colors duration-300 hover:text-gray-300 h-6"><WishlistIcon /></a>
                        <a href="#" className="transition-colors duration-300 hover:text-gray-300 h-6"><ShopIcon /></a>
                        <a href="#" className="transition-colors duration-300 hover:text-gray-300 h-6"><ShopIcon /></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar