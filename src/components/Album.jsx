import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useNavigate } from 'react-router-dom';

const Album = ({ album }) => {

    const [albumId, setAlbumId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFromAPI(`album/${album?.id}`)
        .then((data) => setAlbumId(data))
    }, [album])
    
    
  return (
    <div className='flex flex-col items-start justify-center w-full px-4'>
        <div className='w-[150px] h-[150px] rounded-lg bg-neutral-700 relative'>
            <img className='rounded-lg absolute mix-blend-overlay hover:animate-shrink object-cover cursor-pointer' src={album?.cover_big} 
                onClick={() => navigate(`/album/${albumId?.id}`)}
            />
        </div>
        <div>

        </div>
            {/* <a href={`/album/${albumId?.id}`}><p className='w-[150px] font-normal truncate'>{albumId?.title}</p></a> */}


    </div>
  )
}

export default Album