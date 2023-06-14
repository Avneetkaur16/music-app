import React, { useEffect, useState } from 'react';
import Song from '../components/Song';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SongPage = () => {
    const { id } = useParams()

    const [song, setSong] = useState(null);
    

    // use this song id to get song details from track/${id} end point
    useEffect(() => {
        fetchFromAPI(`track/${id}`)
        .then((data) => setSong(data))
    }, []);


  return (
    <div className='bg-gray400 w-full'>
        <Song song={song} />
    </div>
  )
}

export default SongPage