import React, { useState } from 'react'
import Preview from './Preview';
import Album from './Album';

const Song = ({ song }) => {

    const time = song?.duration;
    const mins = Math.floor(time/60);
    const sec = time % 60;

  return (
    <div className='w-full h-full flex flex-col justify-start items-center relative'>

        <div className='w-full h-[85vh] bg-gradient-to-b from-neutral-900 to-gray400'>
            <div className='bg-gradient-to-b from-red-800 to-neutral-900 w-full h-[50vh] flex p-5'>
                <img src={song?.album?.cover_big} className='shadow-lg' />
                <div className='flex flex-col mx-6 justify-end'>
                    <p className='text-white capitalize font-bold'>{song?.type}</p>
                    <p className='text-[4rem] text-white font-bold'>{song?.title}</p>
                    <div className='flex items-center mt-3 space-x-2 text-white font-bold'>
                        <img src={song?.artist?.picture_big} className='h-[30px] w-[30px] object-cover rounded-[50px]' />
                        <a href={`/artist/${song?.artist?.id}`}><p>{song?.artist?.name}</p></a>
                        <p>• {mins}:{sec}</p>
                    </div>
                </div>
            </div>

            <p className='text-neutral-200 font-[5px] px-4 py-2'>Album:</p>

            <Album album={song?.album} />
            <Preview preview={song?.preview} />

        </div>
    </div>
  )
}

export default Song