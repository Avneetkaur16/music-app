import React, { useEffect, useState } from 'react'
import TopCharts from '../components/TopCharts'
import Banner from '../components/Banner'
import { topTen } from '../utils/topTen'

const Home = () => {
    
    const [topCharts, setTopCharts] = useState([]);

    useEffect(() => {
        setTopCharts(topTen);
    }, []);


  return (
    <div className='bg-gray400 h-100vh w-full overflow-hidden'>
      <Banner />
      <TopCharts topCharts={topCharts}  />
    </div>
  )
}

export default Home