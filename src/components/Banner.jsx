import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div>
        <div className='relative bg-gradient-to-tr from-red-700 to-purple-700 lg:h-[330px] md:h-[200px] sm:h-[160px] w-full'>
            <img src={banner} slt="banner" className='h-full w-full object-cover absolute mix-blend-overlay' />
            <div className='absolute text-white lg:top-[23%] lg:left-[23%] md:top-[24%] md:left-[5%] sm:top-[30%] sm:left-[6%] text-center'>
                <h1 className='lg:text-[70px] md:text-[45px] sm:text-[27px] font-bold tracking-[7px]'>GLOBAL MUSIC</h1>
                <h4 className='lg:text-2xl md:text-[20px] sm:text-[16px] font-normal tracking-[2px]'>Stream the top charts from around the world</h4>
            </div>
        </div>
    </div>
  )
}

export default Banner