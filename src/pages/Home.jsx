import React from 'react'
import luisana_galicia  from "../assets/images/luisana_galicia.jpg"
import kateryna_hliznitsova  from "../assets/images/kateryna_hliznitsova.jpg"
import CategoriesCard from '../components/home/CategoriesCard';
import Hero from '../components/home/Hero';

const Home = () => {


    const categoriesDB = [
        {
            name: 'Clothes',
            img: luisana_galicia,
        },
        {
            name: 'Necklace',
            img: kateryna_hliznitsova,
        },
        {
            name: 'Clothes',
            img: luisana_galicia,
        },
        // {
        //     name: 'Necklace',
        //     img: kateryna_hliznitsova,
        // },
    ]

    return (
        <div className='flex flex-col  mb-20'>
            <Hero />

            <div className='flex flex-col p-10 gap-10 text-3xl'>
                Explore Categories
                <div className='grid grid-cols-3 gap-10'>
                {
                    categoriesDB.map((category) => <CategoriesCard {...category} />)
                }
                </div>
            </div>

            <div className='flex w-full items-center justify-center'>
                <button className='text-2xl p-2 px-10 py-2  text-black border-2 border-black'>
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Home