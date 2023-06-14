import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Card from '../components/Card';


const SearchResults = () => {
  
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search/?q=${search}`)
    .then((data) => setSongs(data.data));
  }, [search])

  console.log(songs)

  return (
    <div className='bg-gray400 w-full'>
      <div>
        {/* search bar */}
        <div className='lg:h-[45px] lg:w-[700px] sm:h-[36px] sm:w-[500px] lg:my-5 sm:my-5 mx-auto relative'>
          <AiOutlineSearch className='text-black absolute lg:top-[14px] lg:left-[16px] sm:top-[9px] sm:left-[10px] text-xl hover:cursor-pointer hover:animate-enlarge' />
          <input className='h-full w-full rounded-[50px] px-10' name="search" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search something...' />
          {search && (<p className='text-white font-bold tracking-wide mt-4'>Search results for <span className='text-red-500 font-bold' >{search}</span></p>)}
        </div>


        {/* search results */}
        <div className='text-white p-5 mt-[30px] ml-[12px] flex flex-wrap'>
          {songs ? songs.map((song) => (
            <div key={song.id} className='m-2'>
              <Card song={song} search={search} />
            </div>
          )) : (<p className='text-white font-bold mx-auto text-2xl'>Search for your favorite songs here.</p>)}
        </div>
        
        

      </div>
    </div>
  )
}

export default SearchResults