import React from 'react'

const AlbumArtist = ({ album }) => {
  return (
    <div className='h-[450px] w-full bg-gradient-to-br from-pink-400 to-rose-600 flex flex-col items-center'>
        <img src={album?.cover_big} className='w-[300px] h-[300px] p-6' />
        <h1 className='text-white text-4xl font-bold tracking-wide p-3'>{album?.title}</h1>

        <div className='flex flex-wrap py-2'>
          {album?.contributors ? album.contributors.map((artist) => (
            <div className='flex items-center space-x-3 bg-slate-100 px-5 py-2 rounded-[50px] hover:animate-enlarge cursor-pointer'>
              <img src={artist?.picture_big} className='w-8 h-8 rounded-[50%]' />
              <a href={`/artist/${artist?.id}`}><p className='text-slate-800 font-bold'>{artist?.name}</p></a>
            </div>
          )) : (
            <p>Loading</p>
          )}
        </div>
            
      </div>
  )
}

export default AlbumArtist