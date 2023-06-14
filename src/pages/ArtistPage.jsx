import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ArtistPage = () => {
    const { artistId } = useParams()

    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetchFromAPI(`artist/${artistId}`)
        .then((data) => setArtist(data))
    }, []);

    console.log(artist)

  return (
    <div className='w-full min-h-100 bg-gradient-to-t from-fuchsia-700 to-rose-600 flex flex-col items-center'>
        <div className='bg-white w-[300px] h-[300px] rounded-[50%] my-6'>
            <img className='w-[inherit] h-[inherit] rounded-[inherit] border-4 border-slate-100 object-contain' src={artist?.picture_big} />
        </div>
        <div className=' w-full h-[20vh] flex items-center justify-center  space-x-4'>
            <p className='font-bold text-4xl text-white tracking-[2px]'>{artist?.name}</p>
            <p className='text-slate-200 font-medium text-2xl capitalize'>({artist?.type})</p>
        </div>
    </div>
  )
}

export default ArtistPage