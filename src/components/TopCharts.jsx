import React from 'react';
import Card from './Card';

const TopCharts = ({ topCharts }) => {
  return (
    <div className='flex flex-wrap w-full h-auto p-4 mx-5 lg:justify-start md:justify-center sm:justify-center'>

      {topCharts.map((topChart) => (
        <div className='p-2' key={topChart.id}>
          <Card song={topChart} search={false} />
        </div>
      ))}

    </div>
  )
}

export default TopCharts