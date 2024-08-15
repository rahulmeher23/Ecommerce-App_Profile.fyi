import React from 'react'
// import heroImage from "../../assets/images/heroImage.jpg"
import heroImage from "../../../assets/images/heroImage.jpg"


const Hero = () => {

    return (
        <>
            <div className='relative'>
                <div>
                    <img src={heroImage} alt="" className=' w-full' />
                </div>

                <div className='absolute ml-24 top-1/4 w-1/3 text-3xl font-medium tracking-wide text-black'>
                    <p>
                        Make your summer more exciting. Explore the lastest <span className='italic'>AUTUMN</span>  collection now.
                    </p>
                    <button className='p-2 bg-transparent text-black text-lg hover:bg-black hover:text-white border border-black'>
                        Shop Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero