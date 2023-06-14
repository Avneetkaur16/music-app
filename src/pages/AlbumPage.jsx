import React, { useEffect, useState } from 'react'
import Album from '../components/Album'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import AlbumCard from '../components/AlbumCard'
import AlbumArtist from '../components/AlbumArtist'
import AlbumTracks from '../components/AlbumTracks'

const AlbumPage = () => {
  const { albumId } = useParams()

  const [album, setAlbum] = useState(null)
  

  useEffect(() => {
    fetchFromAPI(`album/${albumId}/`)
    .then((data) => setAlbum(data))
  }, [])

  console.log(album)


  return (

    <div className='min-h-100 w-full bg-gray400 flex flex-col'>
      <AlbumArtist album={album} />
      <AlbumTracks album={album} />
    </div>

  )
}

export default AlbumPage