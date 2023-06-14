import React from 'react'

const AlbumTracks = ({ album }) => {
  return (
    <div className='h-[600px] w-full bg-gradient-to-tl from-rose-800 to-violet-900'>
        <div className='flex flex-wrap justify-center py-5 gap-[23px]'>
          {album?.tracks?.data ? album.tracks.data.map((track) => (
            <div className='bg-zinc-100 truncate py-3 px-4 w-[300px] flex justify-start mx-2 items-center rounded-[50px] cursor-pointer hover:animate-enlarge'>
              <a href={`/song/${track?.id}`} ><p className='text-slate-800 font-medium '>{track?.title}</p></a>
            </div>
          )) : (
            <p>Loading</p>
          )}
        </div>
      </div>
  )
}

export default AlbumTracks