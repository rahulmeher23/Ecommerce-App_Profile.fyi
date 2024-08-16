import React from 'react';
// import heroImage from "../../../assets/images/heroImage.jpg";

const Hero = () => {
    return (
        // <div className="w-full h-screen bg-hero-img object-fit bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="w-full h-screen bg-hero-img object-fill bg-cover bg-center" >
            <div className="flex flex-col h-full items-start justify-center md:pl-14  2xl:pl-28 md:w-2/3 2xl:w-1/2 text-black font-italiana">
                <div className="flex flex-col gap-5 text-7xl md:font-medium 2xl:font-medium tracking-wide">
                    <div>
                        <p>Discover the Essence</p>
                        <p>of Timeless Elegance</p>
                    </div>
                    <div className='text-lg font-bold w-[80%]'>
                        <p>Step into the world where fashion meets art. Experience unparalleled luxury and sophisticated style with our exclusive collections.</p>
                    </div>
                </div>
                {/* <button className="mt-8 px-4 py-3 bg-transparent tracking-wider text-black text-lg font-semibold hover:bg-black hover:text-white border border-black transition-all duration-300">
                    Shop Now
                </button> */}
                <button className="mt-8 px-4 py-3  tracking-wider bg-black text-white text-lg font-semibold hover:bg-white hover:text-black border border-white transition-all duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
