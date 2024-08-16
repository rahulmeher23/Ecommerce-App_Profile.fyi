import React from 'react'

const CategoriesCard = (category) => {
    console.log(category);
    const {name, img} = category
  return (
    <>
        <div className='cat-card flex flex-col gap-5 w-full h-[550px] bg-white  border-2 border-gray-500  rounded-xl p-5 cursor-pointer'>
            <div className='w-full h-[450px]'>
                <img src={img} alt=""  className='h-full w-full object-fit'/>
            </div>
            <div className='text-2xl'>{name}</div>

        </div>
    </>
  )
}

export default CategoriesCard