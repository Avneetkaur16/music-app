import React, { useEffect, useState } from 'react'

const AlbumCard = ({ tracks }) => {
  
  if (tracks) {
    tracks.forEach(track => {
      console.log(track)
    });
  }

  return (
    <div className='w-full h-full flex justify-center'>
        {tracks ? tracks.map((track) => (
          <div className='bg-white w-[300px] h-[70px] rounded-lg flex items-center'>
            
            <p>{track?.title}</p>
          </div>
        )) : (<p>Loading</p>)}
    </div>
  )
}

export default AlbumCard