import React from 'react';
import logo from '../assets/logo.png';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const Sidebar = () => {

    const options = [
        ['Home', <AiFillHome />, '/'],
        ['Search', <AiOutlineSearch />, '/search'],
    ];


  return (
        <div className='flex flex-col w-[280px] h-screen bg-gray300 border-r border-neutral-500 sticky top-0'>
            <div className='flex items-center py-7 space-x-3 mx-auto hover:cursor-pointer'>
                <img src={logo} alt='logo' className='h-[40px] w-[40px]' />
                <h3 className='text-white font-bold text-[25px]'>Music</h3>
            </div>

            <div className='flex flex-col items-start flex mx-auto w-[140px]'>
                {options.map(([option, icon, url]) => (
                    <div className='flex items-center text-[16px] text-white font-[500] space-x-2 py-3 hover:text-[17px] hover:cursor-pointer'>
                        {icon}
                        <a href={url}><p>{option}</p></a>
                    </div>
                ))}
            </div>
        </div>
    
  )
}

export default Sidebar