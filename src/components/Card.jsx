import React, { useEffect, useState } from 'react'

const Card = ({ song, search }) => {

  const [songId, setSongId] = useState(null);
  const [title, setTitle] = useState(null);
  const [artistId, setArtistId] = useState(null);
  const [artist, setArtist] = useState(null);
  const [image, setImage] = useState(null);


  useEffect(() => {
    setSongId(song.id)
    setTitle(song.title)
    setArtistId(song.artist.id)
    setArtist(song.artist.name)
    setImage(song.album.cover_big)
  }, [search]);


  return (
    <div className='flex flex-col hover:animate-enlarge  items-center lg:h-[290px] lg:w-[230px] bg-gray300 rounded-lg md:h-[300px] md:w-[260px] sm:h-[370px] sm:w-[280px]'>
        <div className='lg:h-[180px] lg:w-[180px] lg:my-5 md:h-[210px] md:w-[210px] md:my-4 sm:h-[245px] sm:w-[245px] sm:my-3'>
            <img className='h-full w-full rounded-lg object-cover' src={image} />
        </div>

        <div className='flex flex-col lg:h-[50px] lg:w-[180px] lg:my-0 md:w-[210px] md:h-[70px] md:my-0 sm:h-[70px] sm:w-[245px] sm:my-2 items-start text-white truncate'>
          <a href={`/song/${songId}`}><h2 className='font-bold tracking-wider hover:cursor-pointer'>{title}</h2></a>
          
            <p className='tracking-wide'>{artist}</p>
        </div>
    </div>
  )
}

export default Card