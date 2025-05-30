import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-12 lg:px-20 py-10'>
        <div className='flex flex-wrap items-center justify-between gap-6 mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
        ))}
        </div>
    </div>
  )
}

export default FeaturedDestination
